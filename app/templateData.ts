import { ResumeData } from './types'

export const templateData: Record<string, ResumeData> = {
  'fullstack-software': {
    role: 'fullstack-software',
    personalInfo: {
      name: 'Alex Johnson',
      title: 'Full-Stack Software Engineer',
      email: 'alex.johnson@email.com',
      phone: '(555) 123-4567',
      photo: '/placeholder.svg?height=200&width=200',
      location: 'San Francisco, CA',
      profileLinks: {
        linkedin: 'https://www.linkedin.com/in/alexjohnson',
        github: 'https://github.com/alexjohnson',
        website: 'https://alexjohnson.dev'
      }
    },
    experience: [
      {
        title: 'Senior Full-Stack Engineer',
        company: 'TechCorp Inc.',
        period: 'Jan 2020 - Present',
        description: 'Lead development of scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.'
      },
      {
        title: 'Full-Stack Developer',
        company: 'StartupXYZ',
        period: 'Jun 2017 - Dec 2019',
        description: 'Developed and maintained multiple web applications using Angular, Express, and MongoDB. Collaborated with UX team to improve user experience.'
      }
    ],
    education: [
      {
        degree: 'M.S. in Computer Science',
        institution: 'Stanford University',
        period: '2015 - 2017',
        description: 'Focused on distributed systems and machine learning'
      },
      {
        degree: 'B.S. in Computer Science',
        institution: 'University of California, Berkeley',
        period: '2011 - 2015',
        description: 'Minor in Mathematics'
      }
    ],
    skills: [
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 70 }
    ],
    projects: [
      {
        name: 'E-commerce Platform',
        description: 'Developed a full-stack e-commerce platform with real-time inventory management',
        technologies: 'React, Node.js, MongoDB, WebSockets',
        link: 'https://github.com/alexjohnson/ecommerce-platform'
      },
      {
        name: 'AI-powered Chat Bot',
        description: 'Created a chatbot using natural language processing for customer support',
        technologies: 'Python, TensorFlow, Flask, React',
        link: 'https://github.com/alexjohnson/ai-chatbot'
      }
    ]
  },
  'fullstack-web': {
    role: 'fullstack-web',
    personalInfo: {
      name: 'Sam Lee',
      title: 'Full Stack Web Developer',
      email: 'sam.lee@email.com',
      phone: '(555) 987-6543',
      photo: '/placeholder.svg?height=200&width=200',
      location: 'New York, NY',
      profileLinks: {
        linkedin: 'https://www.linkedin.com/in/samlee',
        github: 'https://github.com/samlee',
        twitter: 'https://twitter.com/samlee_dev'
      }
    },
    experience: [
      {
        title: 'Full Stack Web Developer',
        company: 'WebSolutions Co.',
        period: 'Mar 2019 - Present',
        description: 'Develop and maintain client websites using MERN stack. Implement responsive designs and optimize website performance.'
      },
      {
        title: 'Junior Web Developer',
        company: 'DigitalCraft Agency',
        period: 'Jul 2017 - Feb 2019',
        description: 'Assisted in the development of WordPress themes and plugins. Collaborated with designers to implement pixel-perfect websites.'
      }
    ],
    education: [
      {
        degree: 'B.S. in Web Development',
        institution: 'New York University',
        period: '2013 - 2017',
        description: 'Graduated with honors. Relevant coursework: Web Programming, Database Management, UI/UX Design'
      }
    ],
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'WordPress', level: 70 }
    ],
    projects: [
      {
        name: 'Portfolio Website Generator',
        description: 'Created a web app that generates customizable portfolio websites for creatives',
        technologies: 'React, Node.js, Express, MongoDB',
        link: 'https://github.com/samlee/portfolio-generator'
      },
      {
        name: 'Task Management App',
        description: 'Developed a real-time task management application with team collaboration features',
        technologies: 'Vue.js, Firebase, Vuex',
        link: 'https://github.com/samlee/task-master'
      }
    ]
  }
}

