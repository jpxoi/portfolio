import AboutImg from "../assets/about.webp"
import AboutData from "../Components/AboutData"

function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container container grid">
                <img loading="lazy" src={AboutImg} alt="Memoji of Jean Paul Fernandez" className="about__img" width={350} height={350} />

                <AboutData />
            </div>
        </section>
    )
}

export default About