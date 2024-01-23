import { useEffect } from "react";
import ServicesCard from "../Components/ServicesCard";

const services = [
    {
        title: "UI/UX Design",
        description: "Elevate your digital presence with an unparalleled UI/UX design. I craft scalable and responsive applications, websites, and web platforms that are not just fast and reliable but interactive masterpieces.",
        items: [
            {
                title: "Prototyping & Wireframing",
                description: "From concept to reality, we bring your ideas to life through meticulous prototyping and wireframing."
            },
            {
                title: "Mobile and Web UI/UX Design",
                description: "Tailored solutions for both mobile and web platforms, ensuring a consistent and delightful user experience across devices."
            },
            {
                title: "Human-Centered Design",
                description: "Your users are at the core of our design philosophy. We create interfaces that resonate with their needs, ensuring a truly human-centric experience."
            },
            {
                title: "Accessibility Compliance",
                description: "We prioritize inclusivity. Our designs adhere to accessibility standards, making your digital presence welcoming to all."
            },
            {
                title: "Responsive Design",
                description: "Seamlessly adapt to the diverse digital landscape with our priority on responsive design. Your users get an optimal experience, regardless of the device they use."
            }
        ]
    },
    {
        title: "Software Development",
        description: "Are you ready to transform your ideas into high-performing, innovative software solutions? Look no further! I build robust, scalable, and secure software that are tailored to your needs.",
        items: [
            {
                title: "Customized Software Solutions",
                description: "Tailored software development that aligns perfectly with your unique business requirements."
            },
            {
                title: "Cutting-edge Technologies",
                description: "Stay ahead of the curve with the latest and most robust technologies in the industry."
            },
            {
                title: "Scalable Architecture",
                description: "Future-proof your software with scalable and flexible architectures, ensuring growth and adaptability."
            },
            {
                title: "User-Centric Design",
                description: "Seamlessly blend functionality with an exceptional user experience through our UI/UX design expertise."
            },
            {
                title: "Agile Development",
                description: "Embrace flexibility and responsiveness with our agile development methodology, ensuring quick iterations and constant improvements."
            },
            {
                title: "Quality Assurance",
                description: "Rigorous testing processes to guarantee the reliability, security, and performance of your software."
            }
        ]
    },
    {
        title: "Front-end Development",
        description: "Empower your digital presence with a websites that not only aligns with your unique vision but also address your business needs and solve critical challenges.",
        items: [
            {
                title: "Front-end Architecture & Design",
                description: "We architect visually stunning and functionally robust front-end structures, ensuring a solid foundation for your digital space."
            },
            {
                title: "Single Page Applications (SPAs)",
                description: "Elevate user engagement with seamless, dynamic experiences through our expertise in developing SPAs."
            },
            {
                title: "Progressive Web Apps",
                description: "Embrace the future of web applications with our proficiency in building Progressive Web Apps using cutting-edge technologies like React."
            },
            {
                title: "HTML & CSS Responsive Web Design",
                description: "Ensure your website looks impeccable on every device with our responsive web design solutions, driven by HTML and CSS mastery."
            },
            {
                title: "Maintenance and Support",
                description: "Beyond the launch, we provide ongoing maintenance and support, ensuring your website remains at its peak performance."
            }
        ]
    }
]

function Services() {

    useEffect(() => {
        const   modalViews = document.querySelectorAll(".services__modal"),
                modalBtns = document.querySelectorAll(".services__button"),
                modalClose = document.querySelectorAll(".services__modal-close")
    
        let modal = function(modalClick) {
            modalViews[modalClick].classList.add("active-modal")
        }
    
        modalBtns.forEach((mb, i) => {
            mb.addEventListener("click", () => {
                modal(i)
            })
        })
    
        modalClose.forEach((mc) => {
            mc.addEventListener("click", () => {
                modalViews.forEach((mv) => {
                    mv.classList.remove("active-modal")
                })
            })
        })
    }, [])

    return (
        <section className="services section">
            <span className="section__subtitle">My Services</span>
            <h2 className="section__title">What I Offer</h2>

            <div className="services__container container grid">
                {services.map((service, index) => (
                    <ServicesCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        items={service.items}
                    />
                ))}
            </div>
        </section>
    )
}

export default Services;