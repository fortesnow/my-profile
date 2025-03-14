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

    // Search Console APIの初期化
    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: GOOGLE_API_KEY
    });

    // サイトマップの送信
    await searchconsole.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: '/sitemap.xml',
      key: GOOGLE_API_KEY
    });

    console.log('サイトマップの送信に成功しました');
  } catch (error) {
    console.error('サイトマップの送信に失敗しました:', error.response?.status || error.code);
    console.error(error.response?.data || error);
    process.exit(1);
  }
}

submitSitemap(); 