import '../styles/globals.css';

import React, { ReactNode, Suspense } from 'react';

import GoogleAnalytics from '../components/elements/GoogleAnalytics/GoogleAnalytics';
import Footer from '../components/templates/Footer/Footer';
import Header from '../components/templates/Header/Header';
import { abrilfatface, inter, mulish, notojp } from '../styles/fonts';

export const metadata = {
  title: 'hiroko nakano portfolio',
  alternates: {
    canonical: '/',
  },
  description: '中野紘子のポートフォリオサイトです',
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'hiroko nakano portfolio',
    description: '中野紘子のポートフォリオサイトです',
    images: '/placeholder-social.jpg',
  },
  robots: {
    follow: false,
    googleBot: {
      follow: false,
      index: false,
    },
    index: false,
  },
};

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang='ja'>
      <head>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body>
        <Header />
        <main
          className={`${abrilfatface.variable} ${inter.variable} ${mulish.variable} ${notojp.variable}`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
