import ProjectCard from "./ProjectCard";
import { STATIC_CONTENT_URL } from "../../env";

const projects = [
    {
        id: "portf1",
        title: "Bioeasy Galenos Landing Page",
        description: " a fully functional and dynamic landing page that effectively showcases Bioeasy Galenos' commitment to excellence in preparing future healthcare professionals. Bioeasy Galenos is a leading academy in the medical education space",
        img: `${STATIC_CONTENT_URL}/media/projects/portf1.webp`,
        imgavif: `${STATIC_CONTENT_URL}/media/projects/portf1.avif`,
        alt: "Screenshot of Bioeasy Galenos Landing Page",
        link: "https://bgmedicina.com",
        github: "https://github.com/jpxoi/bioeasy-landing",
        stack: ["ReactJS", "TailwindCSS"],
    },
    {
        id: "portf2",
        title: "Mokepon - Online Interactive Game",
        description: "An web-based game that offers a dynamic cast of characters for players to select from, each with their own set of characteristics and powers. The game challenges players to strategically utilize these abilities in battles against computer-controlled opponents, providing a thrilling and engaging gameplay experience",
        img: `${STATIC_CONTENT_URL}/media/projects/portf2.webp`,
        imgavif: `${STATIC_CONTENT_URL}/media/projects/portf2.avif`,
        alt: "Screenshot of Mokepon",
        link: "https://mokepon.jpxoi.com",
        github: "https://github.com/jpxoi/mokepon",
        stack: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "portf3",
        title: "CryptoList - Cryptocurrency Tracker",
        description: "A cryptocurrency tracked built entirely on ReactJS, and connects to an API to get the latest data",
        img: `${STATIC_CONTENT_URL}/media/projects/portf3.webp`,
        imgavif: `${STATIC_CONTENT_URL}/media/projects/portf3.avif`,
        alt: "Screenshot of CryptoList",
        link: "https://crypto.jpxoi.com",
        github: "https://github.com/jpxoi/cryptolist",
        stack: ["ReactJS"],
    },
    {
        id: "portf4",
        title: "Chatsy - A Chat App built with Flask",
        description: "A web-based chat application that enables real-time communication between multiple clients in a chat room environment. The application allows users to create new chat rooms or join existing ones, exchange messages with other participants, and stay engaged in dynamic conversations",
        img: `${STATIC_CONTENT_URL}/media/projects/portf4.webp`,
        imgavif: `${STATIC_CONTENT_URL}/media/projects/portf4.avif`,
        alt: "Screenshot of Chatsy",
        github: "https://github.com/jpxoi/chatsy",
        stack: ["Flask", "Python"],
    },
    {
        id: "portf5",
        title: "Battery Level Indicator",
        description: "Display the battery percentage of the device the webpage is being viewed on, using a liquid battery level that changes color based on the battery percentage",
        img: `${STATIC_CONTENT_URL}/media/projects/portf5.webp`,
        imgavif: `${STATIC_CONTENT_URL}/media/projects/portf5.avif`,
        alt: "Screenshot of Battery Level Indicator",
        link: "https://battery.jpxoi.com",
        github: "https://github.com/jpxoi/battery-level-indicator",
        stack: ["HTML", "CSS", "JavaScript"],
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