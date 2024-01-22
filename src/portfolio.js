/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kavin sri",
  title: "Hi all, I'm Kavinsri",
  subTitle: emoji(
    "As a seasoned Unity Developer, I excel in leveraging Unity3D and C# to architect sophisticated and engaging games. My commitment lies in pushing technological frontiers and delivering high-quality experiences across diverse platforms."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zixbEXbZKDhxLmrIG5D0iwe8RN2oU2LG/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kavinsrikarthikeyan",
  linkedin: "https://www.linkedin.com/in/kavinsri-karthikeyan-09091322a/",
  gmail: "kavinsrikarthi@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY UNITY DEVELOPER EAGER TO EXPLORE EVERY ASPECT OF GAME DEVELOPMENT TECHNOLOGY",
  skills: [
    emoji(
      "⚡ Create engaging and immersive user interfaces for your Unity game applications."
    ),
    emoji("⚡ Design and implement user interfaces in Unity for seamless gaming experiences."),
    emoji(
      "⚡ Develop captivating and immersive multiplayer interfaces for your Unity game applications."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Photon PUN2",
      fontAwesomeClassname: "fas fa-network-wired"

    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kongu Vellalar Metric Higher Seconday School",
      logo: require("./assets/images/KVM.png"),
      subHeader: "Computer science",
      duration: "June 2018 - April 2019",
      desc: "Participated in sports events.",
      descBullets: [
        "Chess",
        "NSS active Volunteer"
      ]
    },
    {
      schoolName: "Kongu Engineering College",
      logo: require("./assets/images/KEC.webp"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2019 - May 2023",
      desc: "Education and Extracurricular activities",
      descBullets: [
        "CGPA : 8.4/10",
        "Joint Secretary : Rotaract Club",
        "NSS : Active Volunteer"
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Unity", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C#",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Unity Developer",
      company: "Meynikara XR Technologies",
      companylogo: require("./assets/images/Mey.jfif"),
      date: "October 2022 – Present",
      desc: "I have been working at Meynikara XR Technologies for the past one and a half years as a Unity developer. Here, I have developed various projects in Unity 3D, including game development, virtual reality, and augmented reality.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // ,
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE DONE.",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Fall Guy",
      projectDesc: "Developed a Fall Guy adventure game for iOS and Android using Unity and C#. Implemented character movement, obstacle generation, power-ups, and scoring system. Jump into the chaos and strive to be the Fall Guy standing in this fast-paced mobile experience!.Developed using the Unity game engine and C# programming language to ensure a seamless and enjoyable gaming experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Office Projects",
  subtitle:
    "SOME OF THE PROJECTS I HAVE DONE FOR MY COMPANY",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      //url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Metakalvi",
      description: "Meta Kalvi is the next-gen revolution in the field of education, envisioning a transformative learning experience for students. I have completed 20 projects. Utilizing VR, Unity 3D development, and C#."
                
      
      
    },
    {
      //url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Multiplayer",
      description:
        "I played a key role in designing, developing, and optimizing the Virtual Classroom Multiplayer Game, an innovative educational project utilizing Unity, Photon Pun2 and C# to enhance remote learning experiences."

        
        
        
    },
    {
      //url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Endless Runner Game",
      description: "Created an exhilarating endless runner game for iOS and Android, implementing game mechanics such as character movement, obstacle generation, power-ups, and scoring system using Unity game engine and C#."
                
      
      
    },
    {
      //url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "ONGC -Fire and rescue",
      description: "Ongc fire and rescue is a Virtual Reality based firefighters training and rescue module to help and train firefighters with different approaches. Client - Oil and Natural Gas Corporation"
                
      
      
    },

    {
      //url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "ImaginX",
      description: "ImaginX is a U.S. college-based project where educational concepts such as the heart, lipids, electricity, and various science topics are developed across platforms like VR, AR, Android, and iOS using Unity 3D and C#."
                
      
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9688225518",
  email_address: "kavinsrikarthi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
