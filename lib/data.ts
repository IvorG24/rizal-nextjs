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
    name: "Other-Works",
    hash: "/#otherworks",
  },
  {
    name: "Education",
    hash: "/#education",
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
      "Ang unang karanasan ni Jose Rizal sa pag-ibig ay isang mapait na karanasan. Siya ay nagkaroon ng puppy love para kay Segunda Katigbak, isang batang babae na, sa kasamaang-palad para sa kanya, ay mayroon nang nakaengkuwentro na magiging kanyang asawa, si Manuel Luz, isang lalaking mula sa kanyang bayan.",
  },
  {
    name: "Lenor Valenzuela",
    description:
      "Matapos matapos ang kanyang puppy love, natagpuan ni Rizal ang kanyang sarili na interesado sa isa pang babae: si Leonor Valenzuela, isang matangkad na babae mula sa Pagsanjan. Mayroon siyang kakaibang paraan ng pagpapakita ng kanyang pagmamahal - sumulat siya ng mga lihim na mensahe gamit ang invisible ink! Ang mga mensaheng ito ay maaaring mabasa lamang kung ihahawak mo ang papel sa ilalim ng isang ilaw o kandila. Bago umalis patungong Espanya, tiniyak ni Rizal na magpaalam sa huli kay Leonor.",
  },
  {
    name: "Leonor Rivera",
    description:
      "Si Leonor Rivera ang espesyal na karelasyon ni Rizal sa loob ng mahabang panahon, eksaktong 11 taon. Siya ang dahilan kung bakit hindi siya nahulog sa iba habang siya'y naglalakbay. Ngunit may malaking suliranin: hindi gusto ni Leonor's mom si Rizal. Iniisip niya na siya'y isang taong gulo dahil sa kanyang pagtuligsa sa pamahalaan. Kaya't itinago niya ang lahat ng mga liham na ipinadala ni Rizal kay Leonor. Dahil dito, iniisip ni Leonor na si Rizal ay nakalimutan na siya. Dahil sa kalungkutan at pag-iisa, pumayag siyang ikasal sa isang lalaki na pinili ng kanyang ina para sa kanya, isang Englishman na may pangalang Henry Kipping. Kaya ang pagmamahalan nina Rizal at Leonor, na dating matatag, ay malungkot na nagtapos dahil sa pakikialam ng ibang tao.",
  },
  {
    name: "Consuelo Ortiga",
    description:
      "Noong kanyang panahon sa Espanya, nakilala ni Rizal si Consuelo Ortiga y Rey, isa sa mga anak ni Don Pablo Ortiga. Siya ay isang magandang binibini, at kitang-kita na si Rizal ay naakit sa kanya. Isinulat pa niya para sa kanya ang isang tula, A la Senorita C.O. y R., na itinuturing na isa sa kanyang pinakamahusay na likha. Madalas na bumibisita sina Rizal at ang kanyang mga kaibigan sa tahanan ng mga Ortiga sa Madrid. Tilang maaaring naramdaman niya ang pagkakaroon ng mga damdamin para kay Consuelo, at maaaring hiningan pa siya nito na sumulat ng mga romantikong tula para sa kanya. Gayunpaman, nagpasya si Rizal na huminga muna bago pa ito lumalim. Nais niyang manatiling tapat sa kanyang pag-ibig kay Leonor Rivera sa Pilipinas, at hindi rin niya nais na magdulot ng problema sa kanyang kaibigan na si Eduardo de Lete, na umiibig ng husto kay Consuelo.",
  },
  {
    name: "O Sei San",
    description:
      "Sa panahon na siya ay nasa Japan, nakilala ni Rizal ang isang babae na nagngangalang O-Sei-San, ang anak ng isang samurai. Tinuruan niya siya ng isang espesyal na uri ng Hapones na pagpipinta na tinatawag na su-mie at tinulungan siya na mas maging mahusay sa pakikipag-usap sa wikang Hapones. Si O-Sei-San ay matalino at maganda, at lubos na nagustuhan ni Rizal. Kung hindi siya masyadong nakatuon sa pagtulong sa kanyang bayan, maaaring pinakasalan niya siya at nanirahan sa Hapon. May magandang trabaho pa nga siyang inaalok doon! Ngunit sa bandang huli, mas matibay ang kanyang pagmamahal sa kanyang bayan.",
  },
  {
    name: "Gertrude Becket",
    description:
      "Nang si Rizal ay nasa London upang mag-aral ng kasaysayan, nanirahan siya sa pamilya Beckett. May tatlong anak ang pamilya, at ang pinakamatanda, si Gertrude, ay may asul na mga mata at kahanga-hangang ganda. Nahulog ang loob ni Gertrude kay Rizal, at pati na rin siya'y tumulong sa kanya sa kanyang pagpipinta at paggawa ng mga eskultura. Gayunpaman, napagtanto ni Rizal na ang damdamin ni Gertrude ay nagiging seryoso na, at hindi niya nais na lokohin ito. Kaya naman, nagpasya siyang iwan ang London at pumunta sa Paris. Bago umalis, natapos niya ang isang eskultura ng tatlong kapatid na Beckett at ibinigay ito kay Gertrude bilang alaala ng kanilang panahon na magkasama.",
  },
  {
    name: "Nellie Bousted",
    description:
      "Pagkatapos mawala si Leonor, nagsimulang mag-isip muli si Rizal na hanapin ang pag-ibig. Nakipagkaibigan siya sa dalawang magkapatid na babae, si Nellie at Adelina Boustead, habang nananatili sa kanilang pamilya sa Biarritz. Kasama ang mga kapatid, nag-enjoy sila sa paglalaro ng fencing, at si Nellie ay nagkaroon ng malalim na damdamin para kay Rizal. Gayunpaman, may isang suliranin: si Antonio Luna, ang kapatid ni Rizal na kaibigan na si Juan Luna, ay interesado rin kay Nellie. Bagaman may nararamdaman si Nellie para kay Rizal, hindi nagtagal ang kanilang relasyon. Nais ni Nellie na maging Protestant si Rizal tulad niya, ngunit tinanggihan ito ni Rizal. Bukod dito, iniisip ng ina ni Nellie na si Rizal, bilang isang doktor na walang maraming mayamang pasyente, ay hindi magiging magandang asawa para sa kanyang anak.",
  },
  {
    name: "Suzanne Jacoby",
    description:
      "Noong 1890, kailangan umalis ni Rizal sa Paris dahil masyadong mahal ang gastusin doon. Lumipat siya sa Brussels at nanirahan sa isang boarding house na pinamamahalaan ng dalawang magkapatid na Jacoby. Sa paglipas ng panahon, nahulog sa pag-ibig si Rizal at ang isa sa mga kapatid, si Suzanne. Sa oras na kailangan nang umalis ni Rizal sa Brussels, sawi sa pag-ibig si Suzanne at umiyak. Pati na rin, sumulat siya ng mga liham kay Rizal matapos itong lumipat sa Madrid.",
  },
  {
    name: "Josephine Bracken",
    description:
      "Nang manirahan sa Dapitan noong 1895, nakilala ni Jose Rizal si Josephine Bracken, isang babaeng Irlandesa na may maliliwanag na asul na mga mata at masayang disposisyon, na humingi ng tulong sa kanya para sa kondisyon sa mata ng kanyang amang inampon. Bagaman may mga unang pag-aalinlangan mula sa mga kapatid ni Rizal tungkol sa mga hangarin ni Josephine, unti-unti siyang nahulog sa kanya, na nauuhaw sa kasamaan sa kanyang kinalalagyan. Bagaman nagnanais silang magpakasal, naantala ito ni Josephine dahil sa kanyang pag-aalala sa kanyang bulag na amang inampon. Matapos umalis ni Rizal, nanatili si Josephine sa pamilya niya sa Maynila. Sa kanyang pagbabalik sa Dapitan, sinubukan ni Rizal na itaguyod ang isang kasal, ngunit tinanggihan ng lokal na pari malibang bawiin ni Rizal ang kanyang mga kritisismo laban sa Simbahan. Pinili nilang mabuhay magkasama kahit walang kasal sa simbahan, at hinarap nina Rizal at Josephine ang trahedya nang hindi mabuhay ang kanilang anak sa pagsilang, malamang dahil sa isang nakaka-stress na pangyayari sa panahon ng pagbubuntis ni Josephine.",
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
];

