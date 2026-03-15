import { Mail } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="py-10 border-t border-line">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg tracking-tight">
              <span className="text-gradient">Swathi Bandari</span>
            </p>
            <p className="text-[12px] text-white-faint mt-1">
              Software Engineer &middot; Bentonville, AR
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/swathi-bandari-269747350"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-white-dim hover:text-copper rounded-lg hover:bg-white/[0.04] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:swathibandari1323@gmail.com"
              className="p-2.5 text-white-dim hover:text-copper rounded-lg hover:bg-white/[0.04] transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-line text-center">
          <p className="text-[11px] text-white-faint">
            &copy; {new Date().getFullYear()} Swathi Bandari. Built with Next.js
            &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
