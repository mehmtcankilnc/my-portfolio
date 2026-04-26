"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Smartphone, Terminal } from "lucide-react";
import Link from "next/link";

const techStackEssentials = [
  "React Native",
  "TypeScript",
  "JavaScript",
  "ASP.NET Core",
  "SQL",
  "Next.js",
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
    tech: ["React Native", "ASP.NET Core", "PostgreSQL"],
    icon: Terminal,
    qrCode: "/cvCreatorQr.png",
    iconSrc: "/cvCreatorIcon.png",
    appLink:
      "https://play.google.com/store/apps/details?id=com.mehmtcankilinc.cvcreator",
  },
];

const projectCategories = [
  {
    id: "CAT-01",
    title: "Mobile Projects",
    description:
      "I develop cross-platform, user-friendly, and high-performance mobile applications for both iOS and Android using modern technologies.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Supabase",
      "NativeWind",
    ],
    link: "/projects/mobile",
    image: "/mobileProjects.jpg",
  },
  {
    id: "CAT-02",
    title: "Backend Projects",
    description:
      "I build robust, scalable, and secure backend architectures and APIs employing Clean Architecture patterns, real-time communication, and containerized deployment.",
    tech: ["ASP.NET Core", "PostgreSQL", "SignalR", "Docker", "EF Core"],
    link: "/projects/backend",
    image: "/backendProjects.jpeg",
  },
];

