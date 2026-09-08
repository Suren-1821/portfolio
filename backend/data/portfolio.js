export const profile = {
  name: "Surendar R",
  title: "Full-Stack Software Developer",
  subtitle: "React.js Developer | Node.js Developer",
  location: "Erode, Tamil Nadu, India",
  email: "surnravi2120@gmail.com",
  phone: "+91 9976282193",
  linkedin: "https://www.linkedin.com/in/surendar-r1821",
  summary:
    "Results-driven Full-Stack Software Developer with 2 years of experience delivering scalable enterprise applications using React.js, Node.js, Express.js, PostgreSQL, MySQL, Redux Toolkit, and TypeScript. Experienced in REST API development, JWT authentication, RBAC, microservices, CI/CD, Agile Scrum, and database optimization.",
  status: "open_to_work",
  experienceYears: 2,
};

export const stats = [
  { id: "defects", value: 20, suffix: "%", label: "fewer frontend defects" },
  { id: "capacity", value: 30, prefix: "+", suffix: "%", label: "concurrent user capacity" },
  { id: "deploy", value: 40, suffix: "%", label: "faster deployments" },
  { id: "endpoints", value: 25, suffix: "+", label: "secure API endpoints shipped" },
];

export const skills = {
  frontend: ["React.js", "Redux Toolkit", "React Hooks", "TypeScript", "JavaScript", "HTML5", "CSS3", "Formik"],
  backend: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Auth", "RBAC"],
  database: ["PostgreSQL", "MySQL", "SQLite", "Query Optimization", "Indexing", "Schema Design"],
  tools: ["Git", "GitHub Actions", "Postman", "JIRA", "AWS S3", "CI/CD"],
};

export const experience = [
  {
    company: "Neural Schema Infotech Pvt Ltd",
    role: "Software Developer",
    period: "Jul 2024 — Present",
    fields: [
      {
        key: "SCOPE",
        value:
          "Engineered and enhanced 4+ enterprise applications with React.js, Node.js, Express.js, PostgreSQL, and MySQL for clients in the United States and Malaysia.",
      },
      {
        key: "API LAYER",
        value:
          "Architected and deployed 25+ secure RESTful endpoints with JWT authentication and RBAC across 3 multi-tenant platforms.",
      },
      {
        key: "FRONTEND",
        value:
          "Introduced Redux Toolkit across reusable components, cutting frontend defects by 20% and improving QA efficiency.",
      },
      {
        key: "DATABASE",
        value: "Optimized 25+ SQL queries and indexing strategies, raising concurrent user capacity by 30%.",
      },
      {
        key: "CI/CD",
        value:
          "Implemented GitHub Actions workflows across multiple projects, cutting deployment time by 40% and removing manual release errors.",
      },
    ],
  },
];

export const projects = [
  {
    name: "HFC",
    description: "HFC is an enterprise platform for managing film distribution, inventory, fulfillment, work orders, and theatre-related operations. The platform supports end-to-end workflows for managing film assets, requests, bookings, inventory availability, allocation, logistics, and fulfillment. The system includes complex business rules for asset availability, booking validation, work order management, and inventory tracking. The platform also integrates external enterprise services to streamline operational and financial workflows.",
    role: "Full Stack Developer responsible for developing React/TypeScript frontend features, Node.js REST APIs, PostgreSQL database operations, inventory and fulfillment workflows, work orders, booking validation, business logic, API integrations, production troubleshooting, and application optimization.",
    skills: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AG Grid", "REST APIs", "SQL", "JSONB", "API Integration"]
  },
  {
    name: "CineBridge",
    description: "CineBridge is an enterprise film distribution and asset management platform designed to manage requests, bookings, inventory, work orders, asset allocation, scheduling, and fulfillment operations. The platform enables users to track film assets throughout their operational lifecycle while maintaining accurate inventory availability and booking information. Implemented transactional APIs and business workflows involving multiple entities.",
    role: "Full Stack Developer responsible for Request Management, Booking Management, inventory allocation, scheduling, conflict resolution, fulfillment workflows, REST API development, PostgreSQL transactions and JSONB data management, and third-party integrations including QuickBooks, DocuSign, FedEx, and Zebra.",
    skills: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AG Grid", "QuickBooks API", "DocuSign API", "FedEx API", "Zebra Barcode", "OAuth 2.0"]
  },
  {
    name: "RAK Sportz",
    description: "RAK Sportz is a sports-focused application supported by a backend architecture designed to manage application data and business workflows efficiently. The system handles business logic, data processing, validation, CRUD operations, and database interactions. MySQL was used for structured data management, with optimized queries supporting reliable and efficient data retrieval and updates.",
    role: "Backend Developer responsible for Node.js backend development, REST API implementation, business logic, MySQL database operations, CRUD functionality, data validation, query optimization, API integration, debugging, and backend performance improvements.",
    skills: ["Node.js", "JavaScript", "MySQL", "REST APIs", "SQL", "CRUD", "Business Logic", "Data Validation", "Query Optimization"]
  },
  {
    name: "OneConnect HRMS",
    description: "OneConnect HRMS is a modular enterprise Human Resource Management System built using React 19, Vite Module Federation, FastAPI, Python, TypeScript, and PostgreSQL. The modular architecture enables HR modules to be developed and deployed independently while maintaining a unified application experience. The system supports employee attendance tracking, timesheet submission and approval, authentication, workflow management, and automated notifications.",
    role: "Full Stack Developer responsible for the Timesheet module and owner of Attendance and Authentication. Developed React/TypeScript interfaces, FastAPI REST APIs, PostgreSQL operations, timesheet submission and approval workflows, attendance functionality, authentication workflows, validations, automated email notifications, debugging, and production support.",
    skills: ["React 19", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Vite", "Module Federation", "Authentication", "Email Automation"]
  }
];

export const education = [
  { school: "KSR Institute for Engineering and Technology", degree: "B.Tech", meta: "CGPA 7.2 · 2024" },
  { school: "Kongu Polytechnic College", degree: "Diploma in ECE", meta: "CGPA 7.7 · 2020" },
];

export const blog = [
  {
    title: "Optimizing React Applications with Redux Toolkit",
    date: "Aug 15, 2025",
    summary: "A deep dive into how migrating to Redux Toolkit can reduce boilerplate and improve performance.",
    url: "#"
  },
  {
    title: "Building Secure Node.js APIs",
    date: "Jul 02, 2025",
    summary: "Best practices for implementing JWT authentication and Role-Based Access Control (RBAC).",
    url: "#"
  }
];

export const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager, HFC",
    text: "Surendar's work on the inventory platform was outstanding. He delivered scalable solutions ahead of schedule."
  },
  {
    name: "Jane Smith",
    role: "Lead Developer, Cinebridge",
    text: "An exceptional developer who always prioritizes code quality and performance."
  }
];
