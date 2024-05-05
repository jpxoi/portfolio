/* eslint-disable react/no-unknown-property */
import HomeData from "../Components/HomeData";
import HomeSocial from "../Components/HomeSocial";

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <HomeData />

                <div className="home__handle">
                    <picture className="home__img">
                        <source srcSet="https://static.jpxoi.com/media/uploads/profile.avif" type="image/avif" />
                        <source srcSet="https://static.jpxoi.com/media/uploads/profile.webp" type="image/webp" />
                        <img fetchpriority="high" src="https://static.jpxoi.com/media/uploads/profile.webp" alt="Stand up Memoji of Jean Paul Fernandez" className="home__img" width={220} height={381.05} />
                    </picture>
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