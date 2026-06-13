import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-emerald-400 text-white">
            <HeartHandshake size={16} />
          </div>
          <span className="text-base font-bold text-slate-900">
            Support<span className="text-[#2F6FED]">Link</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#667085]">
          <Link href="#how-it-works" className="hover:text-[#1D1D1F]">
            How it works
          </Link>
          <Link href="#privacy" className="hover:text-[#1D1D1F]">
            Privacy
          </Link>
          <Link href="#for-ngos" className="hover:text-[#1D1D1F]">
            For NGOs
          </Link>
          <Link href="/about" className="hover:text-[#1D1D1F]">
            About
          </Link>
        </nav>

        <p className="text-xs text-[#667085]">
          &copy; {new Date().getFullYear()} SupportLink &middot; Cyprus
        </p>
      </div>
    </footer>
  );
}