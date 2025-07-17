"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Former <span className="font-medium">Computer Science and Engineering</span> student at Bach Khoa University (HCMC University of Technology), one of Vietnam’s top technical institutions. Currently working as a <span className="font-medium">Software Engineer</span> at HPT Vietnam Corp, where I contribute to enterprise-level software solutions. My core expertise lies in <span className="font-medium">Python, Node.js, C/C++</span>, with hands-on experience in RESTful APIs, database design, and server-side logic.
      </p>
      <p className="mb-3">
        I approach systems development with a deep focus on <span className="font-medium">code quality, scalability, and performance</span>. With experience in both academic and industry settings, I've consistently demonstrated strong adaptability and self-learning abilities under production constraints. Currently seeking <span className="font-medium">remote software engineering opportunities</span> where I can apply backend expertise and expand into AI-driven architectures.
      </p>
      <p>
        Fluent in <span className="font-medium">English and Vietnamese</span>. Strong interest in <span className="font-medium">distributed systems, LLM infrastructure,</span> and <span className="font-medium">developer tooling</span>.
      </p>
    </motion.section>
  );
}
