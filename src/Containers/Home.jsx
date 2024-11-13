/* eslint-disable react/no-unknown-property */
import HomeData from "../Components/HomeData";
import HomeSocial from "../Components/HomeSocial";
import { STATIC_CONTENT_URL } from "../../env";

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <HomeData />

                <div className="home__handle">
                    <picture className="home__img">
                        <source srcSet={`${STATIC_CONTENT_URL}/media/images/profile/profile.avif`} type="image/avif" />
                        <source srcSet={`${STATIC_CONTENT_URL}/media/images/profile/profile.webp`} type="image/webp" />
                        <img rel="preload" fetchpriority="high" as="image" src={`${STATIC_CONTENT_URL}/media/images/profile/profile.webp`} alt="Stand up Memoji of Jean Paul Fernandez" className="home__img" width={220} height={381.05} />
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