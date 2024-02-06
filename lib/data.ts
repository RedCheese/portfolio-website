import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technological Undergraduate Degree in Information Technology",
    location: "Petropolis, RJ, Brazil",
    description:
      "Subjects covered included: Mathematics (Calculus); Programming in C#; Portuguese; Technical English; Computer Organization",
    icon: React.createElement(LuGraduationCap),
    date: "2010- 2017 ",
  },
  {
    title: "IBM Data Science Certificate ",
    location: "Petropolis, RJ, Brazil",
    description:
      "The programme consisted of 9 online course skills, through which I had access to open-source tools and libraries, and worked with Python, databases, SQL, data visualization, data analysis, statistical analysis, predictive modelling, and machine learning algorithms. ",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Petropolis, RJ, Brazil",
    description:
      "I studie an online course from Udemy on HTML, CSS and JavaScript. Suplemented it with other advanced coursers on frameworks like React",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Sardoal, Santaren, Portugal",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Firebase, MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Camp Travel App",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const projectsAltData = [
  {
    id: 1,
    title: "Camp Travel App",
    description: "A visually interesting camping trip site",
    image: "/images/projects/Camp_Travel.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Dashboard",
    description:
      "An app showing an example of a dashboard with multiple graphs",
    image: "/images/projects/Dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://mattrgb-syncfusion-dashboard.netlify.app/",
  },
  {
    id: 3,
    title: "Support Ticketing App",
    description: "An app that has functionality to send support tickets",
    image: "/images/projects/Ticketing.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Pricewise",
    description:
      "A project that sues webscrapping to get the best prices from Amazon products",
    image: "/images/projects/Webscrapper.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Firebase",
  "MongoDB",
  "Data Science",
  "MySQL",
  "Unity",
  "Python",
  "C#",
  "Framer Motion",
  "Corel Draw",
  "Inkscape",
  "Photoshop",
  "Excel",
] as const;
