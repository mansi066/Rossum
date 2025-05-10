import {
 
  // chromecast,
  // disc02,
  
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  
  plusSquare,
 
  searchMd,

  telegram,
  twitter,

} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Events",
    url: "#events",
  },
  {
    id: "3",
    title: "Our Team",
    url: "#our-team",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#contact-us",
  },
  
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

 export const slides = [
  {
    url: './src/assets/Photo1.jpg',
  },
  {
    url: './src/assets/Photo2.jpg',
  },
  {
    url:  './src/assets/Photo3.jpg',
  },

  {
    url:  './src/assets/Photo4.jpg',
  },
 
];

export const events = [
  {
    id: "0",
    title: "BootCamp",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    light:true,
  },
  {
    id: "1",
    title: "Webinar",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    
    light: true,
  },
  // {
  //   id: "2",
  //   title: "Connect everywhere",
  //   text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
  //   backgroundUrl: "./src/assets/benefits/card-3.svg",
    
  // },
  // {
  //   id: "3",
  //   title: "Fast responding",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-4.svg",
    
  //   light: true,
  // },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
    
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
    
  // },
];

export const team = [
  {
    id: "0",
    photo: "member1.jpg", 
    name: "member1",
    role: "",
  },
  {
    id: "1",
    photo: "member2.jpg", 
    name: "Member2",
    role: "",
  },
  {
    id: "2",
    photo: "member3.jpg", 
    name: "Member3",
    role: "",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
