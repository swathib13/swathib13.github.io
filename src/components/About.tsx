"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28" ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--ink),var(--navy)_68%,#102841)]" />

      <div className="relative max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-copper mb-4">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-16">
            The engineer behind the{" "}
            <span className="italic text-copper">systems.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.4fr,1fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-white-muted text-[16px] leading-[1.8]">
              I am a software engineer who builds backend systems designed for
              durability and scale. My work spans microservices architecture, API
              design, event-driven pipelines, and observability frameworks across
              distributed systems.
            </p>
            <p className="text-white-muted text-[16px] leading-[1.8]">
              At Walmart, I develop the backend platform powering the Benefits
              ecosystem&mdash;designing GraphQL and REST APIs, building Kafka
              pipelines, and implementing secure authentication with JWT and
              OAuth. Before Walmart, I built scalable services at Lowe&apos;s and
              enterprise applications at Oracle.
            </p>
            <p className="text-white-muted text-[16px] leading-[1.8]">
              Each chapter has sharpened a consistent belief: the best systems
              are the ones that let teams move faster without sacrificing
              reliability. That principle guides every architecture decision I
              make.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="card-glass rounded-xl p-6">
              <p className="text-[11px] tracking-[0.15em] uppercase text-white-faint mb-3">
                Current Role
              </p>
              <p className="text-white font-medium">Senior Software Engineer</p>
              <p className="text-white-dim text-sm mt-1">
                Walmart &middot; Pricing & Anomaly Team
              </p>
            </div>

            <div className="card-glass rounded-xl p-6">
              <p className="text-[11px] tracking-[0.15em] uppercase text-white-faint mb-3">
                Education
              </p>
              <p className="text-white font-medium">
                M.S. Business Analytics
              </p>
              <p className="text-white-dim text-sm mt-1">
                Sacred Heart University, Connecticut
              </p>
            </div>

            <div className="card-glass rounded-xl p-6">
              <p className="text-[11px] tracking-[0.15em] uppercase text-white-faint mb-3">
                Location
              </p>
              <p className="text-white font-medium">Bentonville, Arkansas</p>
            </div>

            <div className="card-glass rounded-xl p-6">
              <p className="text-[11px] tracking-[0.15em] uppercase text-white-faint mb-3">
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Backend Systems",
                  "Microservices",
                  "API Design",
                  "Distributed Systems",
                  "Security",
                ].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 text-xs text-copper border border-copper/20 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
