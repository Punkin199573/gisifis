"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/wealth-management", label: "Wealth Management" },
    { href: "/project-funding", label: "Project Funding" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-lg">GSFS</span>
          </div>
          <div>
            <span className="font-heading font-black text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Global Strategic
            </span>
            <div className="text-sm text-muted-foreground font-medium">Financial Solutions</div>
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
          <Link href="/apply">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg"
            >
              Apply Now
            </Button>
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden border-t bg-background/95 backdrop-blur-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
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
            <Link href="/apply" onClick={() => setIsMenuOpen(false)}>
              <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                Apply Now
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
