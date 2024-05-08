import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Family",
    hash: "#family",
  },
  {
    name: "Lovelife",
    hash: "#lovelife",
  },
  {
    name: "Literature",
    hash: "#literature",
  },
  {
    name: "Timeline",
    hash: "#timeline",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Travels",
    hash: "#travels",
  },
] as const;

export const experiencesData = [
  {
    title: "Kapanganakan at Binyag",
    location: "Calamba, Laguna",
    description:
      "Si Jose Rizal ay ipinanganak sa Calamba, Laguna, sa isang mapayapang bayan sa Timog Luzon. Ang kanyang mga magulang ay sina Francisco Mercado at Teodora Alonso.",
    icon: React.createElement(LuGraduationCap),
    date: "Hunyo 19, 1861",
  },
  {
    title: "Edukasyon sa Ateneo de Manila",
    location: "Manila",
    description:
      "Si Rizal ay ipinadala sa Ateneo de Manila upang mag-aral, kung saan natamo niya ang kanyang pangunahing edukasyon sa ilalim ng mga Heswita. Narito rin niya natutunan ang wikang Espanyol at nagpakita na siya ay isang mahusay na mag-aaral.",
    icon: React.createElement(CgWorkAlt),
    date: "1872-1877",
  },

  {
    title: "Pag-aaral sa Europa",
    location: "Europa (Espanya, Pransiya, Alemanya)",
    description:
      " Si Rizal ay nagpunta sa Europa upang magpatuloy ng kanyang pag-aaral sa medisina at iba pang larangan. Sa kanyang mga paglalakbay, nakilala niya ang mga kaibigan at natamo ang kanyang mga ideya sa kalayaan at katarungan para sa Pilipinas.",
    icon: React.createElement(FaReact),
    date: "1882-1887",
  },
  {
    title: "Pag-akda ng Noli Me Tangere",
    location: "Europa",
    description:
      " Habang nasa Europa, sinimulan ni Rizal ang pagsulat ng kanyang unang nobela, ang Noli Me Tangere, na naglalarawan ng mga pang-aabuso ng mga Kastila sa mga Pilipino. Ang nobelang ito ay naglunsad ng kilusang pagbabago sa Pilipinas",
    icon: React.createElement(FaReact),
    date: "1887-1886",
  },
  {
    title: "Pagbabalik sa Pilipinas",
    location: "Maynila",
    description:
      "Dahil sa kanyang mga isinulat at aktibismo, si Rizal ay inaresto at dinala sa Maynila upang harapin ang mga akusasyon ng rebelyon laban sa Kastila. Ipinatapon siya sa Dapitan, kung saan siya ay nanatili sa ilalim ng pagmamatyag.",
    icon: React.createElement(FaReact),
    date: "1892",
  },
  {
    title: "Pagpapakasal kay Josephine Bracken",
    location: "Dapitan, Zamboanga",
    description:
      " Habang nasa Dapitan, nagkaroon ng relasyon si Rizal kay Josephine Bracken, isang babaeng Irlandes-Filipina. Bagamat hindi sila kasal ayon sa simbahang Katoliko, nagkaroon sila ng isang seremonya ng pagpapakasal sa ilalim ng mga ritwal ng Simbahang Aglipayan.",
    icon: React.createElement(FaReact),
    date: "1896",
  },
  {
    title: "Pagpapatay kay Rizal",
    location: "Bagumbayan, Maynila",
    description:
      "Sa kabila ng kanyang pagsisikap na ipaglaban ang karapatan ng mga Pilipino, si Rizal ay hinatulan ng kamatayan sa pamamagitan ng firing squad. Ang kanyang kamatayan ay nagpatibay lamang sa kanyang mga adhikain para sa kalayaan ng Pilipinas.",
    icon: React.createElement(FaReact),
    date: "Disyembre 30, 1896",
  },
] as const;
