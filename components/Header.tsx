"use client";

import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "apps", label: "Apps" },
  { id: "projects", label: "Projects", hasDropdown: true },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-20 bg-white border-b-4 border-black px-6 flex justify-between items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-black text-white p-2 border-2 border-black shadow-[4px_4px_0px_var(--color-industrial-yellow)]">
          <Terminal size={24} strokeWidth={2.5} />
        </div>
        <h1 className="font-oswald text-2xl md:text-3xl font-bold uppercase tracking-wider text-black leading-none mt-1">
          Mehmetcan Kılınç
        </h1>
      </div>

      <nav className="hidden md:flex gap-4 lg:gap-8 font-jetbrains text-sm font-bold uppercase items-center">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <Link
              key={link.id}
              href={link.id === "home" ? "/" : `#${link.id}`}
              className={`px-3 py-1.5 border-2 transition-all flex items-center gap-1 ${
                isActive
                  ? "bg-industrial-yellow border-black shadow-[3px_3px_0px_black] transform -translate-y-0.5"
                  : "border-transparent hover:border-black"
              }`}
            >
              {link.label}
              {link.hasDropdown && <span className="text-[10px]">▼</span>}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
