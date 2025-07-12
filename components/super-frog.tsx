"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Zap, Flame } from "lucide-react"

export function SuperFrog() {
  const [isFlying, setIsFlying] = useState(false)
  const [powerLevel, setPowerLevel] = useState(0)

  useEffect(() => {
    // Random flying animation
    const flyInterval = setInterval(
      () => {
        setIsFlying(true)
        setTimeout(() => setIsFlying(false), 2000)
      },
      Math.random() * 8000 + 5000,
    )

    // Power level animation
    const powerInterval = setInterval(() => {
      setPowerLevel((prev) => (prev < 100 ? prev + 1 : 0))
    }, 100)

    return () => {
      clearInterval(flyInterval)
      clearInterval(powerInterval)
    }
  }, [])

  return (
    <div className="relative w-[400px] h-[400px] group">
      {/* Main superhero frog image */}
      <div
        className={`relative w-full h-full transition-transform duration-500 ${isFlying ? "translate-y-[-30px]" : ""}`}
      >
        <Image
          src="https://v0.blob.vercel-storage.com/2i5pR.png"
          alt="Butanol Super Frog"
          width={400}
          height={400}
          className="frog-shadow"
        />
      </div>

      {/* Energy aura */}
      <div className="absolute -z-10 inset-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-neon-green/20 rounded-full animate-ripple"></div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-neon-green/15 rounded-full animate-ripple"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-neon-green/10 rounded-full animate-ripple"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Lightning effects */}
      <div className="absolute -top-8 -right-8">
        <Zap className="w-16 h-16 text-neon-green animate-pulse-glow" />
      </div>
      <div className="absolute -bottom-4 -left-4">
        <Zap className="w-12 h-12 text-neon-green animate-pulse-glow" style={{ animationDelay: "0.7s" }} />
      </div>

      {/* Flame effects */}
      <div className="absolute top-1/4 -right-4">
        <Flame className="w-10 h-10 text-toxic-pink animate-float" />
      </div>
      <div className="absolute bottom-1/4 -left-4">
        <Flame className="w-10 h-10 text-toxic-pink animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Power level indicator */}
      <div className="absolute -bottom-16 left-0 right-0 mx-auto w-3/4">
        <div className="h-3 bg-black/50 rounded-full overflow-hidden">
          <div className="h-full bg-neon-green transition-all duration-100" style={{ width: `${powerLevel}%` }}></div>
        </div>
        <div className="text-center text-neon-green text-xs mt-1">POWER LEVEL</div>
      </div>
    </div>
  )
}
