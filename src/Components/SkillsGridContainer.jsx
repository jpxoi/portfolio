import SkillsBox from "./SkillsBox";
import { STATIC_CONTENT_URL } from "../../env";

const skillsData = [
    {
        title: "Frontend Technologies",
        skills: [
            {
                name: "HTML",
                icon: `${STATIC_CONTENT_URL}/icons/html5.svg`,
            },
            {
                name: "CSS",
                icon: `${STATIC_CONTENT_URL}/icons/css.svg`,
            },
            {
                name: "JavaScript",
                icon: `${STATIC_CONTENT_URL}/icons/javascript.svg`,
            },
            {
                name: "TailwindCSS",
                icon: `${STATIC_CONTENT_URL}/icons/tailwindcss.svg`,
            },
            {
                name: "Bootstrap",
                icon: `${STATIC_CONTENT_URL}/icons/bootstrap.svg`,
            },
            {
                name: "React",
                icon: `${STATIC_CONTENT_URL}/icons/react.svg`,
            },
            {
                name: "NextJS",
                icon: `${STATIC_CONTENT_URL}/icons/nextjs.svg`,
            },
            {
                name: "Astro",
                icon: `${STATIC_CONTENT_URL}/icons/Astro_light.svg`,
                alticon: `${STATIC_CONTENT_URL}/icons/Astro_dark.svg`,
            },
            {
                name: "Flutter",
                icon: `${STATIC_CONTENT_URL}/icons/flutter.svg`,
            },
        ]
    },
    {
        title: "Backend Technologies",
        skills: [
            {
                name: "NodeJS",
                icon: `${STATIC_CONTENT_URL}/icons/nodejs.svg`,
            },
            {
                name: "ExpressJS",
                icon: `${STATIC_CONTENT_URL}/icons/Express.js_light.svg`,
                alticon: `${STATIC_CONTENT_URL}/icons/Express.js_dark.svg`,
            },
            {
                name: "Flask",
                icon: `${STATIC_CONTENT_URL}/icons/Flask_light.svg`,
                alticon: `${STATIC_CONTENT_URL}/icons/Flask_dark.svg`,
            },
            {
                name: "Django",
                icon: `${STATIC_CONTENT_URL}/icons/django.svg`,
            },
            {
                name: "Laravel",
                icon: `${STATIC_CONTENT_URL}/icons/laravel.svg`,
            },
            {
                name: "MySQL",
                icon: `${STATIC_CONTENT_URL}/icons/mysql.svg`,
            },
            {
                name: "MongoDB",
                icon: `${STATIC_CONTENT_URL}/icons/mongodb.svg`,
            },
            {
                name: "Firebase",
                icon: `${STATIC_CONTENT_URL}/icons/firebase.svg`,
            }
        ]
    },
    {
        title: "Programming Languages",
        skills: [
            {
                name: "Python",
                icon: `${STATIC_CONTENT_URL}/icons/python.svg`,
            },
            {
                name: "Java",
                icon: `${STATIC_CONTENT_URL}/icons/java.svg`,
            },
            {
                name: "C",
                icon: `${STATIC_CONTENT_URL}/icons/c.svg`,
            },
            {
                name: "C#",
                icon: `${STATIC_CONTENT_URL}/icons/csharp.svg`,
            },
            {
                name: "Go",
                icon: `${STATIC_CONTENT_URL}/icons/go.svg`,
            },
            {
                name: "PHP",
                icon: `${STATIC_CONTENT_URL}/icons/Php_light.svg`,
                alticon: `${STATIC_CONTENT_URL}/icons/Php_dark.svg`,
            },
            {
                name: "Swift",
                icon: `${STATIC_CONTENT_URL}/icons/swift.svg`,
            },
            {
                name: "Kotlin",
                icon: `${STATIC_CONTENT_URL}/icons/kotlin.svg`,
            }
        ]
    },
    {
        title: "Tools & Technologies",
        skills: [
            {
                name: "Git",
                icon: `${STATIC_CONTENT_URL}/icons/git.svg`,
            },
            {
                name: "Docker",
                icon: `${STATIC_CONTENT_URL}/icons/docker.svg`,
            },
            {
                name: "Linux",
                icon: `${STATIC_CONTENT_URL}/icons/linux.svg`,
            },
            {
                name: "AWS",
                icon: `${STATIC_CONTENT_URL}/icons/aws.svg`,
            },
            {
                name: "Azure",
                icon: `${STATIC_CONTENT_URL}/icons/azure.svg`,
            },
            {
                name: "Cloudflare",
                icon: `${STATIC_CONTENT_URL}/icons/cloudflare.svg`,
            },
            {
                name: "VS Code",
                icon: `${STATIC_CONTENT_URL}/icons/vscode.svg`,
            },
            {
                name: "Figma",
                icon: `${STATIC_CONTENT_URL}/icons/figma.svg`,
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