export const PaintingsData = [
  {
    src: "https://eyeofthetiger25.wordpress.com/wp-content/uploads/2016/02/a-painting-on-a-pair-of-mother-of-pearl.png",
    title: "A painting on a pair of mother-of-pearl",
    material: "Langis",
    description:
      "Mga balang pinturahan ni Rizal sa Dapitan at ibinigay bilang regalo kay Doña Leonor Valenzuela at sa huli'y ipinasa sa mga kamay ni Doña Margarita Valenzuela.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/spanish-coat-of-arms.jpg",
    title: "Spanish Coat of Arms",
    material: "Akvarel na pintura",
    description:
      "Eskudo ng Espanya na ginawa noong kapistahan ni San Rafael sa Calamba noong 1867.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg",
    title: "Dapitan Church Chains",
    material: "Langis",
    description:
      "Ginawa ni Dr. Rizal ito habang nakapiit sa Dapitan noong 1894.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/saturnina-rizal.jpg",
    title: "Saturnina Rizal",
    material: "Langis",
    description:
      "Ang pinturang ito na ginawa sa langis ay ngayon ay ipinapakita sa Rizal Shrine sa Fort Santiago.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/paintings/allegory-on-a-pair.jpg",
    title: "Allegory on a pair of porcelain bases of the new year celebration",
    material: "Langis",
    description: "Isang pinturang langis na ginawa sa Berlin noong 1886.",
  },
];

