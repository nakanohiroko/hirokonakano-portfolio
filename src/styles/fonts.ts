import { Abril_Fatface, Inter, Mulish, Noto_Sans_JP } from 'next/font/google';

const abrilfatface = Abril_Fatface({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-abrilfatface',
  weight: ['400'],
});

const mulish = Mulish({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-mulish',
  weight: ['500', '600'],
});

const notojp = Noto_Sans_JP({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-notojp',
  weight: ['400', '500'],
});

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '600'],
});

export { abrilfatface, inter, mulish, notojp };
