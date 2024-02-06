import { projectsAltData } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { AiTwotoneEye, AiOutlineGithub } from "react-icons/ai";

type ProjectProps = (typeof projectsAltData)[number];

export default function ProjectAltCard({
  id,
  image,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectProps) {
  return (
    <section className="dark:text-white rounded-lg">
      <div
        className="h-52 md:h-72 rounded-lg relative group"
        style={{ background: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center rounded-lg justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            target="_blank"
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <AiOutlineGithub className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            target="_blank"
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <AiTwotoneEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-white/75">{description}</p>
      </div>
    </section>
  );
}
