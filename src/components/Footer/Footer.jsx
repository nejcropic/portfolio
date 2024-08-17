import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Logo } from "../../index";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="footer-wrapper">
        {/* <div className="footer-container">
          <div className="footer-button-up">
            <button onClick={handleScrollToTop}>
              <i class="fa-solid fa-sort-up"></i>
            </button>
          </div>
          <div className="footer-copyrights">
            <p>
              @2024 Nejc Ropič
              <br className="hidebr" />
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Footer;
