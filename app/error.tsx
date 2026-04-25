"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

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
    <main className="w-full min-h-[calc(100vh-80px)] bg-gray-50 flex flex-col items-center justify-center p-4 py-10">
      <div className="w-full max-w-xl mx-auto bg-white border-4 border-black shadow-[8px_8px_0px_black] p-8 md:p-12 flex flex-col items-center text-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-industrial-yellow border-b-4 border-black"></div>
        <div className="bg-white p-4 border-4 border-black shadow-[4px_4px_0px_var(--color-industrial-yellow)] mt-2">
          <AlertTriangle size={48} strokeWidth={2.5} className="text-black" />
        </div>
        <div className="space-y-4">
          <h1 className="font-oswald text-5xl md:text-6xl font-bold uppercase tracking-tight text-black">
            System Error
          </h1>
          <p className="font-jetbrains text-base text-gray-700 font-bold max-w-md mx-auto">
            An unexpected error occurred while processing your request.
          </p>
        </div>
        {error.digest && (
          <div className="inline-block bg-gray-100 text-gray-500 font-jetbrains text-xs font-bold px-4 py-2 border-2 border-black border-dashed">
            ERR_CODE: {error.digest}
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-4 pt-4 w-full">
          <button
            onClick={reset}
            className="flex items-center gap-2 bg-black text-white font-jetbrains text-sm font-bold py-3 px-6 border-4 border-black hover:bg-industrial-yellow hover:text-black transition-colors shadow-[4px_4px_0px_var(--color-industrial-yellow)] hover:shadow-[1px_1px_0px_black] hover:translate-y-0.75 hover:translate-x-0.75"
          >
            <RotateCcw size={18} />
            TRY AGAIN
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 bg-white text-black font-jetbrains text-sm font-bold py-3 px-6 border-4 border-black hover:bg-gray-100 transition-colors shadow-[4px_4px_0px_black] hover:shadow-[1px_1px_0px_black] hover:translate-y-0.75 hover:translate-x-0.75"
          >
            <Home size={18} />
            HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
