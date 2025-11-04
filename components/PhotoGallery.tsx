"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Photo {
  src: string
  alt: string
}

interface PhotoGalleryProps {
  photos: Photo[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

  const openPhoto = (index: number) => setSelectedPhotoIndex(index)
  const closePhoto = useCallback(() => setSelectedPhotoIndex(null), [])

  const navigatePhoto = useCallback(
    (direction: "prev" | "next") => {
      if (selectedPhotoIndex === null) return
      const newIndex =
        direction === "prev"
          ? (selectedPhotoIndex - 1 + photos.length) % photos.length
          : (selectedPhotoIndex + 1) % photos.length
      setSelectedPhotoIndex(newIndex)
    },
    [selectedPhotoIndex, photos.length],
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return
      if (e.key === "ArrowLeft") navigatePhoto("prev")
      if (e.key === "ArrowRight") navigatePhoto("next")
      if (e.key === "Escape") closePhoto()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedPhotoIndex, navigatePhoto, closePhoto])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="aspect-[16/9] relative overflow-hidden">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover hover:scale-105 transition-transform cursor-pointer"
              onClick={() => openPhoto(index)}
            />
          </div>
        ))}
      </div>

      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closePhoto}
        >
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[selectedPhotoIndex].src || "/placeholder.svg"}
              alt={photos[selectedPhotoIndex].alt}
              fill
              className="object-contain"
            />
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              onClick={() => navigatePhoto("prev")}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              onClick={() => navigatePhoto("next")}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={closePhoto}>
            &times;
          </button>
        </div>
      )}
    </>
  )
}
