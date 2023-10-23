import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-blue-500 text-white">
      <h1 className="text-2xl">My App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/slider">
              <a>Slider</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}