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
    imageUrl: blogApp,
    title: "Blog App",
    description: "Easy access blog app.",
    link: "https://boiling-harbor-27900.herokuapp.com",
    links: [{
        title: "Live",
        link: "https://boiling-harbor-27900.herokuapp.com",
      },{
        title: "Post",
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
  `So, you have an idea for an app and you're looking for someone to help you build it. Maybe you already have part of your app built. Maybe you're mostly finished with your app but need help with one remaining piece.

Whatever the case, BYU Dev Club would love to help you! We frequently receive requests for help with software development. As you can imagine, some of these requests are successful and some are not. I wrote this article in an effort to increase that success rate.

This article contains:

    1. Two ways to get in touch with us.
    2. Things to do.
    3. Things not to do.
    4 Alternative options.

### 1. Get in touch with us
#### Fill out our jobs form.

This form asks you a few questions about your idea, then posts a message to the #jobs channel in our slack group. (You don't need to be a student to sign up!)

This is an example of a message that was posted into the jobs channel using our form:


      

      

      

      

      


  

  
No alt text provided for this image
Join our slack channel and come talk to us there.

Slack is a messaging app that we use for club communications. You can join our channel and message club members about your ideas or questions.


### 2. Things to do
#### Show, don't tell.

A picture is worth a thousand words, right? Don't tell us about your idea, show us! You might have mock ups designed using the latest professional design software. Or, you might have some pictures of a drawing done on a napkin. Whatever you have, we want to see it!
Create a company profile or page on any of the following websites:

    crunchbase
    linkedin
    facebook
    angel list

This list isn't comprehensive; any site where you can explain your idea or post images of wire frames or mock ups will work.
Put together a simple landing page for you idea.

Creating a simple landing page for your idea is an effective way to build credibility. There are a ton of great tools that can help you do this with ease. Two popular drag-and-drop website builders are wix.com and squarespace.com .

Here's a recent example of a landing page that a club member made:


      

      

      

      

      


  

  
No alt text provided for this image

Even just a barebones site goes a long way!

### 3. Things not to do
#### Offering very little ownership in exchange for work. 

Discussing the distribution of ownership in a business can be complicated, especially for startups. That being said, it's usually obvious when someone is getting the bad end of a bargain. It helps if you're open to fair distribution of ownership for potential founding members.
Offering very little money in exchange for work.

Yeah, we're poor college students, but we're not that poor. We frequently intern at high paying companies over the summer. Do market research and offer a competitive wage based on the skill set needed for your project.

Consider the table below which shows the current pay rates for BYU CS TAs. At the very minimum, freshmen are getting paid 10$/hr to answer a questions, occasionally grade assignments and work on their own homework.

These jobs aren't hard to come by. Point being, a senior can get $15/hr to do what might be the world's easiest job, so you may need to adjust your expectations accordingly.


      

      

      

      

      


  

  
No alt text provided for this image
Offering mentorship or experience in exchange for work.

Although this approach may work in other fields, I've never seen a successful request of this kind when it comes to finding software engineering talent.

### 4. Alternative options
#### Look at other places on campus.

There are many talented students at BYU and not all of them are members of our club. The Rollins Center for Entrepreneurship has a webpage with links you can use to find talented BYU students involved in other similar on campus clubs and organizations.
The best route for you might be learning to build software on your own.

Many people have ideas but feel they don't have the necessary skills to design and build an app. The truth is, there are plenty of good resources that you can learn from. Consider a udemy.com course or freeCodeCamp.com.
Come learn with us.

For the past two semesters, we've been hosting hacknights every Tuesday at 7:30pm where we teach beginners how to code. You can join the slack channel linked above and ask about this if you're interested. We'd love to see you there.
   `  ,
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
