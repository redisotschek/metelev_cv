"use client";
import '../app/globals.scss'
import styles from './styles.module.scss'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { SmartCat } from '@/plugins/cat_module/src/cat'
import { Application } from 'pixi.js'

import bg from '../public/grass.png'

const isServer = () => typeof window === 'undefined';

export default function UnderConstruction() {
  let app = useRef<Application<HTMLCanvasElement>>();

  let catInstance = useRef<SmartCat>();

  useEffect(() => {
    if (!isServer()) {
      app.current = new Application<HTMLCanvasElement>({
        resizeTo: window,
        backgroundAlpha: 0,
      });

      document.body.appendChild(app.current.view);
      catInstance.current = new SmartCat(app.current, document.body);
    }
  }, []);

  function unload() {
    catInstance.current?.destroy();
    app.current?.destroy();
  }

  return (
    <main className={styles.main}>
      <div className={styles.infoText}>
          <h1>
            Site is Under Construction
          </h1>
          <p>
            <Link onClick={unload} href='/cv' prefetch>Would you like to see my CV?</Link>
          </p>
      </div>
      <style jsx global>
        {`
            html, body {
                background: url(${bg.src});
            }
        `}
      </style>
    </main>
  )
}
