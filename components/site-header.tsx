'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NavigationMenu } from './dashboard/navigation-menu'
// Adjust this import path if your file structure differs:

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-red-800 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl">Lottery</span>
        </Link>
        <div className="flex items-center gap-4">
          <NavigationMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
    </header>
  )
}
