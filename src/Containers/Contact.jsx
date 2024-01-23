import ContactForm from "../Components/ContactForm"
import ContactInfo from "../Components/ContactInfo"

function Contact() {

    return (
        <section className="contact section" id="contact">
            <span className="section__subtitle">Get In Touch</span>
            <h2 className="section__title">Contact Me</h2>

            <div className="contact__container container grid">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    ) 
}

export default Contact