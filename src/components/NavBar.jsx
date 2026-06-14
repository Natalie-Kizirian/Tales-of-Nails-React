import { useState } from "react";

function NavBar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const linkStyles =
    "hover:text-primary px-2 md:px-6 py-2  hover:rounded-md hover:bg-[#F5F1EE] transition-all duration-300 whitespace-nowrap";
  return (
    <>
      <header className="bg-primary lg:bg-white-color/90 sticky top-0 z-20 flex w-full items-center justify-between p-2 shadow-lg md:flex-row">
        <div className="flex items-center gap-3">
          <img
            className="h-16 w-16 md:h-20 md:w-20"
            src="./gr-logo.png"
            alt="Logo"
          />
          <div className="hidden lg:block">
            <h2 className="font-alegreya text-xl font-light md:text-2xl">
              Gr Tails Of Nails{" "}
            </h2>

            <h2 className="font-alegreya text-lg font-light">Nail Salon</h2>
          </div>
        </div>
        <div className="hidden w-full flex-col items-center justify-between gap-3 md:w-auto md:flex-row md:gap-5 lg:flex">
          <div className="flex items-center gap-2 text-sm md:text-lg">
            <a href="#home" className={linkStyles}>
              Αρχική
            </a>
            <a href="#services" className={linkStyles}>
              Υπηρεσίες
            </a>
            <a href="#about" className={linkStyles}>
              Ποιοι είμαστε
            </a>
            <a href="#contact" className={linkStyles}>
              Επικοινωνία
            </a>
          </div>
         
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setActiveMenu(true)}
          className="text-text-color text-3xl font-bold lg:hidden"
        >
          &#9776;
        </button>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setActiveMenu(false)}
        className={`fixed inset-0 z-10 bg-black/35 transition-opacity duration-300 lg:hidden ${activeMenu ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Mobile Menu*/}
      <div
        className={`fixed top-0 right-0 z-20 flex h-screen w-3/5 flex-col gap-2 bg-white p-5 text-sm shadow-xl transition-transform duration-300 ease-in-out md:text-lg lg:hidden ${activeMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="flex justify-end text-xl"
          onClick={() => setActiveMenu(false)}
        >
          &#10006;
        </button>
        <a
          href="#home"
          onClick={() => setActiveMenu(false)}
          className={`${linkStyles} border-b`}
        >
          Αρχική
        </a>
        <a
          href="#services"
          onClick={() => setActiveMenu(false)}
          className={`${linkStyles} border-b`}
        >
          Υπηρεσίες
        </a>
        <a
          href="#about"
          onClick={() => setActiveMenu(false)}
          className={`${linkStyles} border-b`}
        >
          Ποιοι είμαστε
        </a>
        <a
          href="#contact"
          onClick={() => setActiveMenu(false)}
          className={`${linkStyles} border-b`}
        >
          Επικοινωνία
        </a>
      </div>
    </>
  );
}
export default NavBar;
