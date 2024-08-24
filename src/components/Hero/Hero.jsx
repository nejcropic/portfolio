import "./Hero.css";
import { color, motion } from "framer-motion";
import CompPhoto from "../../images/comp_python.png";
import PhonePhoto from "../../images/iphone_ums_hero.png";
import arrowDown from "../../icons/arrow-square-down.png";
import NavBar from "../NavBar/NavBar";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
    zIndex: 5,
  },
};
const imageVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
    backgroundColor: "transparent",
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
    backgroundColor: "transparent",
  },
};

const Hero = ({ storitveRef, projektiRef, kontaktRef }) => {
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="hero">
      <NavBar
        refs={{
          storitveRef,
          projektiRef,
          kontaktRef,
        }}
      />
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NEJC ROPIČ</motion.h2>
          <motion.h1 variants={textVariants}>
            Spletne strani in avtomatizacija
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => scrollToRef(projektiRef)}
            >
              Zadnji projekti
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => scrollToRef(kontaktRef)}
            >
              Kontakt
            </motion.button>
          </motion.div>
          <motion.button
            className="hero-button"
            variants={textVariants}
            animate="scrollButton"
            onClick={() => scrollToRef(storitveRef)}
          >
            <i class="fa-solid fa-circle-arrow-down"></i>
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Python ReactJS
      </motion.div>
      <motion.div
        variants={imageVariants}
        initial="initial"
        animate="animate"
        className="imageContainer"
      >
        <img className="compImg" src={CompPhoto} alt="" />
        <img className="phoneImg" src={PhonePhoto} alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
