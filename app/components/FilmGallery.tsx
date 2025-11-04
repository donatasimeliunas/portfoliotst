"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import VideoPlayer from "./VideoPlayer"

interface GalleryItem {
  type: "image" | "video"
  src: string
  alt?: string
}

interface FilmGalleryProps {
  items: GalleryItem[]
}

const FilmGallery: React.FC<FilmGalleryProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <div className="mb-4">
        {items[activeIndex].type === "video" ? (
          <VideoPlayer src={items[activeIndex].src} />
        ) : (
          <Image
            src={items[activeIndex].src || "/placeholder.svg"}
            alt={items[activeIndex].alt || ""}
            width={800}
            height={450}
            className="w-full h-auto"
          />
        )}
      </div>
      <div className="flex space-x-2 overflow-x-auto">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-20 h-20 ${activeIndex === index ? "ring-2 ring-blue-500" : ""}`}
          >
            {item.type === "video" ? (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-3xl">▶️</span>
              </div>
            ) : (
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt || ""}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilmGallery
