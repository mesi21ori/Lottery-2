'use client'

import { useState, useEffect } from "react"
import { ScrollingAnnouncementBar } from "@/components/dashboard/scrolling-announcement-bar"
import { GameInfoSection } from "@/components/dashboard/game-info-section"
import { NavigationMenu } from "@/components/dashboard/navigation-menu"
import { cn } from "@/lib/utils"
import { GenericTablePageContent } from "@/components/dashboard/generic-table-page-content"
import { renderRajshreePunjabResultRowCells } from "@/components/dashboard/table-row-renderers"

export default function RajshreePunjabResultPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState("Rajshree Punjab")
  const [username, setUsername] = useState("defaultUser")

  // Simulate getting username from localStorage or cookies
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("username")
      if (storedUser) setUsername(storedUser)
    }
  }, [])

  const tableHeaders = [
    { label: "Sr. No.", sortable: true },
    { label: "Date", sortable: true },
    { label: "Session", sortable: true },
    { label: "Rajshree-1st", sortable: true },
    { label: "Rajshree-2nd", sortable: true },
    { label: "Rajshree-3rd", sortable: true },
    { label: "Rajshree-4th", sortable: true },
    { label: "Rajshree-5th Last", sortable: true },
  ]

  const sessionTimes = ["ALL", "12:00 PM", "04:00 PM", "07:00 PM", "09:00 PM"]

  const dummyData = [
    { srNo: 1, date: "2025-07-04", session: "12:00 PM", r1: 4, r2: 7, r3: 3, r4: 2, r5: 1 },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gradient-to-r from-red-800 to-red-900 text-white py-3 px-4 sm:px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <span className={cn("text-lg font-semibold", isMobileMenuOpen && "hidden sm:block")}>
            Three Circle 7 - Welcome: {username}
          </span>
        </div>
        <NavigationMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </header>

      <ScrollingAnnouncementBar text="🎯 Welcome to Three Circle 7 Lottery • Latest Results Available • Play Responsibly • Good Luck! • 🎯 Welcome to Three Circle 7 Lottery • Latest Results Available • Play Responsibly • Good Luck! •" />

      <main className="flex-1 p-3 sm:p-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4">
          <GameInfoSection selectedGame={selectedGame} onGameChange={setSelectedGame} />

          <GenericTablePageContent
            title="Rajshree Punjab Result"
            tableHeaders={tableHeaders}
            data={dummyData}
            sessionOptions={sessionTimes}
            defaultStartDate={new Date("2025-07-04T00:00:00")}
            defaultEndDate={new Date("2025-08-04T00:00:00")}
            renderRowCells={renderRajshreePunjabResultRowCells}
          />
        </div>
      </main>
    </div>
  )
}
