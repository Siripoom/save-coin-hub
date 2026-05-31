"use client"

import { useState } from "react"
import Link from "next/link"
import { NAV_LINKS } from "@/lib/site-config"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="safe-container nav-inner">
        <Link href="/" className="logo" aria-label="SAFE Home">
          SAFE
        </Link>

        <nav className="nav-menu" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="btn btn-primary">
          💬 ติดต่อสอบถาม
        </Link>

        <button
          className="mobile-toggle"
          aria-label={mobileOpen ? "ปิดเมนู" : "เปิดเมนู"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="safe-container">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="btn btn-primary"
              onClick={() => setMobileOpen(false)}
            >
              💬 ติดต่อสอบถาม
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
