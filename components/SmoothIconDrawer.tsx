import { useState } from "react";
import SmoothIcon from "smooth-icon";

export default function IconDrawer({
  selectedIcon,
  onClose,
}: {
  selectedIcon: string | null;
  onClose: () => void;
}) {
  const [size, setSize] = useState(48);
  const [color, setColor] = useState("#000000");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = `<SmoothIcon name="${selectedIcon}" size={${size}} color="${color}" />`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {selectedIcon && (
        <div
          className="fixed inset-0 bg-[#58330C]/20 backdrop-blur-sm z-60 transition-opacity"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-100 bg-[#fffdf5] shadow-[-10px_0_30px_-10px_rgba(88,51,12,0.1)] z-70 transform transition-transform duration-300 ease-in-out flex flex-col font-rubik
        ${selectedIcon ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#58330C]/10">
          <h3 className="text-2xl font-bold font-carterone text-[#58330C]">
            Customize
          </h3>
          <button
            onClick={onClose}
            className="p-2 bg-[#58330C]/5 hover:bg-[#EF7C00] text-[#58330C] hover:text-white rounded-xl transition-colors focus:outline-none"
          >
            <SmoothIcon name="close" size={32} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center p-10 bg-white rounded-3xl border border-[#58330C]/10 shadow-sm gap-6 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(#58330C 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            ></div>
            <div className="relative z-10 flex items-center justify-center min-h-30">
              {selectedIcon && (
                <SmoothIcon name={selectedIcon} size={size} color={color} />
              )}
            </div>
            <span className="relative z-10 text-[#58330C]/60 font-mono text-sm bg-[#f8f5f0] px-3 py-1 rounded-lg border border-[#58330C]/5">
              {selectedIcon}
            </span>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-[#58330C] uppercase tracking-wider">
                  Size
                </label>
                <div className="flex items-center bg-[#EF7C00]/10 px-2 py-0.5 rounded-md focus-within:ring-2 focus-within:ring-[#EF7C00]/40 transition-all">
                  <input
                    type="number"
                    value={size || ""}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val > 256) {
                        setSize(256);
                      } else {
                        setSize(val);
                      }
                    }}
                    onBlur={() => {
                      if (size < 12) {
                        setSize(12);
                      }
                    }}
                    className="w-10 text-right bg-transparent text-[#EF7C00] font-mono font-bold focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="text-sm font-mono font-bold text-[#EF7C00] ml-0.5">
                    px
                  </span>
                </div>
              </div>
              <input
                type="range"
                min="12"
                max="256"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full h-2 bg-[#58330C]/10 rounded-lg appearance-none cursor-pointer accent-[#EF7C00]"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-[#58330C] uppercase tracking-wider">
                Color
              </label>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#58330C]/10 shrink-0 shadow-sm cursor-pointer hover:scale-105 transition-transform">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="absolute -top-2 -left-2 w-16 h-16 cursor-pointer"
                  />
                </div>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#58330C]/10 text-[#58330C] font-mono text-base focus:outline-none focus:border-[#EF7C00] transition-colors uppercase"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-[#58330C]/10 bg-white">
          <button
            onClick={handleCopy}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2
              ${
                copied
                  ? "bg-[#4CAF50] text-white shadow-lg"
                  : "bg-[#EF7C00] text-white hover:bg-[#d96e00] hover:-translate-y-1 shadow-[0_8px_20px_-4px_rgba(239,124,0,0.4)]"
              }
            `}
          >
            {copied ? (
              <>
                <SmoothIcon name="check" size={32} />
                Copied to Clipboard!
              </>
            ) : (
              <>
                <SmoothIcon name="copy2-outlined" size={32} />
                Copy Component
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
