"use client"
import './globals.scss'
import { Inter } from 'next/font/google'

import bg from '../public/grass.png'
import cursor from '../public/cursor.png'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`body ${inter.className}`}>
        {children}
        <style jsx global>
          {`
              html, body {
                  background: url(${bg.src});
                  background-size: contain;
                  background-repeat: repeat;
                  cursor: url('${cursor.src}'),auto;
              }
          `}
      </style>
      </body>
    </html>
  )
}
