import SkillsGridContainer from "../Components/SkillsGridContainer"

function Skills() {
    return (
        <section className="skills section" id="skills">
            <span className="section__subtitle">My Stack</span>
            <h2 className="section__title">Technologies</h2>

            <SkillsGridContainer />
        </section>
    )
}

export default Skills