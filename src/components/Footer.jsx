import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import logo from "../assets/gr-logo2.png";
function Footer() {
  const iconStyle = "text-xl";

  const secondaryText = "text-sm font-light lg:text-lg";
  return (
    <footer className="w-full">
      <div className="bg-secondary w-full p-4 shadow-inner ring-inset">
        <div className="flex flex-col items-center justify-center border-b">
          <img className="h-16 w-16 md:h-20 md:w-20" src={logo} alt="Logo" />

          <h2 className="font-alegreya text-xl font-light md:text-2xl">
            Gr Tales Of Nails
          </h2>
        </div>
        <div className="mt-2 flex flex-col gap-5 p-9 text-center lg:justify-around">
          <div>
            <p className={`${secondaryText} font-normal`}>
              Επικοινωνήστε Μαζί Μας
            </p>
            <a className={secondaryText} href="tel:2130480798">
              21 3048 0798
            </a>
          </div>

          <div>
            <p className={`${secondaryText} font-normal`}>Επισκεφθείτε Μας</p>

            <p className={secondaryText}> Ανωγείων 7, Νίκαια </p>
          </div>

          <div>
            <p className={`${secondaryText} pb-3 font-normal`}>
              Ακολουθήστε Μας
            </p>

            <div className="flex justify-center gap-2">
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/gr_talesofnails/"
                target="_blank"
              >
                <IoLogoInstagram className={iconStyle} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@talesofnailsgr"
                target="_blank"
              >
                <FaTiktok className={iconStyle} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg w-full space-y-2 py-2 text-center">
        <p className="text-text-color text-sm">
          © {new Date().getFullYear()} GR Tales of Nails. All rights reserved.
        </p>
        <p className="text-text-color text-sm">
          Designed and Developed by{" "}
          <a
            href="https://natalie-kizirian.github.io/Natalies-Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-color font-medium text-black no-underline transition-colors"
          >
            Natalie
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
