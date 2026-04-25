import Link from "next/link";
import { FileQuestion, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4 py-10">
      <div className="w-full max-w-2xl mx-auto border-4 border-black shadow-[8px_8px_0px_black] p-8 md:p-12 text-center relative overflow-hidden flex flex-col items-center gap-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_10px)] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-3 bg-[repeating-linear-gradient(45deg,#FF4500,#FF4500_10px,transparent_10px,transparent_20px)] border-t-4 border-black"></div>
        <div className="relative z-10 flex gap-4 mt-4">
          <div className="bg-industrial-yellow p-4 border-4 border-black shadow-[4px_4px_0px_black] animate-pulse">
            <FileQuestion size={40} strokeWidth={2.5} className="text-black" />
          </div>
          <div className="bg-black p-4 border-4 border-black shadow-[4px_4px_0px_var(--color-industrial-yellow)]">
            <Terminal size={40} strokeWidth={2.5} className="text-white" />
          </div>
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="font-oswald text-7xl md:text-8xl font-bold uppercase tracking-tight text-black leading-none drop-shadow-[4px_4px_0px_var(--color-industrial-yellow)]">
            404
          </h1>
          <h2 className="font-oswald text-2xl md:text-3xl font-bold uppercase tracking-tight text-gray-800 mt-4">
            Page Not Found
          </h2>
          <div className="inline-block bg-black text-white font-jetbrains text-xs font-bold px-3 py-1.5 shadow-[3px_3px_0px_var(--color-industrial-yellow)] tracking-widest mt-4">
            ERROR: UNKNOWN_DIRECTORY
          </div>
        </div>
        <div className="relative z-10 w-full bg-gray-100 border-l-8 border-black p-6 text-left">
          <p className="font-jetbrains text-sm md:text-base text-gray-800 leading-relaxed font-bold">
            <span className="text-industrial-yellow drop-shadow-[1px_1px_0px_black] mr-2">
              {">"}
            </span>
            INITIATING SEARCH PROTOCOL...
            <br />
            <span className="text-industrial-yellow drop-shadow-[1px_1px_0px_black] mr-2">
              {">"}
            </span>
            TARGET PATH CORRUPTED OR MISSING.
            <br />
            <span className="text-industrial-yellow drop-shadow-[1px_1px_0px_black] mr-2">
              {">"}
            </span>
            RECOMMENDATION: EVACUATE TO BASE.
          </p>
        </div>
        <Link
          href="/"
          className="relative z-10 inline-block bg-white text-black font-jetbrains text-base font-bold py-4 px-10 border-4 border-black hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-0.5 hover:translate-x-0.5 mt-4"
        >
          RETURN BASE
        </Link>
      </div>
    </main>
  );
}
