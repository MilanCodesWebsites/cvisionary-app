import { motion } from 'framer-motion'
import { Save, Download, Share2 } from 'lucide-react'
import { ResumeData } from '../types'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

interface ActionBarProps {
  resumeData: ResumeData
}

export function ActionBar({ resumeData }: ActionBarProps) {
  const handleSave = () => {
    // Implement save functionality
    console.log('Saving...')
  }

  const handleExport = async () => {
    const resumeElement = document.getElementById('resume-preview')
    if (resumeElement) {
      const canvas = await html2canvas(resumeElement)
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('resume.pdf')
    }
  }

  const handleShare = () => {
    // Implement share functionality
    console.log('Sharing...')
  }

  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSave}
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
      >
        <Save className="w-4 h-4" />
        Save Draft
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleExport}
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg transition-colors"
      >
        <Download className="w-4 h-4" />
        Export PDF
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleShare}
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Share
      </motion.button>
    </div>
  )
}

