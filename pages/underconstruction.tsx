"use client";
import '../app/globals.scss'
import styles from './styles.module.scss'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Application } from 'pixi.js'

import bg from '../public/grass.png'

export default function UnderConstruction() {
  let app = useRef<Application<HTMLCanvasElement>>();

  let catInstance = useRef();

  useEffect(() => {
    const initCat = async () => {
      const SmartCat = (await import('@/plugins/cat_module/src/cat')).default;
      app.current = new Application<HTMLCanvasElement>({
        resizeTo: window,
        backgroundAlpha: 0,
      });
  
      document.body.appendChild(app.current.view);
      // @ts-ignore
      catInstance.current = new SmartCat(app.current, document.body);
    }
    initCat();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.infoText}>
          <h1>
            Site is Under Construction
          </h1>
          <p>
            <Link href='/cv' prefetch>Would you like to see my CV?</Link>
          </p>
      </div>
      <style jsx global>
        {`
            html, body {
                background: url(${bg.src});
                background-size: contain;
                background-repeat: repeat;
            }
        `}
      </style>
    </main>
  )
}
