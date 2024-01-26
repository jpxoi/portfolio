import AboutBox from "../Atoms/AboutBox"

function AboutInfo() {
    return (
        <div className="about__info">
            <AboutBox icon="bx bx-award about__icon" title="Experience" subtitle="4 Years Working" />
            <AboutBox icon="bx bx-briefcase-alt about__icon" title="Completed" subtitle="20+ Projects" />
            <AboutBox icon='bx bxs-business about__icon' title="Worked" subtitle="3 Companies" />
        </div>
    )
}

export default AboutInfo