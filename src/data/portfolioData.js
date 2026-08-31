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
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      period: "August 2026 – Present",
      grade: "CGPA: 8.46",
      details: "Focusing on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering."
    },
    {
      id: "edu-02",
      degree: "Intermediate / Class 12",
      field: "Science Stream (Physics, Chemistry, Mathematics, CS)",
      institution: "Delhi Public School, Jorhat",
      period: "Completed",
      grade: "Percentage: 80.6%",
      details: "Strong foundation in Mathematics and Computer Fundamentals."
    },
    {
      id: "edu-03",
      degree: "Matriculation / Class 10",
      field: "General Secondary Education",
      institution: "Delhi Public School, Jorhat",
      period: "Completed",
      grade: "Percentage: 81.2%",
      details: "Academic excellence in Mathematics and General Sciences."
    }
  ],

  certifications: [
    {
      id: "cert-01",
      title: "Machine Learning with Python",
      issuer: "Coursera",
      date: "February 2026",
      credentialUrl: "#",
      type: "Machine Learning",
      description: "Supervised and unsupervised learning, regression algorithms, classification models, and data manipulation using Python scientific libraries."
    },
    {
      id: "cert-02",
      title: "Certificate in Time Management",
      issuer: "Professional Skills Academy",
      date: "October 2025",
      credentialUrl: "#",
      type: "Professional Productivity",
      description: "Prioritization techniques, project planning frameworks, task execution strategies, and academic workflow optimization."
    }
  ],

  activities: [
    {
      id: "act-01",
      title: "Hackathon Participation & Engineering Challenge",
      category: "Hackathon",
      organization: "National Student Hackathon Series",
      date: "Participated",
      hasCertificate: true,
      certTitle: "Certificate of Hackathon Participation",
      description: "Collaborated in an intensive multi-hour coding hackathon to design and prototype rapid software solutions for real-world challenge statements."
    },
    {
      id: "act-02",
      title: "AWS Student Community Workshop",
      category: "Cloud & Workshop",
      organization: "AWS Student Community",
      date: "Attended",
      hasCertificate: false,
      description: "Participated in an interactive technical workshop organized by the AWS Student Community covering fundamental cloud deployment, EC2, and serverless concepts."
    },
    {
      id: "act-03",
      title: "CDP (Community Development Program)",
      category: "Community & Leadership",
      organization: "Lovely Professional University",
      date: "Active Member",
      hasCertificate: false,
      description: "Engaged in community initiative programs, leadership building, and group organizing activities to drive positive impact."
    },
    {
      id: "act-04",
      title: "Get Connected Activity",
      category: "Networking & Peer Collaboration",
      organization: "Student Technical Network",
      date: "Participated",
      hasCertificate: false,
      description: "Participated in collaborative peer networking events focused on technical knowledge sharing, mentorship, and project brainstorming."
    }
  ],

  contact: {
    email: "bidita.gogoi.dev@gmail.com",
    linkedin: "https://linkedin.com/in/bidita-gogoi",
    github: "https://github.com/biditagogoi",
    location: "Punjab / Assam, India"
  }
};
