import { useEffect } from "react";

function HomeData() {
    
    /* Dynamic Header */
    useEffect(() => {
        const headerTexts = ["Software Engineer", "Frontend Developer", "Backend Developer", "UI/UX Designer", "Content Creator"];
        const dynamicHeader = document.getElementById("dynamic-header");

        let i = 0;
        dynamicHeader.innerHTML = headerTexts[i];

        setInterval(() => {
            i = (i + 1) % headerTexts.length;
            dynamicHeader.style.opacity = 0;
            setTimeout(() => {
                dynamicHeader.textContent = headerTexts[i];
                dynamicHeader.style.opacity = 1;
            }, 500);
        }, 3000);
    }, [])

    return(
        <div className="home__data">
            <span className="home__greeting">Hello, I&apos;m</span>
            <h1 className="home__name">Jean Paul Fernandez</h1>
            <h3 id="dynamic-header" className="home__education">Software Engineer</h3>

            <div className="home__buttons">
                <a download="" href="pdf/resume.pdf" target="_blank" className="button button--ghost">
                    Download Resume
                </a>

                <a href="#about" className="button">About Me</a>
            </div>
        </div>
    )
}

export default HomeData;