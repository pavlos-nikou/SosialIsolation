// components/HeroSection.tsx

"use client";

import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import AnimatedLogo from "@/components/AnimatedLogo"

export default function HeroSection() {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit() {
    const cleanText = text.trim();
    if (!cleanText) return;

    router.push(`/check-in?q=${encodeURIComponent(cleanText)}`);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-warm-bg px-6 pb-16 pt-16 lg:px-16 lg:pt-24">
      <style>{`
        @keyframes hero-breathe {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        @keyframes hero-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: hero-breathe 8s ease-in-out infinite;
        }

        .hero-text {
          animation: hero-fade-in 0.8s ease-out both;
        }

        .hero-text-delay {
          animation: hero-fade-in 0.8s ease-out 0.2s both;
        }

        .hero-text-delay-2 {
          animation: hero-fade-in 0.8s ease-out 0.4s both;
        }
      `}</style>

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="hero-blob"
          style={{
            width: 500,
            height: 500,
            top: "-10%",
            left: "-10%",
            background: "#DCA77A",
            opacity: 0.15,
          }}
        />

        <div
          className="hero-blob"
          style={{
            width: 400,
            height: 400,
            bottom: "-5%",
            right: "20%",
            background: "#2F6F68",
            opacity: 0.08,
            animationDelay: "3s",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16" >
        <div>
          <p className="hero-text mb-6 text-sm font-medium tracking-wide text-muted">
            Hey. Whatever brought you here, we&apos;re glad you came.
          </p>

          <h1 className="hero-text-delay mb-8 text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-text">
            You are
            <br />
            <em className="not-italic text-teal">not alone.</em>
          </h1>

          <div className="hero-text-delay-2 max-w-lg">
            <p className="mb-3 text-sm text-muted">
              Tell us a little about how you&apos;ve been feeling lately.
            </p>

            <div
              className="rounded-2xl bg-surface transition-all duration-500"
              style={{
                boxShadow: focused
                  ? "0 0 0 2px #2F6F68, 0 8px 32px rgba(47,111,104,0.12)"
                  : "0 2px 16px rgba(46,51,48,0.08)",
              }}
            >
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="I've been feeling really overwhelmed lately..."
                rows={4}
                className="w-full resize-none rounded-t-2xl bg-transparent px-6 pb-4 pt-5 text-[15px] leading-relaxed text-text placeholder:text-sage focus:outline-none"
              />

              <div className="flex items-center justify-between rounded-b-2xl border-t border-border bg-warm-bg px-5 py-3">
                <p className="text-xs text-sage">
                  Anonymous · No account needed
                </p>

                <button
                  onClick={handleSubmit}
                  disabled={!text.trim()}
                  className="flex items-center gap-2 rounded-xl bg-teal px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-30"
                >
                  Share how I feel
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            <p className="mt-3 text-xs text-sage">
              Your words are never stored without your explicit consent.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            {[
              { n: "01", label: "Share how you feel" },
              { n: "02", label: "Get matched" },
              { n: "03", label: "Connect when ready" },
            ].map((s, i) => (
              <div key={s.n} className="flex items-center gap-2">
                <span className="text-xs font-bold text-teal opacity-60">
                  {s.n}
                </span>

                <span className="text-xs text-muted">{s.label}</span>

                {i < 2 && (
                  <span className="mx-1 hidden text-border sm:block">·</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-center lg:flex">
          <AnimatedLogo/>
        </div>
      </div>
    </section>
  );
}


