
function Services({showModal}) {
  const cardStyles = "bg-[#DFD4CA] rounded-xl p-3 w-full pb-8 shadow-xl";
  const titleStyles = "text-lg font-semibold border-b mb-2";
  return (
    <>
      <div className="bg-primary-dark flex flex-col items-center gap-3 p-3 lg:p-10">
        <h1 className="text-white-color text-xl font-semibold">
          Οι υπηρεσίες μας
        </h1>
        {/* Card Container */}
        <div className="flex flex-col gap-4 p-2 lg:flex-row">
          <div className={cardStyles}>
            <h2 className={titleStyles}>Μανικιούρ</h2>
            <p>
              Επαγγελματική περιποίηση νυχιών με σωστό λιμάρισμα, φροντίδα
              επωνυχίων και βαφή.
            </p>
          </div>
          <div className={cardStyles}>
            <h2 className={titleStyles}>Πεντικιούρ</h2>
            <p>
              Ολοκληρωμένη φροντίδα άκρων που περιλαμβάνει χαλαρωτικό
              ποδόλουτρο, scrub και μασάζ.
            </p>
          </div>
          <div className={cardStyles}>
            <h2 className={titleStyles}>Gel & Acrygel</h2>
            <p>
              Με τις τεχνικές gel και acrygel, χαρίζουμε στα νύχια σας το μήκος
              και την αντοχή που θέλετε, διαμορφώνοντάς τα ακριβώς όπως τα έχετε
              φανταστεί.
            </p>
          </div>
        </div>

        <button
          onClick={showModal}
          className="button-secondary"
        >
          Δείτε Περισσότερα
        </button>
      </div>
    </>
  );
}
export default Services;