export const SculptureData = [
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/triumph-of-death-over-life.jpg",
    title: "Triumph of death over life",
    material: "Putik",
    description: "Ibinigay kay Dr. Blumentritt noong 1890 sa Brussels",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/triumph-of-science-over-death.jpg",
    title: "Triumph of science over death",
    material: "Putik",
    description: "Ibinigay kay Dr. Blumentritt noong 1890 sa Brussels",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/bust-of-father-jose-guerrico.jpg",
    title: "Bust of Father Jose Guerrico",
    material: "Putik",
    description: "Ginawa sa Dapitan, 1894",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/oyang-dapitana.jpg",
    title: "Oyang Dapitana",
    material: "Putik",
    description: "Ginawa sa Dapitan noong 1893 – 1894",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/model-head-of-a-dapitan-girl.jpg",
    title: "Model head of a Dapitan girl",
    material: "Putik",
    description: "Ginawa sa Dapitan",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/sacred-heart-of-jesus.jpg",
    title: "Sacred heart of Jesus",
    material: "Kahoy",
    description: "Ginawa sa Ateneo de Manila noong 1875 – 1877",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/composite-statuette.jpg",
    title: "Composite Statuette",
    material: "Terra Cotta",
    description: "Molde sa Brussels noong 1890",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/mothers-revenge.jpg",
    title: "Mother’s Revenge",
    material: "Putik",
    description: "Ginawa sa Dapitan noong 1894",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/josephine-bracken-medallion.jpg",
    title: "Josephine Bracken (medallion)",
    material: "Kahoy",
    description: "Ginawa sa Dapitan noong 1895 - 1896",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/dr-francisco-mercado.jpg",
    title: "Dr. Francisco Mercado",
    material: "Kahoy",
    description: "Tunay na sukat. Ginawa sa Calamaba noong 1887 – 1888",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/prometheus-bound.jpg",
    title: "Prometheus Bound",
    material: "Putik",
    description: "Ibinigay kay Dr. Blumentritt noong 18909 sa Brussels",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/bust-of-felix-pardo-de-tavera.jpg",
    title: "Bust of Felix Pardo de Tavera",
    material: "Kahoy",
    description: "Ginawa sa Paris",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/image-of-virgin-mary.jpg",
    title: "Image of Virgin Mary",
    material: "Kahoy",
    description: "Ginawa sa Ateneo de Manila",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/wild-boar.jpg",
    title: "Wild Boar",
    material: "Putik",
    description: "Ginawa sa Dapitan",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/orate-frantes.jpg",
    title: "Orate Frantes (let us pray brethren)",
    material: "Kandila",
    description: "Ipininta sa La Senda Del Sacrificio ni Alejandro",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/san-antonio-de-padua.jpg",
    title: "San Antonio de Padua",
    material: "Putik",
    description: "Ginawa sa Dapitan",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/bust-of-dr-ricardo-carnicero.jpg",
    title: "Bust of Dr. Ricardo Carnicero",
    material: "Putik",
    description: "Ginawa sa Dapitan noong 1892 – 1893",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/st-paul-the-hermit.jpg",
    title: "St. Paul the Hermit",
    material: "Putik",
    description:
      "Ipinagkaloob bilang regalo kay Fr. Pablo Pastells ni Rizal sa Dapitan noong 1893",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/bust-of-augustus-ceasar.jpg",
    title: "Bust of Augustus Ceasar",
    material: "Putik",
    description: "Ipinadala mula sa London kay Dr. Blumentritt noong 1888",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/bust-of-julius-ceasar.jpg",
    title: "Bust of Julius Ceasar",
    material: "Putik",
    description: "Ipinadala mula sa London noong Disyembre 1888",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/biscuit-mold.jpg",
    title: "Biscuit Mold",
    material: "Kahoy",
    description: "Ginawa sa Dapitan noong 1893",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/wooden-platters.jpg",
    title: "Wooden Platters",
    material: "Kahoy",
    description: "Dapitan, 1894 - 1896",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/three-wooden-tops-of-different-sizes.jpg",
    title: "Three wooden tops of different sizes",
    material: "Kahoy",
    description: "Dapitan 1894",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/josephine-sleeping.jpg",
    title: "Josephine Sleeping",
    material: "Plaster",
    description: "Ginawa sa Dapitan noong 1895 – 1896",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/a-bowl-of-a-pipe-representing-a-girls-head.jpg",
    title: "A bowl of a pipe representing a girl's head",
    material: "Kahoy",
    description: "Dapitan",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/two-gate-columns.jpg",
    title: "Two gate columns (depicting busts)",
    material: "Kahoy",
    description:
      "Ginawa sa Dapitan nang matapos ang serbisyo sa tubig noong 1895",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/bust-of-his-father.jpg",
    title: "Bust of his Father",
    material: "Putik",
    description: "Ginawa sa Calamba, 1881",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/head-of-egyptian.jpg",
    title: "Head of Egyptian (candle holder)",
    material: "Plaster",
    description: "Ginawa sa Hong Kong noong 1892",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/bust-of-mirabeau.jpg",
    title: "Bust of Mirabeau",
    material: "Terra Cotta",
    description: "Ginawa sa Barcelona, inilagay para kay Valentin Ventura",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/a-filipina-girl-doll.jpg",
    title: "A Filipino Girl Doll",
    material: "Kahoy",
    description: "",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/josephines-head.jpg",
    title: "Josephine’s Head",
    material: "Putik",
    description: "Ginawa sa Dapitan",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/sculptures/a-marionette-in-a-form-of-a-clown.jpg",
    title: "A marionette in a form of a clown",
    material: "Kahoy",
    description: "Ginawa sa Dapitan, 1894 – 1895",
  },
];

