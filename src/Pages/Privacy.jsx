import { useEffect } from "react";
import Footer from "../Containers/Footer";
import Header from "../Containers/Header";
import PrivacyContainer from "../Containers/PrivacyContainer";
import ScrollReveal from 'scrollreveal';

function Privacy() {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "15px",
      duration: 300,
  })

  sr.reveal('h1,h2,h3', {delay: 100})
  sr.reveal('p', {delay: 200})
  sr.reveal(".nav__item", {delay: 300, origin: "bottom", distance: "15px"})
  }, [])

  return (
    <>
      <Header page="Privacy" />
      <main className="main">
        <PrivacyContainer />
      </main>
      <Footer />
    </>
  );
}

export default Privacy;