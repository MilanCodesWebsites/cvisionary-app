import { ChangeEvent } from 'react'
import { FaUpload, FaPlus, FaTrash } from 'react-icons/fa'
import { ResumeData, Section } from '../types'

interface ResumeEditorProps {
  resumeData: ResumeData
  setResumeData: (data: ResumeData) => void
  activeSection: Section
}

export default function ResumeEditor({ resumeData, setResumeData, activeSection }: ResumeEditorProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value } = e.target
    if (index !== undefined && Array.isArray(resumeData[activeSection])) {
      const newData = [...resumeData[activeSection]]
      newData[index] = { ...newData[index], [name]: value }
      setResumeData({ ...resumeData, [activeSection]: newData })
    } else {
      setResumeData({ ...resumeData, [activeSection]: { ...resumeData[activeSection], [name]: value } })
    }
  }

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setResumeData({ ...resumeData, personalInfo: { ...resumeData.personalInfo, image: reader.result as string } })
      }
      reader.readAsDataURL(file)
    }
  }

  const addItem = () => {
    if (Array.isArray(resumeData[activeSection])) {
      setResumeData({
        ...resumeData,
        [activeSection]: [...resumeData[activeSection], {}]
      })
    }
  }

  const removeItem = (index: number) => {
    if (Array.isArray(resumeData[activeSection])) {
      const newData = [...resumeData[activeSection]]
      newData.splice(index, 1)
      setResumeData({ ...resumeData, [activeSection]: newData })
    }
  }

  const renderPersonalInfo = () => (
    <div className="space-y-4">
      <input
        type="text"
        name="name"
        value={resumeData.personalInfo.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 bg-purple-900 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-purple-300"
      />
      <input
        type="email"
        name="email"
        value={resumeData.personalInfo.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 bg-purple-900 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-purple-300"
      />
      <input
        type="tel"
        name="phone"
        value={resumeData.personalInfo.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full p-2 bg-purple-900 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-purple-300"
      />
      <div className="flex items-center space-x-2">
        <label htmlFor="image-upload" className="cursor-pointer bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition-colors">
          <FaUpload className="mr-2" />
          Upload Image
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        {resumeData.personalInfo.image && (
          <img src={resumeData.personalInfo.image} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
        )}
      </div>
    </div>
  )

  const renderArraySection = () => (
    <div className="space-y-4">
      {resumeData[activeSection].map((item: any, index: number) => (
        <div key={index} className="bg-purple-900 bg-opacity-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Item {index + 1}</h3>
            <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </div>
          {Object.keys(item).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              value={item[key]}
              onChange={(e) => handleChange(e, index)}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              className="w-full p-2 mb-2 bg-purple-800 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-purple-300"
            />
          ))}
        </div>
      ))}
      <button onClick={addItem} className="w-full bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center justify-center transition-colors">
        <FaPlus className="mr-2" />
        Add Item
      </button>
    </div>
  )

  const renderSection = () => {
    switch (activeSection) {
      case 'personalInfo':
        return renderPersonalInfo()
      case 'experience':
      case 'education':
      case 'skills':
      case 'projects':
        return renderArraySection()
      default:
        return null
    }
  }

  return (
    <div className="w-full lg:w-1/2 p-6 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-purple-500">
      <h2 className="text-2xl font-bold mb-4 text-purple-400">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
      {renderSection()}
    </div>
  )
}

