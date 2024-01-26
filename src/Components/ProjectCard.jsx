function ProjectCard(props) {

    
    return (
        <article className="project__card w-full mx-auto sm:w-[540px] md:w-[640px] lg:w-[740px] rounded-xl p-8 mb-8">
            <div className="project__card__info">
                <h3 className="project-card__title text-xl font-semibold text-first_color dark:text-first_color mb-2">{props.title}</h3>
                <p className="project-card__description text-normal mb-4 text-pretty">{props.description}.</p>
            </div>
            <div className="project__card__badges flex gap-x-2 gap-y-2 md:gap-y-0 flex-row flex-wrap mb-4">
                <span className="badge flex gap-x-2 rounded-full text-xs bg-[#00dcff] text-black py-1 px-2 items-center">
                    <i className="bx bxl-react"></i>
                    ReactJS
                </span>
                <span className="badge flex gap-x-2 rounded-full text-xs bg-[#00c0fe] text-black py-1 px-2 items-center">
                    <i className="bx bxl-tailwind-css"></i>
                    TailwindCSS
                </span>
                <span className="badge flex gap-x-2 rounded-full text-xs bg-[#F06529] text-white py-1 px-2 items-center">
                    <i className="bx bxl-html5"></i>
                    HTML
                </span>
                <span className="badge flex gap-x-2 rounded-full text-xs bg-[#264de4] text-white py-1 px-2 items-center">
                    <i className="bx bxl-css3"></i>
                    CSS
                </span>
                <span className="badge flex gap-x-2 rounded-full text-xs bg-[#F0DB4F] text-black py-1 px-2 items-center">
                    <i className="bx bxl-javascript"></i>
                    JavaScript
                </span>

            </div>
            <div className="project__card__img">
                <img loading="lazy" className="rounded shadow-2xl shadow-black/10 dark:shadow-white/10 aspect-video" src={props.img} alt="Screenshot of project" width={700} height={393.75} />
            </div>
            <div className="project-card__links flex gap-x-4 items-end justify-start mt-4">
                <a href={ props.link } target="_blank" rel="noreferrer" className="project__button">
                    Visit Site <i className="bx bx-right-arrow-alt project__icon"></i>
                </a>
                <a href={ props.github } target="_blank" rel="noreferrer" className="project__button">
                    View Source Code <i className="bx bx-right-arrow-alt project__icon"></i>
                </a>
            </div>
            
        </article>
    )
}

export default ProjectCard;