import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import {keyboardPostText} from './posts/keyboard_build'
//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions

import recrootBox from "../public/images/recrootBox_site.png";
import campRank   from "../public/images/camprank_site.png";
import blogApp    from "../public/images/blogapp-site.png";
import taskyv     from "../public/images/taskyv_site.png";
import bookThinks from "../public/images/bookThinks.png";
import currence   from "../public/images/currence.png"
import keyboard   from "../public/images/keyboard.png"
import selfie     from "../public/images/trevor.png"

// import resume from "../public/assets/Resume.pdf";

let darkModeSwitch = true;
let darkMode = false;
let accent = "#003344"

// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
// const selfie = "trevor.png";
// const currence = "../public/images/currence.png";
// const recrootBox = "../public/images/recrootBox_site.png";
// const campRank =  "../public/images/camprank_site.png";
// const blogApp = "../public/images/blogapp-site.png";
// const taskyv = "../public/images/taskyv_site.png";
// const bookThinks = "../public/images/bookThinks.png";

// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Trevor";
let lastName = "Lane";
let title = "Software Engineer";
let bio = `Currently enjoying life as a husband and father. During the day I work as a software engineer at Breeze Aviation.
Feel free to check out some of my past projects below, browse some code on my github profile, or just reach out to say hi!`;

// old bios:
// `Currently  Computer Science at Brigham Young University
// and working as a software engineering intern at a company called SimpleNexus
// where I work with Vue.js & Rails.
// Feel free to check out some of my past projects below, browse some code on my github profile, or just reach out to say hi!`;

//Edit links to external accounts or items here (e.g. github, linkedIn, leetcode, resume, etc.)
// -- For display purposes, it's best to use between 3 and 5 links, but if you add more or less,
// -- the page will adjust accordingly.

let userIcons = true;

let links = [
  {
    name: "Email",
    link: "mailto:trevor@trevorlane.net",
    icon: FaEnvelope
  },
  {
    name: "GitHub",
    link: "https://github.com/trevorhere",
    icon: FaGithub

  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hi-there-trevor-here/",
    icon: FaLinkedin

  },
  {
    name: "Resume",
    link: '/assets/Resume.pdf',
    icon: FaFileAlt
  }
];

//Edit portfolio items here by changing title, image title, and link
// -- you can adjust the number of items as needed. For display purposes, it's best to use
// -- multiples of 3.

let portfolioTitle = "Recent Projects"
let portfolioSectionBackgroundColor = "#003344"
let portfolioItems = [
  {
    imageUrl: recrootBox,
    title: "Recroot Box",
    description: "Easy to user porfolio-site template",
    link: "https://github.com/trevorhere/recrootBox/",
    links: [{
      title: "Live",
      link: "https://github.com/trevorhere/recrootBox/",
    }],
    tags: ["react.js", "next.js", "tailwind", "netlify"]
  },
  {
    imageUrl: currence,
    title: "Currence",
    description: "Twitter clone built using React.js, Serverless, & AWS",
    link: "https://currence.netlify.com/",
    links: [{
      title: "Client Source",
      link: "https://github.com/trevorhere/currence_client"
    },{
      title: "Server Source",
      link: "https://github.com/trevorhere/currence_server"
    }],

    tags: ["react", "serverless", "node", "aws"]
  },
  // {
  //   imageUrl: taskyv,
  //   title: "Taskyv",
  //   description: "Sleek, sexy task manager",
  //   link: "https://taskyv.herokuapp.com/",
  //   links: [{
  //     title: "Live",
  //     link: "https://taskyv.herokuapp.com/",
  //   }],
  // },
  // {
  //   imageUrl: bookThinks,
  //   title: "BookThinks",
  //   description: "Book-centric note recorder",
  //   link: "https://bookthinks.herokuapp.com/",
  //   links: [{
  //     title: "Live",
  //     link: "https://bookthinks.herokuapp.com/",
  //   }],

  // },
  // {
  //   imageUrl: campRank,
  //   title: "CampRank",
  //   description: "Post, rank and comment about your favorite campsites",
  //   link: "https://desolate-falls-89173.herokuapp.com/",
  //   links: [{
  //     title: "Live",
  //     link: "https://desolate-falls-89173.herokuapp.com/"
  //   }],
  //   tags: ["javascript", "html", "css", "heroku"]
  // },
  {
    imageUrl: keyboard,
    tags: ['3D Print, Build, DIY'],
    title: "DIY Keyboard Build",
    description: "Custom built Dactyl-Manuform 5X7",
    links: [{
        title: "Post",
        link: "/post/keyboardBuild",
      }]
  }
];


let posts = [
  {
  id: "keyboardBuild",
  tags: ['3D Print, Build, DIY'],
  dateTime: "test",
  date: "09/26/2021",
  readingTime: "10 min",
  title: "DIY Keyboard Build",
  content: keyboardPostText,
  href: "https://i.imgur.com/ZLe9N4s.png",
  author: {
    href: "https://avatars.githubusercontent.com/u/15148900",
    name: "Trevor Lane",
    imageUrl: "https://avatars.githubusercontent.com/u/15148900"
  }
}]
   
let paths = {  // generates routes for each post automatically
  paths: posts.map(post => {
      return {params: {id: post.id}}
    }),
  
  fallback: true,
}

let showEmailCapture = true;

// If you do not want the footer to be displayed (it just has a link to the github repo
// -- for this template ) then you can set showFooter to false and it will go away.
let showFooter = true;


let callToActionTitle = "Blog";
let callToActionLink = "https://blog.trevorlane.dev"
let renderCallToAction = true;
let gistUrl = `https://api.github.com/gists/68cc754fb298f3121b5b2b4cfaa754d4`

export {
  firstName,
  lastName,
  title,
  bio,
  portfolioTitle,
  portfolioItems,
  portfolioSectionBackgroundColor,
  selfie,
  showEmailCapture,
  showFooter,
  links,
  userIcons,
  darkModeSwitch,
  darkMode,
  accent,
  callToActionLink,
  callToActionTitle,
  renderCallToAction,
  gistUrl,
  campRank,
  posts,
  paths
};  
