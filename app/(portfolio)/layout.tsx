import Chatbot from "@/components/ChatBot";
import PortfolioHeader from "@/components/PortfolioHeader";
import { Oswald, JetBrains_Mono } from "next/font/google";
import SmoothIcon from "smooth-icon";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${oswald.variable} ${jetBrainsMono.variable} min-h-full flex flex-col bg-grid-pattern text-black`}
    >
      <PortfolioHeader />
      <a
        href="/MehmetcanKilinc_CV.pdf"
        download
        className="fixed top-24 right-4 md:right-8 z-40 flex items-center gap-3 bg-industrial-yellow text-black font-jetbrains text-sm font-bold py-3 px-5 border-4 border-black shadow-[6px_6px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 hover:translate-x-1 transition-all group overflow-hidden"
      >
        <div className="relative">
          <SmoothIcon name="file-download-outlined" color="black" size={24} />
        </div>
        <span className="hidden sm:inline tracking-tighter uppercase">
          Resume.pdf
        </span>
        <div className="absolute top-0 left-0 w-2 h-2 bg-black -translate-x-1 -translate-y-1 rotate-45 opacity-20"></div>
      </a>
      <main className="flex-1 p-4 md:p-8 relative z-0">{children}</main>
      <div className="relative z-9999">
        <Chatbot />
      </div>
    </div>
  );
}
