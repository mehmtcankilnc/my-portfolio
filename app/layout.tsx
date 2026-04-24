import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </body>
    </html>
  );
}
