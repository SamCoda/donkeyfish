"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Fish, Coins, Zap, Crown } from "lucide-react"

export function DonkeyFishHero() {
  const [isSwimming, setIsSwimming] = useState(false)
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    // Swimming animation
    const swimInterval = setInterval(() => {
      setIsSwimming(true)
      setTimeout(() => setIsSwimming(false), 2000)
    }, 5000)

    // Bubble generation
    const bubbleInterval = setInterval(() => {
      const newBubble = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      }
      setBubbles((prev) => [...prev.slice(-10), newBubble])
    }, 1000)

    return () => {
      clearInterval(swimInterval)
      clearInterval(bubbleInterval)
    }
  }, [])

  const handleClick = () => {
    setIsSwimming(true)
    setTimeout(() => setIsSwimming(false), 2000)

    // Generate extra bubbles on click
    const clickBubbles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setBubbles((prev) => [...prev, ...clickBubbles])
  }

  return (
    <div className="relative w-[400px] h-[400px] cursor-pointer group" onClick={handleClick}>
      {/* Main Donkey Fish Logo */}
      <div className={`relative w-full h-full transition-transform duration-500 ${isSwimming ? "animate-swim" : ""}`}>
        <Image
          src="/images/donkey-fish-logo.png"
          alt="Donkey Fish - Don't be a jackass!"
          width={400}
          height={400}
          className="drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] transition-all duration-300"
        />
      </div>

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute w-4 h-4 bg-white/60 rounded-full animate-bubble-float pointer-events-none"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Money Effects */}
      <div className="absolute -top-8 -right-8 animate-meme-pulse">
        <div className="bg-meme-yellow w-16 h-16 rounded-full flex items-center justify-center comic-border">
          <Coins className="w-8 h-8 text-black" />
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 animate-meme-pulse" style={{ animationDelay: "0.5s" }}>
        <div className="bg-fish-green w-12 h-12 rounded-full flex items-center justify-center comic-border">
          <Fish className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Energy Effects */}
      <div className="absolute top-1/4 -right-6 animate-fish-wiggle">
        <Zap className="w-12 h-12 text-meme-orange drop-shadow-lg" />
      </div>

      <div className="absolute bottom-1/4 -left-6 animate-donkey-hop">
        <Crown className="w-10 h-10 text-meme-yellow drop-shadow-lg" />
      </div>

      {/* Water Ripple Effect */}
      <div className="absolute -z-10 inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-ocean-blue/20 rounded-full animate-water-ripple" />
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-fish-green/15 rounded-full animate-water-ripple"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-meme-yellow/10 rounded-full animate-water-ripple"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Hover Tooltip */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black/80 text-meme-yellow px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none comic-border">
        Click me, don't be a jackass! 🐴🐟
      </div>
    </div>
  )
}
