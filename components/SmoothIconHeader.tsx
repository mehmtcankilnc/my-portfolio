"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SmoothIcon from "smooth-icon";

export default function SmoothIconHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const getLinkStyle = (path: string) => {
    return `transition-colors ${
      pathname === path
        ? "text-[#EF7C00] font-semibold"
        : "text-[#58330C] hover:text-[#EF7C00]"
    }`;
  };

  return (
    <header className="w-full font-sans relative z-50">
      <a
        href="https://mehmtcankilinc.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-linear-to-r from-[#5F4122] via-black to-[#5F4122] text-[#FFFDF5] text-[16px] sm:text-[20px] font-medium py-4 flex justify-center items-center gap-2 hover:opacity-95 transition-all"
      >
        <span className="group-hover:-translate-x-1 transition-transform duration-300">
          Check out my{" "}
          <span className="text-[#EF7C00] font-semibold">portfolio</span>
        </span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          &rarr;
        </span>
      </a>
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto py-4 px-4 md:px-8 bg-[#fffdf5] border-b border-[#58330C]/10 relative">
        <Link
          href="/smooth-icon"
          onClick={closeMenu}
          className="text-2xl md:text-3xl font-bold tracking-tight text-[#58330C] font-carterone"
        >
          Smooth Icon
        </Link>
        <button
          className="md:hidden flex items-center text-[#58330C] hover:text-[#EF7C00] transition-colors focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <SmoothIcon name="close" size={36} />
          ) : (
            <SmoothIcon name="menu" size={36} />
          )}
        </button>
        <nav className="hidden md:flex items-center gap-6 text-[16px] font-medium">
          <Link href="/smooth-icon" className={getLinkStyle("/smooth-icon")}>
            Icons
          </Link>
          <Link
            href="/smooth-icon/usage"
            className={getLinkStyle("/smooth-icon/usage")}
          >
            Usage
          </Link>
          <Link
            href="/smooth-icon/contribute"
            className={getLinkStyle("/smooth-icon/contribute")}
          >
            Contribute
          </Link>
          <a
            href="https://github.com/mehmtcankilnc/smooth-icon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#58330C] hover:text-[#EF7C00] transition-colors"
          >
            GitHub <SmoothIcon name="open-outlined" size={18} />
          </a>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#fffdf5] border-b border-[#58330C]/10 shadow-lg md:hidden flex flex-col py-4 px-4 gap-4 text-[16px] font-medium">
          <Link
            href="/smooth-icon"
            onClick={closeMenu}
            className={`block py-2 ${getLinkStyle("/smooth-icon")}`}
          >
            Icons
          </Link>
          <Link
            href="/smooth-icon/usage"
            onClick={closeMenu}
            className={`block py-2 ${getLinkStyle("/smooth-icon/usage")}`}
          >
            Usage
          </Link>
          <Link
            href="/smooth-icon/contribute"
            onClick={closeMenu}
            className={`block py-2 ${getLinkStyle("/smooth-icon/contribute")}`}
          >
            Contribute
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-1 py-2 text-[#58330C] hover:text-[#EF7C00] transition-colors"
          >
            GitHub <SmoothIcon name="open-outlined" size={18} />
          </a>
        </nav>
      )}
    </header>
  );
}
