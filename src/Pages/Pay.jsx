import { useEffect } from "react";
import Header from "../Containers/Header";
import Footer from "../Containers/Footer";
import ScrollReveal from "scrollreveal";
import PaymentContainer from "../Containers/PaymentContainer";

function Pay() {

  useEffect (() => {
    const sr = ScrollReveal({
      distance: '90px',
      duration: 2000,
    })
  
    sr.reveal(`.main`, {origin: 'top', delay: 50})
  }, [])
  return (
    <>
      <Header page="404Error" />
      <main className="main">
        <PaymentContainer />
      </main>
    <Footer />
    </>
  );
}

export default Pay;