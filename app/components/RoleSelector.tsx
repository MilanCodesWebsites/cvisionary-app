import { motion } from 'framer-motion'
import { Code, Database, BarChartIcon as ChartBar, Container, Layers, Globe } from 'lucide-react'
import { Role, roleColors } from '../types'

const roles = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Perfect for UI/UX focused roles',
    icon: Code
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    description: 'Highlight your server-side expertise',
    icon: Database
  },
  {
    id: 'data',
    title: 'Data Scientist',
    description: 'Showcase your analytical skills',
    icon: ChartBar
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    description: 'Emphasize your infrastructure knowledge',
    icon: Container
  },
  {
    id: 'fullstack-software',
    title: 'Full-Stack Software Engineer',
    description: 'Demonstrate your end-to-end development skills',
    icon: Layers
  },
  {
    id: 'fullstack-web',
    title: 'Full Stack Web Developer',
    description: 'Showcase your web development expertise',
    icon: Globe
  }
]

interface RoleSelectorProps {
  onSelect: (role: Role) => void
}

export function RoleSelector({ onSelect }: RoleSelectorProps) {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Choose Your Template</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {roles.map((role) => (
          <motion.button
            key={role.id}
            onClick={() => onSelect(role.id as Role)}
            className="flex items-start gap-4 p-6 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-colors text-left group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <role.icon className="w-10 h-10 text-purple-400 p-2 bg-purple-400/10 rounded-lg" />
            <div>
              <h3 className="font-semibold text-lg group-hover:text-purple-400 transition-colors">
                {role.title}
              </h3>
              <p className="text-sm text-purple-300/60">{role.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

