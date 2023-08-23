import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My CV',
  description: 'Dmitry Metelev`s CV',
}

export default function CvLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className='h-full'>
          <title>My CV</title>
          {children}
      </main>
    )
  }