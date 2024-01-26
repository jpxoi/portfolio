function ProjectsCard({ name, description, link, img, cta }) {

    return (
        <div className="projects__card swiper-slide">
            <img loading="lazy" src={ img } alt={ name } className="projects__img" width={470} height={264.34} />

            <h3 className="projects__name">{ name}</h3>
            <p className="projects__description">
                { description }
            </p>

            <br/>
            
            <a href={ link } target="_blank" rel="noreferrer" className="work__button">
                { cta } <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
        </div>
    )
}

export default ProjectsCard;