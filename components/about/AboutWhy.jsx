"use client";

import { motion } from "framer-motion";

export default function AboutWhy() {
  const reasons = [
    {
      number: "01",
      title: "Many people feel alone",
      text: "Social isolation can be hard to explain. TalkPoint gives people a gentle place to begin sharing.",
    },
    {
      number: "02",
      title: "Support can be hard to find",
      text: "People may need help but not know which service, group or organization can support them.",
    },
    {
      number: "03",
      title: "Technology should feel safe",
      text: "TalkPoint is designed to feel human, respectful and calm — not like surveillance or a cold form.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-warm-bg px-6 py-28">
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-care blur-[120px] opacity-70" />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-sage blur-[130px] opacity-40" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-flex rounded-full bg-care px-4 py-2 text-sm font-medium text-teal">
              Why it exists
            </span>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-text md:text-6xl">
              A small first step toward connection.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="max-w-sm leading-relaxed text-muted"
          >
            Before people receive support, they need a place where opening up
            feels simple and safe.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface/80 p-8 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="text-sm font-semibold text-teal/60">
                {item.number}
              </span>

              <h3 className="mt-10 text-2xl font-semibold text-text">
                {item.title}
              </h3>

              <p className="mt-5 leading-relaxed text-muted">
                {item.text}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-teal transition-all duration-500 group-hover:w-full" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-care opacity-0 blur-2xl transition duration-500 group-hover:opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}