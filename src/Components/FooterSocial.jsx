import FootSocialLink from "../Atoms/FootSocialLink"

const socialData = [
    {
        id: 1,
        link: "https://facebook.com/jpxoix",
        icon: "bx bxl-facebook",
        alt: "facebook social button",
    },
    {
        id: 2,
        link: "https://instagram.com/jpxoi",
        icon: "bx bxl-instagram",
        alt: "instagram social button",
    },
    {
        id: 3,
        link: "https://twitter.com/jpxoi",
        icon: "bx bxl-twitter",
        alt: "twitter social button",
    }
]

function FooterSocial() {
    return (
        <ul className="footer__social">
            {socialData.map((social) => (
                <FootSocialLink
                    key={social.id}
                    link={social.link}
                    icon={social.icon}
                    alt={social.alt}
                />
            ))}
        </ul>
    )
}

export default FooterSocial