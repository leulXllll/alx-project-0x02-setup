import Link from "next/link"
export default function Header() {
  return (
    <div>
        {/* <h1>The header</h1> */}
           <header className="bg-gray-800 text-white py-4 px-6">
      <nav className="flex gap-6">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
      </nav>
    </header>
    </div>
  )
}