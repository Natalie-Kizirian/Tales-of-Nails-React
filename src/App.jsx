import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import PricesModal from "./components/PricesModal";
function App() {
  const [modalisVisible, setModalVisible] = useState(false);

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Services showModal={() => setModalVisible(true)} />
      {modalisVisible && (
        <PricesModal closeModal={() => setModalVisible(false)} />
      )}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
