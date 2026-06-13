import { MessageSquare, Compass, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    color: "#2F6FED",
    bg: "#EAF1FF",
    title: "Share how you feel",
    desc: "Answer a few calm, private questions. No account, no name, no judgment. Just an honest look at what you might need.",
  },
  {
    icon: Compass,
    color: "#2BB3A3",
    bg: "#E6FAF8",
    title: "Get matched to support",
    desc: "SupportLink reviews your answers and suggests the support options most relevant to your situation — clearly explained.",
  },
  {
    icon: HeartHandshake,
    color: "#2F6FED",
    bg: "#EAF1FF",
    title: "Connect when you're ready",
    desc: "Reach out to an organization directly, or choose to share your details only when you feel comfortable. Always your choice.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-slate-100 bg-white px-5 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2BB3A3]">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1D1D1F] lg:text-4xl">
            From uncertainty to a clear next step
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-[#667085]">
            The whole process takes under 10 minutes. No commitment required.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 bg-[#FAFAF7] p-8 transition hover:border-slate-200 hover:shadow-sm"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: step.bg }}
                >
                  <Icon size={22} style={{ color: step.color }} />
                </div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#667085]">
                  Step {i + 1}
                </span>
                <h3 className="mb-3 text-lg font-bold text-[#1D1D1F]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#667085]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}