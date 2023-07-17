import Link from 'next/link'

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <main className='h-full'>
            <title>About</title>
            {children}
        </main>
    )
  }