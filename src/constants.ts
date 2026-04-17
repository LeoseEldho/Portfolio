import instagram from "./assets/logo/instagram.svg";
import linkedIn from "./assets/logo/linkedIn.svg";
import restAPI from "./assets/logo/REST API.svg";
import git from "./assets/logo/git.svg";
import html from "./assets/logo/HTML & CSS.svg";
import js from "./assets/logo/JavaScript.svg";
import react from "./assets/logo/React.svg";
import tailwind from "./assets/logo/Tailwind CSS.svg";
import bootstrap from "./assets/logo/bootstrap.png";
import css from "./assets/logo/css.png";
import node from "./assets/logo/nodejs.png";
import doordash from "./assets/Project/Doordash.png";
import tripAdvisor from "./assets/Project/tripadvisor.png";
import croma from "./assets/Project/croma.png";
import movie from "./assets/Project/movie.png";
import flipkart from "./assets/Project/filpkart.png";
import loginPage from "./assets/Project/LoginPage.png";
import whatapp from "./assets/logo/whatsapp-svgrepo-com.png";
import recipeImage from './assets/Project/Recipe.png'

export const details = [
  {
    title: "About Me",
    click: "Click to open section",
    id: "about",
  },
  {
    title: "Education",
    click: "Click to open section",
    id: "education",
  },
  {
    title: "Skills",
    click: "Click to open section",
    id: "skill",
  },
  {
    title: "Experience",
    click: "Click to open section",
    id: "experience",
  },
  {
    title: "Projects",
    click: "Click to open section",
    id: "project",
  },
  {
    title: "Contact",
    click: "Click to open section",
    id: "contact",
  },
];
export const education = [
  {
    year: "2020",
    school: "Secondary School (Class 10)",
    place: "Government Technical High School (ths)",
    mark: "90% score",
  },
  {
    year: "2022",
    school: "Higher Secondary Education (Class 12)",
    place: "GHSS Panamkandy,Wayanad",
    mark: "75% score",
  },
  {
    year: "2025",
    school: "B.Sc. in Multimedia and Web Technology",
    place: "Nilgiri College of Arts and Science",
    mark: "7.94 CGPA",
  },
];

export const skills = [
  {
    skill: "HTML",
    logo: html,
  },
  {
    skill: "CSS",
    logo: css,
  },
  {
    skill: "JavaScript",
    logo: js,
  },
  {
    skill: "React JS",
    logo: react,
  },
  {
    skill: "Tailwind",
    logo: tailwind,
  },
  {
    skill: "Rest API",
    logo: restAPI,
  },
  {
    skill: "Bootstrap",
    logo: bootstrap,
  },
  {
    skill: "Node JS",
    logo: node,
  },
  {
    skill: "GitHub",
    logo: git,
  },
];
export const social = [
  {
    media: "instagram",
    link: instagram,
    url: "https://www.instagram.com/leoseeldho?igsh=M2V5dHlyeDVqeGox",
  },
  {
    media: "git ",
    link: git,
    url: "https://github.com/LeoseEldho",
  },
  {
    media: "WhatsApp",
    link: whatapp,
    url: "https://wa.me/8078716399",
  },
  {
    media: "LinkedIn ",
    link: linkedIn,
    url: "https://www.linkedin.com/in/leose-eldho-93003b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

export const project = [
  {
    image: doordash,
    name: "DoorDash",
    details:
      "A fully responsive, pixel-perfect DoorDash homepage clone created using only HTML and CSS. The project emphasizes precise layout, clean styling, and real-world UI replication, showcasing my front-end fundamentals and design accuracy.",
    stack: ["HTML", "CSS", "Responsive Design"],
    link: "https://doordash-clone-indol.vercel.app",
  },
  {
    image: tripAdvisor,
    name: "TripAdvisor",
    details:
      "A pixel-perfect and fully responsive replica of the TripAdvisor homepage, built using pure HTML and CSS. The project closely mirrors the original design with precise layout, spacing, typography, and visual structure. It demonstrates strong attention to detail and the ability to recreate complex, real-world UIs without using any CSS frameworks.",
    stack: ["HTML", "CSS", "Responsive Design"],
    link: "https://trip-advisor-kappa-indol.vercel.app",
  },
  {
    image: croma,
    name: "Croma",
    details:
      "A fully responsive clone of the Croma e-commerce website built using HTML, CSS, and JavaScript. The project features dynamic product rendering using JSON data, interactive UI components, and responsive layouts for seamless viewing across devices. It demonstrates practical front-end development skills, DOM manipulation, and handling real-world e-commerce style interfaces without relying on frameworks.",
    stack: ["HTML", "CSS", "javaScript", "Responsive Design", "JSON"],
    link: "https://croma-leose.vercel.app",
  },
  {
    image: movie,
    name: "Movie Site",
    details:
      "A fully responsive movie browsing application built using React and CSS, powered by the TMDB API. The app allows users to explore popular movies, search for specific titles, and manage a favorites list using React Context API with persistent storage via localStorage. This project demonstrates practical experience with API integration, global state management, component-based architecture, and responsive UI design.",
    stack: ["React", "CSS", "API", "Responsive Design", "LocalStorage"],
    link: "https://movie-site-dmh2.vercel.app",
  },
  {
    image: flipkart,
    name: "Flipkart",
    details:
      "A responsive Flipkart-inspired e-commerce UI built using React and CSS. The project follows a component-based architecture and implements dynamic product rendering using JSON data. It includes interactive features such as product filtering and sorting to enhance user experience, along with fully responsive layouts for different screen sizes. This project demonstrates strong front-end fundamentals, reusable components, state management, and real-world e-commerce page structure.",
    stack: ["React", "CSS", "Responsive Design", "JSON"],
    link: "https://react-flipkart-3qrn.vercel.app",
  },
  {
    image: loginPage,
    name: "Authentication System",
    details:
      "A secure full-stack authentication system built using React, Tailwind CSS, Node.js, Express, and MongoDB. Features include user registration, JWT-based login with HTTP-only cookies, email verification via OTP, password reset functionality, and protected session handling. This project demonstrates real-world authentication flows, backend security, and frontend-backend integration.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Nodemailer",
      "Responsive Design",
    ],
    link: "https://login-page-liard-ten.vercel.app",
  },
  {
  image: recipeImage,
  name: "Food Recipes App",
  details:
    "A full-stack recipe management application built using React, TypeScript, Node.js, and Express. The app allows users to register, log in, and manage their own recipes with features like adding, editing, deleting, and marking recipes as favorites. It supports image uploads using multipart form data and displays dynamic content fetched from a REST API. The project is deployed with the frontend on Vercel and the backend on Render, demonstrating real-world deployment, authentication, and CRUD operations with a responsive UI.",
  stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"],
  link: "https://food-recipes-gh5z.vercel.app",
}
];
