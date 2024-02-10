/**
 * レイアウト
 */

import React, { ReactNode } from 'react';

import { abrilfatface, mulish, notojp } from '../../../../styles/fonts';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className={`${abrilfatface.variable} ${mulish.variable} ${notojp.variable}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
