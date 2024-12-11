import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../../src/assets";


export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "School management Software ",
  "Lawyer management Cms",
  "Business Directory ",
  "Website Design and Development ",
  "Food Delivery Application ",
  "Music streaming site",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice Assistance Apps ",
    text: "Enable the applications to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "December 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Mobile Apps",
    text: "Working on food delivery , music streaming , business directory and many more Apps",
    date: "Jan 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Application customization",
    text: "Allow users to customize the app's appearance and behavior, making it more engaging and fun to interact with.",
    date: "Nov 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the Applications to access external data sources, such as bookkeeping APIs or banks APIs, to provide more relevant recommendations.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for people  looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Basic Startup Services ",
    price: "150",
    features: [
      "Fully functional Static Website ",
      "Social Media Chatbots",
      "Free Domain and Hosting ",
      "Business logo and Bronchure",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Proffesional Business Package ",
    price: "300",
    features: [
      "Dynamic website with backend ",
      "Business Profile",
      "Google business listing",
      "Social media Intergration",
      "Social media Starter designs",
      "Business directory listing"
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom Software Program , Web App, Mobile App",
    price: null,
    features: [
      "CMS Customized App",
      "Custom Software to meet your business objective ",
      "School Management System (Kera)",
      "Law management System (Clera)",
      "Stock and wholesale system ",
      "Hospital management system ",
      
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Website design ",
    text: "Modern sleek website to attract your potential clients and improve your online presence.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Mobile App Development ",
    text: "Whether it Ios or Android  application We can do it for  you.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Customised Web App",
    text: "Order your Software which meet your specific requirements now.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: " Business Directory ",
    text: "Get listed in our Business directory for free. Sign up and get exposed to potential clients.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Automated CMS",
    text: "We have several cms softwares to increase your workflow sign up for one you need and enjoy seamless work .",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Copy Tradier Software ",
    text: "Are you a forex trader Mentor? Good News from Moose We have our new customized trade copier. It works on all Platforms Desktop and mobile phone. Try it now",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socialMedia = [
  {
    id: "0",
    title: "Discord",
    icon: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    icon: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    icon: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    icon: facebook,
    url: "https://www.moose.co.zw/privacy-policy/",
  },
];export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.moose.co.zw/content/",
      },
      {
        name: "How it Works",
        link: "https://www.moose.co.zw/how-it-works/",
      },
      {
        name: "Apps",
        link: "https://www.moose.co.zw/apps/",
      },
      {
        name: "Explore",
        link: "https://www.moose.co.zw/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.moose.co.zw/terms-and-services/",
      },
      {
        name: "Privacy policy ",
        link: "https://www.moose.co.zw/privacy-policy/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.moose.co.zw/help-center/",
      },
      {
        name: "Contact Us",
        link: "https://www.moose.co.zw/contact.html/",
      },
      {
        name: "Our Partners",
        link: "https://www.moose.co.zw/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.moose.co.zw/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.moose.co.zw/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.moose.co.zw/newsletters/",
      },
    ],
  },
  {
    title: "Investor Relations ",
    links: [
      {
        name: "Our Investors",
        link: "https://www.moose.co.zw/our-investors/",
      },
      {
        name: "Become an Investor",
        link: "https://www.moose.co.zw/become-a-investor/",
      },
      {
        name: "Crowd Funding ",
        link: "https://www.moose.co.zw/crowd-funding/",
      },
    ],
  },
];
