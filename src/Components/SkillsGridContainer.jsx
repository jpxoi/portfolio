import SkillsBox from "./SkillsBox";

const skillsData = [
    {
        title: "Frontend Technologies",
        skills: [
            {
                name: "HTML",
                icon: "https://static.jpxoi.com/icons/html5.svg",
            },
            {
                name: "CSS",
                icon: "https://static.jpxoi.com/icons/css.svg",
            },
            {
                name: "JavaScript",
                icon: "https://static.jpxoi.com/icons/javascript.svg",
            },
            {
                name: "TailwindCSS",
                icon: "https://static.jpxoi.com/icons/tailwindcss.svg",
            },
            {
                name: "Bootstrap",
                icon: "https://static.jpxoi.com/icons/bootstrap.svg",
            },
            {
                name: "React",
                icon: "https://static.jpxoi.com/icons/react.svg",
            },
            {
                name: "NextJS",
                icon: "https://static.jpxoi.com/icons/nextjs.svg",
            },
            {
                name: "Astro",
                icon: "https://static.jpxoi.com/icons/Astro_light.svg",
                alticon: "https://static.jpxoi.com/icons/Astro_dark.svg",
            },
            {
                name: "Flutter",
                icon: "https://static.jpxoi.com/icons/flutter.svg",
            },
        ]
    },
    {
        title: "Backend Technologies",
        skills: [
            {
                name: "NodeJS",
                icon: "https://static.jpxoi.com/icons/nodejs.svg",
            },
            {
                name: "ExpressJS",
                icon: "https://static.jpxoi.com/icons/Express.js_light.svg",
                alticon: "https://static.jpxoi.com/icons/Express.js_dark.svg",
            },
            {
                name: "Flask",
                icon: "https://static.jpxoi.com/icons/Flask_light.svg",
                alticon: "https://static.jpxoi.com/icons/Flask_dark.svg",
            },
            {
                name: "Django",
                icon: "https://static.jpxoi.com/icons/django.svg",
            },
            {
                name: "Laravel",
                icon: "https://static.jpxoi.com/icons/laravel.svg",
            },
            {
                name: "MySQL",
                icon: "https://static.jpxoi.com/icons/mysql.svg",
            },
            {
                name: "MongoDB",
                icon: "https://static.jpxoi.com/icons/mongodb.svg",
            },
            {
                name: "Firebase",
                icon: "https://static.jpxoi.com/icons/firebase.svg",
            }
        ]
    },
    {
        title: "Programming Languages",
        skills: [
            {
                name: "Python",
                icon: "https://static.jpxoi.com/icons/python.svg",
            },
            {
                name: "Java",
                icon: "https://static.jpxoi.com/icons/java.svg",
            },
            {
                name: "C",
                icon: "https://static.jpxoi.com/icons/c.svg",
            },
            {
                name: "C#",
                icon: "https://static.jpxoi.com/icons/csharp.svg",
            },
            {
                name: "Go",
                icon: "https://static.jpxoi.com/icons/go.svg",
            },
            {
                name: "PHP",
                icon: "https://static.jpxoi.com/icons/Php_light.svg",
                alticon: "https://static.jpxoi.com/icons/Php_dark.svg",
            },
            {
                name: "Swift",
                icon: "https://static.jpxoi.com/icons/swift.svg",
            },
            {
                name: "Kotlin",
                icon: "https://static.jpxoi.com/icons/kotlin.svg",
            }
        ]
    },
    {
        title: "Tools & Technologies",
        skills: [
            {
                name: "Git",
                icon: "https://static.jpxoi.com/icons/git.svg",
            },
            {
                name: "Docker",
                icon: "https://static.jpxoi.com/icons/docker.svg",
            },
            {
                name: "Linux",
                icon: "https://static.jpxoi.com/icons/linux.svg",
            },
            {
                name: "AWS",
                icon: "https://static.jpxoi.com/icons/aws.svg",
            },
            {
                name: "Azure",
                icon: "https://static.jpxoi.com/icons/azure.svg",
            },
            {
                name: "Cloudflare",
                icon: "https://static.jpxoi.com/icons/cloudflare.svg",
            },
            {
                name: "VS Code",
                icon: "https://static.jpxoi.com/icons/vscode.svg",
            },
            {
                name: "Figma",
                icon: "https://static.jpxoi.com/icons/figma.svg",
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