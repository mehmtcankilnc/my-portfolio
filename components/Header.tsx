"use client";

import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "apps", label: "Apps" },
  {
    id: "projects",
    label: "Projects",
    hasDropdown: true,
    dropdownItems: [
      { label: "Mobile Projects", href: "/projects/mobile" },
      { label: "Backend Projects", href: "/projects/backend" },
    ],
  },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") {
        if (pathname.startsWith("/projects")) {
          setActiveSection("projects");
        } else {
          setActiveSection("");
        }
        return;
      }

      const sections = Array.from(document.querySelectorAll("section"));
      if (sections.length === 0) return;

      let current = "home";
      const scrollY = window.scrollY;
      const viewportMiddle = scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (viewportMiddle >= sectionTop && viewportMiddle <= sectionBottom) {
          current = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const timeout = setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [pathname]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    if (pathname === "/") {
      e.preventDefault();

      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      } else {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth",
          });

          window.history.pushState(null, "", `/#${id}`);
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 h-20 bg-white border-b-4 border-black px-6 flex justify-between items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-black text-white p-2 border-2 border-black shadow-[4px_4px_0px_var(--color-industrial-yellow)]">
          <Terminal size={24} strokeWidth={2.5} />
        </div>
        <Link
          href="/"
          className="font-oswald text-2xl md:text-3xl font-bold uppercase tracking-wider text-black leading-none mt-1"
        >
          Mehmetcan Kılınç
        </Link>
      </div>

      <nav className="hidden md:flex gap-4 lg:gap-8 font-jetbrains text-sm font-bold uppercase items-center">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <div key={link.id} className="relative group">
              <Link
                href={
                  pathname === "/"
                    ? link.id === "home"
                      ? "/"
                      : `/#${link.id}`
                    : `/#${link.id}`
                }
                scroll={false}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`px-3 py-1.5 border-2 transition-all flex items-center gap-1 ${
                  isActive
                    ? "bg-industrial-yellow border-black shadow-[3px_3px_0px_black] transform -translate-y-0.5"
                    : "border-transparent hover:border-black"
                }`}
              >
                {link.label}
                {link.hasDropdown && <span className="text-[10px]">▼</span>}
              </Link>
              {link.hasDropdown && (
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-55">
                  <div className="bg-white border-4 border-black shadow-[4px_4px_0px_black] flex flex-col">
                    {link.dropdownItems?.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="px-4 py-3 border-b-4 border-black last:border-b-0 hover:bg-industrial-yellow text-black transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </header>
  );
}
