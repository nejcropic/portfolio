import { useRef } from "react";
import "./Projekti.css";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import items from "./ProjektiData";

const Single = ({ item }) => {
  const ref = useRef();

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
            <p>{item.data}</p>
            <Link to={item.link}>
              <button>Obišči stran</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
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
};

export default Portfolio;
