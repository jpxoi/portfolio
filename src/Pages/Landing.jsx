import About from "../Containers/About";
import Contact from "../Containers/Contact";
import Footer from "../Containers/Footer";
import Header from "../Containers/Header";
import Home from "../Containers/Home";
import Projects from "../Containers/Projects";
import Services from "../Containers/Services";
import Skills from "../Containers/Skills";
import Work from "../Containers/Work";

function Landing() {
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