import { useEffect } from "react";
import About from "../Containers/About";
import Contact from "../Containers/Contact";
import Footer from "../Containers/Footer";
import Header from "../Containers/Header";
import Home from "../Containers/Home";
import Projects from "../Containers/Projects";
import Services from "../Containers/Services";
import Skills from "../Containers/Skills";
import Work from "../Containers/Work";
import ScrollReveal from 'scrollreveal';

function Landing() {

  useEffect(() => {
    // Scroll Reveal Animation
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 500,
      delay: 100,
      // reset: true,
    })

    sr.reveal(".nav__item", {origin: "bottom", distance: "15px", duration: 200, interval: 100})

    sr.reveal(".section__title", {origin: "left"})
    sr.reveal(".section__subtitle", {origin:"right", delay: 50})

    sr.reveal(".home__data")
    sr.reveal(".home__handle", {delay: 100})
    sr.reveal(".home__social, .home__scroll", {delay: 200, origin: "bottom"})

    sr.reveal(".about__img", {distance:"15px", duration: 1500})
    sr.reveal(".about__data", {origin: "right"})
    sr.reveal(".about__box", {origin: "right", duration: 200, interval: 50})
    sr.reveal(".about__description", {origin: "right", delay: 200, duration: 200})

    sr.reveal(".skills__content", {duration: 300, interval: 30, distance: "30px"})
    sr.reveal(".skills__data", {origin: "bottom", duration: 200, interval: 10, distance: "15px"})

    sr.reveal(".services__card", {duration: 300, interval: 100, distance: "30px"})

    sr.reveal(".work__filters", {duration: 200})
    sr.reveal(".work__card", {delay: 100, duration: 200, interval: 20, distance: "15px"})

    sr.reveal("swiper-wrapper", {duration: 200})
    sr.reveal(".swiper-pagination", {delay: 50, duration: 200})

    sr.reveal(".contact__title", {duration: 200})
    sr.reveal(".contact__card", {origin: "left", delay: 100, duration: 200, interval: 50})
    sr.reveal(".contact__form", {origin: "right", delay: 100, duration: 300})

    sr.reveal(".footer__title", {duration: 200, distance: "15px"})
    sr.reveal(".footer__link", {delay: 100, duration: 300, interval: 30, distance: "15px"})
    sr.reveal(".footer__social-link", {delay: 100, duration: 300, interval: 30, distance: "15px"})
    sr.reveal(".footer__copy", {origin: "bottom", delay: 100, duration: 300, distance: "15px"})
  }, [])

  return (
    <>
      <Header page="Landing" />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Work />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Landing;