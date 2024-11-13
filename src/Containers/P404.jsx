import { STATIC_CONTENT_URL } from '../../env'
import Footer404 from './Footer404'
import './P404.css'

export default function P404() {
    return (
        <section className="p404">
            <div className="p404__container container">
                <div className="p404__data">
                    <span className="p404__subtitle">Error 404</span>
                    <h1 className="p404__title">Hey Buddy</h1>
                    <p className="p404__description">
                        We can&apos;t seem to find the page <br/> you are looking for.
                    </p>
                    <a href="/" className="p404__button">
                        Return to Home
                    </a>
                </div>

                <div className="p404__img">
                    <picture>
                        <source srcSet={`${STATIC_CONTENT_URL}/media/images/resources/ghost-img.avif`} type="image/avif" />
                        <source srcSet={`${STATIC_CONTENT_URL}/media/images/resources/ghost-img.webp`} type="image/webp" />
                        <img src={`${STATIC_CONTENT_URL}/media/images/resources/ghost-img.webp`} alt="Ghost Image"/>
                    </picture>
                    <div className="p404__shadow"></div>
                </div>
            </div>

            <Footer404 />
        </section>
    )
}