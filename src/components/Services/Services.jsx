import { useRef, forwardRef } from "react";
import "./Services.css";
import { motion, useInView } from "framer-motion";
import { categories } from "./ServicesConstants";
import Image from "../../images/logo.png";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const servicesItems = [];
const Services = forwardRef((props, ref) => {
  const isInView = useInView(ref, { margin: "-100px", once: true }); // Adding 'once: true' to animate only the first time it's in view

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "animate"} // Conditional animation trigger
      ref={ref}
    >
      <motion.div className="textContainer-services" variants={variants}>
        <p>
          Digitaliziram vaše procese,
          <br /> poenostavim vaše delo
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer-services" variants={variants}>
        <div className="title">
          <img src={Image} alt="" />
          <h1>
            <motion.b whileHover={{ color: "var(--secondaryColor)" }}>
              Nove
            </motion.b>{" "}
            ideje,
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "var(--secondaryColor)" }}>
              hitrejše
            </motion.b>{" "}
            poslovanje.
          </h1>
          <button>KAJ POČNEM?</button>
        </div>
      </motion.div>
      <div className="listContainer-flex">
        {Object.keys(categories).map((category, index) => (
          <motion.div className="listContainer" key={index} variants={variants}>
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <div className="box-flex">
                <h2>{category}</h2>
                <img src={categories[category].icon} alt={category} />
              </div>
              <div>
                {categories[category].items.map((item, itemIndex) =>
                  typeof item === "string" ? (
                    <p key={itemIndex}>{item}</p>
                  ) : (
                    <div className="box-more" key={itemIndex}>
                      <p>{item.title}</p>
                      <ul>
                        {item.subItems.map((subItem, subItemIndex) => (
                          <li
                            key={subItemIndex}
                            style={{ paddingLeft: "10px" }}
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>

              <button>Preberi več</button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});

export default Services;
