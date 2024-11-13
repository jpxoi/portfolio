import { STATIC_CONTENT_URL } from "../../env"
import AboutData from "../Components/AboutData"

function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container container grid">
                <picture className="about__img">
                    <source srcSet={`${STATIC_CONTENT_URL}/media/images/profile/about.avif`} type="image/avif" />
                    <source srcSet={`${STATIC_CONTENT_URL}/media/images/profile/about.webp`} type="image/webp" />
                    <img loading="lazy" src={`${STATIC_CONTENT_URL}/media/images/profile/about.webp`} alt="Memoji of Jean Paul Fernandez" width={350} height={350} />
                </picture>
                <AboutData />
            </div>
        </section>
    )
}

export default About