import { useEffect } from "react";

function FooterLink({ id, route, target_blank, text }) {

    useEffect(() => {
        const link = document.getElementById(id)

        if (target_blank === 1) {
            link.setAttribute("target", "_blank")
            link.setAttribute("rel", "noreferrer")
            console.log("target_blank is 1")
        }
    }, [])

    return (
        <li>
            <a id={ id } href={ route } rel="noreferrer" className="footer__link">{ text }</a>
        </li>
    )
}

export default FooterLink;