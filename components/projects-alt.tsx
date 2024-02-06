"use client";
import React, { useRef } from "react";
import { projectsAltData } from "@/lib/data";
import ProjectAltCard from "./project-alt-card";
import SectionHeading from "./section-heading";
import { motion, useInView } from "framer-motion";

export default function ProjectsAlt() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsAltData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectAltCard {...project} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
