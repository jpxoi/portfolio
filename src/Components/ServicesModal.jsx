import ServicesModalItem from "../Atoms/ServicesModalItem"

function ServicesModal(props) {

    return (
        <div className="services__modal">
            <div className="services__modal-content max-h-[90dvh]">
                <i className="bx bx-x services__modal-close"></i>
                <div className="max-h-[75dvh] overflow-scroll">
                    <h4 className="services__modal-title">{ props.title }</h4>

                    <p className="services__modal-description text-pretty">{ props.description }</p>

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
        </div>
    )
}

export default ServicesModal