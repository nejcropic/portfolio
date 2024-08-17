import React, { useRef } from "react";
import "../components/Home/Home.css";
import { ScrollProvider } from "../components/ScrollContext";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Projekti from "../components/Projekti/Projekti";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
/* ";

import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
*/

function Home() {
  const storitveRef = useRef(null);
  const projektiRef = useRef(null);
  const kontaktRef = useRef(null);

  return (
    <ScrollProvider>
      <NavBar
        refs={{
          storitveRef,
          projektiRef,
          kontaktRef,
        }}
      />
      <Hero />
      <Services ref={storitveRef} />
      <Projekti ref={projektiRef} />
      <Footer />
    </ScrollProvider>
  );
}

export default Home;
