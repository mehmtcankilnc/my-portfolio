import { Metadata } from "next";
import SmoothIconHeader from "@/components/SmoothIconHeader";
import { Carter_One, Rubik } from "next/font/google";

const carterOne = Carter_One({
  variable: "--font-carterone",
  subsets: ["latin"],
  weight: "400",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smooth Icon Library",
  description:
    "Premium smooth custom icon library built for modern web and mobile applications.",
  keywords: ["icons", "premium", "ui design", "svg icons"],
  openGraph: {
    title: "Smooth Icon Library",
    description: "Discover my custom premium icon set.",
  },
};

export default function SmoothIconLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${carterOne.variable} ${rubik.variable} h-full flex-1 text-black bg-[#fffdf5]`}
    >
      <SmoothIconHeader />
      <div className="min-h-full flex flex-col max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  );
}
