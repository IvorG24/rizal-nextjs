import React from "react";
import { FaBabyCarriage } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaChurch } from "react-icons/fa";
import { FaArrowTrendDown } from "react-icons/fa6";
import Link from "next/link";

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
  {
    name: "Segunda Katigbak",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
  },
  {
    name: "Lenor Valenzuela",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
  },
  {
    name: "Lenor Rivera",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
  },
  {
    name: "Consuelo Ortiga",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
  },
  {
    name: "O Sei San",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
  },
  {
    name: "Gertrude Becket",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
  },
  {
    name: "Nellie Bousted",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
  },
  {
    name: "Suzanne Jacoby",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
  },
  {
    name: "Josephine Bracken",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
  },
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
      "Si Francisco Mercado, ama ni Jose Rizal, ay ipinanganak noong ika-11 ng Mayo 1818 sa Biñan, Laguna. Siya ang pinakabata sa labintatlong anak nina Cirila Alejandro at Juan Mercado. Nag-aral siya ng Latin at pilosopiya sa Colegio de San Jose sa Manila at dito niya nakilala ang kanyang asawa, si Teodora Alonso Realonda na doon din nag-aral. Binuhay niya ang pamilya nila sa pamamagitan ng pagtanim ng mga bugas, tubo, at iba pang mga pananim.",
  },
  {
    name: "Teodora Reolonda",
    src: "/assets/PAMILYA/Mama.jpg",
    description:
      "Si Teodora Alonso ay ang ina ni Jose Rizal na ipinanganak noong ika-9 ng Nobyembre 1827 sa Meisik, Tondo, Manila. Siya ang ikalawang anak nina Lorenzo Alonso at Brijida de Quintos. Galing sa may-kaya na pamilya, nag-aral siya sa Colegio de Santa Rosa sa Manila at siya ay naging edukado. Dalawampung taong gulang siya nang ikasal sa tatay ni Jose Rizal na si Francisco Mercado at tumira sila sa Calamba, Laguna. Si Teodora ay naging isang masipag at dedikadong ina at nagsilbing unang guro ni Jose Rizal. Sa Calamba, nakibahagi ang kanyang pamilya sa agrikultura. Bilang nanay ng kalaban ng Espanyol, nakulong siya sa loob ng dalawa't kalahating taon dahil pinagbintangan siyang nilason niya ang asawa ng kanyang kapatid at iba pang mga pagpapahirap. Dahil sa malabong mga mata ni Teodora, napag-isipan ni Jose Rizal na mag-aral ng medisina. Namatay si Teodora Aquino noong ika-16 ng Agosoto 1911 sa Calle San Fernando, Binondo, Maynila dahil sa kaniyang kahinaan.",
  },
  {
    name: "Josefa Rizal",
    src: "/assets/PAMILYA/Josefa Rizal.jpg",
    description:
      "Si Josefa Rizal ay ang ika-9 na anak sa pamilya at siya ipinanganak noong taong 1865. Si Josefa ay kilala rin bilang si 'Panggoy'. Noong si Rizal ay nasa Europa, siya ay nagsusulat ng mga mensahe. Siya ay nagsulat para kay Josefa na ang laman ay pagpupuri niya sa kanyang kapatid dahil sa kanyang kaalaman sa Ingles. Si Rizal ay nagsulat din ng mensahe tungkol sa bente pesos ngunit ang 10 doon ay para dapat sa lotto. Siya ay nagkaroon ng sakit na epilepsy ngunit sa kabila ng kanyang sakit, nagawa niya pa ring sumali sa Katipunan at maging isang Katipunera. Si Josefa ay nahalal bilang pangulo ng mga babae sa Katipunan. Isa siya sa mga orihinal na miyembro ng Katipunan kasama sila Gregoria de Jesus.",
  },
  {
    name: "Lucia Rizal",
    src: "/assets/PAMILYA/Lucia Rizal.jpg",
    description:
      "Si Lucia Rizal ay ipinanganak noong 1857 at panglima sa pamilya Rizal. Siya ay kasal kay Mariano Herbosa ng Calamba, Laguna. Siya ay pinagbintangan na nagsulsol sa kanyang mga kababayan na huwag magbayad ng upa sa kanilang mga lupa na nagdulot ng kaguluhan at silang mag-asawa ay minsan nang nagatulan na itapon sa ibang bansa kasama ang ibang miyembro ng pamilya Rizal. 	Noong Disyembre 1891, ang balong si Lucia ay isa sa mga dumalo sa pulong ng pamilya sa Hong Kong na isang reuniyon. Sinamahan niya si Jose Rizal pabalik ng Maynila ng Hunyo ng sumunod na taon. Mula ika-6 hanggang ika-15 ng Hulyo 1892, si Jose Rizal ay ikinulong sa Fort Santiago at ipinatapon sa Dapitan pagkatapos sa tahi-tahing kasinungalingan na may mga babasahin laban sa mga pari na nakuha sa mga bagahe ni Lucia noong nagbiyahe siya sakay ng barkong Don Juan.",
  },

  {
    name: "Maria Rizal",
    src: "/assets/PAMILYA/Maria Rizal.jpg",
    description:
      "Siya ay ipinanganak noong 1859 at ang pang-anim at nakatatandang kapatid ni Jose Rizal. Ang asawa niya ay si Daniel Faustino Cruz na galing sa Binan, Laguna. Sinabi na si Maria daw ang kinausap ni Jose noong panahon na gusto ni Jose na pakalasan si Josephine Bracken. Namatay siya noong 1945.",
  },
  {
    name: "Narcisa Rizal",
    src: "/assets/PAMILYA/Narcisa Rizal.jpg",
    description:
      "Si Narcisa Rizal ay ipinanganak noong taong 1852 at may palayaw na “Sisa”. Siya ang ikatlong anak sa pamilya Rizal. Tulad ni Saturnina, tumulong si Sisa sa pag-aaral ni Rizal sa Europa, isinangla niya ang kanyang mga alahas at ibinenta niya ang kanyang mga damit para lang matustusan and pag-aaral ni Jose Rizal. Lahat halos ng mga tula at isinulat ni Jose Rizal ay kanyang naisaulo. Si Sisa ang pinakamatulungin sa kanilang pamilya. Nang ang kanilang mga magulang na sina Don Francisco at Doña Teodora ay itinaboy sa kanilang tahanan, si Sisa ang kumupkop sa kanila. Kahit na ang kasintahan ni Jose Rizal na si Josephine Bracken ay pinatira niya sa kanyang tahanan sapagkat pinaghinalaan siya ng pamilya Rizal na isang espiya ng mga paring Espanyol. Kaya’t noong taong 1896, habang siya ay nakapiit sa barkong “Castilla” na nakadaong sa Cavite ay nagpadala ng liham ng pasasalamat si Jose Rizal sa kapatid na si Sisa sa pagpapatuloy kay Bracken sa kanyang tahanan. Si Sisa rin ang matiyagang naghanap ng lugar kung saan si Jose Rizal ay inilibing na walang kahon at walang pangalan para pagkakilanlan kaya nagbigay siya ng aginaldo sa namamahala sa mga libingan para lagyan ng markang “RPJ” na siyang titik ng mga pangalan ni Jose Rizal. Pagkaraan ng maraming taon ay hinukay ni Sisa at mga kaanak ang mga labi ni Jose Rizal.",
  },
  {
    name: "Olympia Rizal",
    src: "/assets/PAMILYA/OLYMPIA RIZAL.jpg",
    description:
      "Si Olympia ay ang ikaapat na anak sa pamilya Rizal. Siya ay ipinanganak noong taong 1855. Napangasawa niya si Silvestre Ubaldo na isang Telegraph Operator sa Manila at sila ay biniyayaan ng tatlong anak ngunit ito rin ang dahilan ng kanyang kamatayan noong taong 1887.",
  },
  {
    name: "Paciano Rizal",
    src: "/assets/PAMILYA/PACIANO RIZAL.jpg",
    description:
      "Si Paciano ay ang nakatatandang kapatid ni Jose Rizal. Ipinanganak siya noong Marso 9, 1851 sa Calamba, Laguna. Siya ang pangalawa sa labing-isang magkakapatid. Inalagaan niya si Jose Rizal at tinulungan niya siyang makarating sa Europa. Habang nasa Europa si Jose, pinadalhan niya ng pensiyon at sinulatan niya para mabalitaan si Jose tungkol sa mga nangyayari sa Pilipinas at sa kanilang pamilya. Nag-aral si Paciano sa Colegio de San Jose sa Maynila. Naging guro at kaibigan niya si Fr. Jose Burgos. Sumali at sinuportahan ni Paciano ang Propaganda Movement for social reforms at ang diyaryo ng kilusan, Diariong Tagalog. Sinuportahan din niya ang Katipunan sa pagkuha ng mga miyembro galing sa Laguna. Pagkamatay ni Jose Rizal, naging heneral si Paciano ng Revolutionary Army at naging military commander din ng revolutionary forces sa Laguna noong Philippine-American War. Dahil dito, hinuli siya ng mga Amerikano. Namatay si Paciano ng siya'y 79 dahil sa tuberculosis.",
  },
  {
    name: "Saturnina Rizal",
    src: "/assets/PAMILYA/SATURNINA RIZAL.jpg",
    description:
      "Si Saturnina ang panganay sa kanilang magkakapatid. Siya ay ipinanganak noong 1850 at may palayaw na Neneng. Tinulungan niya kasama ang kanyang ina makaaral si Rizal at siya ang tumayong pangalawang ina ni Rizal noong nakulong ang kanilang ina na si Teodora. Napangasawa niya si Manuel Timoteo Hidalgo ng Batangas. Sila ay may limang anak na si Alfredo, Adela, Abelardo, Amelia at Augusto.",
  },
  {
    name: "Soledad Rizal",
    src: "/assets/PAMILYA/Soledad Rizal.jpg",
    description:
      "Si Soledad Rizal ay ang bunso sa pamilya Rizal at ipinanganak sa taong 1870. Siya ay kilala rin bilang Choleng. Si Rizal ay saludo sa kanya dahil siya ay isang guro at siya ang pinakaedukado sa kanilang magkakapatid. Siya ay sinabihan ni Rizal na dapat siya ay isang maging magandang huwaran para sa mga tao, ito ay nakasulat sa mensahe noong 1890.",
  },
  {
    name: "Trinidad Rizal",
    src: "/assets/PAMILYA/Trinidad Rizal.jpg",
    description:
      "Si Trinidad Rizal ay ika-10 sa magkakapatid na Rizal. Siya ay ipinanganak noong 1868 at namatay noong 1951. Ang palayaw niya ay Trining at siyang tagapagtago at tagapamahala na pinakahuli at pinakatanyag na tula ni Jose Rizal.\n\nBago namatay si Jose Rizal ay dinalaw siya ni Trining at ng kanilang ina sa kanyang piitan sa Fort Santiago. Nang sila’y paalis na ay inabot ni Jose Rizal ang isang lampana, isang regalo mula sa mga Pardo de Tavera at ibinulong sa kanya sa wikang hindi naunawaan ng mga kawal na nakabantay sa kanya na ang lutuan ay mayroong bagay na nakatago doon at iyon ay ang kanyang huling tulang isinulat.\n\nTulad ni Josefa at dalawang pamangkin, sumapi sa Katipunan si Trinidad matapos ang kamatayan ni Jose Rizal.",
  },
  {
    name: "Concepcion Rizal",
    src: "/assets/PAMILYA/Trinidad Rizal.jpg",
    description:
      "	Siya ang binansagang “Concha” ng kanyang mga kapatid at kaanak, si Concepcion Rizal ay ipinanganak noong 1862 at namatay sa edad lamang na tatlong taon, noong 1865. Siya ang pangwalo sa sampung magkakapatid. Sinasabing sa lahat ng kapatid na babae, si Concha ang pinakapaborito ni Jose o “Pepe” Rizal na mas bata nang isang taon sa kanya. Magkalaro sila at laging kinukuwentuhan ni Jose Rizal ang nakababatang kapatid at sa kanya naramdaman ni Jose Rizal ang kagandahan ng pagmamahal ng isang kapatid na babae.",
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
export const LiteratureData = [
  {
    title: "Last Poem of Rizal",
    description:
      "Ang tula na ito, kilala bilang Ultimo Adios o Huling Paalam, ay isinulat ni Jose Rizal sa Fort Santiago bago siya barilin. Ipinamana niya ito sa kanyang kapatid na si Trinidad. Sa tula, ipinapahayag ni Rizal ang kanyang pagpapaalam sa bayan at sa kanyang mga mahal sa buhay. Tinatalakay niya ang pagmamahal sa bayan at ang pagiging handa niyang ibuhos ang kanyang dugo para sa kapakanan nito. Binabanggit din niya ang pagmamahal sa mga minamahal niya at ang kanyang hangaring magbigay ng kaluwagan sa kanila. Sa huli, ipinapaalam niya ang kanyang paglisan sa mundong ito nang may katahimikan at pag-asa.",
  },
  {
    title: "To The Philippines",
    description:
      "Sa tula na isinulat ni Rizal sa orihinal na wikang Espanyol, ipinapakita niya ang kagandahan at kahalagahan ng Pilipinas. Binabanggit niya ang Pilipinas bilang isang diyosa na mahinhin at dalisay tulad ng umagang naglalantad sa kalangitan. Iniulat din niya ang paghanga ng mga kultura sa kanlurang bahagi ng daigdig at sa hilagang polo sa kagandahan ng Pilipinas.Sa pamamagitan ng kanyang tula, ipinapahayag ni Rizal ang pagmamahal at pagtatanggol sa kanyang bayan. Ipinapakita niya ang kahalagahan ng pagpaparangal sa Pilipinas at sa kanyang mga mamamayan.",
  },
  {
    title: "Our Mother Tongue",
    description:
      "Sa tula, ipinapahayag ni Rizal ang kahalagahan ng pagmamahal sa sariling wika at ang kaugnayan nito sa paghahangad ng kalayaan. Sinasabi niya na ang pagmamahal sa sariling wika ay nagpapakita ng pagnanasa para sa kalayaan. Ayon sa kanya, ang wika ay nagpapakita ng pagkakakilanlan ng isang bayan at ng bawat indibidwal, at dapat itong ipagmalaki at pangalagaan.",
  },
  {
    title: "Memories of My town",
    description:
      "Sa tula, binabalikan ng nagsasalita ang kanyang kabataan sa isang bayan na puno ng alaala ng kaligayahan at kalinisan. Iniisa-isa niya ang mga masasayang alaala ng kanyang kabataan: ang paglalaro sa tabing-dagat, ang simoy ng hangin, ang bango ng mga bulaklak, at ang kanyang simpleng pananampalataya sa Diyos.Ipinapahayag niya ang pagmamahal sa kanyang bayan at ang mga masasayang sandali ng kanyang kabataan. Gayunpaman, sa pagtatapos ng tula, nagpapaalam siya sa kanyang bayan at nagdarasal para sa kapayapaan at karunungan.",
  },
  {
    title: "Hymn to Labor",
    description:
      "Ang tula ay naglalaman ng mga paalaala at panawagan sa iba't ibang sektor ng lipunan na magtulong-tulong para sa ikauunlad at ikabubuti ng bayan. Binibigyang-diin nito ang kahalagahan ng pagtutulungan at pagmamalasakit sa bayan, kahit sa simpleng gawain sa araw-araw. Ipinapakita rin nito ang papel ng bawat isa sa lipunan, mula sa mga lalaki, babae, hanggang sa mga kabataan, sa pagtataguyod ng kapakanan ng bayan.",
  },
  {
    title: "Kundiman",
    description:
      "Ang tulang ito ay nagpapahayag ng pagnanais at pangungulila ng isang bayani para sa kanyang bayan. Sa bawat himig at titik, naipadama ni Rizal ang kanyang pagmamahal sa Pilipinas at ang kanyang pakikibaka para sa kalayaan at katarungan. Ang mga salita'y hindi lamang nagbibigay-tugon sa pusong nagmamahal, kundi nagdudulot din ng inspirasyon at pananampalataya sa bayan. Sa pamamagitan ng Kundiman, isang bahagi ng kamalayang Pilipino ang bumabalik sa atin, nagpapaalala na ang bawat Pilipino ay may bahagi sa pakikibaka at pag-asa para sa isang mas malayang kinabukasan.",
  },
  {
    title: "A Poem That Has No Title",
    description:
      "Sa tula, binibigyang-pugay ng nagsasalita ang kanyang Lumikha na nagbigay ng kanyang kalakasan sa gitna ng kanyang pagkawala. Ipinahayag niya ang pasasalamat sa Diyos na nagbigay sa kanya ng kapayapaan at kagalakan sa kabila ng kanyang mga pagsubok. Binanggit niya ang kapangyarihan ng Diyos na nagbigay sa kanya ng buhay at proteksyon. Ipinakita rin niya ang kanyang pasasalamat sa Diyos sa pagkakaroon niya ng marangal na pinagmulan at isang magandang bayan na mayaman at makulay, bagaman may kakulangan ito sa kapalaran at katalinuhan.",
  },
  {
    title: "Song of Maria Clara",
    description:
      "Sa tula, ipinapahayag ng nagsasalita ang tamis at kasiyahan na nararanasan sa sariling bayan. Binibigyang-diin niya ang halaga ng pagiging may mga kaibigan at ang kasiyahan na dulot ng mga araw na nagdaan sa bayan. Ipinakikita rin niya ang pagmamahal sa bayan sa pamamagitan ng pagbibigay-diin sa kahalagahan ng pagmamatyag para dito. Sa pamamagitan ng mga paglalarawan ng mga pagmamahal at pangyayari sa buhay sa bayan, ipinapahayag niya ang kahalagahan ng pag-ibig sa bayan at ang kasayahan na dulot nito sa buhay.",
  },
  {
    title: "To the Philippines Youth",
    description:
      "Sa tula, ipinahahayag ang pagmamahal at pagmamalasakit sa bayan at sa kabataang Pilipino. Binibigyang-diin ang kahalagahan ng mga kabataan bilang pag-asa at lakas ng bayan. Ipinakikita rin ang pagtawag sa kabataan na gamitin ang kanilang kakayahan at talino upang maglingkod sa bayan at sa kapwa. Ang tula ay naglalarawan ng kabataan bilang mga indibidwal na mayroong malalim na pangarap at ambisyon para sa kanilang sarili at sa bayan. Binibigyang-halaga rin ang kanilang kakayahan na magdala ng pagbabago at magbigay-inspirasyon sa iba.",
  },
  {
    title: "To Josephine",
    description:
      "Sa tula, binabanggit ang pangalan na Josephine at ang pagdating niya sa Pilipinas na tila isang palahing paglalakbay ng isang layang lumilipad. Inilalarawan ito bilang isang paghahanap ng isang tahanan, tulad ng isang lawing lumilipad. Binibigyang-diin ang pangako ng pagmamahal at pag-aalaga mula sa mga taong nagmamahal sa kanya sa Pilipinas, kahit kung ang kanyang kapalaran ay dadalhin siya sa ibang lugar tulad ng Japan, China, o Shanghai. Ang tula ay nagpapahiwatig ng pag-asa na kahit saan man siya magpunta, mayroong pagmamahal at suporta na naghihintay para sa kanya sa Pilipinas.",
  },
  {
    title: "Education Gives Luster to the Motherland",
    description:
      "Sa tula, ipinakikita ang kahalagahan ng edukasyon sa pagpapalakas at pagpapabuti ng bansa at ng buhay ng tao. Ipinapahayag dito ang bisa ng edukasyon sa pagpapalakas ng mga kabataan at sa pagtataguyod ng kabutihan at kaalaman. Binibigyang-diin din ang epekto ng edukasyon sa pagtatagumpay ng bansa at sa pagpapalaganap ng kabutihan at katarungan. Sa pamamagitan ng tula, ipinakikita ang edukasyon bilang isang tagapagbuklod ng bayan at isang tanglaw na nagbibigay-liwanag sa landas ng pag-unlad at kabutihan. Ipinapahayag ang kahalagahan ng edukasyon sa pagpapalakas ng karakter at pagpapalaganap ng kabutihan sa lipunan.",
  },
  {
    title: "To the Virgin Mary",
    description:
      "Sa tula, ipinapahayag ng nagsasalita ang pagmamahal at debosyon kay Maria, ang Ina ng Diyos, bilang isang mapagpala at mapayapang kalakasan sa gitna ng mga pagsubok at hirap ng tao. Binibigyang-diin dito ang pag-asa at pananampalataya sa tulong at proteksyon ni Maria sa mga oras ng pangangailangan at paghihirap. Ang tula ay nagpapahiwatig ng kahalagahan ng panalangin at pagtitiwala sa Diyos at sa Kanyang Ina bilang tagapagligtas at tagapag-aliw sa mga sandali ng kalungkutan at pagdurusa.",
  },
];
export const EducationData = [
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    Date: "March 19, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Link: "/",
    University: "Tanza University",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    Date: "March 19, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Link: "/",
    University: "Tanza University",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    Date: "March 19, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Link: "/",
    University: "Tanza University",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    Date: "March 19, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Link: "/",
    University: "Tanza University",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "A painting on a pair of mother-of-pearl",
    Date: "March 19, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Link: "/",
    University: "Tanza University",
  },
];
