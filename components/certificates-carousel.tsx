"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { certificateImages } from "@/lib/data";

export default function CertificatesCarousel() {
  return (
    <div>
      <Carousel>
        {certificateImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={420}
            height={360}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>
    </div>
  );
}
