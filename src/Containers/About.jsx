import AboutData from "../Components/AboutData"

function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container container grid">
                <img loading="lazy" src="https://static.jpxoi.com/media/uploads/about.webp" alt="Memoji of Jean Paul Fernandez" className="about__img" width={350} height={350} />

                <AboutData />
            </div>
        </section>
    )
}

export default About