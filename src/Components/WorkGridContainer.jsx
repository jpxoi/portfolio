import WorkCard from "./WorkCard";

function WorkGridContainer() {

    const projects = [
        {
            id: 1,
            title: "Bioeasy Galenos Landing Page",
            category: "web",
            img: "img/portfolio/portf1.webp",
            alt: "Bioeasy Galenos Landing Page",
            link: "https://bgmedicina.com",
            cta: "Visit Site"
        },
        {
            id: 2,
            title: "Mokepon",
            category: "web",
            img: "img/portfolio/portf2.webp",
            alt: "Mokepon",
            link: "https://mokepon.jpxoi.com",
            cta: "Play Web Game"
        },
        {
            id: 3,
            title: "Neural Network",
            category: "ai",
            img: "img/portfolio/portf3.webp",
            alt: "Neural Network",
            link: "https://github.com/jpxoi/neuralnetwork101",
            cta: "View Code"
        },
        {
            id: 4,
            title: "CryptoList",
            category: "web",
            img: "img/portfolio/portf4.webp",
            alt: "CryptoList",
            link: "https://crypto.jpxoi.com",
            cta: "Visit Site"
        },
        {
            id: 5,
            title: "Battery Level Indicator",
            category: "web",
            img: "img/portfolio/portf5.webp",
            alt: "Battery Level Indicator",
            link: "battery.jpxoi.com",
            cta: "Visit Site"
        },
        {
            id: 6,
            title: "PAIDEIA Login Page",
            category: "web",
            img: "img/portfolio/portf6.webp",
            alt: "PAIDEIA Login Page",
            link: "https://paideiademo.jpxoi.com",
            cta: "Visit Site"
        }
    ]
    return (
        <div className="work__container container grid">
            {projects.map((project) => (
                <WorkCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    img={project.img}
                    alt={project.alt}
                    link={project.link}
                    cta={project.cta}
                />
            ))}
        </div>
    )
}

export default WorkGridContainer;