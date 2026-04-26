import Link from "next/link";
import { FileQuestion, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4 py-8 md:py-10">
      <div className="w-full max-w-2xl mx-auto border-4 border-black shadow-[4px_4px_0px_black] md:shadow-[8px_8px_0px_black] p-6 sm:p-8 md:p-12 text-center relative overflow-hidden flex flex-col items-center gap-6 sm:gap-8 bg-white">
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_10px)] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-2.5 sm:h-3 bg-[repeating-linear-gradient(45deg,#FF4500,#FF4500_10px,transparent_10px,transparent_20px)] border-t-4 border-black"></div>
        <div className="relative z-10 flex gap-3 sm:gap-4 mt-2 sm:mt-4">
          <div className="bg-industrial-yellow p-3 sm:p-4 border-4 border-black shadow-[3px_3px_0px_black] sm:shadow-[4px_4px_0px_black] animate-pulse">
            <FileQuestion
              strokeWidth={2.5}
              className="text-black w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
          <div className="bg-black p-3 sm:p-4 border-4 border-black shadow-[3px_3px_0px_var(--color-industrial-yellow)] sm:shadow-[4px_4px_0px_var(--color-industrial-yellow)]">
            <Terminal
              strokeWidth={2.5}
              className="text-white w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="font-oswald text-6xl sm:text-7xl md:text-8xl font-bold uppercase tracking-tight text-black leading-none drop-shadow-[3px_3px_0px_var(--color-industrial-yellow)] sm:drop-shadow-[4px_4px_0px_var(--color-industrial-yellow)]">
            404
          </h1>
          <h2 className="font-oswald text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-gray-800 mt-2 sm:mt-4">
            Page Not Found
          </h2>
          <div className="inline-block bg-black text-white font-jetbrains text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 shadow-[2px_2px_0px_var(--color-industrial-yellow)] sm:shadow-[3px_3px_0px_var(--color-industrial-yellow)] tracking-widest mt-3 sm:mt-4">
            ERROR: UNKNOWN_DIRECTORY
          </div>
        </div>
        <div className="relative z-10 w-full bg-gray-100 border-l-4 sm:border-l-8 border-black p-4 sm:p-6 text-left">
          <p className="font-jetbrains text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed font-bold wrap-break-word">
            <span className="text-industrial-yellow drop-shadow-[1px_1px_0px_black] mr-1.5 sm:mr-2">
              {">"}
            </span>
            INITIATING SEARCH PROTOCOL...
            <br />
            <span className="text-industrial-yellow drop-shadow-[1px_1px_0px_black] mr-1.5 sm:mr-2">
              {">"}
            </span>
            TARGET PATH CORRUPTED OR MISSING.
            <br />
            <span className="text-industrial-yellow drop-shadow-[1px_1px_0px_black] mr-1.5 sm:mr-2">
              {">"}
            </span>
            RECOMMENDATION: EVACUATE TO BASE.
          </p>
        </div>
        <Link
          href="/"
          className="relative z-10 inline-block bg-white text-black font-jetbrains text-sm sm:text-base font-bold py-3 px-6 sm:py-4 sm:px-10 border-4 border-black hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_black] sm:shadow-[6px_6px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 hover:translate-x-1 active:shadow-[1px_1px_0px_black] active:translate-y-1.5 active:translate-x-1.5 mt-2 sm:mt-4 w-full sm:w-auto"
        >
          RETURN BASE
        </Link>
      </div>
    </main>
  );
}
