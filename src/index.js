import React, { useEffect } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import Logo from "./images/logo.png";
import JozePhone from "./images/joze_phone.png";
import ToplarPhone from "./images/toplar_phone.png";
import UMSPhone from "./images/ums_phone.png";
import DvojcekPhone from "./images/joze_phone.png";
import JozeComp from "./images/joze_comp.png";
import ToplarComp from "./images/toplar_comp.png";
import UMSComp from "./images/ums_comp.png";
import DvojcekComp from "./images/dvojcek_comp.png";
/* Logos */

import Html from "./icons/html.png";
import Css from "./icons/social.png";
import ReactJs from "./icons/atom.png";
import Python from "./icons/python.png";

const PreloadImages = () => {
  useEffect(() => {
    const imagesToPreload = [
      Logo,
      JozePhone,
      ToplarPhone,
      UMSPhone,
      DvojcekPhone,
      JozeComp,
      ToplarComp,
      UMSComp,
      DvojcekComp,
      Html,
      Css,
      ReactJs,
      Python,
    ];

    imagesToPreload.forEach((imageSrc) => (new Image().src = imageSrc));
  }, []);
};

export {
  Logo,
  JozePhone,
  ToplarPhone,
  UMSPhone,
  DvojcekPhone,
  JozeComp,
  ToplarComp,
  UMSComp,
  DvojcekComp,
  Html,
  Css,
  ReactJs,
  Python,
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <PreloadImages />
      <App />
    </HashRouter>
  </React.StrictMode>
);
