import AboutData from "../Components/AboutData"

function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container container grid">
                <picture className="about__img">
                    <source srcSet="https://static.jpxoi.com/media/uploads/about.avif" type="image/avif" />
                    <source srcSet="https://static.jpxoi.com/media/uploads/about.webp" type="image/webp" />
                    <img loading="lazy" src="https://static.jpxoi.com/media/uploads/about.webp" alt="Memoji of Jean Paul Fernandez" width={350} height={350} />
                </picture>
                <AboutData />
            </div>
        </section>
    )
}

export default About