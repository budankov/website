export interface Project {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
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
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    features: [
      "Official traffic rules database",
      "Interactive theory lessons",
      "Practice tests with instant feedback",
      "Road signs and markings reference",
      "Progress tracking",
      "Dark mode support",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  resumate: {
    id: "resumate",
    name: "ResuMate",
    image: "/App_ResuMate.png",
    shortDescription:
      "A mobile app for creating professional resumes directly on your phone.",
    fullDescription:
      "ResuMate is a user-friendly resume builder that makes professional CV creation accessible to everyone. Users can fill in their information, choose from multiple customizable templates, and export their resume in multiple formats. The app guides users through the process with helpful tips and best practices.",
    technologies: ["React Native", "Firebase", "Redux"],
    features: [
      "10+ professional templates",
      "Real-time preview",
      "Multiple export formats (PDF, DOCX)",
      "Cloud storage",
      "Template customization",
      "Smart recommendations",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  chatty: {
    id: "chatty",
    name: "Chatty",
    image: "/App_Chatty.png",
    shortDescription: "A personal AI assistant powered by the ChatGPT API.",
    fullDescription:
      "Chatty is your personal AI assistant built on OpenAI's ChatGPT. Get instant answers to any questions, use it for learning, problem-solving, writing, coding help, and everyday tasks. The app maintains conversation context and provides intelligent, helpful responses tailored to your needs.",
    technologies: ["React", "TypeScript", "OpenAI API", "Node.js"],
    features: [
      "Real-time AI responses",
      "Conversation history",
      "Multiple chat threads",
      "Code highlighting",
      "Export conversations",
      "Customizable AI personality",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  "smart-e-commerce": {
    id: "smart-e-commerce",
    name: "Smart-E-Commerce",
    image: "/App_Smart-E-Commerce.png",
    shortDescription:
      "A modern e-commerce application for browsing and purchasing tech products.",
    fullDescription:
      "Smart-E-Commerce is a full-featured online store specializing in tech products. It offers a seamless shopping experience with product browsing, advanced filtering, customization options, and a secure checkout process. The platform includes user accounts, order tracking, and personalized recommendations.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    features: [
      "Product catalog with filtering",
      "Shopping cart and wishlist",
      "User authentication",
      "Payment integration",
      "Order tracking",
      "Product reviews and ratings",
      "Admin dashboard",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
};
