import "./Hero.css";
import { motion } from "framer-motion";
import CompPhoto from "../../images/comp_python.png";
import PhonePhoto from "../../images/iphone_ums_hero.png";
import arrowDown from "../../icons/arrow-square-down.png";

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
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
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
            <motion.button variants={textVariants}>
              Zadnji projekti
            </motion.button>
            <motion.button variants={textVariants}>Kontakt</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={arrowDown}
            alt=""
          />
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
      <div className="imageContainer">
        <img className="compImg" src={CompPhoto} alt="" />
        <img className="phoneImg" src={PhonePhoto} alt="" />
      </div>
    </div>
  );
};

export default Hero;
