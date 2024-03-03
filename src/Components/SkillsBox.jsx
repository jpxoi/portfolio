import { useEffect, useState } from "react";

function SkillsBox({ title, skills }) {
    const skillsData = skills;

    const [darkMode, setDarkMode] = useState(null);

    useEffect(() => {
        function checkFirstTheme() {
            localStorage.getItem("selected-theme") === "dark" ? setDarkMode(false) : setDarkMode(true);
            console.log(localStorage.getItem("selected-theme"));
        }

        function checkTheme() {
            localStorage.getItem("selected-theme") === "dark" ? setDarkMode(true) : setDarkMode(false);
            console.log(localStorage.getItem("selected-theme"));
        }

        checkFirstTheme();

        const themeElement = document.getElementById("theme-button");

        themeElement.addEventListener("click", () => {
            checkTheme();
        }
        );
    }, []);

    return (
        <div className="skills__content">
            <h3 className="skills__title">{title}</h3>

            <div className="skills__box flex flex-wrap">
                {skillsData.map((skill, index) => (
                    <div key={index} id={skill.name} className="skills__data flex justify-center items-center mt-8 w-12 h-12 group">
                        <div className="skills__icon">
                            <img loading="lazy" src={ darkMode ? skill.alticon || skill.icon : skill.icon } alt={skill.name} className="skills__img w-10 h-10 drop-shadow-sm group-hover:drop-shadow-xl" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsBox;
