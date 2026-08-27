"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, KeyRound, UserCheck } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-28" ref={ref}>
      {/* Warm paper-toned section background */}
      <div className="absolute inset-0 bg-paper" />

      <div className="relative max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-copper-dim mb-4">
            Featured work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-ink mb-4">
            Taking ownership.{" "}
            <span className="italic text-copper-dim">Delivering trust.</span>
          </h2>
          <p className="text-ink/60 text-lg max-w-2xl mb-20">
            A highlight from financial services — where security architecture
            meets engineering leadership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-ink/[0.06]"
        >
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="px-3 py-1 text-[11px] font-medium tracking-wide uppercase bg-copper text-white rounded-full">
              Featured
            </span>
            <span className="px-3 py-1 text-[11px] font-medium tracking-wide uppercase bg-paper-deep text-ink/70 rounded-full">
              Enterprise Migration
            </span>
            <span className="px-3 py-1 text-[11px] font-medium tracking-wide uppercase bg-green-50 text-green-800 rounded-full border border-green-200/60">
              Production
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4 tracking-tight">
            Bank of America — Authentication & Authorization
          </h3>

          <p className="text-ink/60 leading-relaxed max-w-3xl mb-12 text-[16px]">
            Led the authentication and authorization workstream for a critical
            application migration from Computershare to Merrill. Took ownership
            of the security architecture, designing and implementing the auth
            layer that protects sensitive financial data and ensures seamless
            user access across the migrated platform.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: Shield,
                label: "Security Architecture",
                detail:
                  "Designed end-to-end authentication flows for the migrated platform",
              },
              {
                icon: Lock,
                label: "Authorization Framework",
                detail:
                  "Built role-based access controls for financial operations",
              },
              {
                icon: KeyRound,
                label: "Token Management",
                detail:
                  "Implemented secure token lifecycle and session management",
              },
              {
                icon: UserCheck,
                label: "Identity Verification",
                detail:
                  "Integrated multi-factor authentication for regulatory compliance",
              },
            ].map((area) => (
              <div
                key={area.label}
                className="flex items-start gap-4 p-5 bg-paper/60 rounded-xl border border-ink/[0.04]"
              >
                <div className="p-2.5 bg-copper/10 rounded-lg shrink-0">
                  <area.icon size={18} className="text-copper-dim" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{area.label}</p>
                  <p className="text-xs text-ink/50 mt-1 leading-relaxed">
                    {area.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-paper/40 rounded-xl border border-ink/[0.04]">
            <p className="text-[11px] tracking-[0.15em] uppercase text-copper-dim mb-2">
              Impact
            </p>
            <p className="text-[15px] text-ink/60 leading-relaxed">
              Led the authentication workstream end-to-end, enabling a secure
              and compliant migration that maintained uninterrupted access for
              users while meeting financial regulatory standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
