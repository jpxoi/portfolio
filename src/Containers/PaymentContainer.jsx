import './PaymentContainer.css'

function PaymentContainer() {
    return (
        <div className="section payment__container">
            <h1 className="section__title">Payment Gateway</h1>

            <div className="payment__form">
                <form action="">
                    <div className="contact__form-div">
                        <label htmlFor="reference-number" className="contact__form-tag">Reference</label>
                        <input type="text" placeholder="Insert your payment reference or invoice number" id="reference-number" name="reference-number" className="contact__form-input" />
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default PaymentContainer