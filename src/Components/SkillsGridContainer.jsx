import SkillsBox from "./SkillsBox";

const skillsData = [
    {
        title: "Frontend Technologies",
        skills: [
            {
                name: "HTML",
                icon: "/icons/html5.svg",
            },
            {
                name: "CSS",
                icon: "/icons/css.svg",
            },
            {
                name: "JavaScript",
                icon: "/icons/javascript.svg",
            },
            {
                name: "TailwindCSS",
                icon: "/icons/tailwindcss.svg",
            },
            {
                name: "Bootstrap",
                icon: "/icons/bootstrap.svg",
            },
            {
                name: "React",
                icon: "/icons/react.svg",
            },
            {
                name: "NextJS",
                icon: "/icons/nextjs.svg",
            },
            {
                name: "Astro",
                icon: "/icons/Astro_light.svg",
                alticon: "/icons/Astro_dark.svg",
            },
            {
                name: "Flutter",
                icon: "/icons/flutter.svg",
            },
        ]
    },
    {
        title: "Backend Technologies",
        skills: [
            {
                name: "NodeJS",
                icon: "/icons/nodejs.svg",
            },
            {
                name: "ExpressJS",
                icon: "/icons/Express.js_light.svg",
                alticon: "/icons/Express.js_dark.svg",
            },
            {
                name: "Flask",
                icon: "/icons/Flask_light.svg",
                alticon: "/icons/Flask_dark.svg",
            },
            {
                name: "Django",
                icon: "/icons/django.svg",
            },
            {
                name: "Laravel",
                icon: "/icons/laravel.svg",
            },
            {
                name: "MySQL",
                icon: "/icons/mysql.svg",
            },
            {
                name: "MongoDB",
                icon: "/icons/mongodb.svg",
            },
            {
                name: "Firebase",
                icon: "/icons/firebase.svg",
            }
        ]
    },
    {
        title: "Programming Languages",
        skills: [
            {
                name: "Python",
                icon: "/icons/python.svg",
            },
            {
                name: "Java",
                icon: "/icons/java.svg",
            },
            {
                name: "C",
                icon: "/icons/c.svg",
            },
            {
                name: "C#",
                icon: "/icons/csharp.svg",
            },
            {
                name: "Go",
                icon: "/icons/go.svg",
            },
            {
                name: "PHP",
                icon: "/icons/Php_light.svg",
                alticon: "/icons/Php_dark.svg",
            },
            {
                name: "Swift",
                icon: "/icons/swift.svg",
            },
            {
                name: "Kotlin",
                icon: "/icons/kotlin.svg",
            }
        ]
    },
    {
        title: "Tools & Technologies",
        skills: [
            {
                name: "Git",
                icon: "/icons/git.svg",
            },
            {
                name: "Docker",
                icon: "/icons/docker.svg",
            },
            {
                name: "Linux",
                icon: "/icons/linux.svg",
            },
            {
                name: "AWS",
                icon: "/icons/aws.svg",
            },
            {
                name: "Azure",
                icon: "/icons/azure.svg",
            },
            {
                name: "Cloudflare",
                icon: "/icons/cloudflare.svg",
            },
            {
                name: "VS Code",
                icon: "/icons/vscode.svg",
            },
            {
                name: "Figma",
                icon: "/icons/figma.svg",
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