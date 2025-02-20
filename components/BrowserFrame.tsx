import type React from 'react'

interface BrowserFrameProps {
  children: React.ReactNode
  title: string
}

export function BrowserFrame({ children, title }: BrowserFrameProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl bg-gray-800 border border-gray-700">
      {/* Browser toolbar */}
      <div className="bg-gray-900 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 flex-grow">
          <div className="bg-gray-700 rounded-full h-6 w-full flex items-center px-3">
            <span className="text-gray-400 text-xs truncate">{title}</span>
          </div>
        </div>
      </div>
      {/* Content area */}
      <div className="bg-gray-100">{children}</div>
    </div>
  )
}
