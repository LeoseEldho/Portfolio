import instagram from './assets/logo/instagram.svg'
import linkedIn from "./assets/logo/linkedIn.svg"
import restAPI from './assets/logo/REST API.svg'
import git from "./assets/logo/git.svg"
import html from './assets/logo/HTML & CSS.svg'
import js from './assets/logo/JavaScript.svg'
import react from './assets/logo/React.svg'
import tailwind from './assets/logo/Tailwind CSS.svg'
import bootstrap from './assets/logo/bootstrap.png'
import css from './assets/logo/css.png'
import node from './assets/logo/nodejs.png'
import  {FaWhatsapp}  from 'react-icons/fa'

export const details = [
    {
        title: "About Me",
        click: "Click to open section"
    },
    {
        title: "Education",
        click:"Click to open section"
    },
    {
        title: "Skills",
        click:"Click to open section"
    },
    {
        title: "Experience",
        click:"Click to open section"
    },
    {
        title: "Projects",
        click:"Click to open section"
    },
    {
        title: "Contact",
        click:"Click to open section"
    }
]
export const education = [
    {
        year: "2020",
        school: "Secondary School (Class 10)",
        place: "Government Technical High School (ths)",
        mark:"90% score"
    },
    {
        year: "2022",
        school: "Higher Secondary Education (Class 12)",
        place: "GHSS Panamkandy,Wayanad",
        mark:"75% score"
    },
    {
        year: "2025",
        school: "B.Sc. in Multimedia and Web Technology",
        place: "Nilgiri College of Arts and Science",
        mark:"7.94 CGPA"
    }
]

export const skills = [
    {
        skill: "HTML",
        logo:html
    },
    {
        skill: "CSS",
        logo:css
    },
    {
        skill: "JavaScript",
        logo:js
    },
    {
        skill: "React JS",
        logo:react
    },
    {
        skill: "Tailwind",
        logo:tailwind
    },
    {
        skill: "Rest API",
        logo:restAPI
    },
    {
        skill: "Bootstrap",
        logo:bootstrap
    },
    {
        skill: "Node JS",
        logo:node
    },
    {
        skill: "GitHub",
        logo:git
    }

]
export const social = [
    {
        media: "instagram",
        link: instagram,
        url:"https://www.instagram.com/leoseeldho?igsh=M2V5dHlyeDVqeGox"
    },
    {
        media: "git ",
        link: git,
        url:"https://github.com/LeoseEldho"
    },
      {
    media: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/8078716399",
    },
    {
        media: "LinkedIn ",
        link: linkedIn,
        url:"https://www.linkedin.com/in/leose-eldho-93003b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
]