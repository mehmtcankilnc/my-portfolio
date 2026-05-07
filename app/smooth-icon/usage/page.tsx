"use client";

import React, { useState } from "react";
import SmoothIcon from "smooth-icon";

export default function UsagePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install smooth-icon");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fffdf5] text-[#58330C] pb-20">
      <section className="flex flex-col pt-16 items-center gap-5 px-6">
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold font-carterone text-[#58330C] tracking-wide">
            One Library
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold font-carterone text-[#EF7C00]">
            Everywhere Smooth
          </h2>
        </div>
        <p className="text-lg md:text-xl font-normal font-rubik text-center max-w-2xl text-[#58330C]/80 leading-relaxed mt-2">
          Designed for developers, optimized for flawless performance. Integrate
          seamlessly across web and native platforms without changing your
          workflow.
        </p>
      </section>
      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-20 font-rubik">
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#EF7C00] flex items-center justify-center text-white font-bold font-sans">
              1
            </div>
            <h2 className="text-3xl font-bold font-carterone">Installation</h2>
          </div>
          <p className="text-lg mb-6 text-[#58330C]/80">
            Run the following command in your terminal to add it to your
            project:
          </p>
          <div className="relative mt-2">
            <div className="absolute -top-3 left-6 bg-[#EF7C00] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm z-10">
              Terminal
            </div>
            <div className="bg-[#58330C] p-2 pl-6 rounded-2xl shadow-[0_8px_30px_-4px_rgba(88,51,12,0.2)] border-4 border-[#EF7C00]/20 flex items-center justify-between gap-4">
              <code className="text-[#FFFDF5] font-mono text-lg overflow-x-auto whitespace-nowrap">
                npm install smooth-icon
              </code>
              <button
                onClick={handleCopy}
                className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFFDF5]/10 hover:bg-[#EF7C00] text-[#FFFDF5]/80 hover:text-white transition-all focus:outline-none"
                aria-label="Copy command"
                title="Copy to clipboard"
              >
                {copied ? (
                  <SmoothIcon name="check" size={32} />
                ) : (
                  <SmoothIcon name="copy2-outlined" size={32} />
                )}
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#EF7C00] flex items-center justify-center text-white font-bold font-sans">
              2
            </div>
            <h2 className="text-3xl font-bold font-carterone">
              Universal Support
            </h2>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-4xl border border-[#58330C]/5 shadow-[0_4px_20px_-4px_rgba(88,51,12,0.05)]">
            <p className="text-lg mb-8 text-[#58330C]/80 leading-relaxed">
              The greatest strength of Smooth Icon is its consistency. Whether
              it&apos;s a{" "}
              <strong className="font-bold text-[#58330C]">React (Web)</strong>{" "}
              or{" "}
              <strong className="font-bold text-[#58330C]">React Native</strong>{" "}
              project, you can use your icons with the exact same import and
              syntax. No need to refactor your code when switching platforms.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#EF7C00]">
                  React Web
                </span>
                <pre className="bg-[#f8f5f0] p-5 rounded-xl text-sm font-mono border border-[#58330C]/10 text-[#58330C]">
                  {`<SmoothIcon \n  name="heart" \n  size={24} \n/>`}
                </pre>
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#EF7C00]">
                  React Native
                </span>
                <pre className="bg-[#f8f5f0] p-5 rounded-xl text-sm font-mono border border-[#58330C]/10 text-[#58330C]">
                  {`<SmoothIcon \n  name="heart" \n  size={24} \n/>`}
                </pre>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#EF7C00] flex items-center justify-center text-white font-bold font-sans">
              3
            </div>
            <h2 className="text-3xl font-bold font-carterone">Core Props</h2>
          </div>
          <div className="grid gap-8">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 pb-8 border-b border-[#58330C]/10">
              <code className="text-xl font-bold text-[#EF7C00] min-w-25 font-mono">
                name
              </code>
              <div>
                <p className="text-lg font-medium mb-1 text-[#58330C]">
                  Icon Identifier
                </p>
                <p className="text-[#58330C]/80">
                  Specifies the exact name of the icon you want to display.
                  e.g.,{" "}
                  <code className="bg-[#EF7C00]/10 px-1.5 py-0.5 rounded text-[#58330C] font-mono text-sm">
                    &quot;user-outlined&quot;
                  </code>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 pb-8 border-b border-[#58330C]/10">
              <code className="text-xl font-bold text-[#EF7C00] min-w-25 font-mono">
                size
              </code>
              <div>
                <p className="text-lg font-medium mb-1 text-[#58330C]">
                  Dimension Control
                </p>
                <p className="text-[#58330C]/80">
                  Sets the width and height of the icon in pixels. Accepts a
                  numeric value (Default: 24).
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <code className="text-xl font-bold text-[#EF7C00] min-w-25 font-mono">
                color
              </code>
              <div>
                <p className="text-lg font-medium mb-1 text-[#58330C]">
                  Color & Flexibility
                </p>
                <p className="text-[#58330C]/80 leading-relaxed">
                  Accepts any valid CSS color value (Hex, RGB, HSL). <br />
                  <span className="block mt-3 p-4 bg-[#EF7C00]/5 border-l-4 border-[#EF7C00] rounded-r-xl">
                    <strong className="text-[#EF7C00]">Pro Tip:</strong> Use the{" "}
                    <code className="text-[#58330C] font-bold font-mono">
                      currentColor
                    </code>{" "}
                    value to make the icon automatically inherit the text color
                    of its parent element.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
