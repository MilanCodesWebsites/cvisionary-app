import { ResumeData, roleColors } from '../types'
import { Github, Linkedin, Twitter, Globe } from 'lucide-react'

interface ResumePreviewProps {
  resumeData: ResumeData
}

export function ResumePreview({ resumeData }: ResumePreviewProps) {
  const roleColor = roleColors[resumeData.role]

  return (
    <div id="resume-preview" className="bg-white text-gray-900 rounded-xl shadow-xl overflow-hidden font-['Poppins',sans-serif]">
      {/* Header */}
      <div className={`relative px-8 py-12`} style={{ backgroundColor: roleColor }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L50 100 L100 0 Z" fill="rgba(255,255,255,0.1)"></path>
          </svg>
        </div>
        <div className="relative flex items-center gap-6">
          {resumeData.personalInfo.photo && (
            <img
              src={resumeData.personalInfo.photo}
              alt={resumeData.personalInfo.name}
              className="w-24 h-24 rounded-full border-4 border-white/20 object-cover"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold text-white">
              {resumeData.personalInfo.name || 'Your Name'}
            </h1>
            <p className="text-white/80 mt-1">
              {resumeData.personalInfo.title || 'Your Title'}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Contact Info */}
        <div className="mb-8 flex flex-wrap gap-4">
          {resumeData.personalInfo.email && (
            <p className="text-sm">{resumeData.personalInfo.email}</p>
          )}
          {resumeData.personalInfo.phone && (
            <p className="text-sm">{resumeData.personalInfo.phone}</p>
          )}
          {resumeData.personalInfo.location && (
            <p className="text-sm">{resumeData.personalInfo.location}</p>
          )}
        </div>

        {/* Profile Links */}
        <div className="mb-8 flex flex-wrap gap-4">
          {resumeData.personalInfo.profileLinks.website && (
            <a href={resumeData.personalInfo.profileLinks.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <Globe className="w-4 h-4" />
              Website
            </a>
          )}
          {resumeData.personalInfo.profileLinks.linkedin && (
            <a href={resumeData.personalInfo.profileLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          )}
          {resumeData.personalInfo.profileLinks.github && (
            <a href={resumeData.personalInfo.profileLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {resumeData.personalInfo.profileLinks.twitter && (
            <a href={resumeData.personalInfo.profileLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <Twitter className="w-4 h-4" />
              Twitter
            </a>
          )}
        </div>

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: roleColor }}>Experience</h2>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gray-300 before:rounded-full">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{exp.company} • {exp.period}</p>
                  <p className="text-sm text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: roleColor }}>Education</h2>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gray-300 before:rounded-full">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-gray-600 mb-1">{edu.institution} • {edu.period}</p>
                  <p className="text-sm text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {resumeData.projects.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4" style={{ color: roleColor }}>Recent Projects</h2>
            <div className="space-y-6">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gray-300 before:rounded-full">
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{project.technologies}</p>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-white/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-48 w-64 h-64 bg-gradient-to-br from-white/5 to-white/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-24 right-24 w-64 h-64 bg-gradient-to-br from-white/5 to-white/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  )
}

