import { CSSBadge, FlaskBadge, HTMLBadge, JavaScriptBadge, PythonBadge, ReactBadge, TailwindBadge } from "../Atoms/Badges";

function ProjectCard(props) {("HTML" in props.stack)
    
    return (
        <article className="project__card w-full mx-auto sm:w-[540px] md:w-[640px] lg:w-[740px] rounded-xl mb-8">
            <div className="project__card__info">
                <h3 className="project-card__title text-xl font-semibold text-first_color mb-2">{props.title}</h3>
                <p className="project-card__description text-normal mb-4 text-pretty">{props.description}.</p>
            </div>
            <div className="project__card__badges flex gap-x-2 gap-y-2 md:gap-y-0 flex-row flex-wrap mb-4">
                {
                    (props.stack.includes("ReactJS")) ? <ReactBadge /> : null
                }
                {
                    (props.stack.includes("TailwindCSS")) ? <TailwindBadge /> : null
                }
                {
                    (props.stack.includes("HTML")) ? <HTMLBadge /> : null
                }
                {
                    (props.stack.includes("CSS")) ? <CSSBadge /> : null
                }
                {
                    (props.stack.includes("JavaScript")) ? <JavaScriptBadge /> : null
                }
                {
                    (props.stack.includes("Flask")) ? <FlaskBadge /> : null
                }
                {
                    (props.stack.includes("Python")) ? <PythonBadge /> : null
                }

            </div>
            <div className="project__card__img">
                <img loading="lazy" className="rounded-lg shadow-2xl shadow-black/10 dark:shadow-white/10 aspect-video" src={props.img} alt={props.alt} width={700} height={393.75} />
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