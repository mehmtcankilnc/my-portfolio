import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { FileDown } from "lucide-react";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehmetcan Kılınç | Portfolio",
  description: "Full-Stack Mobile Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grid-pattern text-black">
        <Header />
        <a
          href="/MehmetcanKilinc_CV.pdf"
          download
          className="fixed top-24 right-4 md:right-8 z-40 flex items-center gap-3 bg-industrial-yellow text-black font-jetbrains text-sm font-bold py-3 px-5 border-4 border-black shadow-[6px_6px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 hover:translate-x-1 transition-all group overflow-hidden"
        >
          <div className="relative">
            <FileDown
              size={22}
              strokeWidth={3}
              className="group-hover:animate-bounce"
            />
          </div>
          <span className="hidden sm:inline tracking-tighter uppercase">
            Resume.pdf
          </span>
          <div className="absolute top-0 left-0 w-2 h-2 bg-black -translate-x-1 -translate-y-1 rotate-45 opacity-20"></div>
        </a>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </body>
    </html>
  );
}
