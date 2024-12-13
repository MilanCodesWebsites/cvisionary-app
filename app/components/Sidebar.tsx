import { FaUser, FaBriefcase, FaGraduationCap, FaCogs, FaLightbulb } from 'react-icons/fa'
import { Section } from '../types'

interface SidebarProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const sections = [
    { id: 'personalInfo', icon: FaUser, label: 'Personal Info' },
    { id: 'experience', icon: FaBriefcase, label: 'Experience' },
    { id: 'education', icon: FaGraduationCap, label: 'Education' },
    { id: 'skills', icon: FaCogs, label: 'Skills' },
    { id: 'projects', icon: FaLightbulb, label: 'Projects' },
  ]

  return (
    <aside className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white p-6 w-full lg:w-64">
      <nav>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => setActiveSection(section.id as Section)}
                className={`w-full flex items-center p-2 rounded-lg transition-all ${
                  activeSection === section.id
                    ? 'bg-purple-700 text-white shadow-neon-purple'
                    : 'hover:bg-purple-800'
                }`}
              >
                <section.icon className="mr-2" />
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

