"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/90 text-white backdrop-blur-md">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/aviron.png"
            alt="Aviron logo"
            width={100}
            height={40}
            priority
            className="h-auto w-20 sm:w-24"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="transition hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-gray-400">
            About
          </Link>
          <Link href="/service" className="transition hover:text-gray-400">
            Services
          </Link>
          <Link href="/contacts" className="transition hover:text-gray-400">
            Contact
          </Link>
          <Link href="/projects" className="transition hover:text-gray-400">
            Projects
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl transition hover:text-gray-400 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-white/10 px-6 py-5 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/service" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/contacts" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
