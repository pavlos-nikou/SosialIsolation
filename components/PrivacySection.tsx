import { Lock, EyeOff, UserX, FileX } from "lucide-react";

const promises = [
  {
    icon: UserX,
    title: "No account required",
    desc: "You can complete the entire intake without creating an account or giving your name.",
  },
  {
    icon: EyeOff,
    title: "Anonymous by default",
    desc: "We never track who you are. Your answers are processed privately and not linked to your identity.",
  },
  {
    icon: Lock,
    title: "Your data, your choice",
    desc: "Personal details are only collected if you actively choose to request contact from a support organization.",
  },
  {
    icon: FileX,
    title: "Minimum necessary data",
    desc: "We collect only what is needed to find the right support path — nothing more, nothing ever sold.",
  },
];

export default function PrivacySection() {
  return (
    <section
      id="privacy"
      className="px-5 py-20 lg:py-28"
      style={{ background: "#FAFAF7" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2F6FED]">
              Privacy first
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#1D1D1F] lg:text-4xl">
              You are in control
              <br />
              of what you share.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-[#667085]">
              SupportLink is designed around your privacy from the ground up.
              The platform asks only what is needed, explains why, and never
              uses your information without your explicit consent.
            </p>
            <div className="inline-block rounded-xl border border-[#2F6FED]/20 bg-[#EAF1FF] px-5 py-3 text-sm font-medium text-[#2F6FED]">
              GDPR-compliant · Privacy by design
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {promises.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-100 bg-white p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF1FF]">
                    <Icon size={18} className="text-[#2F6FED]" />
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold text-[#1D1D1F]">
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#667085]">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}