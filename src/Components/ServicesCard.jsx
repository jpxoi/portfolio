import ServicesModal from "./ServicesModal"

function ServicesCard(props) {
    return (
        <div className="services__card">
            <h3 className="services__title">{ props.title }</h3>

            <span className="services__button">
                See More <i className="bx bx-right-arrow-alt services__icon"></i>
            </span>

            <ServicesModal
                title={props.title}
                description={props.description}
                items={props.items}
            />

        </div>
    )
}

export default ServicesCard