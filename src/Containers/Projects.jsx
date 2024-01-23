import ProjectsSwiperWrapper from "../Components/ProjectsSwiperWrapper";

function Projects() {
    return (
        <section className="projects section">
            <span className="section__subtitle">My Side Projects</span>
            <h2 className="section__title">Personal Projects</h2>

            <div className="projects__container container swiper">
                <ProjectsSwiperWrapper />

                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}

export default Projects;