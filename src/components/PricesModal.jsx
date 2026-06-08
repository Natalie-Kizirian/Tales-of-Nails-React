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
      category: "Τεχνητά",
      service: [{ name: "Απλο Μανικιουρ", price: "15€" }],
    },
  ];
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 z-20 h-full w-full bg-black opacity-65"
      ></div>
      <div className="bg-secondary fixed top-20 left-1/2 z-80 -translate-x-1/2 rounded-lg p-3 drop-shadow-lg min-[320px]:w-[85vw] lg:w-1/2">
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
                    className="border-primary/20 flex items-center justify-between border-b pb-2"
                  >
                    <span className="text-text-color text-lg">
                      {service.name}
                    </span>
                    <span className="text-text-color text-lg font-bold">
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
