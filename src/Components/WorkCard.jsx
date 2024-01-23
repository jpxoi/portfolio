import { useEffect } from "react"

function WorkCard (props) {

    useEffect(() => {
        const element = document.querySelector(".work__card")
        const category = props.category

        element.classList.add(category)
    }, [props.category])
    return (
        <div className="work__card mix web">
            <img loading="lazy" src={ props.img } alt={ props.alt } className="work__img" />

            <h3 className="work__title">{ props.title }</h3>

            <a href={ props.link } target="_blank" rel="noreferrer" className="work__button">
                { props.cta } <i className="bx bx-right-arrow-alt work__icon"></i>
             </a>
        </div>
    )
}

export default WorkCard;