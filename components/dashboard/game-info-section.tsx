"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CalendarIcon, ChevronDown } from "lucide-react"

interface GameInfoSectionProps {
  selectedGame: string
  onGameChange: (game: string) => void
}

export function GameInfoSection({ selectedGame, onGameChange }: GameInfoSectionProps) {
  const [date, setDate] = useState<Date | undefined>(new Date("2025-02-08T00:00:00"))
  const [selectedGameTime, setSelectedGameTime] = useState("MOR (13:00)")
  const [countdown, setCountdown] = useState("00:00:00")

  const gameTimes = ["MOR (13:00)", "EVE (18:00)", "NIGHT (20:00)"]

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const nextDraw = new Date()

      // Set next draw time based on selected game time
      if (selectedGameTime === "MOR (13:00)") {
        nextDraw.setHours(13, 0, 0, 0)
      } else if (selectedGameTime === "EVE (18:00)") {
        nextDraw.setHours(18, 0, 0, 0)
      } else {
        nextDraw.setHours(20, 0, 0, 0)
      }

      // If the time has passed today, set it for tomorrow
      if (now > nextDraw) {
        nextDraw.setDate(nextDraw.getDate() + 1)
      }

      const diff = nextDraw.getTime() - now.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setCountdown(
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [selectedGameTime])

  return (
    <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4">
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full sm:w-[180px] justify-start text-left font-normal bg-white border border-gray-300 rounded-md",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>

        <Button
          className={cn(
            "rounded-full px-4 py-2 text-sm flex-grow sm:flex-grow-0",
            selectedGame === "Dear Single"
              ? "bg-black hover:bg-gray-800 text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-700",
          )}
          onClick={() => onGameChange("Dear Single")}
        >
          Dear Single
        </Button>

        <Button
          className={cn(
            "rounded-full px-4 py-2 text-sm flex-grow sm:flex-grow-0",
            selectedGame === "Rajshree Punjab"
              ? "bg-teal-500 hover:bg-teal-600 text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-700",
          )}
          onClick={() => onGameChange("Rajshree Punjab")}
        >
          Rajshree Punjab
        </Button>

        <Button
          className={cn(
            "rounded-full px-4 py-2 text-sm flex-grow sm:flex-grow-0",
            selectedGame === "Booking - Choice"
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-700",
          )}
          onClick={() => onGameChange("Booking - Choice")}
        >
          Booking - Choice
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-white border border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700 rounded-full px-4 py-2 text-sm flex items-center gap-1 flex-grow sm:flex-grow-0">
              {selectedGameTime} <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {gameTimes.map((time) => (
              <DropdownMenuItem key={time} onClick={() => setSelectedGameTime(time)}>
                {time}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <p className="text-red-600 font-semibold text-lg w-full text-center sm:w-auto sm:text-left sm:ml-auto mt-2 sm:mt-0">
          Countdown: {countdown}
        </p>
      </div>
    </div>
  )
}
