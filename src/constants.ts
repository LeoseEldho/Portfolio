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
import tripAdvisor from './assets/Project/tripadvisor.png';
import croma from './assets/Project/croma.png';
import movie from './assets/Project/movie.png'
import flipkart from './assets/Project/filpkart.png';
import loginPage from './assets/Project/LoginPage.png'
import whatapp from './assets/logo/whatsapp-svgrepo-com.png'

export const details = [
  {
    title: "About Me",
    click: "Click to open section",
    id:"about"
  },
  {
    title: "Education",
    click: "Click to open section",
    id:"education"
  },
  {
    title: "Skills",
    click: "Click to open section",
    id:"skill"
  },
  {
    title: "Experience",
    click: "Click to open section",
    id:"experience"
  },
  {
    title: "Projects",
    click: "Click to open section",
    id:"project"
  },
  {
    title: "Contact",
    click: "Click to open section",
    id:"contact"
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
      "A pixel-perfect and fully responsive DoorDash homepage replica built using pure HTML and CSS. The design closely mirrors the original with precise layout and styling.",
    stack: ["HTML", "CSS", "Responsive Design"],
    link: "https://doordash-clone-indol.vercel.app",
  },
  {
    image: tripAdvisor,
    name: "TripAdvisor",
    details: "",
    stack: ["HTML", "CSS", "Responsive Design"],
    link: "https://trip-advisor-kappa-indol.vercel.app",
  },
  {
    image: croma,
    name: "Croma",
    details: "",
    stack: ["HTML", "CSS", "Responsive Design"],
    link: "https://croma-leose.vercel.app",
  },
  {
    image: movie,
    name: "Movie Site",
    details: "",
    stack: ["HTML", "CSS", "Responsive Design"],
    link: "https://movie-site-dmh2.vercel.app",
  },
  {
    image: flipkart,
    name: "Flipkart",
    details: "",
    stack: ["HTML", "CSS", "Responsive Design"],
    link: "https://react-flipkart-3qrn.vercel.app",
    },
  {
    image: loginPage,
    name: "Login Page",
    details: "",
    stack: ["HTML", "CSS", "Responsive Design"],
    link: "https://login-page-liard-ten.vercel.app",
  },
];
