function SocialLink(props) {

    return (
        <a href={ props.route } target="_blank" rel="noreferrer" className="home__social-link" alt={ props.alt }>
            <i className={ props.icon }></i>
        </a>
    )
}

export default SocialLink;