export type Option = {
  next: string;
  label: string;
  url?: string;
};

export type ScriptStep = {
  message: string;
  options?: Option[];
};

export type BotScript = Record<string, ScriptStep>;

export const botScript: BotScript = {
  start: {
    message:
      "Hi there! 👋 I'm Mehmetcan's virtual assistant. I'm here to showcase his skills and experience. How would you like to start?",
    options: [
      { label: "SMOOTH ICON", next: "smooth_icon" },
      { label: "EXPERIENCE", next: "experience" },
      { label: "PROJECTS", next: "projects" },
      { label: "CONTACT", next: "contact" },
    ],
  },

  smooth_icon: {
    message:
      "Ah, Smooth Icon! 🎨 Mehmetcan built this from scratch to bring a 'premium' feel to open-source without the price tag. It's a completely free, universal icon library for React & React Native featuring 460+ flawless icons, a smart tagging system, and zero bloat. If you're ready to upgrade your UI, you should definitely [CHECK OUT](https://mehmtcankilinc.com/smooth-icon)",
    options: [{ label: "BACK TO START", next: "start" }],
  },

  experience: {
    message:
      "Mehmetcan has over a year of hands-on experience in Full-Stack Mobile Development. He is constantly working on new projects to bring his ideas to life.",
    options: [
      { label: "TECH STACK", next: "tech_stack" },
      { label: "BACK TO START", next: "start" },
    ],
  },

  projects: {
    message:
      "Here is a collection of projects demonstrating expertise in both mobile and backend architectures. Which directory would you like to explore?",
    options: [
      { label: "MOBILE APPS", next: "mobile_projects" },
      { label: "WEB APIs", next: "backend_projects" },
      { label: "BACK TO START", next: "start" },
    ],
  },

  mobile_projects: {
    message:
      "Accessing MOBILE_DIR... Here are the mobile applications he developed. Select one to see the details:",
    options: [
      { label: "CV CREATOR", next: "cvcreator" },
      { label: "TUTOR SUDOKU", next: "tutorsudoku" },
      { label: "FOODLENS", next: "foodlens" },
      { label: "STALKER", next: "stalker" },
      { label: "BACK TO PROJECTS", next: "projects" },
    ],
  },

  cvcreator: {
    message:
      "CvCreator is built using **TypeScript** & **React Native CLI**. It allows users to create and download resumes and cover letters instantly without logging in. Key technologies include **Redux**, **i18n**, and **NativeWind**. The app is currently published on Play Store. [STORE LINK](https://play.google.com/store/apps/details?id=com.mehmtcankilinc.cvcreator)",
    options: [
      {
        label: "MORE INFO",
        next: "mobile_projects",
        url: "/projects/mobile/#cvcreator",
      },
      { label: "BACK TO MOBILE", next: "mobile_projects" },
    ],
  },

  tutorsudoku: {
    message:
      "Tutor Sudoku is developed with **TypeScript** & **React Native CLI**. It helps users learn new solving techniques and allows them to scan physical boards for digital hints when stuck. Powered by **Redux**, **AsyncStorage**, and **i18n**. The app is currently published on Play Store. [STORE LINK](https://play.google.com/store/apps/details?id=com.tutorsudoku)",
    options: [
      {
        label: "MORE INFO",
        next: "mobile_projects",
        url: "/projects/mobile/#tutorsudoku",
      },
      { label: "BACK TO MOBILE", next: "mobile_projects" },
    ],
  },

  foodlens: {
    message:
      "Co-developed as a graduation thesis using **JavaScript** and **React Native**, FoodLens helps users track daily calorie intake and analyze packaged food ingredients simply by scanning barcodes. Built with **Expo**, **NativeWind**, and **AsyncStorage**.",
    options: [
      {
        label: "MORE INFO",
        next: "mobile_projects",
        url: "/projects/mobile/#foodlens",
      },
      { label: "BACK TO MOBILE", next: "mobile_projects" },
    ],
  },

  stalker: {
    message:
      "Stalker is a mood-tracking app developed using **JavaScript** & **React Native**. Users can log their daily moods by selecting custom-designed emojis. Built with **Supabase**, **NativeWind**, and **Expo**.",
    options: [
      {
        label: "MORE INFO",
        next: "mobile_projects",
        url: "/projects/mobile/#stalker",
      },
      { label: "BACK TO MOBILE", next: "mobile_projects" },
    ],
  },

  backend_projects: {
    message:
      "Accessing BACKEND_DIR... Here are the Web APIs he developed. Select one to see the details:",
    options: [
      { label: "CV CREATOR API", next: "cvcreator_api" },
      { label: "CHITCHAT API", next: "chitchat_api" },
      { label: "LEXIBOX API", next: "lexibox_api" },
      { label: "BACK TO PROJECTS", next: "projects" },
    ],
  },

  cvcreator_api: {
    message:
      "This API powers the **CvCreator** mobile app and is built with **ASP.NET Core** following **Clean Architecture** principles. It features **Rate Limiting**, **Global Error Handling**, **JWT Auth**, and **Logging**. Technologies: **Supabase**, **SeriLog**, and **Playwright**.",
    options: [
      {
        label: "MORE INFO",
        next: "backend_projects",
        url: "/projects/backend/#cvcreatorapi",
      },
      { label: "BACK TO APIs", next: "backend_projects" },
    ],
  },

  chitchat_api: {
    message:
      "ChitChat is a real-time messaging system backend developed with **ASP.NET Core** and **Clean Architecture**. It utilizes **SignalR** for real-time comms, alongside **JWT Bearer**, **Docker**, and **AzureSQL**.",
    options: [
      {
        label: "MORE INFO",
        next: "backend_projects",
        url: "/projects/backend/#chitchatapi",
      },
      { label: "BACK TO APIs", next: "backend_projects" },
    ],
  },

  lexibox_api: {
    message:
      "Developed for the educational app 'LexiBox', this **ASP.NET Core** API follows **Vertical Slice Architecture**. It features **Global Exception Handling** and request logging via **SeriLog**. The application is containerized with **Docker** and uses **PostgreSQL**.",
    options: [
      {
        label: "MORE INFO",
        next: "backend_projects",
        url: "/projects/backend/#lexiboxapi",
      },
      { label: "BACK TO APIs", next: "backend_projects" },
    ],
  },

  tech_stack: {
    message: "Which area would you like to dive into?",
    options: [
      { label: "MOBILE DEV", next: "tech_mobile" },
      { label: "BACKEND DEV", next: "tech_backend" },
      { label: "BACK TO START", next: "start" },
    ],
  },

  tech_mobile: {
    message:
      "In mobile development, he specializes in both **React Native** & **Expo**, creating cross-platform apps with smooth UI/UX using libraries like **Reanimated** and **NativeWind**.",
    options: [
      { label: "VIEW MOBILE", next: "tech_stack", url: "/projects/mobile" },
      { label: "BACK", next: "tech_stack" },
    ],
  },

  tech_backend: {
    message:
      "On the backend, he builds scalable systems using **ASP.NET Core**, with robust database management in **PostgreSQL**, secure authentication, and advanced architectural patterns. Additionally, he uses Firebase and Supabase as the backend in some of his projects.",
    options: [
      { label: "VIEW BACKEND", next: "tech_stack", url: "/projects/backend" },
      { label: "BACK", next: "tech_stack" },
    ],
  },

  contact: {
    message:
      "Let's connect! 🤝 You can reach me via email at [mehmtcankilinc@gmail.com](mailto:mehmtcankilinc@gmail.com) or connect through my social links.",
    options: [
      { label: "LINKEDIN", next: "linkedin" },
      { label: "INSTAGRAM", next: "instagram" },
      { label: "GITHUB", next: "github" },
      { label: "BACK TO START", next: "start" },
    ],
  },

  linkedin: {
    message:
      "Connect with me on LinkedIn: [Mehmetcan Kılınç](https://www.linkedin.com/in/mehmetcankilinc/)",
    options: [{ label: "BACK TO CONTACT", next: "contact" }],
  },

  instagram: {
    message:
      "Connect with me on Instagram: [@mehmtcankilinc](https://www.instagram.com/mehmtcankilinc)",
    options: [{ label: "BACK TO CONTACT", next: "contact" }],
  },

  github: {
    message:
      "Check out my repositories on GitHub: [mehmtcankilnc](https://github.com/mehmtcankilnc)",
    options: [{ label: "BACK TO CONTACT", next: "contact" }],
  },
};
