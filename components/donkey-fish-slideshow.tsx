"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Fish, Coins, Zap, Crown } from "lucide-react"

const slides = [
  {
    src: "/images/donkey-fish-logo.png",
    alt: "Original Donkey Fish",
    icon: <Crown className="w-8 h-8 text-meme-yellow" />,
    title: "The OG Donkey Fish",
    description: "The legendary hybrid that started it all - part stubborn donkey, part slippery fish!",
    bgClass: "bg-ocean-blue",
  },
  {
    src: "/images/gallery6.png?height=400&width=400",
    alt: "Rich Donkey Fish",
    icon: <Coins className="w-8 h-8 text-meme-yellow" />,
    title: "Wealthy Donkey Fish",
    description: "Swimming in money and loving every minute of it!",
    bgClass: "bg-fish-green",
  },
  {
    src: "/images/gallery7.png?height=400&width=400",
    alt: "Super Donkey Fish",
    icon: <Zap className="w-8 h-8 text-meme-orange" />,
    title: "Super Donkey Fish",
    description: "Powered by meme energy and ready to moon!",
    bgClass: "bg-donkey-brown",
  },
  {
    src: "/images/gallery4.png?height=400&width=400",
    alt: "Swimming Donkey Fish",
    icon: <Fish className="w-8 h-8 text-ocean-blue" />,
    title: "Swimming Champion",
    description: "Making waves in the crypto ocean!",
    bgClass: "bg-meme-pink",
  },
]

export function DonkeyFishSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        setIsTransitioning(false)
      }, 500)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl underwater-glass bubble-glow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
            index === currentSlide
              ? isTransitioning
                ? "opacity-0 scale-110"
                : "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          <div className={`absolute inset-0 ${slide.bgClass} opacity-80`} />
          <Image
            src={slide.src || "/placeholder.svg"}
            alt={slide.alt}
            layout="fill"
            objectFit="cover"
            className="mix-blend-multiply opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 text-center text-white px-4">
            <div className="flex justify-center mb-2 animate-meme-pulse">{slide.icon}</div>
            <h3 className="text-2xl font-bold mb-1 meme-text">{slide.title}</h3>
            <p className="text-sm opacity-90">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all comic-border ${
              index === currentSlide ? "bg-meme-yellow w-8 animate-meme-pulse" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
