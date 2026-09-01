export const portfolioData = {
  personal: {
    name: "Bidita Gogoi",
    role: "Computer Science Engineering Student",
    university: "Lovely Professional University",
    headline: "Building ideas into practical digital solutions.",
    highlightWord: "practical digital",
    intro: "Hi, I'm Bidita — a Computer Science Engineering student who enjoys turning ideas into practical digital solutions.",
    tags: ["Computer Science", "Development", "Problem Solving", "Learning"],
    profileImage: "/assets/profile.jpg",
    bio: [
      "I’m a Computer Science and Engineering student at Lovely Professional University, curious about how technology can solve real-world problems.",
      "I enjoy programming, problem solving, databases, IoT, and web development, with a focus on building practical solutions.",
      "I’ve worked with C, C++, Python, and DBMS through academic projects and hands-on experiences.",
      "I’m continuously learning, experimenting, and building new things to strengthen my skills."
    ]
  },

  skills: {
    technical: [
      { name: "C", id: "c", category: "PROGRAMMING LANGUAGE", level: "Proficient", desc: "Low-level memory management, pointer manipulation & systems fundamentals" },
      { name: "C++", id: "cpp", category: "PROGRAMMING LANGUAGE", level: "Advanced", desc: "Object-oriented software architecture, competitive programming & complex algorithms" },
      { name: "Python", id: "python", category: "PROGRAMMING LANGUAGE", level: "Advanced", desc: "Data processing, algorithmic logic, backend scripting & automation" },
      { name: "HTML5", id: "html", category: "WEB TECHNOLOGIES", level: "Advanced", desc: "Semantic markup, accessible structure & modern web standards" },
      { name: "CSS3", id: "css", category: "WEB TECHNOLOGIES", level: "Advanced", desc: "Responsive layouts, Flexbox, Grid systems & clean modern styling" },
      { name: "JavaScript", id: "javascript", category: "WEB TECHNOLOGIES", level: "Proficient", desc: "Interactive DOM manipulation, asynchronous programming & ES6+ modern web logic" },
      { name: "DBMS", id: "dbms", category: "DATABASE SYSTEMS", level: "Proficient", desc: "Relational database schema design, SQL querying & data integrity" }
    ],
    soft: [
      { name: "Team Collaboration" },
      { name: "Detail Oriented" },
      { name: "Adaptability" },
      { name: "Flexibility" }
    ]
  },

  projects: [
    {
      id: "01",
      title: "Smart IoT-Based Electrical Fault Detection System",
      tag: "IoT · hardware · embedded systems",
      headline: ["From sensors to", "safety."],
      highlightWord: "safety.",
      annotation: "hardware meets real-world safety ✦",
      accentLine: "ESP32 · multi-sensor · real-time detection",
      accentSubline: "LPU academic project  |  hardware build 2025",
      shortDesc: "A hardware-based system designed to detect electrical faults and automatically disconnect the power supply when abnormal conditions are detected.",
      fullDesc: "An engineered safety solution built to prevent electrical hazards, short circuits, and equipment damage. The system continuously monitors live current, voltage levels, and thermal conditions using high-precision sensors connected to an ESP32 board. If abnormal metrics or electrical faults are identified, the system immediately trips the relay module to cut off power and triggers instant audible buzzer alerts and visual LED warnings.",
      image: "/assets/project_iot.jpg",
      panelColor: "#E8DDD0",
      tech: ["ESP32", "ACS712 Current Sensor", "ZMPT101B Voltage Sensor", "Temperature Sensor", "Relay Module", "Buzzer", "LED"],
      role: "Hardware Architecture & Microcontroller Logic",
      outcomes: [
        "Real-time microsecond electrical fault detection",
        "Automated relay trip mechanism for instant power cut-off",
        "Multi-sensor alert system with visual & acoustic indicators",
        "Significantly enhanced real-world electrical safety"
      ]
    },
    {
      id: "02",
      title: "Caretaker Booking Platform",
      tag: "full stack · web · DBMS",
      headline: ["From booking to", "care."],
      highlightWord: "care.",
      annotation: "built with care, literally ✦",
      accentLine: "React.js · Node.js · role-based dashboards",
      accentSubline: "LPU academic project  |  full stack build 2025",
      shortDesc: "A full-stack web platform designed to connect people looking for caretaking services with available caretakers.",
      fullDesc: "A compassionate, user-centric web platform engineered to streamline caregiver discovery and booking. Users can register as clients or caretakers, filter verified professionals based on location and specific care requirements, schedule specific shifts/times, and manage bookings through dedicated role-based dashboards.",
      image: "/assets/project_caretaker.jpg",
      panelColor: "#D6E4DC",
      tech: ["React.js", "Node.js", "Express", "DBMS / SQL", "Tailwind CSS", "REST API"],
      role: "Full-Stack Web Developer",
      outcomes: [
        "Role-based authentication & interactive dashboards for users and caretakers",
        "Location-aware caregiver discovery & filtering engine",
        "Flexible shift scheduling & booking management workflow",
        "Admin control panel for service verification & compliance"
      ]
    },
  ],


  education: [
    {
      id: "edu-01",
      degree: "B.Tech — Computer Science & Engineering (AI & ML)",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      board: "",
      period: "2025 – 2029",
      grade: "CGPA: 8.46",
      badgeLabel: "Pursuing",
      details: "Building a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering."
    },
    {
      id: "edu-02",
      degree: "Class XII — Senior Secondary",
      field: "Science Stream (PCM, CS)",
      institution: "Delhi Public School, Jorhat",
      board: "CBSE Board",
      period: "Completed: 2025",
      grade: "80.6%",
      badgeLabel: "80.6%",
      details: "Completed Senior Secondary education with a focus on science and mathematics, strengthening analytical skills and disciplined problem-solving."
    },
    {
      id: "edu-03",
      degree: "Class X — Secondary School",
      field: "General Secondary Education",
      institution: "Holy Flower Senior Secondary School",
      board: "CBSE Board",
      period: "Completed: 2023",
      grade: "81.2%",
      badgeLabel: "81.2%",
      details: "Completed Secondary School Examination with distinction under CBSE, building a solid academic and mathematical foundation."
    }
  ],

  certificates: [
    {
      id: "cert-01",
      title: "Machine Learning with Python",
      issuer: "IBM — Coursera",
      date: "February 1, 2026",
      credentialUrl: "https://coursera.org/verify/BXB7HJNYKMLG",
      verifyId: "BXB7HJNYKMLG",
      type: "Course Certificate",
      image: "/assets/certificate_ml_python.jpg",
      description: "Online course authorized by IBM and offered through Coursera covering supervised and unsupervised machine learning algorithms, classification models, regression, and scientific data manipulation with Python."
    },
    {
      id: "cert-02",
      title: "Effective Time Management",
      issuer: "Tech Veda",
      date: "October 29, 2025",
      credentialUrl: "https://www.techveda.in/",
      verifyId: "TV/OCT25/ETM/A589",
      type: "Certificate of Appreciation",
      image: "/assets/certificate_time_management.jpg",
      description: "Awarded for demonstrating excellence in completing the 5 hours MOOC on Effective Time Management, which included passing a comprehensive proctored examination."
    },
    {
      id: "cert-03",
      title: "AWS Student Community Day Workshop",
      issuer: "AWS Cloud Clubs",
      date: "November 14, 2025",
      credentialUrl: "#",
      verifyId: "Jalandhar, Punjab",
      type: "Certificate of Participation",
      image: "/assets/certificate_aws_workshop.jpg",
      description: "Awarded for attending and actively participating in the cloud computing workshop at AWS Student Community Day Jalandhar, Punjab."
    }
  ],

  activities: [
    {
      id: "act-01",
      title: "WEB-A-THON — Intra-University Hackathon",
      category: "Hackathon",
      organization: "WEB-A-THON (University Level)",
      date: "Participated",
      hasCertificate: false,
      description: "Participated in WEB-A-THON, an intra-university coding hackathon organized within the university campus, collaborating to design and prototype rapid software solutions for challenge statements."
    },
    {
      id: "act-02",
      title: "AWS Student Community Workshop",
      category: "Cloud & Workshop",
      organization: "AWS Student Community",
      date: "Attended",
      hasCertificate: true,
      certTitle: "Certificate of Participation — AWS Student Community Day",
      image: "/assets/certificate_aws_workshop.jpg",
      description: "Participated in an interactive technical workshop organized by the AWS Student Community covering fundamental cloud deployment, EC2, and serverless concepts."
    },
    {
      id: "act-03",
      title: "Community Development Project (NGO)",
      category: "Social Service",
      organization: "Northeast Ujjiwan Foundation (NGO)",
      date: "Jun' 26 – Jul' 26",
      hasCertificate: false,
      description: "Participated in community outreach activities and learned about local social needs. Assisted in flood-relief operations including ration packing and distribution to affected families, supporting field activities with teamwork and social responsibility."
    },
    {
      id: "act-04",
      title: "Social Media Manager — Nexus Spring of Code",
      category: "Community & Leadership",
      organization: "Nexus Spring of Code",
      date: "Social Media Manager",
      hasCertificate: false,
      description: "Managed social media content and helped promote events, activities, and initiatives through engaging digital communication and creative content."
    }
  ],

  contact: {
    email: "biditagogoi169@gmail.com",
    phone: "+91 8822053575",
    linkedin: "https://www.linkedin.com/in/bidita-gogoi-35814a37b",
    github: "https://github.com/BiditaGogoi",
    location: "Punjab / Assam, India"
  }
};
