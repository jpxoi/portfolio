import SkillsBox from "./SkillsBox";

const skillsData = [
    {
        title: "Frontend Technologies",
        skills: [
            {
                name: "HTML",
                level: "Advanced"
            },
            {
                name: "CSS",
                level: "Advanced"
            },
            {
                name: "JavaScript",
                level: "Advanced"
            },
            {
                name: "React",
                level: "Advanced"
            },
            {
                name: "TailwindCSS",
                level: "Advanced"
            },
            {
                name: "Bootstrap",
                level: "Intermediate"
            }
        ]
    },
    {
        title: "Backend Technologies",
        skills: [
            {
                name: "NodeJS",
                level: "Advanced"
            },
            {
                name: "Flask",
                level: "Advanced"
            },
            {
                name: "MySQL",
                level: "Advanced"
            },
            {
                name: "PHP",
                level: "Intermediate"
            },
            {
                name: "Firebase",
                level: "Intermediate"
            }
        ]
    },
    {
        title: "Programming Languages",
        skills: [
            {
                name: "Python",
                level: "Advanced"
            },
            {
                name: "C/C++",
                level: "Advanced"
            },
            {
                name: "Java",
                level: "Advanced"
            },
            {
                name: "Swift",
                level: "Intermediate"
            },
            {
                name: "Go",
                level: "Intermediate"
            },
            {
                name: "Kotlin",
                level: "Intermediate"
            }
        ]
    },
    {
        title: "Tools & Technologies",
        skills: [
            {
                name: "Git",
                level: "Advanced"
            },
            {
                name: "Docker",
                level: "Advanced"
            },
            {
                name: "Linux",
                level: "Advanced"
            },
            {
                name: "AWS",
                level: "Intermediate"
            },
            {
                name: "Vercel",
                level: "Intermediate"
            },
            {
                name: "Azure",
                level: "Intermediate"
            }
        ]
    }
]

function SkillsGridContainer() {
    return (
        <div className="skills__container container grid">
            {
                skillsData.map((item, index) => (
                    <SkillsBox key={index} title={item.title} skills={item.skills} />
                ))
            }
        </div>
    )
}

export default SkillsGridContainer;