export const EtcData = [
  {
    src: "https://rizal.raphaelmarco.com/static/files/discoveries/draco-rizali.jpg",
    title: "Draco Rizali",
    material: "Reptilya",
    description:
      "Draco Rizali ay isang 'lumilipad na butiki' ng Pilipinas na maaaring lumipad sa hangin.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/discoveries/apogania-rizali.jpg",
    title: "Apogania Rizali",
    material: "Kulisap",
    description:
      "Ang Apogania Rizali ay isang beetle na pinangalanan ayon sa pambansang bayani ng Pilipinas.",
  },
  {
    src: "https://rizal.raphaelmarco.com/static/files/discoveries/rhacophorus-rizali.jpg",
    title: "Amphibian",
    material: "Langis",
    description:
      "Ang Rhacophorus Rizali ay isang uri ng palaka na matatagpuan sa Pilipinas, na pinangalanang ayon sa pambansang bayani nito.",
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
    src: "https://live.staticflickr.com/5134/5521531869_70285ebeaa_b.jpg",
    title: "A painting on a pair of mother-of-pearl",
    Date: "Kabataan ni Rizal",
    Link: "https://en.wikipedia.org/wiki/Teodora_Alonso_Realonda",
    University: "Casa Escuela de Dona Teodora",
  },
  {
    src: "https://images.summitmedia-digital.com/spotph/images/old-universtiy-buildings_64.jpg",
    title: "Tinapos nito ang Bachelor of Arts (B.A.)",
    Date: "1872-1877",
    Link: "https://prezi.com/pdv6kk0nc8d-/ang-pag-aaral-ni-rizal-sa-ateneo-municipal-de-manila/#:~:text=si%20Rizal%20at%20nagbalak%20na%20pumasok%20sa%20Ateneo.&text=nagsimula%20ang%20pag%2Daaral%20sa,natanggap%20na%20pumasok%20sa%20Ateneo.",
    University: "Ateneo Municipal de Manila",
  },
  {
    src: "https://i.pinimg.com/736x/19/1a/44/191a443bcf84bbc492fd6cd3c0142a34.jpg",
    title: "Hinasa ni Rizal ang Pilosopiya at Letters",
    Date: "Abril 1877",
    Link: "https://varsitarian.net/filipino/20090715/si_jose_rizal_bilang_isangtomasino#:~:text=Matapos%20mag%2Daral%20sa%20Ateneo,siya%20sigurado%20sa%20kursong%20kukunin.",
    University: "University of Santo Tomas (UST)",
  },
  {
    src: "https://i.pinimg.com/originals/85/3a/b5/853ab58f99f2107abd20bacf75d446da.jpg",
    title: "Medisina ang tinahak na landas sa Madrid",
    Date: "1882",
    Link: "https://rizal.raphaelmarco.com/biography/education",
    University: "Universidad Central de Madrid",
  },
  {
    src: "https://lh4.googleusercontent.com/proxy/dTfulJdvP7QcS-TdvBLovBtG--6DIlfbZosSmSAxxkpLN3GgLkiirUw5Rxea4netQLgJ3n0KIJIHMblYZE-WPI8dk8Qdz5Nbe1s76a7BG78zgj_6378ZPZXZP73BDyWN7_GtN44UWwuukn-h51srzw",
    title: "Higit na pinalalim ang kaalaman sa Pilosopiya at Letras",
    Date: "March 19, 2023",
    Link: "https://rizal.raphaelmarco.com/biography/education",
    University: "Universidad Central de Barcelona",
  },
];
