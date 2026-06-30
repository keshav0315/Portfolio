/* =============================================
   PORTFOLIO CONFIGURATION DATA
   All editable content lives here.
   Feel free to edit this file to update your portfolio!
============================================= */

const portfolioData = {
  /* ── PERSONAL INFO ── */
  name: "Keshav Kumar",

  profession: "AI Data Analyst",

  taglines: ["AI Data Analyst", "Data Visualization", "Business Intelligence"], // typing effect

  bio: "AI Data Analyst passionate about transforming raw data into actionable insights using Excel, SQL, Power BI, Python, and AI-driven analytics. I build interactive dashboards, automate workflows, and uncover patterns that support smarter business decisions.",

  /* Resume PDF link */
  resumeLink: "#", // e.g. "assets/resume.pdf"

  /* Hero & About photos */
  heroImage: "images/my-photo.jpeg",
  aboutImage: "images/my-photo.jpeg",

  /* ── ABOUT DETAILS ── */
  aboutPara1:
    "I'm an aspiring AI Data Analyst passionate about combining data analytics with artificial intelligence to solve real-world business problems. I work with Excel, SQL, Power BI, Python, and modern AI tools to analyze data, build dashboards, and automate reporting.",

  aboutPara2:
    "I enjoy turning complex datasets into clear, meaningful insights through interactive visualizations and data-driven storytelling. My goal is to help organizations make smarter decisions by combining analytical thinking, business intelligence, and AI-powered solutions.",
  details: [
    { label: "Name", value: "Keshav Kumar" },
    { label: "Location", value: "Banda Utter Pradesh" },
    { label: "Email", value: "keshav1503145@gmail.com" },
    { label: "Availability", value: "Open to work" },
    { label: "Freelance", value: "Available" },
    { label: "Languages", value: "English, Hindi" },
  ],

  /* ── SKILLS ── */
  // categories: "frontend" | "backend" | "tools" | "other"
  skills: {
    frontend: [
      { name: "HTML & CSS", icon: "🌐", level: 90 },
      { name: "JavaScript", icon: "⚡", level: 50 },
      { name: "React.js", icon: "⚛️", level: 20 },
    ],
    backend: [
      { name: "Python", icon: "🐍", level: 75 },
      { name: "REST APIs", icon: "🔗", level: 70 },
      { name: "C++", icon: "C++", level: 40 },
    ],
    tools: [
      { name: "Git & GitHub", icon: "🐙", level: 90 },
      { name: "VS Code", icon: "💻", level: 95 },
      { name: "MS Excel", icon: "💻", level: 50 },
    ],
    other: [
      { name: "UI/UX Design", icon: "✏️", level: 88 },
      { name: "SEO", icon: "🔍", level: 75 },
      { name: "Problem Solving", icon: "🧠", level: 92 },
      { name: "Communication", icon: "💬", level: 90 },
      { name: "Testing", icon: "🧪", level: 70 },
    ],
  },

  /* ── PROJECTS ── */
  // categories: "Frontend" | "Backend" | "Full Stack" | "UI/UX" | "JavaScript" | "React" | "Other"
  projects: [
    {
      title: "Interactive Sales Dashboard",
      category: "Data Analytics",
      technologies: [
        "Microsoft Excel",
        "Pivot Tables",
        "Pivot Charts",
        "Slicers",
        "Dashboard Design",
      ],
      description:
        "An interactive Excel sales dashboard that provides real-time insights into sales, profit, orders, and product performance using dynamic charts and slicers.",

      image: "images/excel_1st_project.png",
      github: "https://github.com/keshav0315/Mini-excel-Sales-Dashboard.git",
      live: "#",

      // Detailed fields for project detail page
      longDescription:
        "Interactive Sales Dashboard is a Microsoft Excel project built to transform raw sales data into meaningful business insights through an easy-to-use visual interface. The dashboard allows users to analyze key business metrics such as Total Sales, Orders, Quantity Sold, and Profit while filtering data by Region, Category, and Year. Dynamic Pivot Tables, Pivot Charts, and Slicers ensure that every visualization updates instantly based on user selections. The project demonstrates practical data analysis, dashboard design, and reporting skills commonly used in business intelligence and data analytics roles.",

      features: [
        "Interactive KPI Cards (Sales, Orders, Quantity, Profit)",
        "Dynamic Region, Category, and Year Slicers",
        "Automatic Pivot Table & Pivot Chart Updates",
        "Category-wise Sales Analysis",
        "Treemap Visualization for Quantity Distribution",
        "Quarterly Sales Comparison",
        "Clean, Professional, and User-Friendly Dashboard Layout",
        "One-Click Data Filtering and Exploration",
      ],

      challenges:
        "The biggest challenge was ensuring that all Pivot Charts and KPI cards updated correctly with multiple slicers while maintaining consistent formatting. Managing relationships between Pivot Tables, synchronizing slicer connections across different visualizations, and designing a balanced dashboard layout required careful planning. Performance optimization was also important to keep dashboard interactions smooth even with larger datasets.",

      role: "Data Analyst & Dashboard Developer",

      client: "Personal Portfolio Project",

      date: "June 2026",
    },
    {
      title: "Excel Info Getter",

      category: "Data Analytics",

      technologies: [
        "Python",
        "Pandas",
        "OpenPyXL",
        "Tkinter",
        "Excel Automation",
      ],

      description:
        "A desktop application that instantly extracts workbook information, sheet details, column names, data types, and key statistics from Excel files.",

      image: "images/excel_info_getter.png",

      github: "https://github.com/keshav0315/Excel-info-getter.git",
      live: "#",

      // Detailed fields for project detail page
      longDescription:
        "Excel Info Getter is a Python-based desktop application designed to simplify Excel file analysis. Instead of manually exploring spreadsheets, users can upload an Excel workbook and instantly view essential information such as sheet names, row and column counts, column headers, data types, missing values, and basic dataset statistics. Built with Pandas and OpenPyXL, the application helps data analysts quickly understand the structure and quality of Excel datasets before starting data cleaning or visualization. The clean and beginner-friendly interface makes it useful for students, analysts, and professionals who work with Excel regularly.",

      features: [
        "Upload Excel Files (.xlsx & .xls)",
        "Display Workbook and Sheet Information",
        "Show Row and Column Counts",
        "List Column Names and Data Types",
        "Generate Basic Dataset Statistics",
        "Simple and User-Friendly Desktop Interface",
        "Fast Excel File Processing",
      ],

      challenges:
        "One of the main challenges was handling Excel files with different structures, multiple worksheets, and inconsistent data formats. The application was designed to process various workbook layouts while providing accurate information without modifying the original file. Optimizing file loading speed and ensuring reliable performance for large datasets also required careful implementation.",

      role: "Python Developer & Data Analyst",

      client: "Personal Portfolio Project",

      date: "June 2026",
    },
  ],

  /* ── SERVICES ── */
  services: [
    {
      icon: "🖥️",
      title: "Web Development",
      desc: "Fast, responsive, and accessible websites built with modern frameworks and best practices.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Beautiful interfaces crafted in Figma — from wireframes to polished, production-ready designs.",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      desc: "Auditing and improving load times, Core Web Vitals, and overall site performance.",
    },
  ],

  /* ── EXPERIENCE ── */
  experience: [
    {
      period: "2025 – Present",
      role: "Junior Web Developer",
      org: "NA",
      desc: "Developed landing pages and WordPress sites for 10+ clients across various industries.",
    },
  ],

  /* ── EDUCATION ── */
  education: [
    {
      period: "2025 – 2028",
      role: "BCA (Bachelor of Computer Applications) ",
      org: "Bundelkhand University (BU Jhansi)",
      desc: "Focus on algorithms, software engineering, and human-computer interaction.",
    },
  ],

  /* ── TESTIMONIALS ── */
  testimonials: [
    {
      text: "Incredible communication throughout the project. Alex understood our vision immediately and translated it into code that exceeded what we imagined.",
      name: "Priya Nair",
      title: "Founder, GreenLeaf Studio",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      stars: 5,
    },
  ],

  /* ── CERTIFICATIONS ── */
  certifications: [
    {
      title: "Complete 2026 Python Bootcamp: Learn Python from Scratch",
      issuer: "CodeWithHarry",
      date: "2026",
      description:
        "Completed a comprehensive Python bootcamp covering Python fundamentals, object-oriented programming, file handling, modules, data structures, error handling, and real-world project development using Python.",
      image: "images/Python-certificate.jpeg",
      link: "https://drive.google.com/file/d/1-OtYrBtm5PJXOb_wsEVTuMW-MbKdhhUM/view?usp=drive_link",
    },
    {
      title: "Excel Automation using ChatGPT",
      issuer: "Skill Course",
      date: "2026",
      description:
        "Learned to automate Excel tasks using ChatGPT, including formula generation, data cleaning, report creation, spreadsheet analysis, and productivity enhancement through AI-assisted workflows.",
      image: "images/excel-certificate.jpeg",
      link: "https://drive.google.com/file/d/1n8v3FS3lRDptE95Dy5pBngtyxTD7MHKI/view?usp=drive_link",
    },
  ],

  /* ── CONTACT INFO ── */
  contact: {
    email: "keshav1503145@gmail.com",
    phone: "NA",
    address: "Banda Utter Pradesh",
    available: "Mon – Fri, 9AM – 6PM IST",
  },

  /* ── SOCIAL LINKS ── */
  socialLinks: [
    { name: "GitHub", href: "https://github.com/keshav0315", icon: "GH" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/keshav-kumar-649385370?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: "LI",
    },
    { name: "Twitter", href: "#", icon: "TW" },
  ],
};
