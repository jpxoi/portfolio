import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: "portf1",
        title: "Bioeasy Galenos Landing Page",
        description: "Landing page for Bioeasy Galenos, an academy for medical students in Peru that offers online and in-person courses",
        img: "img/portfolio/portf1.webp",
        alt: "Bioeasy Galenos Landing Page",
        link: "https://bgmedicina.com",
        github: "https://github.com/jpxoi/bioeasy-landing",
        stack: ["ReactJS", "TailwindCSS"],
    },
    {
        id: "portf2",
        title: "Mokepon",
        description: "An online game based on the Pokémon franchise that I made for my final project in an online course",
        img: "img/portfolio/portf2.webp",
        alt: "Mokepon",
        link: "https://mokepon.jpxoi.com",
        github: "https://github.com/jpxoi/mokepon",
        stack: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "portf3",
        title: "CryptoList",
        description: "Cryptocurrency tracker.",
        img: "img/portfolio/portf3.webp",
        alt: "CryptoList",
        link: "https://crypto.jpxoi.com",
        github: "https://github.com/jpxoi/cryptolist",
        stack: ["ReactJS"],
    },
    {
        id: "portf4",
        title: "Battery Level Indicator",
        description: "Battery level indicator for Windows 10.",
        img: "img/portfolio/portf4.webp",
        alt: "Battery Level Indicator",
        link: "battery.jpxoi.com",
        github: "https://github.com/jpxoi/battery-level-indicator",
        stack: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "portf5",
        title: "PAIDEIA Login Page",
        description: "Login page for the PAIDEIA app.",
        img: "img/portfolio/portf5.webp",
        alt: "PAIDEIA Login Page",
        link: "https://paideiademo.jpxoi.com",
        github: "https://github.com/jpxoi/paideialogin-demo",
        stack: ["HTML", "CSS", "JavaScript"],
    }
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