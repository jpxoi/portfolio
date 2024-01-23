import { useEffect, useState } from "react"
import NavItem from "../Atoms/NavItem"

function NavMenuAlt({ page }) {

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]")

        function scrollActive() {
            const scrollY = window.scrollY

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

        const navList = document.querySelector(".nav__list")
        navList.classList.add("nav__list__alt")

        window.addEventListener("scroll", scrollActive)

        if (page === "404Error") {
            setIsError(true)
        }
    }, [])

    if (isError) {
        console.log(isError)
    }

    else {
        return (
            <div className="nav__menu">
                <ul className="nav__list">
                    <NavItem route="/" alt="home button" icon="bx bx-home-alt" type="return"/>
                </ul>
            </div>
        )
    }
}

export default NavMenuAlt