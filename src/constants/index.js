// src/constants/index.js (data only — no JSX here)

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/sanya1911",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sanya-sachdeva-476496316?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: "FaLinkedin",
  },
  {
    name: "Email",
    link: "mailto:sanyasachdeva.contact@gmail.com",
    icon: "FaEnvelope",
  },
];

export const profile = {
  name: "Sanya Sachdeva",
  role: "Web Developer | Frontend & E-Commerce",
  tagline: "Web Developer crafting responsive, modern websites, e-commerce solutions & intuitive UI/UX experiences.",
  email: "sanyasachdeva.contact@gmail.com",
  phone: "",
  location: "India",
  summary:
    "I’m Sanya Sachdeva, a Web Developer passionate about building modern, responsive, and user-friendly websites. I focus on frontend development, e-commerce solutions, and UI/UX optimization, creating seamless digital experiences that combine clean design, functionality, and performance across all devices. I enjoy solving real-world problems, exploring new technologies, and transforming ideas into impactful digital products.",
};

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Give X India",
    date: "July 2026 – Present",
    location: "India",
    category: "work",
    projectsWorked: [
      { name: "Thirty Third World", url: "https://thirtythird.world/" },
      { name: "GoXtreme Shop", url: "https://goxtreme.shop/" },
      { name: "Give X India Portal", url: "http://www.givexindia.com/" },
    ],
    points: [
      "Building high-performance, responsive, and user-friendly web interfaces and e-commerce storefronts.",
      "Leading Shopify theme customization, developing custom product page layouts, and optimizing checkout UX to improve conversion rates.",
      "Engineered frontend solutions for client platforms including Thirty Third World (luxury streetwear storefront) and GoXtreme Shop (action cameras and sports tech).",
      "Developed and maintained the Give X India corporate portal, focusing on modern design aesthetics, accessibility, and cross-browser performance.",
      "Collaborating with cross-functional teams to translate design concepts into production-ready digital experiences.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "SRM University Delhi-NCR, Sonepat",
    date: "2022 – 2026",
    location: "Sonepat, Haryana, India",
    category: "education",
    points: [
      "Focused on Web Development, Software Engineering, and Computer Science fundamentals.",
      "Participated in hands-on workshops in Linux security, system administration, and Applied Machine Learning.",
    ],
  },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication and API Integration",
    ],
  },
  {
    title: "Database & Storage",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
  {
    title: "E-Commerce & CMS",
    items: [
      "Shopify",
      "Theme customization",
      "Product pages",
      "Storefront UI",
      "Checkout UX",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Figma",
      "Vercel",
      "Google Analytics",
    ],
  },
  {
    title: "Dashboards & Analytics",
    items: [
      "Power BI",
      "Excel",
      "Dashboard automation",
      "Data reporting",
    ],
  },
];

export const projects = [
  {
    name: "Thirty Third World",
    tagline: "Luxury Fashion & Lifestyle E-Commerce Storefront",
    stack: ["Shopify", "JavaScript", "Tailwind CSS", "Storefront UI", "Checkout UX"],
    featured: true,
    points: [
      "Engineered a luxury fashion e-commerce storefront featuring modern aesthetics, smooth catalog browsing, and mobile-first responsiveness.",
      "Implemented custom theme sections, dynamic product collection grids, and streamlined shopping cart interactions.",
      "Optimized checkout user flow and page load metrics to elevate customer engagement and conversion rates.",
    ],
    links: { live: "https://thirtythird.world/", source: "" },
  },
  {
    name: "GoXtreme Shop",
    tagline: "Action Cameras & Sports Tech Accessories Store",
    stack: ["E-Commerce", "Shopify", "JavaScript", "CSS3", "UI/UX Optimization", "Google Analytics"],
    featured: false,
    points: [
      "Developed an interactive e-commerce platform dedicated to action cameras, tech gear, and outdoor accessories.",
      "Designed dynamic product showcases with custom feature comparisons, intuitive filtering, and rich media galleries.",
      "Optimized navigation hierarchies, checkout pathways, and responsive layouts across all screen resolutions.",
    ],
    links: { live: "https://goxtreme.shop/", source: "" },
  },
  {
    name: "Give X India",
    tagline: "Digital Agency & Corporate Web Presence",
    stack: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS", "UI/UX"],
    featured: false,
    points: [
      "Created the corporate web platform for Give X India, showcasing agency service offerings, portfolio highlights, and brand vision.",
      "Crafted clean, accessible component architectures with smooth transitions and responsive mobile layouts.",
      "Integrated seamless client inquiry touchpoints and optimized SEO metadata for enhanced visibility.",
    ],
    links: { live: "http://www.givexindia.com/", source: "" },
  },
  {
    name: "Interactive 3D Portfolio",
    tagline: "Personal Developer Showcase & 3D Interactive Space",
    stack: ["React.js", "Three.js", "Tailwind CSS", "Framer Motion", "Vite", "EmailJS"],
    featured: false,
    points: [
      "Interactive personal portfolio built with React Three Fiber, particle ring animations, and responsive dark-mode styling.",
      "Showcases technical skills, professional software engineering experience, client e-commerce platforms, and certifications.",
    ],
    links: { live: "", source: "", isCurrent: true },
  },
];

export const certifications = [
  {
    title: "Cyber Security Workshop",
    issuer: "SRM University Delhi-NCR, Sonepat",
    description:
      "Attended an intensive 3-day Cyber Security workshop with hands-on learning in Linux security, system protection, and cybersecurity fundamentals.",
  },
  {
    title: "Artificial and Machine Learning Workshop",
    issuer: "Atos Prayas Foundation",
    grade: "Grade: A+",
    description:
      "Hands-on training in Python-based machine learning. Implemented predictive ML models using Scikit-learn.",
  },
  {
    title: "Deloitte Technology Job Simulation",
    issuer: "Forage",
    description:
      "Executed simulated client-based tasks involving software development. Analyzed technical problems and delivered efficient, scalable solutions.",
  },
];
