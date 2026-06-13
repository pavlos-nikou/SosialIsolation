import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="px-5 py-20 lg:py-28" style={{ background: "#FAFAF7" }}>
      <div className="mx-auto max-w-2xl text-center">
        <div
          className="rounded-3xl px-10 py-14"
          style={{
            background: "linear-gradient(135deg, #2F6FED 0%, #2BB3A3 100%)",
          }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white lg:text-4xl">
            You don&apos;t have to figure it out alone.
          </h2>
          <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-white/80">
            SupportLink takes less than 10 minutes. You stay anonymous unless
            you choose otherwise. No commitment, no pressure.
          </p>
          <Link
            href="/check-in"
            className="inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-[#2F6FED] shadow-md transition hover:bg-slate-50"
          >
            Start your check-in — it&apos;s free
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}