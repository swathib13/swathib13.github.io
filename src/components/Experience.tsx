"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: "01",
    company: "Walmart",
    tagline:
      "A people-led, tech-powered retailer helping people save money and live better.",
    role: "Software Engineer",
    period: "Oct 2024 — Present",
    location: "Bentonville, Arkansas",
    description:
      "Developing backend microservices for the Benefits Platform, designing high-performance APIs, and building event-driven architectures serving millions of associates.",
    highlights: [
      "Designed GraphQL APIs alongside REST endpoints, reducing data retrieval latency by 45%",
      "Built event-driven architecture using Kafka for reliable message processing across microservices",
      "Established observability frameworks with Splunk, Prometheus, and OpenObserve — 99.9% platform availability",
      "Leveraged AI development tools (Copilot, Cursor) to improve development velocity by 35%",
      "Implemented secure authentication with JWT and OAuth for production deployments",
    ],
    chapterValue:
      "This chapter is where backend fundamentals meet enterprise scale — building the APIs, pipelines, and security that a benefits platform serving millions depends on.",
  },
  {
    id: "02",
    company: "Lowe's",
    tagline:
      "Home improvement retailer empowering people to build, improve, and enjoy their homes.",
    role: "Software Engineer",
    period: "Aug 2020 — Dec 2022",
    location: "India",
    description:
      "Built scalable backend services and REST APIs for enterprise applications serving 500K+ users, migrating legacy architecture to cloud-native microservices.",
    highlights: [
      "Developed backend services and REST APIs using Java and Spring Boot for 500K+ users",
      "Migrated monolithic architecture to cloud-native microservices on AWS",
      "Engineered automated data pipelines with AWS S3 for large-scale ETL workflows",
      "Reduced database costs by 12% through Hibernate optimization and caching strategies",
      "Reduced deployment time by 40% with CI/CD pipelines using Jenkins and Docker",
    ],
    chapterValue:
      "This was the migration chapter — taking a legacy system apart and rebuilding it as microservices, learning firsthand what it takes to modernize without breaking what works.",
  },
  {
    id: "03",
    company: "Oracle",
    tagline:
      "Enterprise technology powering secure, scalable solutions for financial services.",
    role: "Software Engineer",
    period: "Oct 2018 — Jul 2020",
    location: "India",
    description:
      "Developed enterprise web applications for financial services clients, building secure integrations and optimizing application performance at scale.",
    highlights: [
      "Built enterprise applications using Java, Spring, and Hibernate for financial services clients",
      "Developed REST and SOAP services with multi-factor authentication",
      "Improved application performance by 20% through optimized SQL and database indexing",
      "Maintained 99.5% system uptime through production support and debugging",
    ],
    chapterValue:
      "The foundation chapter — learning to build enterprise software that financial institutions trust, where security and uptime are non-negotiable.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="py-28 relative" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-copper mb-4">
            Selected enterprise impact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
            Build the system.{" "}
            <span className="italic text-copper">Ship the impact.</span>
          </h2>
          <p className="text-white-dim text-lg max-w-2xl mb-20">
            Three chapters across enterprise technology — each sharpening a
            different dimension of backend engineering, system design, and
            platform reliability.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * index }}
              className="card-glass rounded-2xl p-8 md:p-10"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                <div className="flex items-start gap-5">
                  <span className="text-sm font-mono text-copper/40 mt-1 shrink-0">
                    {exp.id}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-white-dim text-sm mt-0.5 max-w-md">
                      {exp.tagline}
                    </p>
                  </div>
                </div>
                <div className="md:text-right ml-10 md:ml-0 shrink-0">
                  <p className="text-sm text-white-muted">{exp.period}</p>
                  <p className="text-copper text-sm font-medium mt-0.5">
                    {exp.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white-dim leading-relaxed mt-6 ml-10 md:ml-12">
                {exp.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mt-6 ml-10 md:ml-12">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] text-white-dim"
                  >
                    <span className="w-1 h-1 rounded-full bg-copper mt-2 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Chapter value */}
              <div className="mt-8 ml-10 md:ml-12 p-5 rounded-xl bg-white/[0.03] border border-line">
                <p className="text-[11px] tracking-[0.15em] uppercase text-copper/60 mb-2">
                  Chapter value
                </p>
                <p className="text-[14px] text-white-dim leading-relaxed italic">
                  {exp.chapterValue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
