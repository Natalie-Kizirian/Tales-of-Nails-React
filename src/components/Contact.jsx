import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";

function Contact() {
  const listStyle = "flex justify-between ";
  const titleStyle = "lg:text-xl font-semibold text-md text-center";
  const iconStyle = "text-xl";
  const cardStyles =
    "bg-white-color border-secondary flex w-full flex-col gap-2 rounded-2xl border p-4 drop-shadow-xl h-full";
  return (
    <>
      <h1 className="mt-5 text-center text-xl font-bold  ">
        Επικοινωνήστε Μαζί Μας
      </h1>

      <div className="flex flex-col items-center justify-around gap-7 p-6 lg:m-auto lg:w-1/2 ">
        <div className={cardStyles}>
          <h2 className={titleStyle}>Τηλεφωνο Επικοινωνίας</h2>

          <p className="text-center">2131234567</p>
        </div>

        <div className={cardStyles}>
          <h2 className={titleStyle}>Ωράριο Λειτουργίας</h2>

          <li className={listStyle}>
            <span>Δευτερα</span>
            <span>Κλειστά</span>
          </li>
          <li className={listStyle}>
            <span>Τρίτη</span>
            <span>10:00 - 20:00</span>
          </li>

          <li className={listStyle}>
            <span>Τετάρτη</span>
            <span>09:00 - 17:00</span>
          </li>
          <li className={listStyle}>
            <span>Πέμπτη</span>
            <span>10:00 - 20:00</span>
          </li>
          <li className={listStyle}>
            <span>Παρασκευή</span>
            <span>10:00 - 20:00</span>
          </li>
          <li className={listStyle}>
            <span>Σάββατο</span>
            <span>09:00 - 16:00</span>
          </li>
          <li className={listStyle}>
            <span>Κυριακή</span>
            <span>Κλειστά</span>
          </li>
        </div>

        <div className={cardStyles}>
          <h2 className={titleStyle}>Τοποθεσία</h2>
          <div className="flex justify-center">
            <IoLocationOutline className={iconStyle} />

            <p> Ανωγείων 7, Νίκαια</p>
          </div>

          <iframe
            className="rounded-2xl border border-gray-400"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12580.126031805647!2d23.64422!3d37.976394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bb4b96ab4a8d%3A0x3a50198a66a328c7!2sGR%20Tales%20of%20Nails!5e0!3m2!1sel!2sgr!4v1764107389480!5m2!1sel!2sgr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default Contact;
