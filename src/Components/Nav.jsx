import { useEffect, useState } from "react";
import NavLogo from "../Atoms/NavLogo";
import NavMenu from "../Molecules/NavMenu";
import NavMenuAlt from "../Molecules/NavMenuAlt";

function Nav({ page }) {
    const [isLanding, setIsLanding] = useState(false)

    useEffect(() => {
        if (page === "Landing") {
            setIsLanding(true)
        }
    }, [page])

    return (
        <nav className="nav container">
            <NavLogo />
            { isLanding ? <NavMenu /> : <NavMenuAlt page={ page } /> }
            <i className="bx bx-moon change-theme" id="theme-button"></i>
        </nav>
    )
}

export default Nav;