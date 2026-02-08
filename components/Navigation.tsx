'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#categories', label: 'Categories' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Readless Logo"
              width={60}
              height={60}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base text-brand-dark hover:text-brand-yellow transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* Waitlist Button */}
            <a
              href="#waitlist"
              className="bg-brand-yellow text-brand-dark px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base font-bold hover:bg-yellow-400 transition-all shadow-lg"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-brand-dark p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-2 text-brand-dark hover:text-brand-yellow hover:bg-gray-50 rounded-lg transition-colors font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="block mt-4 bg-brand-yellow text-brand-dark px-6 py-3 rounded-lg font-bold text-center hover:bg-yellow-400 transition-all text-base shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
