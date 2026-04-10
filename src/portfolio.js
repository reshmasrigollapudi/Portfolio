const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://reshmasrigollapudi.github.io',
  title: 'RSG',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Reshma Sri',
  role: 'MS DA at NEU | Innominds | Cognizant',
  description:
    'Results-driven Software engineer with professional experience at Innominds and Cognizant, specializing in high-performance backend systems across diverse domains. Proficient in Java, Python, AWS, and a robust tech stack. Certified in AWS Cloud Practitioner.',
  social: {
    linkedin: 'https://www.linkedin.com/in/gollapudi-reshma-sri-32374720b/',
    github: 'https://github.com/reshmasrigollapudi',
  },
}

const education = [
  {
    name: 'Northeastern University',
    description: 'Master of Science in Data Analytics',
    stack: ['Sep 2025 - Present', 'GPA: 4.0/4.0'],
  },
  {
    name: 'Andhra University',
    description: 'Bachelor of Science in Computer Science',
    stack: ['Aug 2018 - May 2022', 'GPA: 8.21/10.0'],
  },
]

const projects = [
  // projects can be added or removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Cache Simulator Implementation',
    description:
      'A cache memory simulator built to model real-world memory hierarchy behavior',
    stack: ['Java', 'Data Structures', 'LRU Eviction', 'System Design'],
    sourceCode: 'https://github.com/reshmasrigollapudi/Cache-Simulator',
  },
  {
    name: 'Mini Relational DBMS',
    description:
      'A database management system built from scratch with buffer management and query processing',
    stack: ['C', 'C++', 'DBMS', 'File Systems'],
    sourceCode: 'https://github.com/reshmasrigollapudi/Mini-Relational-DBMS',
  },
  {
    name: 'Online Learning Management System',
    description:
      'A full-stack learning platform with role-based access, course management, and file storage',
    sourceCode: 'https://github.com/reshmasrigollapudi/Online-Learning-Management-System',
    stack: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'JWT Auth', 'AWS S3'],
  },
  {
    name: 'Recipe Generator',
    description:
      'An AI-powered recipe generator that leverages Google\'s Gemini API to create personalized cooking recipes based on user inputs.',
    sourceCode: 'https://github.com/reshmasrigollapudi/Recipe-Generator',
    stack: ['Python', 'Google Gemini API'],
  },
  {
    name: 'Emotion Detection',
    description:
      'Real-time facial emotion recognition system that detects 7 emotions from webcam video using a custom lightweight CNN',
    sourceCode: 'https://github.com/reshmasrigollapudi/Emotion-Recognition',
    stack: ['Python', 'TensorFlow/Keras', 'OpenCV', 'Flask', 'HTML/CSS/JavaScript', 'NumPy'],
  },
]

const skills = [
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'SQL',
  'C',
  'C++',
  'HTML',
  'CSS',
  'React',
  'NodeJS',
  'ExpressJS',
  'Django',
  'Flask',
  'Spring Boot',
  'MySQL',
  'MongoDB',
  'AWS (S3, Lambda, Step Functions, CloudWatch)',
  'Azure',
  'Apache Spark',
  'Hadoop',
  'Kafka',
  'Cassandra',
  'Docker',
  'Kubernetes',
  'Linux/Unix',
  'JUnit',
  'Postman',
  'Jenkins',
  'Git',
  'TensorFlow',
  'PyTorch',
  'Scikit-Learn'
]

const experience = [
  {
    name: 'INNOMINDS | Software Engineer',
    description:
      'Built a scalable Java-based transaction and real-time payment system, boosting performance by 40% and validation coverage by 35%,Implemented secure, multi-environment API architecture, reducing setup effort by 60% and unauthorized access by 90%.',
    stack: ['June 2022 - Jan 2025', 'Hyderabad, India'],
  },
  {
    name: 'COGNIZANT | Software Engineer Intern',
    description:
      'Developed RESTful API backend components for an internal request management system, implementing business logic, input validation across service layers.\n\nOptimized backend query performance and implemented database connection pooling',
    stack: ['Jan 2022 - May 2022', 'Hyderabad, India'],
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'reshmagollapudi10@gmail.com',
  phone: '206-396-9943',
  location: 'Seattle, WA',
}

export { header, about, projects, skills, contact, education, experience }
