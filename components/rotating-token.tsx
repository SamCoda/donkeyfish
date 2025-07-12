"use client"

import { useEffect, useRef } from "react"

export function RotatingToken() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 300

    // Token properties
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 100
    let rotation = 0
    const rotationSpeed = 0.01

    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update rotation
      rotation += rotationSpeed

      // Draw token
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Main coin body
      const gradient = ctx.createRadialGradient(0, 0, radius * 0.8, 0, 0, radius)
      gradient.addColorStop(0, "#39ff14") // Neon green
      gradient.addColorStop(1, "#004d14") // Deep green

      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Outer ring
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.lineWidth = 5
      ctx.strokeStyle = "#ffd700" // Gold
      ctx.stroke()

      // Inner details - "B" letter
      ctx.font = "bold 120px Rubik"
      ctx.fillStyle = "#000"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("B", 0, 0)

      // Glow effect
      ctx.shadowColor = "#39ff14"
      ctx.shadowBlur = 20
      ctx.lineWidth = 2
      ctx.strokeStyle = "#39ff14"
      ctx.strokeText("B", 0, 0)

      // Small text for "BUTA"
      ctx.font = "bold 24px Rubik"
      ctx.fillStyle = "#ffd700"
      ctx.fillText("BUTA", 0, 50)

      ctx.restore()

      // Draw 3D effect (side of coin)
      ctx.beginPath()
      ctx.ellipse(centerX, centerY + radius * 0.1, radius, radius * 0.1, 0, 0, Math.PI * 2)
      ctx.fillStyle = "#004d14"
      ctx.fill()
      ctx.strokeStyle = "#39ff14"
      ctx.lineWidth = 2
      ctx.stroke()

      // Continue animation
      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      // No cleanup needed for this animation
    }
  }, [])

  return <canvas ref={canvasRef} className="w-[300px] h-[300px]" />
}
