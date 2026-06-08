import aboutIcon from "../assets/main-about1.png";
import aboutIcon2 from "../assets/main-about2.png";
import aboutIcon3 from "../assets/main-about3.png";

function About() {
  const imageStyles = "rounded-tl-3xl rounded-br-3xl lg:w-1/2 w-full m-auto";
  const textStyles = "";
  return (


    <>

    <h1 className="text-2xl font-bold text-center p-4 
    ">Λίγα Λόγια Για Εμάς</h1>



      <div className="lg:m-auto flex lg:w-1/2 flex-col items-center gap-10  p-4">
        <div className="lg:flex gap-7 ">
          <img className={imageStyles} src={aboutIcon} alt="" />
          <p className={textStyles}>
            Είμαστε η Ρένα και η Γεωργία, δυο φίλες που μοιραζόμαστε το ίδιο
            πάθος για την ομορφιά εδώ και πάνω από δέκα χρόνια. Το Gr Tales of
            Nails δεν είναι απλώς το μαγαζί μας, είναι ο κοινός μας στόχος να
            δημιουργήσουμε έναν χώρο όπου η περιποίηση των άκρων σας ξεφεύγει
            από τα συνηθισμένα και μετατρέπεται σε μια πραγματική, απολαυστική
            εμπειρία χαλάρωσης, όπως ακριβώς θα τη θέλαμε κι εμείς για τον εαυτό
            μας
          </p>
        </div>

      

        <div className=" hidden lg:flex gap-7">
          <p className={textStyles}>
            Το Gr Tales of Nails δεν είναι απλώς το μαγαζί μας, είναι ο κοινός
            μας στόχος να δημιουργήσουμε έναν χώρο όπου η περιποίηση των άκρων
            σας ξεφεύγει από τα συνηθισμένα και μετατρέπεται σε μια πραγματική,
            απολαυστική εμπειρία χαλάρωσης, όπως ακριβώς θα τη θέλαμε κι εμείς
            για τον εαυτό μας
          </p>
          <img className={imageStyles} src={aboutIcon3} alt="" />
        </div>

          <div className=" hidden lg:flex gap-7">
          <img className={imageStyles} src={aboutIcon2} alt="" />
          <p className={textStyles}>
            Το Gr Tales of Nails δεν είναι απλώς το μαγαζί μας, είναι ο κοινός
            μας στόχος να δημιουργήσουμε έναν χώρο όπου η περιποίηση των άκρων
            σας ξεφεύγει από τα συνηθισμένα και μετατρέπεται σε μια πραγματική,
            απολαυστική εμπειρία χαλάρωσης, όπως ακριβώς θα τη θέλαμε κι εμείς
            για τον εαυτό μας
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
