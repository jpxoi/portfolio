import FooterLink from "../Atoms/FooterLink";

function FooterList() {

    const footerList = [
        {
            id: "footer-link-1",
            title: "About",
            link: "#about",
            target_blank: false
        },
        {
            id: "footer-link-2",
            title: "Store",
            link: "https://shop.jpxoi.com",
            target_blank: true
        },
        {
            id: "footer-link-3",
            title: "Donate",
            link: "https://www.paypal.com/donate/?hosted_button_id=7FLJ7WSKMAYTQ",
            target_blank: true
        },
        {
            id: "footer-link-4",
            title: "Make a Payment",
            link: "https://pay.jpxoi.com",
            target_blank: true
        }
    ]

    return (
        <ul className="footer__list">
            {footerList.map((item) => (
                <FooterLink
                    key={item.id}
                    id = {item.id}
                    route={item.link}
                    target_blank={item.target_blank ? 1 : 0}
                    text={item.title}
                />
            ))}
        </ul>
    )
}

export default FooterList;