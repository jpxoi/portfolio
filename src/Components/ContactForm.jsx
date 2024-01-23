function ContactForm() {
    return (
        <div className="contact__content">
            <h3 className="contact__title">Write me about your project</h3>

            <form action="https://formcarry.com/s/IdMAAJSEpJf" method="POST" encType="multipart/form-data" className="contact__form" name="contactForm">
                <div className="contact__form-div">
                    <label htmlFor="name" className="contact__form-tag">Full Name</label>
                    <input type="text" placeholder="Insert your name" className="contact__form-input" id="name" name="name" autoComplete="name" />
                </div>

                <div className="contact__form-div">
                    <label htmlFor="email" className="contact__form-tag">Email</label>
                    <input type="email" placeholder="Insert your email" className="contact__form-input" id="email" name="email" autoComplete="email" />
                </div>

                <div className="contact__form-div contact__form-area">
                    <label htmlFor="message" className="contact__form-tag">Message</label>
                    <textarea placeholder="Describe your project" className="contact__form-input" id="message" name="message" cols="30" rows="10"></textarea>
                </div>

                <button type="submit" className="button">Send Message</button>

            </form>
        </div>
    )
}

export default ContactForm