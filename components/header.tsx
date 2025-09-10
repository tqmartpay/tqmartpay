"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
                <span className="text-primary-foreground font-bold text-sm sm:text-base">TM</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-bounce-gentle"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-xl text-foreground leading-tight">TAQUMART</span>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">PRIVATE LIMITED</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#policy" className="text-foreground hover:text-primary transition-colors">
              Company Policy
            </a>
            <a href="#faqs" className="text-foreground hover:text-primary transition-colors">
              FAQs
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link href="/signup">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
              >
                Sign Up
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="sm"
                className="text-xs sm:text-sm bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Login
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-accent/10"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-accent/10"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-accent/10"
              >
                About
              </a>
              <a
                href="#policy"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-accent/10"
              >
                Company Policy
              </a>
              <a
                href="#faqs"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-accent/10"
              >
                FAQs
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-lg hover:bg-accent/10"
              >
                Contact
              </a>
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Link href="/signup" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link href="/login" className="w-full sm:w-auto">
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
