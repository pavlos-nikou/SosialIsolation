import { BarChart2, Inbox, MapPin, Settings } from "lucide-react";

const features = [
  {
    icon: Inbox,
    title: "Structured intake requests",
    desc: "Receive organized support requests with consent-based contact details and categorized need summaries.",
  },
  {
    icon: BarChart2,
    title: "Demand analytics",
    desc: "Understand what types of support young adults are looking for — by category and over time.",
  },
  {
    icon: MapPin,
    title: "Regional insights",
    desc: "See aggregated, privacy-safe geographic trends to better allocate resources and outreach programs.",
  },
  {
    icon: Settings,
    title: "Request management",
    desc: "Track, assign, and update support requests with a clean, purpose-built operational dashboard.",
  },
];

export default function ForNGOs() {
  return (
    <section
      id="for-ngos"
      className="border-t border-slate-100 bg-white px-5 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2BB3A3]">
            For support organizations
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1D1D1F] lg:text-4xl">
            Better visibility into the needs you serve.
          </h2>
          <p className="text-base leading-relaxed text-[#667085]">
            SupportLink gives NGOs, universities, and community services a
            structured, privacy-safe window into local demand — so you can
            respond where it matters most.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-slate-100 bg-[#FAFAF7] p-6 transition hover:border-[#2BB3A3]/30 hover:bg-[#E6FAF8]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6FAF8] transition group-hover:bg-white">
                  <Icon size={18} className="text-[#2BB3A3]" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-[#1D1D1F]">
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#667085]">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-[#667085]">
          <span>Interested in partnering?</span>
          <a href="mailto:hello@supportlink.cy" className="font-semibold text-[#2BB3A3] underline-offset-2 hover:underline">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}