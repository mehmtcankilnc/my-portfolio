"use client";

import React, { useEffect, useState } from "react";
import SmoothIcon from "smooth-icon";

export default function ContributePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
        setHasError(false);
      }, 3000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isSubmitted]);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbdwklzz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setHasError(true);
      }
    } catch (error) {
      console.error("Form error:", error);
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdf5] text-[#58330C] pb-20">
      <section className="flex flex-col pt-16 items-center gap-5 px-6">
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold font-carterone text-[#58330C] tracking-wide">
            Help Us Grow
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold font-carterone text-[#EF7C00]">
            Shape the Future
          </h2>
        </div>
        <p className="text-lg md:text-xl font-normal font-rubik text-center max-w-2xl text-[#58330C]/80 leading-relaxed mt-2">
          Got an idea for a missing icon? Need a specific shape for your next
          project? Tell us the names, describe the concepts, or drop reference
          images. Your input helps expand the library!
        </p>
      </section>
      <div className="max-w-3xl mx-auto px-6 mt-16 font-rubik">
        <div className="bg-white p-8 md:p-12 rounded-4xl border border-[#58330C]/5 shadow-[0_4px_20px_-4px_rgba(88,51,12,0.05)]">
          <div className="mb-8">
            <h3 className="text-2xl font-bold font-carterone text-[#58330C]">
              Submit a Request
            </h3>
            <p className="text-[#58330C]/70 mt-1">
              Fill out the form below to suggest new icons or improvements.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-[#58330C] uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-2xl bg-[#f8f5f0] border-2 border-[#58330C]/10 text-[#58330C] placeholder:text-[#58330C]/40 focus:outline-none focus:border-[#EF7C00] focus:ring-4 focus:ring-[#EF7C00]/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-[#58330C] uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-2xl bg-[#f8f5f0] border-2 border-[#58330C]/10 text-[#58330C] placeholder:text-[#58330C]/40 focus:outline-none focus:border-[#EF7C00] focus:ring-4 focus:ring-[#EF7C00]/20 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-bold text-[#58330C] uppercase tracking-wider"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="e.g., Suggestion: Shopping Cart Icon"
                className="w-full px-5 py-4 rounded-2xl bg-[#f8f5f0] border-2 border-[#58330C]/10 text-[#58330C] placeholder:text-[#58330C]/40 focus:outline-none focus:border-[#EF7C00] focus:ring-4 focus:ring-[#EF7C00]/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-bold text-[#58330C] uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Describe the icon you need. You can list names or explain the visual concept..."
                className="w-full px-5 py-4 rounded-2xl bg-[#f8f5f0] border-2 border-[#58330C]/10 text-[#58330C] placeholder:text-[#58330C]/40 focus:outline-none focus:border-[#EF7C00] focus:ring-4 focus:ring-[#EF7C00]/20 transition-all resize-y"
              ></textarea>
            </div>
            {hasError && (
              <div className="p-4 bg-red-50 text-red-700 rounded-r-xl flex items-center gap-3">
                <SmoothIcon name="warning-outlined" size={32} />
                <p className="font-medium text-sm">
                  Oops! Something went wrong. Please check your connection and
                  try again.
                </p>
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-5 rounded-2xl font-bold text-lg uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2
                ${
                  isSubmitted
                    ? "bg-[#4CAF50] text-white shadow-lg"
                    : "bg-[#EF7C00] text-white hover:bg-[#d96e00] hover:-translate-y-1 shadow-[0_8px_20px_-4px_rgba(239,124,0,0.4)] disabled:opacity-70 disabled:hover:translate-y-0"
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <SmoothIcon name="check" size={32} />
                  Sent Successfully!
                </>
              ) : (
                "Send Request"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
