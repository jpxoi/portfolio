import ProjectCard from "./ProjectCard";
import { STATIC_CONTENT_URL } from "../../env";

const projects = [
    {
        id: "portf0",
        title: "Pastoral Digital App",
        description: "A web application designed to facilitate the management of pastoral activities, including event organization, member registration, and communication. The app is built using NextJS and TailwindCSS, ensuring a responsive and user-friendly experience",
        img: `${STATIC_CONTENT_URL}/media/images/projects/portf0.webp`,
        imgavif: `${STATIC_CONTENT_URL}/media/images/projects/portf0.avif`,
        alt: "Screenshot of Pastoral Digital App",
        link: "https://pastoralid.jpxoi.com",
        github: "https://github.com/jpxoi/pastoral-digital-app",
        stack: ["NextJS", "TailwindCSS", "PostgreSQL"],
    },
    {
        id: "portf1",
        title: "Bioeasy Galenos Landing Page",
        description: " A fully functional and dynamic landing page that effectively showcases Bioeasy Galenos' commitment to excellence in preparing future healthcare professionals. Bioeasy Galenos is a leading academy in the medical education space",
        img: `${STATIC_CONTENT_URL}/media/images/projects/portf1.webp`,
        imgavif: `${STATIC_CONTENT_URL}/media/images/projects/portf1.avif`,
        alt: "Screenshot of Bioeasy Galenos Landing Page",
        link: "https://bgmedicina.com",
        github: "https://github.com/jpxoi/bioeasy-landing",
        stack: ["ReactJS", "TailwindCSS"],
    },
    {
        id: "portf2",
        title: "Mokepon - Online Interactive Game",
        description: "An web-based game that offers a dynamic cast of characters for players to select from, each with their own set of characteristics and powers. The game challenges players to strategically utilize these abilities in battles against computer-controlled opponents, providing a thrilling and engaging gameplay experience",
        img: `${STATIC_CONTENT_URL}/media/images/projects/portf2.webp`,
        imgavif: `${STATIC_CONTENT_URL}/media/images/projects/portf2.avif`,
        alt: "Screenshot of Mokepon",
        link: "https://mokepon.jpxoi.com",
        github: "https://github.com/jpxoi/mokepon",
        stack: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "portf3",
        title: "CryptoList - Cryptocurrency Tracker",
        description: "A cryptocurrency tracked built entirely on ReactJS, and connects to an API to get the latest data",
        img: `${STATIC_CONTENT_URL}/media/images/projects/portf3.webp`,
        imgavif: `${STATIC_CONTENT_URL}/media/images/projects/portf3.avif`,
        alt: "Screenshot of CryptoList",
        link: "https://crypto.jpxoi.com",
        github: "https://github.com/jpxoi/cryptolist",
        stack: ["ReactJS"],
    },
    {
        id: "portf4",
        title: "Chatsy - A Chat App built with Flask",
        description: "A web-based chat application that enables real-time communication between multiple clients in a chat room environment. The application allows users to create new chat rooms or join existing ones, exchange messages with other participants, and stay engaged in dynamic conversations",
        img: `${STATIC_CONTENT_URL}/media/images/projects/portf4.webp`,
        imgavif: `${STATIC_CONTENT_URL}/media/images/projects/portf4.avif`,
        alt: "Screenshot of Chatsy",
        github: "https://github.com/jpxoi/chatsy",
        stack: ["Flask", "Python"],
    },
]

function ProjectsContainer() {
    return (
        <div className="projects__container container">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    imgavif={project.imgavif}
                    alt={project.alt}
                    link={project.link}
                    github={project.github}
                    stack={project.stack}
                />
            ))}
        </div>
    )
}

export default ProjectsContainer;