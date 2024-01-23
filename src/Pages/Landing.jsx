import About from "../Containers/About";
import Header from "../Containers/Header";
import Home from "../Containers/Home";
import Services from "../Containers/Services";

function Landing() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Services />
        
      </main>
    </>
  );
}

export default Landing;