"use client"
import '../app/globals.scss'
import styles from './styles.module.scss'
import { PlasmaBall } from '@/plugins/plasma-ball'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const dotsCount = 50;
const radius = 150;

export default function UnderConstruction() {
  let plasmaBallInstance: any = useRef(null);
  useEffect(() => {
    plasmaBallInstance.current = new PlasmaBall(dotsCount, radius);
  })
  return (
    <main className={`flex min-h-screen md:flex-row max-sm:flex-col items-center justify-between ${styles.main}`}>
      <div className={styles.infoText}>
          <h1>
            Site is Under Construction
          </h1>
          <p>
            <Link href='/cv'>Perhaps, you&rsquo;d like to see my CV?</Link>
          </p>
      </div>
      <canvas className="canvas"></canvas>
    </main>
  )
}
