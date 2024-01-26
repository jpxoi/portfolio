import SocialLink from "../Atoms/SocialLink";

function HomeSocial() {
    return (
        <div className="home__social">
            <SocialLink route="https://linkedin.com/in/jpxoi" icon="bx bxl-linkedin-square" alt="linkedin social button" />
            <SocialLink route="https://github.com/jpxoi" icon="bx bxl-github" alt="github social button" />
            <SocialLink route="https://instagram.com/jpxoi" icon="bx bxl-instagram" alt="instagram social button" />
        </div>
    )
}

export default HomeSocial;