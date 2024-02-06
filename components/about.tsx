"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInview("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">IT</span>, I decided to pursue my passion
        for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">
          full-stack web development and Data Science
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React and Next.js</span>. I am also
        familiar with TypeScript. I also have knowledge in Python and MySQl and
        I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time junior position</span> as
        a software developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I m always
        open to learning about other things.{" "}
      </p>
    </motion.section>
  );
}
