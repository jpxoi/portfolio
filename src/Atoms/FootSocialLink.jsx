function FootSocialLink({ link, icon, alt }) {
    return (
        <a href={ link } target="_blank" rel="noreferrer" className="footer__social-link" alt={ alt }>
            <i className={ icon }></i>
        </a>
    )
}

export default FootSocialLink