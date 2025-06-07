// components/layout/Header.tsx
import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-200 flex space-x-4">
      <Link href="/home" className="text-blue-600 hover:underline">Home</Link>
      <Link href="/about" className="text-blue-600 hover:underline">About</Link>
    </header>
  )
}

export default Header
