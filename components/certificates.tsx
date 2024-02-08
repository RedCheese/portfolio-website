"use client";
import React from "react";
import CertificatesCarousel from "./certificates-carousel";
import SectionHeading from "./section-heading";
import { useSectionInview } from "@/lib/hooks";

export default function Certificates() {
  const { ref } = useSectionInview("Certificates");
  return (
    <section
      ref={ref}
      id="certificates"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Certificates</SectionHeading>
      <CertificatesCarousel />
    </section>
  );
}
