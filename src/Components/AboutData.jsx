import AboutInfo from "../Molecules/AboutInfo";

function AboutData() {
    return (
        <div className="about__data">
            <AboutInfo />

            <p className="about__description text-pretty">
                My name is Jean Paul Fernandez, but in the digital world I am known as <span className="text-first_color">@jpxoi</span>. My journey into the world of programming began at the age of 15, and since then I have accumulated vast experience in both web and application development.
            </p>
            <p className="about__description text-pretty">
                Currently, I&apos;m a first-year undergraduate student at the University of Manchester, proficient in software development, and an accomplished content creator. With a profound proficiency in crafting innovative solutions through coding, I bring a dynamic and forward-thinking approach to the world of technology.
            </p>
            <p className="about__description text-pretty">
                Beyond programming, I am also a versatile content creator, showcasing my ability to communicate ideas effectively through various mediums. My portfolio reflects not only my technical prowess but also my creative flair, demonstrating a well-rounded skill set that extends beyond traditional programming boundaries.
            </p>

        </div>
    )
}

export default AboutData;