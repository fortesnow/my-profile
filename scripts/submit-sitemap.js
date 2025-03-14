// Google Search Consoleにサイトマップを送信するスクリプト
import { google } from 'googleapis';

async function submitSitemap() {
  try {
    const SITE_URL = process.env.SITE_URL;
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

    if (!GOOGLE_API_KEY || !SITE_URL) {
      throw new Error('環境変数GOOGLE_API_KEYまたはSITE_URLが設定されていません。');
    }

    console.log('サイトマップ送信を開始:', `${SITE_URL}/sitemap.xml`);

    // APIキーのJSONを解析
    const auth = JSON.parse(GOOGLE_API_KEY);

    // JWT clientの作成
    const jwtClient = new google.auth.JWT(
      auth.client_email,
      null,
      auth.private_key,
      ['https://www.googleapis.com/auth/webmasters']
    );

    // 認証
    await jwtClient.authorize();

    // Search Console APIの初期化
    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: jwtClient
    });

    // サイトマップの送信
    await searchconsole.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: '/sitemap.xml'
    });

    console.log('サイトマップの送信に成功しました');
  } catch (error) {
    console.error('サイトマップの送信に失敗しました:', error.response?.status || error.code);
    console.error(error.response?.data || error);
    process.exit(1);
  }
}

submitSitemap(); 