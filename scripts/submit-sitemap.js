// Google Search Consoleにサイトマップを送信するスクリプト
import { google } from 'googleapis';
import dotenv from 'dotenv';

// 開発環境では.envファイルを読み込む
dotenv.config();

async function submitSitemap() {
  try {
    let SITE_URL = process.env.SITE_URL;
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

    if (!GOOGLE_API_KEY || !SITE_URL) {
      throw new Error('環境変数GOOGLE_API_KEYまたはSITE_URLが設定されていません。');
    }

    // ドメインプロパティの場合は「sc-domain:」プレフィックスを追加
    // URLプレフィックスの場合はそのまま使用
    if (!SITE_URL.startsWith('sc-domain:') && !SITE_URL.startsWith('http')) {
      SITE_URL = `sc-domain:${SITE_URL.replace(/^(https?:\/\/)?(www\.)?/, '')}`;
      console.log('ドメインプロパティとして処理します:', SITE_URL);
    }

    console.log('サイトマップ送信を開始:', `${process.env.SITE_URL}/sitemap.xml`);
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
    const result = await searchconsole.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: '/sitemap.xml'
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