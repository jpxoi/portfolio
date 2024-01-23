import Footer from "../Containers/Footer";
import Header from "../Containers/Header";
import PrivacyContainer from "../Containers/PrivacyContainer";

function Privacy() {
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