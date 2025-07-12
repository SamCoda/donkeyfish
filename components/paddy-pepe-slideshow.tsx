"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
]

export function PaddyPepeSlideshow() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Paddy Pepe ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
        Paddy Pepe #{currentImage + 1}
      </div>
    </div>
  )
}
