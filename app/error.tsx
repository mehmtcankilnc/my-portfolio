"use client";

import { useEffect } from "react";
import Link from "next/link";
import SmoothIcon from "smooth-icon";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="w-full min-h-[calc(100vh-80px)] bg-gray-50 flex flex-col items-center justify-center p-4 py-8 md:py-10">
      <div className="w-full max-w-xl mx-auto bg-white border-4 border-black shadow-[4px_4px_0px_black] md:shadow-[8px_8px_0px_black] p-6 sm:p-8 md:p-12 flex flex-col items-center text-center gap-6 sm:gap-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-industrial-yellow border-b-4 border-black"></div>
        <div className="bg-white p-3 sm:p-4 border-4 border-black shadow-[3px_3px_0px_var(--color-industrial-yellow)] sm:shadow-[4px_4px_0px_var(--color-industrial-yellow)] mt-2">
          <SmoothIcon name="warning-outlined" color="black" size={48} />
        </div>
        <div className="space-y-3 sm:space-y-4">
          <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-black">
            System Error
          </h1>
          <p className="font-jetbrains text-sm sm:text-base text-gray-700 font-bold max-w-md mx-auto">
            An unexpected error occurred while processing your request.
          </p>
        </div>
        {error.digest && (
          <div className="inline-block bg-gray-100 text-gray-500 font-jetbrains text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-black border-dashed break-all">
            ERR_CODE: {error.digest}
          </div>
        )}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full">
          <button
            onClick={reset}
            className="flex w-full sm:w-auto items-center justify-center gap-2 bg-black text-white font-jetbrains text-sm font-bold py-3 px-6 border-4 border-black hover:bg-industrial-yellow hover:text-black transition-colors shadow-[4px_4px_0px_var(--color-industrial-yellow)] active:shadow-[1px_1px_0px_var(--color-industrial-yellow)] active:translate-y-1 active:translate-x-1 hover:translate-y-0.5 hover:translate-x-0.5"
          >
            <SmoothIcon name="refresh" color="white" size={24} />
            TRY AGAIN
          </button>
          <Link
            href="/"
            className="flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-black font-jetbrains text-sm font-bold py-3 px-6 border-4 border-black hover:bg-gray-100 transition-colors shadow-[4px_4px_0px_black] active:shadow-[1px_1px_0px_black] active:translate-y-1 active:translate-x-1 hover:translate-y-0.5 hover:translate-x-0.5"
          >
            <SmoothIcon name="home-outlined" color="black" size={24} />
            HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
