import fiverr from "../../public/company/fiverr.png";
import freelancer from "../../public/company/freelancer.png";
import upwork from "../../public/company/upwork.png";
import css from "../../public/css.svg";
import firebase from "../../public/firebase.svg";
import html from "../../public/html.svg";
import javascript from "../../public/javascript.svg";
import materialUi from "../../public/material-ui.svg";
import mongodb from "../../public/mongodb.svg";
import nextjs from "../../public/nextjs.svg";
import nodeJs from "../../public/node-js.svg";
import postgresql from "../../public/postgresql.svg";
import prismaOrm from "../../public/prisma-orm.svg";
import react from "../../public/react.svg";
import redux from "../../public/redux.svg";
import tailwind from "../../public/tailwind-css.svg";
import typescript from "../../public/typescript.svg";

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Mern stack Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "User experience is paramount. I implement responsive design techniques, ensuring that your web applications are visually appealing and fully functional on various devices, from desktops to mobiles.",
      "Continuous improvement drives excellence. I actively participate in code reviews, providing constructive feedback to fellow developers, to enhance the overall code quality and foster a collaborative and growth-oriented environment.",
    ],
  },
  {
    title: "Frontend web Developer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I specialize in developing and maintaining web applications using React.js and related technologies. Whether you need a single-page application (SPA) or a complex front-end system, I've got you covered.",

      "As a part of my commitment to delivering top-notch work, I actively participate in code reviews. I provide constructive feedback to other developers, helping improve the overall code quality and fostering a culture of excellence.",
    ],
  },
];

const mySkills = [
  {
    name: "HTML",
    icon: html,
    color: "#e34c26",
  },
  {
    name: "CSS",
    icon: css,
    color: "#264de4",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    color: "#b8c2cc",
  },
  {
    name: "Javascript",
    icon: javascript,
    color: "#f0db4f",
  },
  {
    name: "Typescript",
    icon: typescript,
    color: "#007acc",
  },
  {
    name: "React JS",
    icon: react,
    color: "#61DBFB",
  },
  {
    name: "Next JS",
    icon: nextjs,
    color: "#f2f2f2",
  },
  {
    name: "Node JS",
    icon: nodeJs,
    color: "#303030",
  },
  {
    name: "Mongodb",
    icon: mongodb,
    color: "#3FA037",
  },
  {
    name: "Postgresql",
    icon: postgresql,
    color: "#0064a5",
  },

  {
    name: "Prisma ORM",
    icon: prismaOrm,
    color: "#028749",
  },

  {
    name: "Firebase",
    icon: firebase,
    color: "#F5820D",
  },
  {
    name: "Material-UI",
    icon: materialUi,
    color: "#007fff",
  },
  {
    name: "Redux",
    icon: redux,
    color: "#764abc",
  },
];

export { experiences, mySkills };
