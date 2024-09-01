import "./Hero.css";
import { color, motion } from "framer-motion";
import CompPhoto from "../../images/comp_python.png";
import PhonePhoto from "../../images/iphone_ums_hero.png";
import arrowDown from "../../icons/arrow-square-down.png";
import NavBar from "../NavBar/NavBar";
import Video from "../../images/background.mp4";
import { Html, Css, ReactJs, Python } from "../../index";

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
    opacity: [0, 1, 0], // Add keyframes for opacity to make it "blink"
    y: [0, 10, 0], // Add keyframes for up-down motion
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop", // Specify repeatType to loop
    },
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
    x: "70%",
    backgroundColor: "transparent",
  },
  animate: {
    x: "-20%",
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
      {/* <div className="background-video">
        <video autoplay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
      </div> */}
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
              Zadnji Projekti
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => scrollToRef(kontaktRef)}
            >
              Kontakt
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <img src={Html} alt="" />
        <img src={Python} alt="" />
        <img src={ReactJs} alt="" />
        <img src={Css} alt="" />
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
      <motion.button
        className="hero-button"
        variants={textVariants}
        animate="scrollButton"
        onClick={() => scrollToRef(storitveRef)}
      >
        <i class="fa-solid fa-circle-arrow-down"></i>
      </motion.button>
    </div>
  );
};

export default Hero;
