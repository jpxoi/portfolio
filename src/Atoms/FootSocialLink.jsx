function FootSocialLink({ link, icon, alt }) {
    return (
        <li>
            <a href={ link } target="_blank" rel="noreferrer" className="footer__social-link" alt={ alt } aria-label={ alt }>
                <i className={ icon }></i>
                <span className="hidden">{ alt }</span>
            </a>
        </li>
        
    )
}

export default FootSocialLink