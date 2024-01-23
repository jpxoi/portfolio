import About from "../Containers/About";
import Header from "../Containers/Header";
import Home from "../Containers/Home";
import Services from "../Containers/Services";
import Work from "../Containers/Work";

function Landing() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Work />
      </main>
    </>
  );
}

export default Landing;