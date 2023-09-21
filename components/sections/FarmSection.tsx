'use client';
import '@/app/globals.scss';
import styles from './farm.module.scss';
import { useEffect } from 'react';
import { Application, Container } from 'pixi.js';

const catSpritesUrl = '/assets/cat/cat_animations.json';

export default function FarmSection() {
  useEffect(() => {
    const initCat = async () => {
      // @ts-ignore
      const { SmartCat } = await import('@/app/src/plugins/cat');
      const app = new Application({
        resizeTo: window,
        backgroundAlpha: 0,
      });

      const container = new Container();

      const catInstance = new SmartCat(app, catSpritesUrl);
      catInstance.init().then(() => {
        container.addChild(catInstance.sprite);
        app.stage.addChild(container);
      });

      // @ts-ignore
      document.getElementById('catnip').appendChild(app.view);
    };
    initCat();
  }, []);

  return (
    <main className={`${styles.main} relative transform`} id="catnip">
      <div className={styles.infoText}>
        <h1>This Section is Under Construction :)</h1>
      </div>
      <footer className="absolute w-full bottom-0 text-center text-white">
        Dimas Metelev 2023, no rights reserved
      </footer>
    </main>
  );
}
