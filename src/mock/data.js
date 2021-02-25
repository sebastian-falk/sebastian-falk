import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Sebastian Falk',
  subtitle: 'A full stack web developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_img_sebastian_falk.jpg',
  paragraphOne:
    'I have 7 years of work experience creating websites, web applications and back-end services for companies like Toyota Material Handling Europe, Eika Gruppen and the Municipality of Oslo. Currently I am working as a consultant at Knowit Amende.',
  paragraphTwo:
    'Educated as a computer engineer at Chalmers University of Technology, Gothenburg, Sweden.',
  paragraphThree:
    'I recently started to develop simple business and personal websites as a part time job. If you are interested in having one built for an affordable price, don’t hesitate to contact me.',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Bymiløetaten - Håndheving Gebyr Klage (HGK)',
    info:
      "HGK is the municipality of Oslo's parking ticket and environmental fee management system.",
    info2:
      'On the HGK project I was in charge of the front-end tech stack, development and maintenance. I also stepped in and helped with the back end development when workload was high there.',
    // url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Eika - Billån og billånskalkulator',
    info:
      'Billån og billånskalkulator is a product for the banks in the Eika group. This product will not only enable them to offer their users a way of borrowing money for cars but also present the price/payoff plan.',
    info2:
      'On the Billån og billånskalkulator project I was in charge of the front-end development.',
    // url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Toyota - Order optimizer',
    info:
      "The Order optimizer is a product managing fully automated warehouse forklifts' orders and warehouse storage.",
    info2:
      'On the Order optimizer product I helped to develop the back end, scenario tests and front-end.',
    // url: '',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sebastian.falk.1986@gmail.com',
};

// FOOTER DATA
export const footerData = {
  // networks: [
  //   {
  //     id: nanoid(),
  //     name: 'twitter',
  //     url: '',
  //   },
  //   {
  //     id: nanoid(),
  //     name: 'codepen',
  //     url: '',
  //   },
  //   {
  //     id: nanoid(),
  //     name: 'linkedin',
  //     url: '',
  //   },
  //   {
  //     id: nanoid(),
  //     name: 'github',
  //     url: '',
  //   },
  // ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
