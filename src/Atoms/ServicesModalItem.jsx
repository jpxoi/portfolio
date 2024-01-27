function ServicesModalItem( props ) {
    return (
        <li className="services__modal-item">
            <i className="bx bx-check services__modal-icon"></i>
            <p className="services__modal-info text-pretty">
                <b>{ props.title }:</b> { props.description }
            </p>
        </li>
    )
}

export default ServicesModalItem