import mainIconMobile from "../assets/main-icon.png";
import mainIconDesktop from "../assets/Vector.png";

function Home() {
  return (
    <main className="flex w-full items-center justify-center p-4 ">
      <div className="m-auto flex flex-col lg:mx-auto lg:px-20 gap-9 items-start ">
        <h2 className="text-start text-2xl font-bold " >
          Καλώς ορίσατε στο <br className="lg:hidden" /> Gr Tales of Nails
        </h2>
        <img className="lg:hidden" src={mainIconMobile} alt="" />
        <p className="flex items-center">
          Χαλαρώστε και αφεθείτε στα χέρια μας για την περιποίηση που αξίζουν τα
          άκρα σας. Στο Gr Tales of Nails, δημιουργούμε μοναδικά σχέδια και
          προσφέρουμε φροντίδα με αγάπη, για να φεύγετε πάντα με χαμόγελο
        </p>
        <button className="button-primary hover:bg-primary-hover w-full rounded-lg p-3 text-sm font-medium md:w-auto md:text-base">
          <a href="#contact">Κλείστε το Ραντεβού σας!</a>
        </button>
      </div>

      <img className="hidden lg:block mr-20" src={mainIconDesktop} alt="" />
    </main>
  );
}
export default Home;
