'use client';
import { useEffect } from 'react';
import '@/app/globals.scss';
import styles from './cat.module.scss';
import { Application } from 'pixi.js';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ornge Car',
  description: 'My Cat Casper',
  openGraph: {
    title: 'Dima Metelev | Ornge Car',
    description: 'This is Casper, you can play with him :)',
    images: '/images/thumbnail.png',
  },
};

const catSpritesUrl = '/assets/cat/cat_animations.json';

export default function Cat(props) {
  useEffect(() => {
    const initCat = async () => {
      // @ts-ignore
      const initCat: (app, sprites) => {} = (
        await import('@/app/src/plugins/cat')
      ).default;
      const app = new Application({
        resizeTo: window,
        backgroundAlpha: 0,
      });

      initCat(app, catSpritesUrl);

      // @ts-ignore
      document.getElementById('catnip').appendChild(app.view);
    };
    initCat();
  }, []);
  return (
    <main className={styles.main}>
      <div id="catnip"></div>
      <div className={styles.infoText}>
        <h1>This Is Casper, you can play with him</h1>
      </div>
      <footer className="absolute w-full bottom-0 text-center text-white">
        Dimas Metelev 2023, no rights reserved
      </footer>
    </main>
  );
}
