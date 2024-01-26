import { useEffect } from "react"

function NavItem(props) {

    useEffect(() => {
        const status = props.status
        
        if (status === "active") {
            const navItem = document.querySelector(".nav__link")
            navItem.classList.add("active-link")
        }

    }, [props.status])

    return (
        <li className="nav__item">
            <a href={ props.route } className="nav__link" alt={ props.alt } aria-label={ props.alt }>
                <i className={ props.icon }></i> { props.type === "return" ? <span className="return__button__text">Click Here to Return </span> : null }
            </a>
        </li>
    )
}

export default NavItem