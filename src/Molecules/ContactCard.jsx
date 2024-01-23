import { useEffect } from "react"

function ContactCard({ id, title, data, link, cta, icon }) {

    useEffect(() => {
        const element = document.getElementById(id)
        console.log(element)
        element.classList.add(icon)
    }, [])

    return (
        <div className="contact__card">
            <i id={id} className="contact__card-icon bx"></i>
            <h3 className="contact__card-title">{ title }</h3>
            <span className="contact__card-data">{ data }</span>

            <a href={ link } target="_blank" rel="noreferrer" className="contact__button">
                { cta } <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
        </div>
    )
}

export default ContactCard