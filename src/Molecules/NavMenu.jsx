import NavItem from "../Atoms/NavItem"

function NavMenu() {
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