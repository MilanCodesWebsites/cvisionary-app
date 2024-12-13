'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, Plus, Trash2, Briefcase, GraduationCap, Code, Link } from 'lucide-react'
import { ResumeData, Role, roleColors } from '../types'

interface ResumeFormProps {
  resumeData: ResumeData
  setResumeData: (data: ResumeData) => void
  selectedRole: Role
}

export function ResumeForm({ resumeData, setResumeData, selectedRole }: ResumeFormProps) {
  const [activeSection, setActiveSection] = useState('personal')

  const handlePersonalInfoChange = (field: string, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value
      }
    })
  }

  const handleProfileLinkChange = (field: string, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        profileLinks: {
          ...resumeData.personalInfo.profileLinks,
          [field]: value
        }
      }
    })
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        handlePersonalInfoChange('photo', reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const addItem = (section: 'experience' | 'education' | 'projects') => {
    setResumeData({
      ...resumeData,
      [section]: [
        ...resumeData[section],
        section === 'projects'
          ? { name: '', description: '', technologies: [] }
          : { title: '', company: '', period: '', description: '' }
      ]
    })
  }

  const updateItem = (
    section: 'experience' | 'education' | 'projects',
    index: number,
    field: string,
    value: string
  ) => {
    const newItems = [...resumeData[section]]
    newItems[index] = { ...newItems[index], [field]: value }
    setResumeData({
      ...resumeData,
      [section]: newItems
    })
  }

  const removeItem = (section: 'experience' | 'education' | 'projects', index: number) => {
    setResumeData({
      ...resumeData,
      [section]: resumeData[section].filter((_, i) => i !== index)
    })
  }

  const renderSection = (
    section: 'experience' | 'education' | 'projects',
    title: string,
    icon: React.ReactNode
  ) => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-purple-300 flex items-center gap-2">
          {icon}
          {title}
        </h2>
        <button
          onClick={() => addItem(section)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add {title}
        </button>
      </div>

      <AnimatePresence>
        {resumeData[section].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg space-y-4"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-medium text-purple-300">{title} {index + 1}</h3>
              <button
                onClick={() => removeItem(section, index)}
                className="p-1 hover:bg-purple-500/10 rounded transition-colors"
              >
                <Trash2 className="w-4 h-4 text-purple-300" />
              </button>
            </div>
            <div className="grid gap-4">
              {Object.keys(item).map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={(item as any)[field]}
                  onChange={(e) => updateItem(section, index, field, e.target.value)}
                  className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors placeholder-purple-300/40"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-purple-300 flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Personal Information
        </h2>
        
        {/* Photo Upload */}
        <div className="flex items-center gap-4">
          {resumeData.personalInfo.photo ? (
            <img 
              src={resumeData.personalInfo.photo} 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover border-2 border-purple-500"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-purple-900/20 border-2 border-dashed border-purple-500/40 flex items-center justify-center">
              <Upload className="w-6 h-6 text-purple-500/40" />
            </div>
          )}
          <div>
            <label className="block mb-2 text-sm font-medium text-purple-300">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg cursor-pointer transition-colors"
            >
              <Upload className="w-4 h-4" />
              Upload Photo
            </label>
            <p className="mt-2 text-xs text-purple-300/60">
              Recommended: Square image, 500x500px or larger
            </p>
          </div>
        </div>

        {/* Personal Info Fields */}
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={resumeData.personalInfo.name}
            onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
            className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors placeholder-purple-300/40"
          />
          <input
            type="text"
            placeholder="Job Title"
            value={resumeData.personalInfo.title}
            onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
            className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors placeholder-purple-300/40"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              value={resumeData.personalInfo.email}
              onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors placeholder-purple-300/40"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={resumeData.personalInfo.phone}
              onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors placeholder-purple-300/40"
            />
          </div>
          <input
            type="text"
            placeholder="Location"
            value={resumeData.personalInfo.location}
            onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
            className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors placeholder-purple-300/40"
          />
        </div>

        {/* Profile Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-purple-300 flex items-center gap-2">
            <Link className="w-5 h-5" />
            Profile Links
          </h3>
          <div className="grid gap-4">
            <input
              type="url"
              placeholder="Website"
              value={resumeData.personalInfo.profileLinks.website || ''}
              onChange={(e) => handleProfileLinkChange('website', e.target.value)}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors placeholder-purple-300/40"
            />
            <input
              type="url"
              placeholder="LinkedIn"
              value={resumeData.personalInfo.profileLinks.linkedin || ''}
              onChange={(e) => handleProfileLinkChange('linkedin', e.target.value)}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors placeholder-purple-300/40"
            />
            <input
              type="url"
              placeholder="GitHub"
              value={resumeData.personalInfo.profileLinks.github || ''}
              onChange={(e) => handleProfileLinkChange('github', e.target.value)}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors placeholder-purple-300/40"
            />
            <input
              type="url"
              placeholder="Twitter"
              value={resumeData.personalInfo.profileLinks.twitter || ''}
              onChange={(e) => handleProfileLinkChange('twitter', e.target.value)}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors placeholder-purple-300/40"
            />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      {renderSection('experience', 'Experience', <Briefcase className="w-5 h-5" />)}

      {/* Education Section */}
      {renderSection('education', 'Education', <GraduationCap className="w-5 h-5" />)}

      {/* Projects Section */}
      {renderSection('projects', 'Projects', <Code className="w-5 h-5" />)}
    </div>
  )
}

