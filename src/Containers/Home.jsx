import ProfileImg from '../assets/profile.webp'
import HomeData from "../Components/HomeData";
import HomeSocial from "../Components/HomeSocial";

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <HomeData />

                <div className="home__handle">
                    <img src={ProfileImg} alt="Stand up Memoji of Jean Paul Fernandez" className="home__img" width={220} height={381.05} />
                </div>

                <HomeSocial />

                <a href="#about" className="home__scroll">
                    <i className="bx bx-mouse home__scroll-icon"></i>
                    <span className="home__scroll-name">Scroll Down</span>
                </a>
            </div>
        </section>
    );
}

export default Home;