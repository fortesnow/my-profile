import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // X-Forwarded-For ヘッダーからIPアドレスを取得
  const forwardedFor = request.headers.get('x-forwarded-for');
  const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : null;
  
  // 除外IPリスト（環境変数から取得または直接指定）
  const excludedIps = process.env.ANALYTICS_EXCLUDED_IPS?.split(',').map(ip => ip.trim()) || ['118.241.216.128'];
  
  // 特定のIPアドレスを検出した場合、Cookieを設定
  if (clientIp && excludedIps.includes(clientIp)) {
    // 90日間有効なCookieを設定
    response.cookies.set('analytics-exclude', 'true', { 
      maxAge: 60 * 60 * 24 * 90,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    console.log(`Analytics excluded for IP: ${clientIp}`);
  }
  
  return response;
}

// すべてのルートでミドルウェアを実行
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}; 