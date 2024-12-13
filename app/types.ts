export type Role = 'frontend' | 'backend' | 'data' | 'devops' | 'fullstack-software' | 'fullstack-web'

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  photo: string
  location: string
  profileLinks: {
    website?: string
    linkedin?: string
    github?: string
    twitter?: string
  }
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  description: string
}

export interface Skill {
  name: string
  level: number
}

export interface Project {
  name: string
  description: string
  technologies: string
  link?: string
}

export interface ResumeData {
  role: Role
  personalInfo: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: Skill[]
  projects: Project[]
}

export const roleColors: Record<Role, string> = {
  frontend: '#6366f1',
  backend: '#10b981',
  data: '#f59e0b',
  devops: '#ef4444',
  'fullstack-software': '#8b5cf6',
  'fullstack-web': '#ec4899'
}

export const roleIcons: Record<Role, string> = {
  frontend: '🎨',
  backend: '🖥️',
  data: '📊',
  devops: '🚀',
  'fullstack-software': '🔧',
  'fullstack-web': '🌐'
}

