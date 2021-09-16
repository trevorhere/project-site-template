import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";


//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions

import recrootBox from "../public/images/recrootBox_site.png";
import campRank   from "../public/images/camprank_site.png";
import blogApp    from "../public/images/blogapp-site.png";
import taskyv     from "../public/images/taskyv_site.png";
import bookThinks from "../public/images/bookThinks.png";
import currence   from "../public/images/currence.png"
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
    imageUrl: currence,
    title: "Currence",
    description: "Twitter clone built using React.js, Serverless, & AWS",
    link: "https://currence.netlify.com/",
    links: [{
      title: "Live",
      link: "https://currence.netlify.com/"
    }],
  },
  {
    imageUrl: taskyv,
    title: "Taskyv",
    description: "Sleek, sexy task manager",
    link: "https://taskyv.herokuapp.com/",
    links: [{
      title: "Live",
      link: "https://taskyv.herokuapp.com/",
    }],
  },
  {
    imageUrl: bookThinks,
    title: "BookThinks",
    description: "Book-centric note recorder",
    link: "https://bookthinks.herokuapp.com/",
    links: [{
      title: "Live",
      link: "https://bookthinks.herokuapp.com/",
    }],

  },
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
    imageUrl: campRank,
    title: "CampRank",
    description: "Post, rank and comment about your favorite campsites",
    link: "https://desolate-falls-89173.herokuapp.com/",
    links: [{
      title: "Live",
      link: "https://desolate-falls-89173.herokuapp.com/"
    }]
  },
  {
    imageUrl: blogApp,
    title: "Blog App",
    description: "Easy access blog app.",
    link: "https://boiling-harbor-27900.herokuapp.com",
    links: [{
        title: "Live",
        link: "https://boiling-harbor-27900.herokuapp.com",
      },{
        title: "Blog Post",
        link: "/post/blogApp",
      }]
  }
];

let posts = [{
  id: "blogApp",
  tags: [],
  dateTime: "test",
  date: "10/31/2019",
  readingTime: "",
  title: "Blog App",
  content: 
  `So I did it. I made a blog. Here it is. What to blog about? I don't know! But it's here should I ever need it. I'll be using github gists as a 'backend' to host the blog posts and react to build a static site and render the blog posts on a 'frontend'. This is the easiest, most basic way that I could think of to get a blog up and running. That works for me because, in my opinion, less is more. Less means faster iteration, quicker content creation and no monthy emails from AWS asking for a few bucks to pay for an EC2 instance. 
  
  ## In the future
  
  It would have been nice to have some more meta data, like a date or blurb. But, i couldn't figure out a way to do this with gists. I tried writing the gist in json. but parsing that becomes really difficult when you have many paragraphs as a value in an object. 
  
  ## Conclusion
  
  Thats it for now, maybe i'll try to update this weekly with personal news and things. we'll see. `  ,
  contentType: "", // text or markdown
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
