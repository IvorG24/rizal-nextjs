import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaChurch } from "react-icons/fa";
import { FaArrowTrendDown } from "react-icons/fa6";
import { title } from "process";
export const links = [
  {
    name: "Family",
    hash: "/#family",
  },
  {
    name: "Timeline",
    hash: "/#timeline",
  },
  {
    name: "Lovelife",
    hash: "/#lovelife",
  },
  {
    name: "Literature",
    hash: "/#literature",
  },

  {
    name: "Education",
    hash: "/#education",
  },
  {
    name: "Other-Works",
    hash: "/#otherworks",
  },
  {
    name: "Home",
    hash: "/#home",
  },
] as const;

export const accordionItems = [
  { name: "SEGUNDA KATIGBAK", key: "1" },
  { name: "LENOR VALENZUELA", key: "2" },
  { name: "LENOR RIVERA", key: "3" },
  { name: "CONSUELO ORTIGA", key: "4" },
  { name: "O SEI SAN", key: "5" },
  { name: "GERTRUDE BECKETT", key: "6" },
  { name: "NELLIE BOUSTEAD", key: "7" },
  { name: "SUZANNE JACOBY", key: "8" },
  { name: "JOSEPHINE BRACKEN", key: "9" },
] as const;

export const experiencesData = [
  {
    title: "Kapanganakan at Binyag",
    location: "Calamba, Laguna",
    description:
      "Si Jose Rizal ay ipinanganak sa Calamba, Laguna, sa isang mapayapang bayan sa Timog Luzon. Ang kanyang mga magulang ay sina Francisco Mercado at Teodora Alonso.",
    icon: React.createElement(FaBabyCarriage),
    date: "Hunyo 19, 1861",
  },
  {
    title: "Edukasyon sa Ateneo de Manila",
    location: "Manila",
    description:
      "Si Rizal ay ipinadala sa Ateneo de Manila upang mag-aral, kung saan natamo niya ang kanyang pangunahing edukasyon sa ilalim ng mga Heswita. Narito rin niya natutunan ang wikang Espanyol at nagpakita na siya ay isang mahusay na mag-aaral.",
    icon: React.createElement(FaBook),
    date: "1872-1877",
  },

  {
    title: "Pag-aaral sa Europa",
    location: "Europa (Espanya, Pransiya, Alemanya)",
    description:
      " Si Rizal ay nagpunta sa Europa upang magpatuloy ng kanyang pag-aaral sa medisina at iba pang larangan. Sa kanyang mga paglalakbay, nakilala niya ang mga kaibigan at natamo ang kanyang mga ideya sa kalayaan at katarungan para sa Pilipinas.",
    icon: React.createElement(FaMapLocation),
    date: "1882-1887",
  },
  {
    title: "Pag-akda ng Noli Me Tangere",
    location: "Europa",
    description:
      " Habang nasa Europa, sinimulan ni Rizal ang pagsulat ng kanyang unang nobela, ang Noli Me Tangere, na naglalarawan ng mga pang-aabuso ng mga Kastila sa mga Pilipino. Ang nobelang ito ay naglunsad ng kilusang pagbabago sa Pilipinas",
    icon: React.createElement(FaBookReader),
    date: "1887-1886",
  },
  {
    title: "Pagbabalik sa Pilipinas",
    location: "Maynila",
    description:
      "Dahil sa kanyang mga isinulat at aktibismo, si Rizal ay inaresto at dinala sa Maynila upang harapin ang mga akusasyon ng rebelyon laban sa Kastila. Ipinatapon siya sa Dapitan, kung saan siya ay nanatili sa ilalim ng pagmamatyag.",
    icon: React.createElement(FaFlag),
    date: "1892",
  },
  {
    title: "Pagpapakasal kay Josephine Bracken",
    location: "Dapitan, Zamboanga",
    description:
      " Habang nasa Dapitan, nagkaroon ng relasyon si Rizal kay Josephine Bracken, isang babaeng Irlandes-Filipina. Bagamat hindi sila kasal ayon sa simbahang Katoliko, nagkaroon sila ng isang seremonya ng pagpapakasal sa ilalim ng mga ritwal ng Simbahang Aglipayan.",
    icon: React.createElement(FaChurch),
    date: "1896",
  },
  {
    title: "Pagpapatay kay Rizal",
    location: "Bagumbayan, Maynila",
    description:
      "Sa kabila ng kanyang pagsisikap na ipaglaban ang karapatan ng mga Pilipino, si Rizal ay hinatulan ng kamatayan sa pamamagitan ng firing squad. Ang kanyang kamatayan ay nagpatibay lamang sa kanyang mga adhikain para sa kalayaan ng Pilipinas.",
    icon: React.createElement(FaArrowTrendDown),
    date: "Disyembre 30, 1896",
  },
] as const;

