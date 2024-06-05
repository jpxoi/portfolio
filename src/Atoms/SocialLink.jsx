function SocialLink(props) {

    return (
        <a href={ props.route } target="_blank" rel="noreferrer" className="home__social-link" alt={ props.alt } aria-label={ props.aria_label }>
            <i className={ props.icon }></i>
            <span className="hidden">{ props.aria_label }</span>
        </a>
    )
}

export default SocialLink;