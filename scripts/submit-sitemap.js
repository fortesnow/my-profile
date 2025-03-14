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

    // Search Console APIの初期化
    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: GOOGLE_API_KEY
    });

    // サイトマップの送信
    const result = await searchconsole.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: '/sitemap.xml'
    });

    console.log('サイトマップの送信に成功しました', result.status);
  } catch (error) {
    console.error('サイトマップの送信に失敗しました:', error.response?.status || error.code);
    console.error(error.response?.data || error);
    process.exit(1);
  }
}

submitSitemap(); 