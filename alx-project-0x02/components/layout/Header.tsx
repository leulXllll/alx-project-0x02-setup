import React from 'react'

interface HeaderProps {
  userAgent: string
}

const Header: React.FC<HeaderProps> = ({ userAgent }) => {
  return (
    <header className="p-4 bg-gray-200 text-sm">
      <p>User Agent: {userAgent}</p>
    </header>
  )
}

export default Header
