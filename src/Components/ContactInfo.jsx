import ContactCard from "../Molecules/ContactCard"

const contactData = [
    {
        id: "email-contact-card-icon",
        title: "Email",
        data: "hello@jpxoi.com",
        link: "mailto:hello@jpxoi.com",
        cta: "Write Me",
        icon: "bx-mail-send"
    },
    {
        id: "whatsapp-contact-card-icon",
        title: "Whatsapp",
        data: "+44 7787 024710",
        link: "https://wa.me/5215512345678",
        cta: "Text Me",
        icon: "bxl-whatsapp"
    },
    {
        id: "phone-contact-card-icon",
        title: "Phone",
        data: "+44 7787 024710",
        link: "tel:+44 7787 024710",
        cta: "Call Me",
        icon: "bx-phone-call"
    }
]

function ContactInfo() {
    return (
        <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>

            <div className="contact__info">
                {
                    contactData.map((contactCard) => {
                        return <ContactCard
                            key={contactCard.id}
                            id={contactCard.id}
                            title={contactCard.title}
                            data={contactCard.data}
                            link={contactCard.link}
                            cta={contactCard.cta}
                            icon={contactCard.icon}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default ContactInfo