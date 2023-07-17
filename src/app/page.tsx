import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
          <Link href='/about'>About</Link>
      </nav>
      <div>Hello bitch</div>
    </main>
  )
}
