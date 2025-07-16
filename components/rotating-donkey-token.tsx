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

      // Simulate 3D rim rotation (thickness with shading)
      const rimLayers = 14
      for (let i = 0; i < rimLayers; i++) {
        ctx.save()
        ctx.translate(centerX, centerY + i * 0.8)
        ctx.beginPath()
        ctx.arc(0, 0, radius - i * 0.2, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(139, 79, 15, ${1 - i / rimLayers})`
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.restore()
      }

      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Coin face with metallic gold gradient
      const faceGradient = ctx.createRadialGradient(0, 0, radius * 0.1, 0, 0, radius)
      faceGradient.addColorStop(0, "#fffed6") // light shimmer
      faceGradient.addColorStop(0.3, "rgb(255, 215, 0)") // meme-yellow
      faceGradient.addColorStop(0.6, "rgb(255, 140, 0)") // meme-orange
      faceGradient.addColorStop(1, "rgb(139, 79, 15)") // donkey-brown

      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.fillStyle = faceGradient
      ctx.fill()

      // Inner border
      ctx.beginPath()
      ctx.arc(0, 0, radius - 3, 0, Math.PI * 2)
      ctx.lineWidth = 5
      ctx.strokeStyle = "#000"
      ctx.stroke()

      // Gloss highlight (top left glow)
      const gloss = ctx.createRadialGradient(-40, -40, 5, -40, -40, 120)
      gloss.addColorStop(0, "rgba(255,255,255,0.5)")
      gloss.addColorStop(1, "rgba(255,255,255,0)")

      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.fillStyle = gloss
      ctx.fill()

      // Central "D"
      ctx.font = "bold 120px Comic Neue, sans-serif"
      ctx.fillStyle = "#111"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("D", 0, 0)

      ctx.shadowColor = "rgb(255, 215, 0)"
      ctx.shadowBlur = 25
      ctx.lineWidth = 3
      ctx.strokeStyle = "rgb(255, 215, 0)"
      ctx.strokeText("D", 0, 0)

      // Label
      ctx.shadowBlur = 0
      ctx.font = "bold 26px Comic Neue, sans-serif"
      ctx.fillStyle = "#000"
      ctx.fillText("$DONK", 0, 50)

      ctx.restore()

      // Bottom 3D ellipse to enhance realism
      const ellipseHeight = 10 + Math.abs(Math.sin(rotation) * 8)
      ctx.beginPath()
      ctx.ellipse(centerX, centerY + radius + 6, radius, ellipseHeight, 0, 0, Math.PI * 2)
      ctx.fillStyle = "rgb(139, 79, 15)" // donkey brown
      ctx.fill()
      ctx.strokeStyle = "#000"
      ctx.lineWidth = 2
      ctx.stroke()

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-[300px] h-[300px] drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
    />
  )
}