export const FamilyData = [
  {
    name: "Francisco Mercado",
    src: "/assets/PAMILYA/Papa.jpg",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit consequuntur animi eos quisquam cupiditate odit quodprovident harum quibusdam pariatur laborum sapiente omniseaque voluptatibus delectus, corporis distinctio, quia dicta! Lorem ipsum, dolor sit amet consectetur adipisicingelit. Maxime, consequuntur animi eos quisquam cupiditateodit quod provident harum quibusdam pariatur laborumdistinctio, quia dicta! Lorem ipsum, dolor sit ametsapiente omnis eaque voluptatibus delectus, corporisconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta! Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta!",
  },
  {
    name: "Teodora Reolonda",
    src: "/assets/PAMILYA/Mama.jpg",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit consequuntur animi eos quisquam cupiditate odit quodprovident harum quibusdam pariatur laborum sapiente omniseaque voluptatibus delectus, corporis distinctio, quia dicta! Lorem ipsum, dolor sit amet consectetur adipisicingelit. Maxime, consequuntur animi eos quisquam cupiditateodit quod provident harum quibusdam pariatur laborumdistinctio, quia dicta! Lorem ipsum, dolor sit ametsapiente omnis eaque voluptatibus delectus, corporisconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta! Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta!",
  },
  {
    name: "Josefa Rizal",
    src: "/assets/PAMILYA/Josefa Rizal.jpg",
    description: "",
  },
  {
    name: "Lucia Rizal",
    src: "/assets/PAMILYA/Lucia Rizal.jpg",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit consequuntur animi eos quisquam cupiditate odit quodprovident harum quibusdam pariatur laborum sapiente omniseaque voluptatibus delectus, corporis distinctio, quia dicta! Lorem ipsum, dolor sit amet consectetur adipisicingelit. Maxime, consequuntur animi eos quisquam cupiditateodit quod provident harum quibusdam pariatur laborumdistinctio, quia dicta! Lorem ipsum, dolor sit ametsapiente omnis eaque voluptatibus delectus, corporisconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta! Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta!",
  },

  {
    name: "Maria Rizal",
    src: "/assets/PAMILYA/Maria Rizal.jpg",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit consequuntur animi eos quisquam cupiditate odit quodprovident harum quibusdam pariatur laborum sapiente omniseaque voluptatibus delectus, corporis distinctio, quia dicta! Lorem ipsum, dolor sit amet consectetur adipisicingelit. Maxime, consequuntur animi eos quisquam cupiditateodit quod provident harum quibusdam pariatur laborumdistinctio, quia dicta! Lorem ipsum, dolor sit ametsapiente omnis eaque voluptatibus delectus, corporisconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta! Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta!",
  },
  {
    name: "Narcisa Rizal",
    src: "/assets/PAMILYA/Narcisa Rizal.jpg",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit consequuntur animi eos quisquam cupiditate odit quodprovident harum quibusdam pariatur laborum sapiente omniseaque voluptatibus delectus, corporis distinctio, quia dicta! Lorem ipsum, dolor sit amet consectetur adipisicingelit. Maxime, consequuntur animi eos quisquam cupiditateodit quod provident harum quibusdam pariatur laborumdistinctio, quia dicta! Lorem ipsum, dolor sit ametsapiente omnis eaque voluptatibus delectus, corporisconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta! Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta!",
  },
  {
    name: "Olympia Rizal",
    src: "/assets/PAMILYA/OLYMPIA RIZAL.jpg",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit consequuntur animi eos quisquam cupiditate odit quodprovident harum quibusdam pariatur laborum sapiente omniseaque voluptatibus delectus, corporis distinctio, quia dicta! Lorem ipsum, dolor sit amet consectetur adipisicingelit. Maxime, consequuntur animi eos quisquam cupiditateodit quod provident harum quibusdam pariatur laborumdistinctio, quia dicta! Lorem ipsum, dolor sit ametsapiente omnis eaque voluptatibus delectus, corporisconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta! Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta!",
  },
  {
    name: "Paciano Rizal",
    src: "/assets/PAMILYA/PACIANO RIZAL.jpg",
    description: "",
  },
  {
    name: "Saturnina Rizal",
    src: "/assets/PAMILYA/SATURNINA RIZAL.jpg",
    description: "",
  },
  {
    name: "Soledad Rizal",
    src: "/assets/PAMILYA/Soledad Rizal.jpg",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit consequuntur animi eos quisquam cupiditate odit quodprovident harum quibusdam pariatur laborum sapiente omniseaque voluptatibus delectus, corporis distinctio, quia dicta! Lorem ipsum, dolor sit amet consectetur adipisicingelit. Maxime, consequuntur animi eos quisquam cupiditateodit quod provident harum quibusdam pariatur laborumdistinctio, quia dicta! Lorem ipsum, dolor sit ametsapiente omnis eaque voluptatibus delectus, corporisconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta! Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta!",
  },
  {
    name: "Trinidad Rizal",
    src: "/assets/PAMILYA/Trinidad Rizal.jpg",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit consequuntur animi eos quisquam cupiditate odit quodprovident harum quibusdam pariatur laborum sapiente omniseaque voluptatibus delectus, corporis distinctio, quia dicta! Lorem ipsum, dolor sit amet consectetur adipisicingelit. Maxime, consequuntur animi eos quisquam cupiditateodit quod provident harum quibusdam pariatur laborumdistinctio, quia dicta! Lorem ipsum, dolor sit ametsapiente omnis eaque voluptatibus delectus, corporisconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta! Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Maxime, consequuntur animi eosquisquam cupiditate odit quod provident harum quibusdampariatur laborum sapiente omnis eaque voluptatibus delectus,corporis distinctio, quia dicta!",
  },
];

export const PaintingsData = [
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
export const SculptureData = [
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const EtcData = [
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    material: "Oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
