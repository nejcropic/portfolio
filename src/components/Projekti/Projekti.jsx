import { useRef, forwardRef } from "react";
import "./Projekti.css";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import items from "./ProjektiData";

const Single = ({ item }) => {
  const ref = useRef(); // Internal ref for the image container

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="projekti-section">
      <div className="projekti-container">
        <div className="projekti-wrapper">
          <div className="projekti-imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="projekti-textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>
              Uporabljene tehnologije: <br />
              <ul>
                {item.data.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </p>
            <Link to={item.link}>
              <button>Obišči stran</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Use forwardRef to pass the ref down to the div element in Projekti
const Projekti = forwardRef((props, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref, // This is the external ref from Home.jsx
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Zadnji projekti</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
});

export default Projekti;
