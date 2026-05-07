"use client";

import SmoothIconDrawer from "@/components/SmoothIconDrawer";
import { useState, useMemo } from "react";
import SmoothIcon, { iconTags, iconNames, IconName } from "smooth-icon";

export default function SmoothIconPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const filteredIcons = useMemo(() => {
    if (!searchQuery) return iconNames;

    const lowerCaseQuery = searchQuery.toLowerCase();

    return iconNames.filter((name) => {
      const matchesName = name.toLowerCase().includes(lowerCaseQuery);

      const tags = iconTags[name] || [];
      const matchesTag = tags.some((tag) =>
        tag.toLowerCase().includes(lowerCaseQuery),
      );

      return matchesName || matchesTag;
    });
  }, [searchQuery]);

  return (
    <div className="flex flex-col gap-y-10 min-h-screen bg-[#fffdf5] px-4 pb-24">
      <div className="flex flex-col pt-16 items-center gap-5">
        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#EF7C00]/10 border border-[#EF7C00]/20 rounded-full text-[#EF7C00] font-rubik text-sm font-medium shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF7C00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EF7C00]"></span>
          </span>
          460+ Premium Icons
        </div>
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold font-carterone text-[#58330C] tracking-wide">
            Self-Made & Smooth
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold font-carterone text-[#EF7C00]">
            The Premium Side of Open-Source
          </h2>
        </div>
        <p className="text-lg md:text-xl font-normal font-rubik text-center max-w-2xl text-[#58330C]/80 leading-relaxed mt-2">
          Crafted from scratch with an independent spirit. Meet the flawless,
          completely free icon library designed to give your projects the
          high-end touch they deserve.
        </p>
        <div className="font-rubik text-[#58330C]/70 text-base md:text-lg">
          Created by{" "}
          <a
            href="https://mehmtcankilinc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold italic underline underline-offset-4 decoration-[#EF7C00]/50 hover:decoration-[#EF7C00] hover:text-[#EF7C00] transition-colors"
          >
            Mehmetcan Kılınç
          </a>
        </div>
        <div className="relative w-full max-w-xl mt-8">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <SmoothIcon name="magnify-outlined" color="#BCAD9E" size={24} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search icons ..."
            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white border-2 border-[#58330C]/10 text-[#58330C] font-rubik text-lg placeholder:text-[#58330C]/40 focus:outline-none focus:border-[#EF7C00] focus:ring-4 focus:ring-[#EF7C00]/20 transition-all shadow-[0_4px_20px_-4px_rgba(88,51,12,0.1)]"
          />
        </div>
      </div>
      <div className="w-full max-w-350 mx-auto mt-10 px-4 md:px-8">
        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-3 md:gap-4">
            {filteredIcons.map((name, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIcon(name)}
                  className="relative group flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-[#58330C]/10 hover:border-[#EF7C00] hover:shadow-[0_8px_30px_-4px_rgba(239,124,0,0.2)] active:scale-95 transition-all duration-300"
                >
                  <div className="text-[#58330C] group-hover:text-[#EF7C00] group-hover:scale-110 transition-all duration-300">
                    <SmoothIcon name={name as IconName} size={28} />
                  </div>
                  <span className="absolute -top-12 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out bg-[#58330C] text-[#fffdf5] text-xs font-rubik font-bold px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-[0_4px_10px_rgba(88,51,12,0.3)] z-10">
                    {name}
                    <svg
                      className="absolute text-[#58330C] h-2 w-full left-0 top-full"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                      xmlSpace="preserve"
                    >
                      <polygon
                        className="fill-current"
                        points="0,0 127.5,127.5 255,0"
                      />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 opacity-60 gap-4">
            <SmoothIcon name="magnify-outlined" color="#BCAD9E" size={48} />
            <p className="font-rubik text-xl text-[#58330C]">
              No icons found for &quot;{searchQuery}&quot;
            </p>
          </div>
        )}
      </div>
      <SmoothIconDrawer
        selectedIcon={selectedIcon}
        onClose={() => setSelectedIcon(null)}
      />
    </div>
  );
}
