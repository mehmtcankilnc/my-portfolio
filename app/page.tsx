"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Smartphone, Terminal } from "lucide-react";

const techStackEssentials = [
  "React Native",
  "TypeScript",
  "JavaScript",
  "ASP.NET Core",
  "SQL",
];

const socialLinks = [
  {
    alt: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    href: "https://github.com/mehmtcankilnc",
  },
  {
    alt: "LinkedIn",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
    href: "https://www.linkedin.com/in/mehmetcankilinc",
  },
  {
    alt: "Play Store",
    src: "https://img.icons8.com/?size=100&id=22982&format=png&color=1A1A1A",
    href: "https://play.google.com/store/apps/developer?id=Mehmetcan+Kılınç",
  },
  {
    alt: "Instagram",
    src: "https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=1A1A1A",
    href: "https://www.instagram.com/mehmtcankilinc",
  },
];

const appModules = [
  {
    id: "MOD-01",
    title: "Tutor Sudoku",
    description:
      "Learn, solve, and master Sudoku! Perfect for beginners and experts alike. Learn pro techniques like X-Wing, or use our Smart Scanner to digitize and solve any physical puzzle in seconds.",
    tech: ["Puzzle", "React Native", "TypeScript"],
    icon: Smartphone,
    qrCode: "/tutorSudokuQr.png",
    iconSrc: "/tutorSudokuIcon.png",
    appLink: "https://play.google.com/store/apps/details?id=com.tutorsudoku",
  },
  {
    id: "MOD-02",
    title: "CvCreator",
    description:
      "The fastest way to create professional resumes and cover letters with no login or membership required. Users can choose from modern templates and download watermark-free high-quality PDFs instantly.",
    tech: ["React Native", "PostgreSQL", "VPS"],
    icon: Terminal,
    qrCode: "/cvCreatorQr.png",
    iconSrc: "/cvCreatorIcon.png",
    appLink:
      "https://play.google.com/store/apps/details?id=com.mehmtcankilinc.cvcreator",
  },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "home") {
              window.history.replaceState(null, "", window.location.pathname);
            } else {
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full">
      {/** Home */}
      <section
        id="home"
        className="scroll-mt-20 min-h-[calc(100vh-80px)] flex flex-col justify-center p-4 py-10"
      >
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white border-4 border-black shadow-[6px_6px_0px_black] overflow-hidden">
            <div className="h-3 w-full bg-[repeating-linear-gradient(45deg,#FF4500,#FF4500_10px,transparent_10px,transparent_20px)] border-b-4 border-black"></div>
            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1 space-y-10">
                <div className="space-y-4">
                  <h1 className="font-oswald text-5xl font-bold">
                    Full-Stack Mobile Developer
                  </h1>
                  <p className="font-jetbrains text-lg font-bold text-gray-800">
                    Hey, I&apos;m Mehmetcan. I&apos;m a fresh graduated full
                    stack developer based in Türkiye.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="font-oswald text-2xl font-bold tracking-wider">
                    Socials
                  </h2>
                  <div className="flex gap-5 flex-wrap">
                    {socialLinks.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-black p-3 bg-gray-50 shadow-[3px_3px_0px_black] hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] transition-all"
                      >
                        <Image
                          src={social.src}
                          alt={social.alt}
                          width={32}
                          height={32}
                        />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="font-oswald text-2xl font-bold tracking-wider">
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {techStackEssentials.map((tech, i) => (
                      <span
                        key={i}
                        className="border-2 border-gray-300 px-4 py-2 bg-gray-50 font-jetbrains text-sm font-bold text-gray-600 hover:border-black hover:text-black transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="shrink-0 order-first md:order-last mx-auto md:mx-0 md:self-stretch flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_black] w-64 lg:w-80">
                <Image
                  src="/profile.jpg"
                  alt="Mehmetcan Kılınç"
                  width={320}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** Apps */}
      <section
        id="apps"
        className="scroll-mt-20 min-h-[calc(100vh-80px)] flex flex-col justify-center p-4 py-10"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="mb-10 border-b-4 border-black pb-4 flex justify-between items-end">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Published Apps
            </h2>
            <div className="hidden md:block font-jetbrains text-xs font-bold bg-black text-white px-3 py-1.5 shadow-[3px_3px_0px_var(--color-industrial-yellow)]">
              VOL:{" "}
              {appModules.length < 10
                ? `0${appModules.length}`
                : appModules.length}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {appModules.map((app, i) => (
              <div
                key={i}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-95 bg-white border-4 border-black shadow-[6px_6px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 hover:translate-x-1 transition-all flex flex-col group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white p-2 border-4 border-industrial-yellow">
                    <Image
                      src={app.qrCode}
                      alt={`${app.title} QR`}
                      width={150}
                      height={150}
                      className="rendering-pixelated"
                    />
                  </div>
                  <span className="font-jetbrains text-white text-xs mt-4 mb-4 font-bold tracking-widest uppercase">
                    SCAN TO INSTALL
                  </span>
                  <a
                    href={app.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-37.5 bg-industrial-yellow text-black font-jetbrains text-xs font-bold py-3 text-center border-2 border-black shadow-[3px_3px_0px_white] cursor-pointer hover:bg-white hover:text-black transition-colors"
                  >
                    VIEW
                  </a>
                </div>
                <div className="p-3 border-b-4 border-black flex justify-between items-center bg-gray-50 group-hover:bg-industrial-yellow transition-colors relative z-0">
                  <span className="font-jetbrains text-[10px] font-bold tracking-widest text-black uppercase">
                    {app.id}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-black animate-pulse" />
                </div>
                <div className="h-44 border-b-4 border-black bg-gray-100 flex items-center justify-center relative z-0 overflow-hidden">
                  <div className="w-28 h-28 bg-white border-4 border-black shadow-[4px_4px_0px_black] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={app.iconSrc}
                      alt={`${app.title} İkonu`}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col relative z-0 text-center">
                  <h3 className="font-oswald text-2xl font-bold mb-3 text-black">
                    {app.title}
                  </h3>
                  <p className="font-jetbrains text-sm text-gray-600 mb-6 flex-1 text-center">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-2">
                    {app.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="border-2 border-gray-300 px-2 py-1 text-[10px] font-jetbrains font-bold text-gray-500 uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
