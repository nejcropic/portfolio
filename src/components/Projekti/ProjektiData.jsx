/* import ToplarPhone from "../../images/iphone_toplar.png"; */
import UmsPhone from "../../images/iphone_ums.png";
import ToplarPhone from "../../images/iphone_toplar.png";
import JozePhone from "../../images/iphone_joze.png";
import DvojcekPhone from "../../images/iphone_dvojcek.png";

import ReactJs from "../../icons/atom.png"; // Assuming these are image paths
import Html from "../../icons/html.png";
import Css from "../../icons/social.png";
import Python from "../../icons/python.png";
const items = [
  {
    id: 1,
    link: "https://www.ums.si/",
    title: "UMS d.o.o",
    image: UmsPhone,
    data: [
      { name: "React JS", icon: ReactJs },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
    date: "2023",
  },
  {
    id: 2,
    link: "https://picerija-toplar.si/",
    title: "Picerija Toplar",
    image: ToplarPhone,
    data: [
      { name: "React JS", icon: ReactJs },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
    date: "2024",
  },
  {
    id: 3,
    link: "https://joze-sinkovec.si/",
    title: "Jože Šinkovec, s.p.",
    image: JozePhone,
    data: [
      { name: "React JS", icon: ReactJs },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
    date: "2024",
  },
  {
    link: "https://hisadvojcek-ihan.si/",
    title: "Hiša Dvojček Ihan",
    image: DvojcekPhone,
    data: [
      { name: "React JS", icon: ReactJs },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
    date: "2023",
  },
];

export default items;
