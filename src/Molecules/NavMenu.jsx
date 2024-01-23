import { useEffect } from "react"
import NavItem from "../Atoms/NavItem"

function NavMenu() {

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]")

        function scrollActive() {
            const scrollY = window.scrollY

            console.log(sections)

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute("id")

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
                } else {
                    document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
                }
            })
        }

        window.addEventListener("scroll", scrollActive)
    }, [])

    return (
        <div className="nav__menu">
            <ul className="nav__list">
                <NavItem route="#home" alt="home button" icon="bx bx-home-alt" status="active" />
                <NavItem route="#about" alt="about button" icon="bx bx-user" />
                <NavItem route="#skills" alt="skills button" icon="bx bx-book" />
                <NavItem route="#work" alt="work button" icon="bx bx-briefcase-alt-2" />
                <NavItem route="#contact" alt="contact button" icon="bx bx-message-square-detail" />
            </ul>
        </div>
    )
}

export default NavMenu