import { useEffect } from "react";
import Header from "../Containers/Header";
import P404 from "../Containers/P404";
import ScrollReveal from "scrollreveal";

function Error404() {

  useEffect (() => {
    const sr = ScrollReveal({
      distance: '90px',
      duration: 2000,
    })
  
    sr.reveal(`.p404__data`, {origin: 'top', delay: 50})
    sr.reveal(`.p404__img`, {origin: 'bottom', delay: 100})
    sr.reveal(`.p404__footer`, {origin: 'bottom', delay: 200})
  }, [])
  return (
    <>
      <Header page="404Error" />
      <main className="main">
        <P404 />
      </main>
    </>
  );
}

export default Error404;