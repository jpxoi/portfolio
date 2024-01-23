import Header from "../Containers/Header";
import Home from "../Containers/Home";

function Landing() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default Landing;