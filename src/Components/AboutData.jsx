import AboutInfo from "../Molecules/AboutInfo";

function AboutData() {
    return (
        <div className="about__data">
            <AboutInfo />

            <p className="about__description">
                Hi! I am a Software Engineer, Frontend Developer, and UI/UX Designer. Join me on a cutting-edge journey, where my ambitious spirit and self-taught expertise converge to craft visually stunning, tech-innovative projects.
            </p>

            <a href="#contact" className="button">Contact Me</a>
        </div>
    )
}

export default AboutData;