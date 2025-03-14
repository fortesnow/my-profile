// Google Search Consoleにサイトマップを送信するスクリプト
const https = require('https');

// 環境変数から値を取得
const SITE_URL = process.env.SITE_URL;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

if (!GOOGLE_API_KEY || !SITE_URL) {
  console.error('環境変数GOOGLE_API_KEYまたはSITE_URLが設定されていません。');
  process.exit(1);
}

// Google Search Consoleに送信するためのURL
const sitemapUrl = `${SITE_URL}/sitemap.xml`;
const searchConsoleUrl = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/sitemaps/${encodeURIComponent(sitemapUrl)}?key=${GOOGLE_API_KEY}`;

// POSTリクエストオプション
const options = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${GOOGLE_API_KEY}`
  }
};

console.log(`サイトマップ送信を開始: ${sitemapUrl}`);

// リクエスト実行
const req = https.request(searchConsoleUrl, options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log(`サイトマップが正常に送信されました: ${sitemapUrl}`);
      console.log(`ステータスコード: ${res.statusCode}`);
    } else {
      console.error(`サイトマップの送信に失敗しました: ${res.statusCode}`);
      console.error(data);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error('エラーが発生しました:', error);
  process.exit(1);
});

req.end(); 