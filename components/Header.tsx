"use client";
import { useState, useEffect } from "react";
import { Terminal, Menu, X, ChevronDown } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") {
        setActiveSection(pathname.startsWith("/projects") ? "projects" : "");
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
    setIsMenuOpen(false);
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
    <header className="sticky top-0 z-100 h-20 bg-white border-b-4 border-black px-4 md:px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="bg-black text-white p-1.5 md:p-2 border-2 border-black shadow-[3px_3px_0px_var(--color-industrial-yellow)]">
          <Terminal className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </div>
        <Link
          href="/"
          className="font-oswald text-xl md:text-3xl font-bold uppercase tracking-tight md:tracking-wider text-black leading-none mt-1 wrap-break-word"
        >
          Mehmetcan Kılınç
        </Link>
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 border-4 border-black bg-industrial-yellow shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
      >
        {isMenuOpen ? (
          <X size={24} strokeWidth={3} />
        ) : (
          <Menu size={24} strokeWidth={3} />
        )}
      </button>
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
                className={`px-3 py-1.5 border-2 transition-all flex items-center gap-1 ${isActive ? "bg-industrial-yellow border-black shadow-[3px_3px_0px_black] -translate-y-0.5" : "border-transparent hover:border-black"}`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </Link>
              {link.hasDropdown && (
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-52">
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
      <div
        className={`fixed inset-0 top-20 bg-black/50 z-90 md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <nav
        className={`fixed top-20 right-0 w-70 h-[calc(100vh-80px)] bg-white border-l-4 border-black z-100 md:hidden transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} flex flex-col font-jetbrains font-bold uppercase overflow-y-auto`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <div
              key={link.id}
              className="flex flex-col border-b-4 border-black last:border-b-0"
            >
              <div className="flex justify-between items-center w-full">
                <Link
                  href={
                    pathname === "/"
                      ? link.id === "home"
                        ? "/"
                        : `/#${link.id}`
                      : `/#${link.id}`
                  }
                  onClick={(e) =>
                    !link.hasDropdown && handleSmoothScroll(e, link.id)
                  }
                  className={`flex-1 px-6 py-5 text-lg ${isActive ? "bg-industrial-yellow" : "bg-white"}`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <button
                    onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    className="px-6 py-5 border-l-4 border-black bg-gray-100 active:bg-industrial-yellow"
                  >
                    <ChevronDown
                      size={24}
                      className={`transition-transform ${isProjectsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>
              {link.hasDropdown && isProjectsOpen && (
                <div className="bg-gray-50 border-t-4 border-black flex flex-col">
                  {link.dropdownItems?.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-10 py-4 border-b-2 border-black last:border-b-0 hover:bg-industrial-yellow text-sm"
                    >
                      {">"} {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        <div className="flex-1 bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_10px)] opacity-5" />
      </nav>
    </header>
  );
}
