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
      "I am a Computer Science and Engineering student at Lovely Professional University with a deep curiosity for how software and hardware intersect to solve real-world problems.",
      "My focus spans across core computer science principles—from programming in C++, C, and Python to understanding database management systems and systems design.",
      "Whether developing IoT electrical safety systems or building full-stack service platforms, I approach every project with detail-oriented focus, adaptability, and a commitment to continuous learning and teamwork."
    ]
  },

  skills: {
    technical: [
      { name: "Python", category: "Core Language", level: "Advanced", desc: "Data processing, algorithms & backend scripting" },
      { name: "C", category: "Systems Programming", level: "Proficient", desc: "Memory management, low-level logic & structures" },
      { name: "C++", category: "Data Structures & OOP", level: "Advanced", desc: "Object-oriented software & competitive problem solving" },
      { name: "DBMS", category: "Database Systems", level: "Proficient", desc: "SQL querying, schema design & relational data management" }
    ],
    soft: [
      { name: "Team Collaboration", desc: "Active communicator in group engineering projects and student activities" },
      { name: "Detail Oriented", desc: "Meticulous focus on code efficiency, edge-case testing, and clean architecture" },
      { name: "Adaptability", desc: "Quick to master new frameworks, sensor hardware, and developer toolchains" },
      { name: "Flexibility", desc: "Comfortable pivoting between low-level hardware logic and modern web software" }
    ]
  },

  projects: [
    {
      id: "01",
      title: "Smart IoT-Based Electrical Fault Detection System",
      shortDesc: "A hardware-based system designed to detect electrical faults and automatically disconnect the power supply when abnormal conditions are detected.",
      fullDesc: "An engineered safety solution built to prevent electrical hazards, short circuits, and equipment damage. The system continuously monitors live current, voltage levels, and thermal conditions using high-precision sensors connected to an ESP32 board. If abnormal metrics or electrical faults are identified, the system immediately trips the relay module to cut off power and triggers instant audible buzzer alerts and visual LED warnings.",
      image: "/assets/project_iot.jpg",
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
      shortDesc: "A full-stack web platform designed to connect people looking for caretaking services with available caretakers.",
      fullDesc: "A compassionate, user-centric web platform engineered to streamline caregiver discovery and booking. Users can register as clients or caretakers, filter verified professionals based on location and specific care requirements, schedule specific shifts/times, and manage bookings through dedicated role-based dashboards.",
      image: "/assets/project_caretaker.jpg",
      tech: ["React.js", "Node.js", "Express", "DBMS / SQL", "Tailwind CSS", "REST API"],
      role: "Full-Stack Web Developer",
      outcomes: [
        "Role-based authentication & interactive dashboards for users and caretakers",
        "Location-aware caregiver discovery & filtering engine",
        "Flexible shift scheduling & booking management workflow",
        "Admin control panel for service verification & compliance"
      ]
    },
    {
      id: "03",
      title: "Algorithmic Code Visualizer & Data Structures Engine",
      shortDesc: "An interactive CS visualizer for exploring complex graph algorithms, tree traversals, and dynamic array sorting in real time.",
      fullDesc: "Built to deepen algorithmic understanding, this visual software tool renders step-by-step executions of core computer science algorithms. Users can step through QuickSort, Dijkstra's shortest path, and Binary Search Trees with live variable tracking and execution call-stacks.",
      image: "/assets/project_visualizer.jpg",
      tech: ["C++ Core", "JavaScript", "HTML5 Canvas", "Tailwind CSS", "Data Structures"],
      role: "Lead Developer",
      outcomes: [
        "Step-by-step visual debugging for sorting and graph traversals",
        "Interactive execution control with variable playback speed",
        "Intuitive presentation of time and space complexity metrics"
      ]
    }
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
