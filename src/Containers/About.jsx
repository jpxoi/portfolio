import AboutData from "../Components/AboutData"

function About() {
    return (
        <section className="about section" id="about">
            <span className="section__subtitle">My Intro</span>
            <h2 className="section__title">About Me</h2>

            <div className="about__container container grid">
                <img loading="lazy" src="img/about.webp" alt="Memoji of Jean Paul Fernandez" className="about__img" />

                <AboutData />
            </div>
        </section>
    )
}

export default About