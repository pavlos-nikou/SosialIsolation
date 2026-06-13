"use client";

import { ArrowRight, Shield } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit() {
    if (!text.trim()) return;
    router.push(`/check-in?q=${encodeURIComponent(text.trim())}`);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <section className="relative min-h-[88vh] overflow-hidden px-5 pb-24 pt-28 lg:pt-36 flex items-start justify-center">
      {/* Animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #2F6FED 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #2BB3A3 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-2xl text-center">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2F6FED]/20 bg-white/80 px-4 py-1.5 text-xs font-medium text-[#2F6FED] backdrop-blur-sm shadow-sm">
          <Shield size={12} />
          Anonymous · No account · No judgment
        </div>

        {/* Headline */}
        <h1 className="mb-4 text-5xl font-bold leading-[1.08] tracking-tight text-[#1D1D1F] lg:text-7xl">
          You don&apos;t have
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #2F6FED 0%, #2BB3A3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            to figure it out alone.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-[#667085]">
          Tell us how you&apos;ve been feeling. We&apos;ll help you find the right support — privately, at your own pace.
        </p>

        {/* Main textarea card */}
        <div
          className="relative mx-auto rounded-3xl bg-white p-1.5 transition-all duration-300"
          style={{
            boxShadow: focused
              ? "0 0 0 3px rgba(47,111,237,0.15), 0 20px 60px rgba(47,111,237,0.12), 0 4px 20px rgba(0,0,0,0.06)"
              : "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <div className="rounded-[18px] bg-[#FAFAF7] overflow-hidden">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="I've been feeling disconnected lately and I'm not sure where to turn..."
              rows={4}
              className="w-full resize-none bg-transparent px-6 pt-5 pb-4 text-[15px] leading-relaxed text-[#1D1D1F] placeholder:text-[#aab0bc] focus:outline-none"
            />
            <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
              <p className="text-xs text-[#aab0bc]">
                Shift+Enter for new line
              </p>
              <button
                onClick={handleSubmit}
                disabled={!text.trim()}
                className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 disabled:opacity-30"
                style={{
                  background: text.trim()
                    ? "linear-gradient(135deg, #2F6FED 0%, #2BB3A3 100%)"
                    : "#e5e7eb",
                  color: text.trim() ? "#fff" : "#9ca3af",
                }}
              >
                Continue
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <p className="mt-5 text-xs text-[#aab0bc]">
          Your words are never stored without your explicit consent.
        </p>
      </div>
    </section>
  );
}