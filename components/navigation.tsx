"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const Menu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/wealth-management", label: "Wealth Management" },
    { href: "/project-funding", label: "Project Funding" },
    { href: "/loans", label: "Business Loans" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Stable Value Capital"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-lg lg:text-xl text-primary">
              Stable Value
            </span>
            <div className="text-xs lg:text-sm text-muted-foreground font-medium">Capital</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                currentPage === item.href ? "text-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-md"
            >
              Get Started
            </Button>
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background/95 backdrop-blur-xl">
          <div className="container py-6 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-foreground hover:text-primary transition-colors font-medium ${
                  currentPage === item.href ? "text-primary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
