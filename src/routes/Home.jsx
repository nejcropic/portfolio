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
  const ponudbaRef = useRef(null);
  const projektiRef = useRef(null);
  const storitveRef = useRef(null);
  const podatkiRef = useRef(null);
  const kontaktRef = useRef(null);
  const galerijaRef = useRef(null);

  return (
    <ScrollProvider>
      <NavBar
        refs={{
          ponudbaRef,
          storitveRef,
          podatkiRef,
          projektiRef,
          kontaktRef,
          galerijaRef,
        }}
      />
      <Hero />
      <Projekti
        refs={{
          ponudbaRef,
        }}
      />

      <Footer />
    </ScrollProvider>
  );
}

export default Home;