export default function Home() {
  useEffect(() => {
    let observer: IntersectionObserver;

    const initTimer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              const currentHash = window.location.hash;

              if (id === "home") {
                if (currentHash !== "") {
                  window.history.replaceState(
                    null,
                    "",
                    window.location.pathname,
                  );
                }
              } else {
                if (currentHash !== `#${id}`) {
                  window.history.replaceState(null, "", `/#${id}`);
                }
              }
            }
          });
        },
        { threshold: 0.2 }, // Mobilde daha iyi tetiklenmesi için 0.5'ten 0.2'ye çektik
      );

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => observer.observe(section));
    }, 250);

    return () => {
      clearTimeout(initTimer);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <main className="w-full">
      {/** Home */}
      <section
        id="home"
        className="scroll-mt-20 min-h-[calc(100vh-80px)] flex flex-col justify-center p-4 py-8 md:py-10"
      >
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white border-4 border-black shadow-[4px_4px_0px_black] md:shadow-[6px_6px_0px_black] overflow-hidden">
            <div className="h-3 w-full bg-[repeating-linear-gradient(45deg,#FF4500,#FF4500_10px,transparent_10px,transparent_20px)] border-b-4 border-black"></div>
            <div className="p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1 space-y-8 md:space-y-10 text-center md:text-left">
                <div className="space-y-4">
                  <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Full-Stack Mobile Developer
                  </h1>
                  <p className="font-jetbrains text-base sm:text-lg font-bold text-gray-800">
                    Hey, I&apos;m Mehmetcan. I&apos;m a fresh graduated full
                    stack developer based in Türkiye.
                  </p>
                </div>
                <div className="space-y-4 flex flex-col items-center md:items-start">
                  <h2 className="font-oswald text-xl sm:text-2xl font-bold tracking-wider">
                    Socials
                  </h2>
                  <div className="flex gap-4 sm:gap-5 flex-wrap justify-center md:justify-start">
                    {socialLinks.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-black p-2.5 sm:p-3 bg-gray-50 shadow-[3px_3px_0px_black] hover:-translate-y-1 active:translate-y-0 hover:shadow-[4px_4px_0px_black] active:shadow-[2px_2px_0px_black] transition-all"
                      >
                        <Image
                          src={social.src}
                          alt={social.alt}
                          width={28}
                          height={28}
                          className="sm:w-8 sm:h-8"
                        />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 flex flex-col items-center md:items-start">
                  <h2 className="font-oswald text-xl sm:text-2xl font-bold tracking-wider">
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                    {techStackEssentials.map((tech, i) => (
                      <span
                        key={i}
                        className="border-2 border-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-50 font-jetbrains text-xs sm:text-sm font-bold text-gray-600 hover:border-black hover:text-black transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="shrink-0 order-first md:order-last mx-auto md:mx-0 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_black] w-48 sm:w-56 md:w-64 lg:w-80">
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
        className="scroll-mt-20 min-h-[calc(100vh-80px)] flex flex-col justify-center p-4 py-8 md:py-10"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="mb-8 md:mb-10 border-b-4 border-black pb-4 flex justify-between items-end">
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Published Apps
            </h2>
            <div className="font-jetbrains text-[10px] sm:text-xs font-bold bg-black text-white px-2 py-1 sm:px-3 sm:py-1.5 shadow-[2px_2px_0px_var(--color-industrial-yellow)] sm:shadow-[3px_3px_0px_var(--color-industrial-yellow)]">
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
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-85 sm:max-w-none bg-white border-4 border-black shadow-[4px_4px_0px_black] md:shadow-[6px_6px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 hover:translate-x-1 active:shadow-[1px_1px_0px_black] active:translate-y-1.5 active:translate-x-1.5 transition-all flex flex-col group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 active:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
                  <div className="bg-white p-2 border-4 border-industrial-yellow">
                    <Image
                      src={app.qrCode}
                      alt={`${app.title} QR`}
                      width={120}
                      height={120}
                      className="rendering-pixelated sm:w-37.5 sm:h-37.5"
                    />
                  </div>
                  <span className="font-jetbrains text-white text-[10px] sm:text-xs mt-4 mb-4 font-bold tracking-widest uppercase text-center px-2">
                    SCAN TO INSTALL OR CLICK VIEW
                  </span>
                  <a
                    href={app.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-32 sm:w-37.5 bg-industrial-yellow text-black font-jetbrains text-xs font-bold py-2 sm:py-3 text-center border-2 border-black shadow-[3px_3px_0px_white] cursor-pointer hover:bg-white active:translate-y-0.5 active:shadow-[1px_1px_0px_white] transition-all"
                  >
                    VIEW
                  </a>
                </div>
                <div className="p-2 sm:p-3 border-b-4 border-black flex justify-between items-center bg-gray-50 group-hover:bg-industrial-yellow transition-colors relative z-0">
                  <span className="font-jetbrains text-[10px] font-bold tracking-widest text-black uppercase">
                    {app.id}
                  </span>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 border border-black animate-pulse" />
                </div>
                <div className="h-36 sm:h-44 border-b-4 border-black bg-gray-100 flex items-center justify-center relative z-0 overflow-hidden">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white border-4 border-black shadow-[3px_3px_0px_black] sm:shadow-[4px_4px_0px_black] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={app.iconSrc}
                      alt={`${app.title} İkonu`}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col relative z-0 text-center">
                  <h3 className="font-oswald text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black">
                    {app.title}
                  </h3>
                  <p className="font-jetbrains text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 flex-1">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                    {app.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="border-2 border-gray-300 px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] font-jetbrains font-bold text-gray-500 uppercase tracking-wider"
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
      {/** Projects */}
      <section
        id="projects"
        className="scroll-mt-20 min-h-[calc(100vh-80px)] flex flex-col justify-center p-4 py-8 md:py-10"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="mb-8 md:mb-10 border-b-4 border-black pb-4 flex justify-between items-end">
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Projects
            </h2>
            <div className="font-jetbrains text-[10px] sm:text-xs font-bold bg-black text-white px-2 py-1 sm:px-3 sm:py-1.5 shadow-[2px_2px_0px_var(--color-industrial-yellow)] sm:shadow-[3px_3px_0px_var(--color-industrial-yellow)]">
              TOTAL:{" "}
              {projectCategories.length < 10
                ? `0${projectCategories.length}`
                : projectCategories.length}
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            {projectCategories.map((category, i) => (
              <div
                key={i}
                className="w-full bg-white border-4 border-black shadow-[4px_4px_0px_black] md:shadow-[6px_6px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 hover:translate-x-1 active:shadow-[1px_1px_0px_black] active:translate-y-1.5 active:translate-x-1.5 transition-all flex flex-col md:flex-row group"
              >
                <div className="w-full md:w-87.5 lg:w-100 min-h-50 sm:min-h-62.5 md:min-h-auto border-b-4 md:border-b-0 md:border-r-4 border-black relative bg-gray-50 overflow-hidden shrink-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white border-2 border-black px-1.5 py-0.5 sm:px-2 sm:py-1 shadow-[2px_2px_0px_black] z-10">
                    <span className="font-jetbrains text-[9px] sm:text-[10px] font-bold tracking-widest text-black uppercase">
                      {category.id}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col justify-between gap-4 sm:gap-6 text-center md:text-left">
                  <div>
                    <h3 className="font-oswald text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-black">
                      {category.title}
                    </h3>
                    <p className="font-jetbrains text-sm sm:text-base text-gray-700 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                      {category.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="border-2 border-gray-300 bg-gray-50 px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-jetbrains font-bold text-gray-600 uppercase tracking-wider group-hover:border-black group-hover:text-black transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={category.link}
                      className="inline-block w-full sm:w-auto bg-black text-white font-jetbrains text-xs sm:text-sm font-bold py-3 px-6 sm:px-8 border-2 border-black hover:bg-industrial-yellow hover:text-black transition-colors shadow-[4px_4px_0px_var(--color-industrial-yellow)] active:shadow-[1px_1px_0px_var(--color-industrial-yellow)] active:translate-y-1 active:translate-x-1"
                    >
                      EXPLORE PROJECTS
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/** About */}
      <section
        id="about"
        className="scroll-mt-20 min-h-[calc(100vh-80px)] flex flex-col justify-center p-4 py-8 md:py-10"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="mb-8 md:mb-10 border-b-4 border-black pb-4 flex justify-between items-end">
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
              About Me
            </h2>
            <div className="font-jetbrains text-[10px] sm:text-xs font-bold bg-black text-white px-2 py-1 sm:px-3 sm:py-1.5 shadow-[2px_2px_0px_var(--color-industrial-yellow)] sm:shadow-[3px_3px_0px_var(--color-industrial-yellow)]">
              INFO
            </div>
          </div>
          <div className="bg-white border-4 border-black shadow-[4px_4px_0px_black] md:shadow-[6px_6px_0px_black] p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_10px)] opacity-10 sm:opacity-20"></div>
            <div className="font-jetbrains text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed flex flex-col gap-4 sm:gap-6 relative z-10 text-justify md:text-left">
              <p>
                Hey, I&apos;m Mehmetcan, a recently graduated full-stack mobile
                developer based in Türkiye. I have approximately two years of
                experience building cross-platform mobile applications with
                React Native and Expo, working with tools and libraries like
                NativeWind, Firebase, Supabase, Zustand, React Navigation and
                Redux to deliver seamless user experiences.
              </p>
              <p>
                During this time, I&apos;ve also been focusing on backend
                development. I build scalable APIs using ASP.NET Core, applying
                Clean Architecture and Vertical Slice Architecture principles to
                ensure maintainable systems.
              </p>
              <p>
                I have a strong interest for UI/UX and I love blending modern
                aesthetics—like neo-brutalism and industrial UI—into my
                projects. In fact, I designed and developed this entire
                portfolio website myself from scratch using Next.js and Tailwind
                CSS.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/** Contact */}
      <section
        id="contact"
        className="scroll-mt-20 min-h-[calc(100vh-80px)] flex flex-col justify-center p-4 py-8 md:py-10"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="mb-8 md:mb-10 border-b-4 border-black pb-4 flex justify-between items-end">
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Contact
            </h2>
            <div className="font-jetbrains text-[10px] sm:text-xs font-bold bg-black text-white px-2 py-1 sm:px-3 sm:py-1.5 shadow-[2px_2px_0px_var(--color-industrial-yellow)] sm:shadow-[3px_3px_0px_var(--color-industrial-yellow)]">
              PING ME
            </div>
          </div>
          <div className="bg-white border-4 border-black shadow-[4px_4px_0px_black] md:shadow-[6px_6px_0px_black] p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col items-center text-center gap-6 sm:gap-8">
            <h3 className="font-oswald text-2xl sm:text-3xl md:text-4xl font-bold text-black relative z-10">
              Let&apos;s work together.
            </h3>
            <a
              href="mailto:mehmtcankilinc@gmail.com"
              className="relative z-10 w-full sm:w-auto inline-block bg-industrial-yellow text-black font-jetbrains border-4 border-black transition-colors shadow-[4px_4px_0px_black] hover:bg-black hover:text-white hover:shadow-[2px_2px_0px_black] active:translate-y-1 active:translate-x-1 active:shadow-[1px_1px_0px_black] text-[min(3.8vw,1rem)] sm:text-base md:text-xl py-3 px-2 sm:px-8 md:px-10 break-all sm:break-normal whitespace-nowrap sm:whitespace-normal"
            >
              mehmtcankilinc@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
