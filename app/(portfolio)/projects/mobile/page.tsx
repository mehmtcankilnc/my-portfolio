"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const mobileProjects = [
  {
    id: "PRJ-01",
    sectionId: "cvcreator",
    title: "CvCreator",
    description:
      "CvCreator is a hobby project that I wanted to develop since university. The app allows users to create and download their own resumes and cover letters without logging in. Also, users can save their files by signing in. In addition, the app supports both Turkish and English, as well as dark and light themes. The app is currently published on Play Store.",
    tech: ["TypeScript", "React Native", "Redux Toolkit", "i18n"],
    storeLink:
      "https://play.google.com/store/apps/details?id=com.mehmtcankilinc.cvcreator",
    codeLink: "https://github.com/mehmtcankilnc/CvCreator",
    images: [
      "/cvCreator1.jpeg",
      "/cvCreator2.jpeg",
      "/cvCreator3.jpeg",
      "/cvCreator4.jpeg",
      "/cvCreator5.jpeg",
    ],
  },
  {
    id: "PRJ-02",
    sectionId: "tutorsudoku",
    title: "Tutor Sudoku",
    description:
      "Tutor Sudoku is an educational mobile app that helps users to learn new sudoku solving techniques. Also, the users can scan a sudokuboard when they get stuck on paper and take hints. The app features full localization (Turkish/English) and supports dark/light modes. The app is currently published on Play Store.",
    tech: ["TypeScript", "React Native", "Redux Toolkit", "i18n"],
    storeLink: "https://play.google.com/store/apps/details?id=com.tutorsudoku",
    codeLink: "https://github.com/mehmtcankilnc/TutorSudoku",
    images: [
      "/tutorSudoku1.jpg",
      "/tutorSudoku2.jpg",
      "/tutorSudoku3.jpg",
      "/tutorSudoku4.jpg",
      "/tutorSudoku5.jpg",
    ],
  },
  {
    id: "PRJ-03",
    sectionId: "foodlens",
    title: "FoodLens",
    description:
      "FoodLens is a graduation thesis project that I have developed together with my teammate. The app helps users track their daily calorie intake and analyze the ingredients of packaged foods simply by scanning the product’s barcode. In addition, FoodLens enables users to create personalized diet plans by setting their nutritional goals.",
    tech: ["React Native", "Expo", "Firebase"],
    storeLink: "#",
    codeLink: "https://github.com/mehmtcankilnc/FoodLens",
    images: ["/foodLens.png"],
  },
  {
    id: "PRJ-05",
    sectionId: "stalker",
    title: "Stalker",
    description:
      "Stalker is a hobby project that I have developed together with my friend. The app helps users track their daily moods by selecting custom-designed emojis that represent specific feelings. In addition, users can track their habits, create new ones, and monitor their progress over time.",
    tech: ["React Native", "Expo", "Redux Toolkit", "Figma"],
    storeLink: "#",
    codeLink: "https://github.com/fnurIskal/stalker",
    images: ["/stalker.png"],
  },
];

const ImageCarousel = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="relative w-56 sm:w-64 md:w-72 aspect-9/19 bg-black border-4 border-black overflow-hidden flex items-center justify-center shadow-[4px_4px_0px_black] md:shadow-[6px_6px_0px_black] shrink-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 md:h-5 bg-black z-20 border-b-4 border-x-4 border-black rounded-b-xl md:rounded-b-2xl"></div>
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`${title} screenshot ${idx + 1}`}
          fill
          className={`object-cover transition-opacity duration-500 ${idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        />
      ))}
    </div>
  );
};

export default function MobileProjectsPage() {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.scrollY - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }, 100);
        }
      }
    };
    const timeoutId = setTimeout(handleHashScroll, 300);
    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const initTimer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              const currentHash = window.location.hash;
              if (currentHash !== `#${id}`) {
                window.history.replaceState(null, "", `#${id}`);
              }
            }
          });
        },
        { threshold: 0.3 },
      );
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));
    }, 500);
    return () => {
      clearTimeout(initTimer);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col">
      <div className="w-full max-w-6xl mx-auto p-4 py-8 md:p-10 flex flex-col gap-12 md:gap-16">
        <div className="border-l-4 md:border-l-8 border-industrial-yellow pl-4 md:pl-6 py-2">
          <h1 className="font-oswald text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-black leading-none drop-shadow-[2px_2px_0px_black] md:drop-shadow-[3px_3px_0px_black]">
            Mobile Projects
          </h1>
          <p className="font-jetbrains text-sm sm:text-base text-gray-700 mt-4 max-w-2xl font-bold">
            A collection of my cross-platform mobile applications built for high
            performance and seamless user experiences.
          </p>
        </div>
        <div className="flex flex-col gap-16 md:gap-24">
          {mobileProjects.map((project, index) => (
            <section
              id={project.sectionId}
              key={project.id}
              className={`scroll-mt-24 flex flex-col md:flex-row gap-10 md:gap-16 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="relative group shrink-0">
                <ImageCarousel images={project.images} title={project.title} />
                <div className="absolute -top-3 -left-3 w-8 h-8 md:w-12 md:h-12 border-t-4 border-l-4 border-industrial-yellow -z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 md:w-12 md:h-12 border-b-4 border-r-4 border-industrial-yellow -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
              </div>
              <div className="flex-1 flex flex-col bg-white border-4 border-black p-5 sm:p-8 md:p-10 shadow-[4px_4px_0px_black] md:shadow-[8px_8px_0px_black] relative">
                <div className="absolute top-0 right-0 bg-black text-white font-jetbrains text-[9px] sm:text-[10px] font-bold px-2 py-1 uppercase tracking-widest border-b-4 border-l-4 border-black">
                  {project.id}
                </div>
                <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
                  {project.title}
                </h2>
                <p className="font-jetbrains text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8 flex-1">
                  {project.description}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-jetbrains text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="border-2 border-gray-300 bg-gray-50 px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-jetbrains font-bold text-gray-600 uppercase tracking-wider hover:border-black hover:text-black hover:bg-industrial-yellow transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 border-t-4 border-black border-dashed">
                    {project.storeLink !== "#" && (
                      <a
                        href={project.storeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-black text-white font-jetbrains text-xs sm:text-sm font-bold py-3 px-6 border-4 border-black hover:bg-industrial-yellow hover:text-black transition-colors shadow-[4px_4px_0px_var(--color-industrial-yellow)] active:translate-y-1 active:translate-x-1 active:shadow-none"
                      >
                        STORE
                      </a>
                    )}
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-black font-jetbrains text-xs sm:text-sm font-bold py-3 px-6 border-4 border-black hover:bg-gray-100 transition-colors shadow-[4px_4px_0px_black] active:translate-y-1 active:translate-x-1 active:shadow-none"
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
