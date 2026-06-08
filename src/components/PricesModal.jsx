function PricesModal({ closeModal }) {
  const priceList = [
    {
      category: "Μανικιούρ",
      service: [
        { name: "Απλο Μανικιουρ", price: "15€" },
        { name: "Ημιμόνιμο Μανικιούρ (Απλή Βάση)", price: "20€" },
        { name: "Ημιμόνιμο Μανικιούρ (Ενισχυμένη Βάση)", price: "22€" },
      ],
    },
    {
      category: "Πεντικιούρ",
      service: [
        { name: "Πεντικιούρ Απλο", price: "20€" },
        { name: "Πεντικιούρ Ημιμόνιμο", price: "25€" },
        { name: "Θεραπευτικό", price: "30€" },
        { name: "Spa", price: "35€" },
     
      ],
    },
    {
      category: "Τεχνητά",
      service: [
        { name: "Συντήρηση", price: "35€" },
        { name: "Τοποθέτηση", price: "40€" },
        { name: "Συντήρηση", price: "35€" },
        { name: "Τοποθέτηση", price: "40€" },
     
      ],
    },
    {
      category: "Αποτρίχωση",
      service: [
        { name: "Καθαρισμός Φρυδιων", price: "7€" },
        { name: "Σχηματισμός Φρυδιών", price: "10€" },
        { name: "Μουστάκι", price: "5€" },
        { name: "Ολο το πρόσωπο", price: "20€" },
     
      ],
    },
  ];
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 z-20 h-full w-full bg-black opacity-65"
      ></div>
      <div className="bg-secondary fixed top-20 left-1/2 z-80 max-h-[80vh] -translate-x-1/2 overflow-y-auto rounded-lg p-3 drop-shadow-lg min-[320px]:w-[95vw] lg:w-1/2 [&::-webkit-scrollbar]:hidden">
        {/* Head */}
        <div className="flex items-center justify-between pb-4">
          <h1 className="m-auto text-center text-xl">Τιμοκαταλογος</h1>
          <button
            onClick={closeModal}
            className="cursor-pointer p-2 text-xl font-bold"
          >
            X
          </button>
        </div>

        {/* Prices By Category */}
        <div>
          {priceList.map((categoryName, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-text-color border-primary-hover/50 mb-4 border-b-2 pb-2 text-xl font-bold">
                {categoryName.category}
              </h3>

              <ul className="flex flex-col gap-4">
                {categoryName.service.map((service, i) => (
                  <li
                    key={i}
                    className="border-primary/40 flex items-center justify-between border-b pb-1"
                  >
                    <span className="text-text-color text-md">
                      {service.name}
                    </span>
                    <span className="text-text-color text-md font-bold">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default PricesModal;
