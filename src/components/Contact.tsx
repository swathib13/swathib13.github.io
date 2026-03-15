"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-28" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#162d4a60,transparent_60%),linear-gradient(var(--ink),var(--navy))]" />

      <div className="relative max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-copper mb-4">
            Get in touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
            Interesting engineering{" "}
            <span className="italic text-copper">challenge?</span>
          </h2>
          <p className="text-white-dim text-lg mb-14 leading-relaxed">
            I am always open to conversations about backend systems, enterprise
            platforms, and opportunities to build something meaningful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-lg mx-auto space-y-3"
        >
          <a
            href="mailto:swathibandari1323@gmail.com"
            className="group flex items-center justify-between p-5 card-glass rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-copper/10 rounded-lg">
                <Mail size={18} className="text-copper" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <p className="text-xs text-white-dim">
                  swathibandari1323@gmail.com
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-white-faint group-hover:text-copper transition-colors"
            />
          </a>

          <a
            href="https://linkedin.com/in/swathi-bandari-269747350"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 card-glass rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-copper/10 rounded-lg">
                <LinkedInIcon className="text-copper" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">LinkedIn</p>
                <p className="text-xs text-white-dim">
                  linkedin.com/in/swathi-bandari
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-white-faint group-hover:text-copper transition-colors"
            />
          </a>


        </motion.div>
      </div>
    </section>
  );
}
