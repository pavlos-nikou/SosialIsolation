"use client";

import { motion } from "framer-motion";

export default function AboutMission() {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-care blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sage/40 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex rounded-full bg-care px-4 py-2 text-sm font-medium text-teal">
              Our mission
            </span>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-text md:text-6xl">
              Helping people feel heard before they feel measured.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="rounded-[2rem] border border-border bg-warm-bg/80 p-8 shadow-sm backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:shadow-xl md:p-10"
          >
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                TalkPoint exists to reduce social isolation by giving people a calm
                and respectful place to share how they feel.
              </p>

              <p>
                The goal is not to treat people like data, but to guide support
                responsibly while keeping users safe, informed and in control.
              </p>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-border bg-surface p-6">
              <p className="text-lg font-medium text-text">
                “You are not alone. Your voice matters.”
              </p>

              <p className="mt-3 text-sm text-muted">
                A small reminder at the center of every TalkPoint experience.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {["Safe first", "Data second", "Human always"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.12,
                ease: "easeOut",
              }}
              className="rounded-2xl border border-border bg-surface px-5 py-4 text-center text-sm font-medium text-teal shadow-sm transition duration-500 hover:-translate-y-1 hover:bg-care"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}