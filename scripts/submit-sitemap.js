// Google Search Consoleにサイトマップを送信するスクリプト
import { google } from 'googleapis';
import dotenv from 'dotenv';

// 開発環境では.envファイルを読み込む
dotenv.config();

async function submitSitemap() {
  try {
    let SITE_URL = process.env.SITE_URL || 'stellarium.jp';
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

    if (!GOOGLE_API_KEY) {
      throw new Error('環境変数GOOGLE_API_KEYが設定されていません。');
    }

    // ドメインがsc-domain:で始まっているかチェック
    const isDomainProperty = SITE_URL.startsWith('sc-domain:');
    
    // もし始まっていない場合は追加し、始まっている場合はそのまま
    if (!isDomainProperty && !SITE_URL.startsWith('http')) {
      SITE_URL = `sc-domain:${SITE_URL.replace(/^(https?:\/\/)?(www\.)?/, '')}`;
    }
    
    console.log('ドメインプロパティとして処理します:', SITE_URL);

    // サイトマップの完全なURL
    const fullSitemapUrl = `https://www.stellarium.jp/sitemap.xml`;
    console.log('サイトマップ送信を開始:', fullSitemapUrl);
    console.log('Search Console API使用サイトURL:', SITE_URL);

    // サービスアカウントのJSONキーを解析
    let authClient;
    try {
      const keyFile = JSON.parse(GOOGLE_API_KEY);
      authClient = new google.auth.JWT(
        keyFile.client_email,
        null,
        keyFile.private_key,
        ['https://www.googleapis.com/auth/webmasters']
      );
      
      console.log('使用するサービスアカウント:', keyFile.client_email);
      await authClient.authorize();
      console.log('認証成功');
    } catch (error) {
      console.error('認証でエラーが発生しました:', error);
      throw error;
    }

    // Search Console APIの初期化
    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: authClient
    });

    // サイトの権限確認
    try {
      const sites = await searchconsole.sites.list();
      console.log('アクセス可能なサイト一覧:');
      sites.data.siteEntry?.forEach(site => {
        console.log(`- ${site.siteUrl} (${site.permissionLevel})`);
      });
    } catch (siteError) {
      console.error('サイト一覧取得エラー:', siteError.message);
    }

    // サイトマップの送信
    // ドメインプロパティの場合は完全なURLが必要
    const feedpath = fullSitemapUrl;
    
    const result = await searchconsole.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: feedpath
    });

    console.log('サイトマップの送信に成功しました', result.status);
  } catch (error) {
    console.error('サイトマップの送信に失敗しました:', error.response?.status || error.code);
    if (error.response?.data) {
      console.error(JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}

submitSitemap(); 