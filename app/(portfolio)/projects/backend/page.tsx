"use client";
import { useEffect } from "react";

const backendProjects = [
  {
    id: "PRJ-01",
    sectionId: "cvcreatorapi",
    title: "CvCreator API",
    description:
      "I developed this backend system using ASP.NET Core based on Clean Architecture. Users can log in via Google or use the app as guests to create resumes and cover letters. I utilized Playwright for generating PDFs and PostgreSQL as the database. The project implements best practices like rate limiting, global error handling, and JWT authentication. The API is fully functional and hosted on my own Linux VPS.",
    tech: [
      "ASP.NET Core",
      "Clean Architecture",
      "PostgreSQL",
      "Playwright",
      "Docker",
    ],
    codeLink: "https://github.com/mehmtcankilnc/CvCreatorBackend",
  },
  {
    id: "PRJ-02",
    sectionId: "chitchatapi",
    title: "Chit Chat API",
    description:
      "ChitChat is a real-time messaging system developed with ASP.NET Core. Users can register, log in, and send instant messages to each other. I used SignalR for real-time communication and implemented JWT Bearer Authentication for secure identity management. The API is developed with AspNetCoreRateLimit for rate limiting and a custom exception handling middleware for centralized error management. The solution also follows a lightweight Clean Architecture approach to ensure maintainability and separation of concerns. The application is containerized with Docker, uses Azure SQL as the database, and has been deployed on Microsoft Azure.",
    tech: [
      "ASP.NET Core",
      "Clean Architecture",
      "Docker",
      "SignalR",
      "JWT Bearer",
    ],
    codeLink: "https://github.com/mehmtcankilnc/ChitChat",
  },
  {
    id: "PRJ-03",
    sectionId: "lexiboxapi",
    title: "LexiBox API",
    description:
      "I developed an API for an educational app which is called LexiBox. Users can submit new words in any language to learn, take a quiz from their saved words. I built the API according to Vertical SliceArchitecture using ASP.NET Core. Also, I used SeriLog for logging the requests and errors to the files. I implemented global exception handling, and mapping endpoints middlewares. The application is containerized with Docker, uses PostgreSQL as the database.",
    tech: [
      "ASP.NET Core",
      "Vertical Slice Architecture",
      "Docker",
      "SeriLog",
      "PostgreSQL",
    ],
    codeLink: "https://github.com/mehmtcankilnc/LexiBox.API",
  },
];

export default function BackendProjectsPage() {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    };
    const timeoutId = setTimeout(handleHashScroll, 200);
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
    }, 300);
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
            Backend Projects
          </h1>
          <p className="font-jetbrains text-sm sm:text-base text-gray-700 mt-4 max-w-2xl font-bold">
            Robust, scalable, and secure API architectures built with ASP.NET
            Core, focusing on clean code and real-time capabilities.
          </p>
        </div>
        <div className="flex flex-col gap-12 md:gap-16">
          {backendProjects.map((project) => (
            <section
              id={project.sectionId}
              key={project.id}
              className="scroll-mt-24 flex flex-col items-center w-full"
            >
              <div className="flex-1 flex flex-col bg-white border-4 border-black p-5 sm:p-8 md:p-10 shadow-[4px_4px_0px_black] md:shadow-[8px_8px_0px_black] relative w-full">
                <div className="absolute top-0 right-0 bg-black text-white font-jetbrains text-[9px] sm:text-[10px] font-bold px-2 py-1 uppercase tracking-widest border-b-4 border-l-4 border-black">
                  {project.id}
                </div>
                <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 pr-12 sm:pr-16">
                  {project.title}
                </h2>
                <p className="font-jetbrains text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  {project.description}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-jetbrains text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Architecture & Tech
                    </h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="border-2 border-gray-300 bg-gray-50 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-jetbrains font-bold text-gray-600 uppercase tracking-wider hover:border-black hover:text-black hover:bg-industrial-yellow transition-colors cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex pt-4 border-t-4 border-black border-dashed">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white font-jetbrains text-xs sm:text-sm font-bold py-3 px-6 sm:px-8 border-4 border-black hover:bg-industrial-yellow hover:text-black transition-colors shadow-[4px_4px_0px_var(--color-industrial-yellow)] active:translate-y-1 active:translate-x-1 active:shadow-none"
                    >
                      VIEW SOURCE CODE
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
