const data = {
  name: "Vivek Kumar",
  title: "Java Full Stack Developer",
  tagline: "Building secure, scalable systems — from enterprise healthcare platforms at ISRO to full-stack web apps with Spring Boot & React.",
  email: "vk01vivek@gmail.com",
  phone: "+91 86514 52464",
  location: "Bengaluru, Karnataka",
  github: "https://github.com/vivek-info-tech",
  linkedin: "https://linkedin.com/in/vivek-info-tech",
  skills: {
    Languages: ["Java", "JavaScript", "Python", "C/C++", "SQL", "HTML5", "CSS3"],
    Frontend: ["React.js", "Vue.js", "Tailwind CSS", "Bootstrap", "Axios", "React Router"],
    Backend: ["Spring Boot", "Microservices", "Spring Cloud Gateway", "Struts MVC", "JSP", "Servlets", "REST APIs"],
    Database: ["MySQL", "JPA/Hibernate", "JDBC", "Connection Pooling", "Schema Design"],
    Security: ["Spring Security", "JWT Authentication", "RBAC", "Session Management"],
    "Tools & Cloud": ["Git", "GitHub", "Apache Tomcat", "AWS", "Eureka Service Registry"],
  },
  experience: [
    {
      role: "Graduate Apprenticeship — Java Full Stack",
      org: "UR Rao Satellite Centre, ISRO",
      location: "Bengaluru",
      period: "Aug 2025 – Present",
      points: [
        "Developed enterprise web applications for multiple ISRO departments using Java, Spring Boot, JSP, Servlets, Struts MVC, MySQL, and AJAX, serving hundreds of internal users.",
        "Architected a CHSS Healthcare Card Management System using Spring Boot Microservices, Spring Cloud Gateway, Eureka Service Registry, Spring Security JWT, and React.js with role-based access for Admins, Operators, and Users.",
        "Built 6 independent microservices (Auth, User, Dependent, Card Management, Migration, Report) with API Gateway for centralized JWT-based routing, request filtering, and service discovery.",
        "Modernized legacy Struts-based systems to modern Spring Boot full-stack architecture, improving maintainability and user experience.",
        "Deployed and managed applications on Linux VMs using Apache Tomcat, handling configuration, troubleshooting, and production support.",
      ],
    },
  ],
  projects: [
    {
      title: "CHSS Healthcare Card Management System",
      tech: ["Spring Boot", "Microservices", "React.js", "JWT", "Spring Cloud", "MySQL"],
      desc: "Enterprise healthcare card management system built for ISRO employees. 6 independent microservices with API Gateway, centralized JWT routing, role-based access for Admins, Operators, and Users.",
      highlight: "ISRO Internal Project",
      github: null,
      live: null,
    },
    {
      title: "Auction Bidding System",
      tech: ["React.js", "Spring Boot", "MySQL", "JPA/Hibernate", "REST APIs"],
      desc: "Full-stack bidding platform with auto-extending auction timers, configurable trigger rules, and hard forced-close enforcement. Live leaderboard (L1/L2/L3 ranking) refreshing every 2 seconds.",
      highlight: null,
      github: "https://github.com/vivek-info-tech/rfq-british-auction-system",
      live: "https://auction-biding-system.netlify.app/",
    },
    {
      title: "AI Medicine Recommendation & Pneumonia Detection",
      tech: ["Python", "SVM", "VGG19", "Machine Learning", "Deep Learning"],
      desc: "ML disease prediction using SVM and pneumonia detection using VGG19. Responsive web app for symptom input and X-ray upload with personalized medication and diet recommendations.",
      highlight: null,
      github: "https://github.com/vivek-info-tech/pneumonia-detections-vgg19",
      live: "https://www.linkedin.com/posts/vivek-info-tech_ai-healthcareinnovation-machinelearning-activity-7295525440801181697-jVfZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbbvA4Buw9dTvKysYfd8llF9seA1k2iJJk",
    },
    
  ],
  education: [
    {
      degree: "Bachelor of Technology — Computer Science",
      institute: "Shri Ram Group of Institutions, Jabalpur",
      period: "Aug 2022 – Jun 2025",
      cgpa: "7.85",
    },
    {
      degree: "Diploma — Computer Science & Engineering",
      institute: "Government Polytechnic College, Muzaffarpur",
      period: "Aug 2019 – Jul 2022",
      cgpa: "8.03",
    },
  ],
  achievements: [
    { label: "GATE 2026 (CS)", detail: "AIR 13,875 | Score: 431" },
    { label: "Java Full Stack Certification", detail: "Wipro" },
    { label: "Python Programming Certification", detail: "Cisco" },
  ],
};

export default data;