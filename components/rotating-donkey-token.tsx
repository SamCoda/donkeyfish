"use client"

import { useEffect, useRef } from "react"

export function RotatingDonkeyToken() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 300

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 100
    let rotation = 0
    const rotationSpeed = 0.02

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      rotation += rotationSpeed

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Main coin body with gradient
      const gradient = ctx.createRadialGradient(0, 0, radius * 0.8, 0, 0, radius)
      gradient.addColorStop(0, "#ffd700") // Gold center
      gradient.addColorStop(0.7, "#ff8c00") // Orange middle
      gradient.addColorStop(1, "#8b4f0f") // Brown edge

      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Outer ring
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.lineWidth = 6
      ctx.strokeStyle = "#000"
      ctx.stroke()

      // Inner "D" for Donkey
      ctx.font = "bold 120px Comic Neue"
      ctx.fillStyle = "#000"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("D", 0, 0)

      // Glow effect
      ctx.shadowColor = "#ffd700"
      ctx.shadowBlur = 20
      ctx.lineWidth = 3
      ctx.strokeStyle = "#ffd700"
      ctx.strokeText("D", 0, 0)

      // Small text for "DONK"
      ctx.font = "bold 24px Comic Neue"
      ctx.fillStyle = "#000"
      ctx.shadowBlur = 10
      ctx.fillText("DONK", 0, 50)

      ctx.restore()

      // 3D effect (side of coin)
      ctx.beginPath()
      ctx.ellipse(centerX, centerY + radius * 0.1, radius, radius * 0.1, 0, 0, Math.PI * 2)
      ctx.fillStyle = "#8b4f0f"
      ctx.fill()
      ctx.strokeStyle = "#000"
      ctx.lineWidth = 3
      ctx.stroke()

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="w-[300px] h-[300px] drop-shadow-2xl" />
}
