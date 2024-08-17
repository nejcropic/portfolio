import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMedia from "use-media";
import "./Services.css";
import PhoneWebsite from "../../images/comp_website.png";
import PhonePython from "../../images/comp_python.png";
import Styling from "./ServicesConstants";

import website from "../../icons/web-developer.gif";
import responsive from "../../icons/responsive.gif";
import doc from "../../icons/doc.png";
import excel from "../../icons/xlsx.png";
import analiza from "../../icons/analysis.gif";
import avtomatizacija from "../../icons/brain.gif";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Hero() {
  const [isHovered, setIsHovered] = useState({ web: false, automation: false });
  const [selectedOption, setSelectedOption] = useState("web");
  const isMobile = useMedia({ maxWidth: "1000px" });
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isOn ? "#ffffff" : "#ffffff";
  }, [isOn]);

  const handleToggleChange = () => {
    setIsOn(!isOn); // Toggle the background color
    setSelectedOption((prevOption) =>
      prevOption === "web" ? "automation" : "web"
    );
  };

  return (
    <div className="hero-wrapper">
      {isMobile && (
        <div className="toggle-container">
          <motion.h1
            style={{
              color: isHovered.web
                ? Styling.phoneColor
                : Styling.hoverColorNone,
            }}
            animate={{ opacity: selectedOption === "web" ? 1 : 0.5 }}
            transition={{ duration: Styling.transitionDuration }}
          >
            Spletne strani
          </motion.h1>
          <ToggleSwitch
            handleToggleChange={handleToggleChange}
            selectedOption={selectedOption}
            slika1={avtomatizacija}
            slika2={website}
            option1="automation"
          />
          <motion.h1
            style={{
              color: isHovered.automation
                ? Styling.phoneColor
                : Styling.hoverColorNone,
            }}
            animate={{ opacity: selectedOption === "automation" ? 1 : 0.5 }}
            transition={{ duration: Styling.transitionDuration }}
          >
            Avtomatizacija
          </motion.h1>
        </div>
      )}
      <div className="hero-container">
        <motion.div
          className="hero-web"
          style={{
            display: !isMobile || selectedOption === "web" ? "block" : "none",
          }}
          whileHover={{ zIndex: 2, backgroundColor: Styling.backgroundColor }}
          onHoverStart={() => setIsHovered((prev) => ({ ...prev, web: true }))}
          onHoverEnd={() => setIsHovered((prev) => ({ ...prev, web: false }))}
          animate={{ height: "auto" }}
        >
          <motion.div
            className="phone-image phone-left"
            initial={
              isMobile
                ? { clipPath: "inset(0 0 0 0)", x: "0%" }
                : { clipPath: "inset(0 50% 0 0)", x: "50%" }
            }
            animate={
              isMobile
                ? { clipPath: "inset(0 0 0 0)", x: "0%" }
                : {
                    clipPath: isHovered.web
                      ? "inset(0 0 0 0)"
                      : "inset(0 50% 0 0)",
                    x: "50%",
                  }
            }
            transition={{ duration: Styling.transitionDuration }}
          >
            <img src={PhoneWebsite} alt="Web Design" />
          </motion.div>
          <motion.div
            className="hero-text text-left"
            initial={{
              color: "orange",
              fontSize: "1rem",
              right: isMobile ? "20%" : "20%",
            }}
            animate={{
              color: isHovered.web
                ? Styling.hoverColor
                : Styling.hoverColorNone,
              fontSize: isMobile
                ? Styling.phoneSize
                : isHovered.web
                ? Styling.hoverCompSize
                : Styling.CompSize,
              right: isHovered.web ? "20%" : "20%",
              top: isMobile ? "0%" : "-100%",
              height: "auto",
            }}
            transition={{ duration: Styling.transitionDuration }}
          >
            <img className="hero-icon" src={website} alt="" />
            <h3>web design</h3>
            <p>
              <img className="hero-icon" src={website} alt="" />
              Izdelava nove spletne strani
            </p>
            <p>
              <img className="hero-icon" src={website} alt="" />
              Posodobitev stare spletne strani
            </p>
            <p>
              <img className="hero-icon" src={responsive} alt="" />
              Odziven spletni design
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-automation"
          style={{
            display:
              !isMobile || selectedOption === "automation" ? "block" : "none",
          }}
          whileHover={{ zIndex: 2, backgroundColor: Styling.backgroundColor }}
          onHoverStart={() =>
            setIsHovered((prev) => ({ ...prev, automation: true }))
          }
          onHoverEnd={() =>
            setIsHovered((prev) => ({ ...prev, automation: false }))
          }
        >
          <motion.div
            className="phone-image phone-right"
            initial={
              isMobile
                ? { clipPath: "inset(0 0 0 0)", x: "0%" }
                : { clipPath: "inset(0 0 0 50%)", x: "-50%" }
            }
            animate={
              isMobile
                ? { clipPath: "inset(0 0 0 0)", x: "0%" }
                : {
                    clipPath: isHovered.automation
                      ? "inset(0 0 0 0)"
                      : "inset(0 0 0 50%)",
                    x: "-50%",
                  }
            }
            transition={{ duration: 0.3 }}
          >
            <img src={PhonePython} alt="Automation" />
          </motion.div>
          <motion.div
            className="hero-text text-right"
            initial={{
              color: "orange",
              fontSize: "1rem",
              right: isMobile ? "20%" : "20%",
              height: "auto",
            }}
            animate={{
              color: isHovered.automation
                ? Styling.hoverColor
                : Styling.hoverColorNone,
              fontSize: isMobile
                ? Styling.phoneSize
                : isHovered.automation
                ? Styling.hoverCompSize
                : Styling.CompSize,
              right: isHovered.automation ? "10%" : "20%",
              top: isMobile ? "0%" : "-100%",
              height: "auto",
            }}
            transition={{ duration: Styling.transitionDuration }}
          >
            <img className="hero-icon" src={avtomatizacija} alt="" />
            <h3>Python Avtomatizacija</h3>
            <p>Avtomatizacija vsakodnevnih storitev:</p>
            <p>
              <img className="hero-icon" src={excel} alt="" />- Excel
            </p>
            <p>
              <img className="hero-icon" src={doc} alt="" />- Word
            </p>
            <p>
              <img className="hero-icon" src={analiza} alt="" />
              Obdelava in analiza podatkov
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
