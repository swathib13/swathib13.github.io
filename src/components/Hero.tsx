"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,#1a2236aa,transparent_35%),linear-gradient(120deg,var(--ink),var(--navy)_68%,#151c2e)]" />
      </div>

      {/* Portrait image - positioned absolutely on the right like Sandeep */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute right-[5%] lg:right-[8%] top-[12%] w-[32vw] max-w-[380px] min-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden border border-line-strong/50 hidden md:block z-10"
      >
        <Image
          src="/swathi-portrait.png"
          alt="Swathi Bandari"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 768px) 0vw, 32vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
      </motion.div>

      <div className="relative max-w-[1200px] mx-auto px-8 pt-36 pb-16 w-full min-h-screen flex flex-col justify-center">
        {/* Main content - left side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-[55%] md:max-w-[55%]"
          style={{ maxWidth: "clamp(100%, 55vw, 55%)" }}
        >
          <p className="text-[12px] tracking-[0.2em] uppercase text-copper mb-6">
            Backend Systems &middot; Microservices &middot; Enterprise Platforms
          </p>

          <h1 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.12] tracking-tight mb-8">
            <span className="text-white">Scalable systems </span>
            <span className="italic text-copper">that deliver.</span>
            <br />
            <span className="text-white">APIs </span>
            <span className="italic text-copper">that perform.</span>
            <br />
            <span className="text-white">Platforms </span>
            <span className="italic text-copper">that last.</span>
          </h1>

          <p className="text-white-muted text-[16px] leading-[1.7] max-w-[480px] mb-10">
            I build backend microservices, high-performance APIs, and
            event-driven architectures for enterprise platforms. I care about
            reliability as much as velocity.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#impact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-copper text-ink text-sm font-medium rounded-full hover:bg-copper-bright transition-colors duration-200"
            >
              Explore the work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a
              href="https://linkedin.com/in/swathi-bandari-269747350"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm text-white-dim border border-line-strong hover:border-white-faint hover:text-white rounded-full transition-all duration-200"
            >
              <LinkedInIcon />
              Connect on LinkedIn
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
            </a>
          </div>
        </motion.div>

        {/* Mobile portrait - only visible on small screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:hidden mt-12 w-[200px] aspect-[3/4] rounded-2xl overflow-hidden border border-line-strong/50"
        >
          <Image
            src="/swathi-portrait.png"
            alt="Swathi Bandari"
            fill
            className="object-cover object-top"
            priority
            sizes="200px"
          />
        </motion.div>

        {/* Bottom strip: Currently / Earlier + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-auto pt-16"
        >
          <div className="flex flex-wrap items-center gap-x-12 gap-y-2 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.18em] uppercase text-white-faint">
                Currently
              </span>
              <span className="text-[13px] text-white-muted">
                Walmart &middot; Pricing &amp; Anomaly
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.18em] uppercase text-white-faint">
                Earlier chapters
              </span>
              <span className="text-[13px] text-white-muted">
                Lowe&apos;s &middot; Oracle
              </span>
            </div>
          </div>

          <div className="border-t border-line pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "6+", label: "years building backend systems" },
                { value: "500K+", label: "users served across platforms" },
                { value: "99.9%", label: "platform availability achieved" },
                { value: "45%", label: "latency reduction via GraphQL" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-[28px] font-bold text-copper mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[12px] text-white-dim leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
