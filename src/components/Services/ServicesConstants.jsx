import Spletna from "../../icons/mobile.png";
import Avtomatizacija from "../../icons/app-development.png";
import Podatki from "../../icons/data-analysis.png";
import Naprave from "../../icons/dashboard.png";

export const categories = {
  "Spletne strani": {
    icon: Spletna,
    items: [
      "Izdelava nove spletne strani",
      "Posodobitev obstoječe spletne strani",
      "Odziven spletni dizajn",
    ],
  },
  "Avtomatizacija vsakodnevnih storitev": {
    icon: Avtomatizacija,
    items: [
      "Generiranje excel in word datotek",
      {
        title: "Datoteke in programi na različnih inženirskih področjih:",
        subItems: [
          "Strojništvo (Solidworks, CAD),",
          "Gradbeništvo (BIM),",
          "Elektrotehnika (obdelava signalov)",
        ],
      },
      "Skripte za avtomatizacijo nalog",
    ],
  },
  "Obdelava in analiza podatkov": {
    icon: Podatki,
    items: [
      "Obdelovanje datotek (.csv,  .json,  .xml)",
      "Vizualizacija podatkov (grafi, interaktivni diagrami)",
      "Analiza statističnih podatkov in poročanje",
    ],
  },
  "Komunikacija in upravljanje z napravami": {
    icon: Naprave,
    items: [
      "Komunikacije prek kabla (USB, RS232, RS485)",
      "Izdelava uporabniškega vmesnika",
      "Integracija naprav (API povezave, MQTT)",
    ],
  },
};
