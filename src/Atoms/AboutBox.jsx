function AboutBox(props) {
    return (
        <div className="about__box">
            <i className={ props.icon }></i>
            <h3 className="about__title">{ props.title }</h3>
            <span className="about__subtitle">{ props.subtitle }</span>
        </div>
    )
}

export default AboutBox;