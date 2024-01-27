import SocialLink from "../Atoms/SocialLink";

function HomeSocial() {
    return (
        <div className="home__social">
            <SocialLink route="https://linkedin.com/in/jpxoi" icon="bx bxl-linkedin-square" alt="linkedin social button" aria_label="LinkedIn" />
            <SocialLink route="https://github.com/jpxoi" icon="bx bxl-github" alt="github social button" aria_label="GitHub" />
            <SocialLink route="https://instagram.com/jpxoi" icon="bx bxl-instagram" alt="instagram social button" aria_label="Instagram" />
        </div>
    )
}

export default HomeSocial;