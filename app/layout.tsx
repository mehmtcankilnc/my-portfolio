import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Mehmetcan Kılınç",
    default: "Mehmetcan Kılınç | Full-Stack Mobile Developer",
  },
  description:
    "I'm Mehmetcan, a Full-Stack Mobile & Backend Developer based in Türkiye. Discover my React Native and ASP.NET Core projects.",
  keywords: [
    "Mehmetcan Kılınç",
    "Full Stack Developer",
    "React Native Developer",
    "ASP.NET Core",
    "Software Engineer Türkiye",
  ],
  authors: [{ name: "Mehmetcan Kılınç" }],
  creator: "Mehmetcan Kılınç",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mehmtcankilinc.com",
    title: "Mehmetcan Kılınç | Portfolio",
    description: "Full-Stack Mobile & Backend Developer based in Türkiye.",
    siteName: "Mehmetcan Kılınç Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col text-black">{children}</body>
    </html>
  );
}
