"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { MessageSquare, X, TerminalSquare, RotateCcw } from "lucide-react";
import { botScript, ScriptStep } from "@/utils/botScript";

type MessageType = { type: "bot" | "user"; message: string };

const Chatbot = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [history, setHistory] = useState<MessageType[]>(() => {
    const startStep = botScript["start"];
    return startStep ? [{ type: "bot", message: startStep.message }] : [];
  });
  const [currentStep, setCurrentStep] = useState<string>("start");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isOpen, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleOptionClick = (nextId: string, label: string, url?: string) => {
    setHistory((prev) => [...prev, { type: "user", message: label }]);
    setIsTyping(true);
    if (url) {
      if (url.startsWith("/#")) {
        router.replace(url, { scroll: false });
      } else {
        router.push(url);
      }
    }
    const nextStep = botScript[nextId];
    if (nextStep) {
      setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          { type: "bot", message: nextStep.message },
        ]);
        setCurrentStep(nextId);
        setIsTyping(false);
      }, 800);
    }
  };

  const handleReset = () => {
    const startStep = botScript["start"];
    setHistory(startStep ? [{ type: "bot", message: startStep.message }] : []);
    setCurrentStep("start");
    setIsTyping(false);
  };

  const renderMessage = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-black">
            {part.slice(2, -2)}
          </strong>
        );
      }
      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        return (
          <a
            key={index}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 underline-offset-2 hover:bg-black hover:text-white transition-colors"
          >
            {linkMatch[1]}
          </a>
        );
      }
      return part;
    });
  };

  const currentStepData: ScriptStep | undefined = botScript[currentStep];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-9999 flex flex-col items-end font-jetbrains">
      {!isOpen && showNotification && (
        <div className="mb-3 sm:mb-4 mr-0 sm:mr-2 bg-white border-4 border-black p-2.5 sm:p-3 shadow-[4px_4px_0px_black] relative animate-bounce max-w-50 sm:max-w-none">
          <p className="text-[10px] sm:text-xs font-bold text-black tracking-widest uppercase">
            {">"} INCOMING MSG
          </p>
          <button
            onClick={() => setShowNotification(false)}
            className="absolute -top-3 -right-3 bg-industrial-yellow border-2 border-black hover:bg-black hover:text-white active:scale-90 transition-all p-1"
          >
            <X size={14} strokeWidth={3} />
          </button>
        </div>
      )}
      {isOpen && (
        <div className="bg-white w-[calc(100vw-2rem)] sm:w-90 md:w-100 h-[65vh] sm:h-125 max-h-[80vh] border-4 border-black shadow-[4px_4px_0px_black] sm:shadow-[8px_8px_0px_black] flex flex-col mb-3 sm:mb-4 relative overflow-hidden pointer-events-auto">
          <div className="bg-black text-white p-3 sm:p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <TerminalSquare className="text-industrial-yellow w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-oswald text-lg sm:text-xl font-bold uppercase tracking-widest">
                Term-Assist
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-2">
              <button
                onClick={handleReset}
                className="hover:text-industrial-yellow active:text-industrial-yellow active:scale-90 transition-all p-1"
                title="Reboot Terminal"
              >
                <RotateCcw size={18} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-industrial-yellow active:text-industrial-yellow active:scale-90 transition-all p-1"
              >
                <X size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50 space-y-3 sm:space-y-4">
            {history.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[85%] p-2.5 sm:p-3 text-[11px] sm:text-xs md:text-sm font-bold border-2 border-black shadow-[2px_2px_0px_black] ${msg.type === "user" ? "bg-industrial-yellow text-black" : "bg-white text-gray-800"}`}
                >
                  {msg.type === "bot" && (
                    <span className="text-gray-400 mr-1.5 sm:mr-2">{">"}</span>
                  )}
                  {renderMessage(msg.message)}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-2.5 sm:p-3 border-2 border-black shadow-[2px_2px_0px_black]">
                  <div className="flex gap-1.5 items-center">
                    <span className="text-gray-400 text-[11px] sm:text-xs font-bold mr-1">
                      {">"}
                    </span>
                    <div className="w-2 h-3 sm:h-4 bg-black animate-pulse"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 sm:p-4 bg-white border-t-4 border-black shrink-0">
            <div className="flex flex-wrap gap-2 justify-end">
              {currentStepData?.options?.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    handleOptionClick(opt.next, opt.label, opt.url)
                  }
                  disabled={isTyping}
                  className={`text-[10px] sm:text-xs font-bold px-2.5 py-1.5 sm:px-3 sm:py-2 border-2 border-black transition-all ${isTyping ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-black text-white shadow-[2px_2px_0px_var(--color-industrial-yellow)] sm:shadow-[3px_3px_0px_var(--color-industrial-yellow)] hover:bg-industrial-yellow hover:text-black active:translate-y-1 active:translate-x-1 active:shadow-none hover:shadow-[1px_1px_0px_black] hover:translate-y-0.5 hover:translate-x-0.5"}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        className="pointer-events-auto group relative h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center focus:outline-none cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setShowNotification(false);
        }}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 pointer-events-none"></div>
        <div
          className={`absolute inset-0 flex items-center justify-center border-4 border-black transition-all group-active:translate-x-0.5 group-active:translate-y-0.5 pointer-events-none ${isOpen ? "bg-black text-white" : "bg-industrial-yellow text-black"}`}
        >
          {isOpen ? (
            <X size={28} strokeWidth={2.5} />
          ) : (
            <MessageSquare size={28} strokeWidth={2.5} />
          )}
        </div>
      </button>
    </div>
  );
};

export default Chatbot;
