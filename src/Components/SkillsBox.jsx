import SkillsItem from "../Atoms/SkillsItem";

function SkillsBox({ title, skills }) {
    const skillsData = skills;

    function getSkillsGroups(skills) {
        const half = Math.ceil(skills.length / 2);
        const firstHalf = skills.slice(0, half);
        const secondHalf = skills.slice(-half);

        return [firstHalf, secondHalf];
    }

    const [firstHalf, secondHalf] = skillsData ? getSkillsGroups(skillsData) : [[], []];

    return (
        <div className="skills__content">
            <h3 className="skills__title">{title}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    {firstHalf.map((item) => (
                        <SkillsItem key={item.name} name={item.name} level={item.level} />
                    ))}
                </div>

                <div className="skills__group">
                    {secondHalf.map((item) => (
                        <SkillsItem key={item.name} name={item.name} level={item.level} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillsBox;
