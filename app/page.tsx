'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { RoleSelector } from './components/RoleSelector'
import { ResumeForm } from './components/ResumeForm'
import { ResumePreview } from './components/ResumePreview'
import { ActionBar } from './components/ActionBar'
import { ResumeData, Role, roleColors } from './types'
import { templateData } from './templateData'

const defaultResumeData: ResumeData = {
  role: 'frontend',
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    photo: '',
    location: '',
    profileLinks: {}
  },
  experience: [],
  education: [],
  skills: [],
  projects: []
}

export default function CVisionaryApp() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData)
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role)
    setResumeData(templateData[role] || { ...defaultResumeData, role })
  }

  return (
    <div className="min-h-screen bg-[#0A0118] text-white font-sans">
      {/* Background geometric shapes */}
      <div className="fixed inset-0 z-0 overflow-hidden opacity-20">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -100, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ backgroundColor: selectedRole ? roleColors[selectedRole] : '#6366f1' }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 100, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ backgroundColor: selectedRole ? roleColors[selectedRole] : '#8b5cf6' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <header className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold flex items-center gap-2 font-['Audiowide']">
              <span className="text-purple-400">✨</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                CVIsionary
              </span>
              <span className="text-purple-400">✨</span>
            </h1>
            <p className="text-purple-300 mt-2 font-['Rajdhani'] text-xl">Create your future-ready resume</p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 pb-20">
          {!selectedRole ? (
            <RoleSelector onSelect={handleRoleSelect} />
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <ResumeForm 
                  resumeData={resumeData} 
                  setResumeData={setResumeData}
                  selectedRole={selectedRole}
                />
                <ActionBar resumeData={resumeData} />
              </div>
              <div className="sticky top-8 h-fit">
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

