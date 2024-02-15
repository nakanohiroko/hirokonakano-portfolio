import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  const AUTH_USERNAME = process.env.AUTH_USERNAME;
  const AUTH_PASSWORD = process.env.AUTH_PASSWORD;

  if (!AUTH_USERNAME || !AUTH_PASSWORD) {
    return NextResponse.next();
  }

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');

    if (user === AUTH_USERNAME && pwd === AUTH_PASSWORD) {
      return NextResponse.next();
    }
  }

  return NextResponse.rewrite(url);
}
