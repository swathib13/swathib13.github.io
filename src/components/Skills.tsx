"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Spring MVC", "Spring Data", "Hibernate", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "DB2", "MongoDB", "BigQuery", "Cosmos DB", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["GCP", "Azure", "Docker", "Kubernetes", "Jenkins", "Git", "Maven"],
  },
  {
    title: "Messaging & Observability",
    skills: ["Kafka", "Splunk", "Prometheus", "OpenObserve"],
  },
  {
    title: "Architecture",
    skills: [
      "Microservices",
      "REST APIs",
      "GraphQL",
      "Event-driven Systems",
      "Distributed Systems",
      "System Design",
    ],
  },
  {
    title: "Security",
    skills: ["JWT", "OAuth", "Authentication", "Authorization"],
  },
  {
    title: "AI & Dev Tools",
    skills: ["Cursor", "Windsurf", "GitHub Copilot", "Prompt Engineering", "MCP", "RAG"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 relative" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-copper mb-4">
            Technical terrain
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
            The tools I{" "}
            <span className="italic text-copper">work with.</span>
          </h2>
          <p className="text-white-dim text-lg max-w-2xl mb-20">
            A deep technical foundation built across enterprise systems, cloud
            platforms, and modern development workflows.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="card-glass rounded-xl p-6"
            >
              <p className="text-[11px] tracking-[0.15em] uppercase text-copper/70 mb-4">
                {category.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[12px] text-white-dim bg-white/[0.04] rounded-md border border-line"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
