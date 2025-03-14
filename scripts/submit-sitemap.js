// Google Search Consoleにサイトマップを送信するスクリプト
import { google } from 'googleapis';
import dotenv from 'dotenv';

// 開発環境では.envファイルを読み込む
dotenv.config();

async function submitSitemap() {
  try {
    const SITE_URL = process.env.SITE_URL;
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

    if (!GOOGLE_API_KEY || !SITE_URL) {
      throw new Error('環境変数GOOGLE_API_KEYまたはSITE_URLが設定されていません。');
    }

    console.log('サイトマップ送信を開始:', `${SITE_URL}/sitemap.xml`);

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
      await authClient.authorize();
    } catch (error) {
      console.error('認証でエラーが発生しました:', error);
      throw error;
    }

    // Search Console APIの初期化
    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: authClient
    });

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