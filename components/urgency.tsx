"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

export default function Urgency() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // Set end date to 3 days from now
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 3)
    endDate.setHours(23, 59, 59, 999)

    const updateCountdown = () => {
      const now = new Date()
      const timeDifference = endDate.getTime() - now.getTime()

      if (timeDifference <= 0) {
        // Reset to a new date if expired
        endDate.setDate(endDate.getDate() + 3)
        return
      }

      // Calculate time units
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }

    // Update countdown immediately and then every second
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-slate-900 text-white py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="destructive" className="animate-pulse">
              Limited Time Offer
            </Badge>
            <p className="font-medium">Special launch pricing ends soon!</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm">Offer ends in:</span>
            </div>
            <div className="flex gap-2 text-sm">
              <div className="bg-slate-800 px-2 py-1 rounded">
                <span className="font-mono font-bold">{days.toString().padStart(2, "0")}</span>
                <span className="text-xs text-slate-400 ml-1">d</span>
              </div>
              <div className="bg-slate-800 px-2 py-1 rounded">
                <span className="font-mono font-bold">{hours.toString().padStart(2, "0")}</span>
                <span className="text-xs text-slate-400 ml-1">h</span>
              </div>
              <div className="bg-slate-800 px-2 py-1 rounded">
                <span className="font-mono font-bold">{minutes.toString().padStart(2, "0")}</span>
                <span className="text-xs text-slate-400 ml-1">m</span>
              </div>
              <div className="bg-slate-800 px-2 py-1 rounded">
                <span className="font-mono font-bold">{seconds.toString().padStart(2, "0")}</span>
                <span className="text-xs text-slate-400 ml-1">s</span>
              </div>
            </div>
          </div>

          <Button size="sm" variant="default" className="group">
            Claim Discount Now
            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
