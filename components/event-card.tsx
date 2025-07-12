"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  type: "AMA" | "Launch" | "Airdrop" | "Community"
  description: string
  link?: string
  attendees?: number
}

export function EventCard({ title, date, time, location, type, description, link, attendees = 0 }: EventCardProps) {
  const [expanded, setExpanded] = useState(false)

  // Get event type color and icon
  const getEventTypeStyles = () => {
    switch (type) {
      case "AMA":
        return {
          bgColor: "bg-bright-blue",
          textColor: "text-bright-blue",
          borderColor: "border-bright-blue",
        }
      case "Launch":
        return {
          bgColor: "bg-toxic-pink",
          textColor: "text-toxic-pink",
          borderColor: "border-toxic-pink",
        }
      case "Airdrop":
        return {
          bgColor: "bg-gold",
          textColor: "text-gold",
          borderColor: "border-gold",
        }
      case "Community":
        return {
          bgColor: "bg-neon-green",
          textColor: "text-neon-green",
          borderColor: "border-neon-green",
        }
      default:
        return {
          bgColor: "bg-neon-green",
          textColor: "text-neon-green",
          borderColor: "border-neon-green",
        }
    }
  }

  const typeStyles = getEventTypeStyles()

  return (
    <div
      className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
        expanded ? "shadow-xl neon-box" : "shadow-lg hover:shadow-xl"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${typeStyles.bgColor} text-black mb-2`}
            >
              {type}
            </span>
            <h3 className="text-xl font-bold neon-text">{title}</h3>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className={`p-2 rounded-full ${typeStyles.bgColor} text-black transition-transform duration-300`}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        <div className="flex flex-wrap gap-4 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Calendar className={`w-4 h-4 ${typeStyles.textColor}`} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className={`w-4 h-4 ${typeStyles.textColor}`} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className={`w-4 h-4 ${typeStyles.textColor}`} />
            <span>{location}</span>
          </div>
          {attendees > 0 && (
            <div className="flex items-center gap-1">
              <Users className={`w-4 h-4 ${typeStyles.textColor}`} />
              <span>{attendees} attending</span>
            </div>
          )}
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-white/80 mb-4">{description}</p>
          {link && (
            <Link
              href={link}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${typeStyles.borderColor} border text-sm font-medium ${typeStyles.textColor} hover:bg-black/30 transition-colors`}
            >
              <span>Register Now</span>
              <ExternalLink size={14} />
            </Link>
          )}
        </div>
      </div>

      {/* Animated border effect */}
      <div className={`h-1 w-full ${typeStyles.bgColor} opacity-80 ${expanded ? "animate-pulse-glow" : ""}`}></div>
    </div>
  )
}
