import ServicesModalItem from "../Atoms/ServicesModalItem"

function ServicesModal(props) {

    return (
        <div className="services__modal">
            <div className="services__modal-content">
                <i className="bx bx-x services__modal-close"></i>

                <h3 className="services__modal-title">{ props.title }</h3>

                <p className="services__modal-description">{ props.description }</p>

                <ul className="services__modal-list">
                    {props.items.map((item, index) => (
                        <ServicesModalItem
                            key={index}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ServicesModal