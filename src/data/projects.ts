interface Privacy {
  title: string;
  content: string[];
}

export interface Project {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  why: string[];
  appstore: string;
  googleplay: string;
  privacy: Privacy[];
}

export const projects: Record<string, Project> = {
  learnpdr: {
    id: "learnpdr",
    name: "LearnPDR",
    image: "/App_LearnPDR.png",
    shortDescription:
      "An application that contains all the official theory and tests of traffic rules.",
    fullDescription:
      "LearnPDR is a comprehensive learning platform dedicated to traffic rules and regulations. It includes official theory materials, practical tests, complete information on all road signs, road markings, and traffic controller signals. The app helps users prepare for driving exams with interactive quizzes and real-world scenarios.",
    highlights: [
      "Official traffic rules and theory",
      "Real exam simulation",
      "Exam mode with timer and mistakes limit",
      "Works offline",
      "Progress tracking and statistics",
      "Mistake review and saved questions",
    ],
    why: [
      "Works offline",
      "No ads",
      "No registration",
      "Fast and lightweight",
      "All data stays on your device",
    ],
    appstore: "https://appstore.com",
    googleplay: "https://googleplay.com",
    privacy: [
      {
        title: "Information Collection and Use",
        content: [
          "This app does not collect, store, or share any personal data.",
          "No registration or login is required to use the app.",
        ],
      },
      {
        title: "Local Data Storage",
        content: [
          "All data is stored locally on your device only.",
          "This includes test progress, selected questions, incorrect answers, and app settings.",
          "This data never leaves your device.",
        ],
      },
      {
        title: "Internet Usage",
        content: [
          "The app works полностью offline and does not require an internet connection.",
          "No data is transmitted to any servers.",
        ],
      },
      {
        title: "Third-Party Services",
        content: [
          "The app does not use any third-party services, analytics tools, or advertising SDKs.",
        ],
      },
      {
        title: "Children’s Privacy",
        content: [
          "The app does not knowingly collect any personal information from children.",
        ],
      },
      {
        title: "Changes to This Privacy Policy",
        content: [
          "This Privacy Policy may be updated in the future.",
          "Any changes will be reflected on this page.",
        ],
      },
      {
        title: "Contact",
        content: [
          "If you have any questions about this Privacy Policy, you can contact the developer.",
        ],
      },
    ],
  },
  resumate: {
    id: "resumate",
    name: "ResuMate",
    image: "/App_ResuMate.png",
    shortDescription:
      "A mobile app for creating professional resumes directly on your phone.",
    fullDescription:
      "ResuMate is a user-friendly resume builder that makes professional CV creation accessible to everyone. Users can fill in their information, choose from multiple customizable templates, and export their resume in multiple formats. The app guides users through the process with helpful tips and best practices.",
    highlights: [
      "10+ professional templates",
      "Real-time preview",
      "Multiple export formats (PDF, DOCX)",
      "Cloud storage",
      "Template customization",
      "Smart recommendations",
    ],
    why: [
      "Works offline",
      "No ads",
      "No registration",
      "Fast and lightweight",
      "All data stays on your device",
    ],
    appstore: "https://appstore.com",
    googleplay: "https://googleplay.com",
    privacy: [],
  },
  chatty: {
    id: "chatty",
    name: "Chatty",
    image: "/App_Chatty.png",
    shortDescription: "A personal AI assistant powered by the ChatGPT API.",
    fullDescription:
      "Chatty is your personal AI assistant built on OpenAI's ChatGPT. Get instant answers to any questions, use it for learning, problem-solving, writing, coding help, and everyday tasks. The app maintains conversation context and provides intelligent, helpful responses tailored to your needs.",
    highlights: [
      "Real-time AI responses",
      "Conversation history",
      "Multiple chat threads",
      "Code highlighting",
      "Export conversations",
      "Customizable AI personality",
    ],
    why: [
      "Works offline",
      "No ads",
      "No registration",
      "Fast and lightweight",
      "All data stays on your device",
    ],
    appstore: "https://appstore.com",
    googleplay: "https://googleplay.com",
    privacy: [],
  },
  "smart-e-commerce": {
    id: "smart-e-commerce",
    name: "Smart-E-Commerce",
    image: "/App_Smart-E-Commerce.png",
    shortDescription:
      "A modern e-commerce application for browsing and purchasing tech products.",
    fullDescription:
      "Smart-E-Commerce is a full-featured online store specializing in tech products. It offers a seamless shopping experience with product browsing, advanced filtering, customization options, and a secure checkout process. The platform includes user accounts, order tracking, and personalized recommendations.",
    highlights: [
      "Product catalog with filtering",
      "Shopping cart and wishlist",
      "User authentication",
      "Payment integration",
      "Order tracking",
      "Product reviews and ratings",
      "Admin dashboard",
    ],
    why: [
      "Works offline",
      "No ads",
      "No registration",
      "Fast and lightweight",
      "All data stays on your device",
    ],
    appstore: "https://appstore.com",
    googleplay: "https://googleplay.com",
    privacy: [],
  },
};
