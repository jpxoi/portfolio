import Header from "../Containers/Header";
import P404 from "../Containers/P404";

function Error404() {
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