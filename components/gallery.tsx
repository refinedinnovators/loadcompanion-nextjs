"use client"

import { useState } from "react"
import { Carousel } from "@/components/carousel"
import { BrowserFrame } from "@/components/BrowserFrame"
import GalleryContent from "@/components/gallery-content"

export function Gallery() {
  const [currentTitle, setCurrentTitle] = useState("Load Companion - Integrated with DAT Load Board")

  const handleTitleChange = (index: number) => {
    setCurrentTitle(
      index === 0
        ? "Load Companion - Integrated with DAT Load Board"
        : "Load Companion - Integrated with Sylectus Load Board",
    )
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100 py-20 sm:py-28">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Works with Your Favorite Load Boards
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Load Companion seamlessly integrates with the most popular load boards in the industry, enhancing your
            workflow without disrupting it.
          </p>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrowserFrame title={currentTitle}>
            <Carousel images={GalleryContent} onSlideChange={handleTitleChange} />
          </BrowserFrame>
        </div>
      </div>
    </section>
  )
}

