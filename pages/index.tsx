import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl mb-4">Welcome to My App</h1>
      <Link href="/slider">
        <a className="text-blue-500">Go to Slider Page</a>
      </Link>
    </main>
  )
}