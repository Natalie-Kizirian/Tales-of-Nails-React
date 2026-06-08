import mainIcon from "../assets/main-icon.png";
function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center p-4">
        <h2 className="text-center text-2xl font-bold">
          Καλώς ορίσατε στο <br /> Gr Tales of Nails
        </h2>
        <img className="" src={mainIcon} alt="" />
        <p>
          Χαλαρώστε και αφεθείτε στα χέρια μας για την περιποίηση που αξίζουν τα
          άκρα σας. Στο Gr Tales of Nails, δημιουργούμε μοναδικά σχέδια και
          προσφέρουμε φροντίδα με αγάπη, για να φεύγετε πάντα με χαμόγελο
        </p>
     
      
    </main>
  );
}
export default Home;
