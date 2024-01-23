import NavLogo from "../Atoms/NavLogo";
import NavMenu from "../Molecules/NavMenu";

function Nav() {

    return (
        <nav className="nav container">
            <NavLogo />
            <NavMenu />
            
            <i className="bx bx-moon change-theme" id="theme-button"></i>
        </nav>
    )
}

export default Nav;