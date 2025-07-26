import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Development",
    projects: 13,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App development",
    projects: 2,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 4,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finding a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Techloset Solutions",
    tenure: "Jan 2024 – May 2024",
    role: "Frontend Developer Intern",
    detail:
      "Developed and maintained key UI components for client-facing dashboards using ReactJS, HTML, CSS, and Bootstrap.",
  },
  {
    place: "Aptech Learning Pakistan – Karachi, Pakistan",
    tenure: "Sep 2022 – Dec2024",
    role: "IT Instructor",
    detail:
      "Delivered courses in HTML, CSS, JavaScript, PHP, and MySQL to diploma and certification students.Assisted in the creation of SAR (Self-Assessment Reports) for internal academic review processes",
  },
  {
    place: "BitBox",
    tenure: "June 2024 – Aug 2024",
    role: "Website Developer",
    detail:
      "Created responsive and user-friendly frontend interfaces utilizing HTML, CSS, and JavaScript frameworks including Reactjs.",
  },
];

export const comments = [
  {
    name: "Aneeq Khatri",
    post: "Senior Developer",
    comment:
      "I thought it was impossible to make a website as beautiful as our product, but Qirat proved me wrong",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "I've never met a web developer who truly cares about their clients' success like Qirat does.",
    img: "./people1.png",
  },


];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
