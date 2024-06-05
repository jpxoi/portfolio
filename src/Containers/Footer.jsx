import FooterList from "../Components/FooterList"
import FooterSocial from "../Components/FooterSocial"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <h2 className="footer__title">Jean Paul Fernandez</h2>

                <FooterList />

                <FooterSocial />

                <span className="footer__copy">
                    &#169; 2024 Jean Paul Fernandez. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer