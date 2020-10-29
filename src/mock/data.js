import { nanoid } from 'nanoid';
// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Gabe St. Angel',
  subtitle: 'I\'m a student and a builder of things.',
  cta: 'Learn more',
};

//tools
export const toolsData = [
  {type: "Linux", level: 90},
  {type: "Git", level: 90},
  {type: "ReactJS", level: 75},
  {type: "ML", level: 65},
  {type: "Algorithms", level: 65},
];

//SKILLS
export const skillsData = [
  {type: "Python", level: 90},
  {type: "Java", level: 85},
  {type: "ReactJS", level: 70},
  {type: "C++", level: 70},
  {type: "Swift", level: 65},
];
export const colors = {
  bar: '#00cdac',
  title: {
    text: '#000000',
    background: '#fff'
  }
}


// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'solarcar.jpg',
    title: 'ISU Solar Car Telemetry GUI',
    info: 'PyQt5 based GUI that relays critical information about the status of the solar car to a host computer.',
    info2: 'Connects with the atmega2560 using 2.4ghz wireless serial communication.',
    url: '',
    repo: 'https://github.com/gabrielsaintangel/IsuSolarCarTememetrics', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ledcontroller.jpg',
    title: 'Master-Slave Individually Adressable LED Controller',
    info: 'A flexible LED Controller that uses a Raspberry Pi and an arduino to control Adressable LEDs.',
    info2: 'Comes prebuilt with several custom modes and can be controlled using the Blynk API and it\'s associates App, available for iOS and Android.',
    url: '',
    repo: 'https://github.com/gabrielsaintangel/Arduino-Blynk-Adressable-Led-Controller', // if no repo, the button will not show up
  },
];
// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I became deeply infatuated with computers at young age, and have always been proactive in expressing my interests.  I\'m persuing a degree in Computer Science at Illinois State University, but my education is not limited to what I\'ve learned in school.',
  paragraphTwo: 'In addition to being proficent in mutiple programming languages and excelling in software development, I also have a keen understanding of hardware concepts and have hands on experience building things from the ground up.',
  paragraphThree: 'Check out my resume for more detailed information about my life.',
  resume: 'https://raw.githubusercontent.com/gabrielsaintangel/Resume/0517277d01a3ccb1454168d00fc47d5af73092c4/GabrielStAngelResume.pdf', // if no resume, the button will not show up
};
// CONTACT DATA
export const contactData = {
  cta: 'Want to learn even more about me?',
  btn: 'Email me',
  email: 'gm.saintangel@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gabriel-st-angel-a938791b0/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gabrielsaintangel',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
