import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PricesModal from "./components/PricesModal";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

function App() {
  const [modalisVisible, setModalVisible] = useState(false);

  return (
    <>
      <NavBar />
      <section id="home" className="scroll-mt-24">
        <Home />
      </section>

      <section id="services" className="scroll-mt-20">
        {" "}
        <Services id="#services" showModal={() => setModalVisible(true)} />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      {modalisVisible && (
        <PricesModal closeModal={() => setModalVisible(false)} />
      )}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <a href="#home" className=" ">
        <IoIosArrowUp className="text-primary-dark ml-auto flex h-10 w-10 justify-end rounded-2xl border text-3xl" />
      </a>

      <Footer />
    </>
  );
}

export default App;
