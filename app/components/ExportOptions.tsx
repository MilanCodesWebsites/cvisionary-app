import { FaFilePdf, FaFileImage, FaLink } from 'react-icons/fa'
import { ResumeData } from '../types'

interface ExportOptionsProps {
  resumeData: ResumeData
}

export default function ExportOptions({ resumeData }: ExportOptionsProps) {
  const handleExport = (format: 'pdf' | 'jpeg') => {
    // Implement export functionality here
    console.log(`Exporting as ${format}...`)
    // You would typically use a library like html2pdf or html2canvas for this functionality
  }

  const handleShare = () => {
    // Implement share functionality here
    console.log('Sharing resume...')
    // You would typically generate a unique URL for the resume and copy it to the clipboard
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <button
          onClick={() => handleExport('pdf')}
          className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition-colors shadow-neon-purple"
        >
          <FaFilePdf className="mr-2" />
          Export as PDF
        </button>
        <button
          onClick={() => handleExport('jpeg')}
          className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition-colors shadow-neon-purple"
        >
          <FaFileImage className="mr-2" />
          Export as JPEG
        </button>
        <button
          onClick={handleShare}
          className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition-colors shadow-neon-purple"
        >
          <FaLink className="mr-2" />
          Share Link
        </button>
      </div>
    </div>
  )
}

