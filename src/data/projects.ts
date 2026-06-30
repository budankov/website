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
  teneo: {
    id: "teneo",
    name: "Teneo Flash Cards",
    image: "/App_ResuMate.png",
    shortDescription:
      "A flexible flash card app for building decks, studying with FSRS, and tracking progress.",
    fullDescription:
      "Teneo Flash Cards is a spaced-repetition study app for building folders, decks, and cards in a simple but powerful workflow. Users can create reverse cards, add text or images, search across cards, and organize their study material with emoji, images, and editable deck settings. The app uses FSRS for scheduling, shows when each card becomes available, and helps users follow progress through new cards, learning cards, and detailed activity stats.",
    highlights: [
      "Create folders, decks, and cards",
      "Reverse cards with text and image content",
      "FSRS-based spaced repetition",
      "Deck controls for new cards and intervals",
      "Search across cards and study material",
      "Availability, learning, and new card tracking",
      "Current streak, best streak, and freeze protection",
      "Localization support for multiple languages",
    ],
    why: [
      "Works offline",
      "No ads",
      "No registration",
      "Fast and lightweight",
      "All data stays on your device",
    ],
    appstore: "",
    googleplay: "",
    privacy: [
      {
        title: "Information Collection and Use",
        content: [
          "The app does not collect personal data automatically.",
          "Card content, study progress, deck settings, folders, and localization preferences are stored only on your device.",
          "No account, sign-in, or registration is required to use the app.",
        ],
      },
      {
        title: "Local Data Storage",
        content: [
          "All study data is stored locally on your device.",
          "This includes cards, folders, decks, reverse card settings, search data, streaks, learning state, and scheduling information.",
          "The app uses this data only to provide the study experience and never uploads it to a server.",
        ],
      },
      {
        title: "Internet Usage",
        content: [
          "The app is designed to work offline and does not require an internet connection.",
          "No study data is transmitted to any servers during normal use.",
        ],
      },
      {
        title: "Bug Reports",
        content: [
          "If you choose to send a bug report, the message you enter may be used to understand and fix the issue.",
          "The report may also include the app version and build number so the installed release can be identified.",
          "This information is used only for troubleshooting and is not collected automatically.",
        ],
      },
      {
        title: "Third-Party Services",
        content: ["The app does not use advertising SDKs or analytics tools."],
      },
      {
        title: "Children’s Privacy",
        content: [
          "The app does not knowingly collect personal information from children.",
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
    appstore: "https://apps.apple.com/app/id6764638184",
    googleplay:
      "https://play.google.com/store/apps/details?id=com.budankov.learnpdr",
    privacy: [
      {
        title: "Information Collection and Use",
        content: [
          "The app does not collect personal data automatically.",
          "Users may voluntarily provide name and email when submitting feedback. This information is used solely to respond to user inquiries and is not stored longer than necessary.",
          "Feedback data is not retained unless required for support communication.",
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
          "The application works completely offline and does not require an internet connection.",
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
