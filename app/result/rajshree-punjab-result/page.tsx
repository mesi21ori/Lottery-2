
'use client'
import { ScrollingAnnouncementBar } from "@/components/dashboard/scrolling-announcement-bar"
import { GameInfoSection } from "@/components/dashboard/game-info-section"
import { NavigationMenu } from "@/components/dashboard/navigation-menu"

import { cn } from "@/lib/utils"
import { GenericTablePageContent } from "@/components/dashboard/generic-table-page-content"
import { renderRajshreePunjabResultRowCells } from "@/components/dashboard/table-row-renderers"
import { useState } from "react"

interface LotteryDashboardProps {
  username: string
  userRole: "user" | "admin"
}




export default async function RajshreePunjabResultPage({ username, userRole }: LotteryDashboardProps) {
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState("Dear Single")
  const [tableData, setTableData] = useState<any[]>([])
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
    { srNo: 2, date: "2025-07-04", session: "04:00 PM", r1: 1, r2: 4, r3: 7, r4: 8, r5: 6 },
    { srNo: 3, date: "2025-07-04", session: "07:00 PM", r1: 9, r2: 5, r3: 4, r4: 7, r5: 2 },
    { srNo: 4, date: "2025-07-04", session: "09:00 PM", r1: 7, r2: 2, r3: 8, r4: 9, r5: 1 },
    { srNo: 5, date: "2025-07-05", session: "12:00 PM", r1: 0, r2: 5, r3: 4, r4: 9, r5: 5 },
    { srNo: 6, date: "2025-07-05", session: "04:00 PM", r1: 2, r2: 2, r3: 5, r4: 8, r5: 0 },
    { srNo: 7, date: "2025-07-05", session: "07:00 PM", r1: 0, r2: 9, r3: 9, r4: 2, r5: 4 },
    { srNo: 8, date: "2025-07-05", session: "09:00 PM", r1: 0, r2: 1, r3: 3, r4: 9, r5: 8 },
    { srNo: 9, date: "2025-07-06", session: "12:00 PM", r1: 7, r2: 8, r3: 5, r4: 1, r5: 6 },
    { srNo: 10, date: "2025-07-06", session: "04:00 PM", r1: 3, r2: 7, r3: 5, r4: 1, r5: 9 },
    { srNo: 11, date: "2025-07-06", session: "07:00 PM", r1: 8, r2: 9, r3: 1, r4: 6, r5: 3 },
    { srNo: 12, date: "2025-07-06", session: "09:00 PM", r1: 0, r2: 1, r3: 2, r4: 7, r5: 0 },
    { srNo: 13, date: "2025-07-07", session: "12:00 PM", r1: 1, r2: 5, r3: 4, r4: 1, r5: 7 },
    { srNo: 14, date: "2025-07-07", session: "04:00 PM", r1: 0, r2: 0, r3: 5, r4: 8, r5: 2 },
    { srNo: 15, date: "2025-07-07", session: "07:00 PM", r1: 9, r2: 3, r3: 5, r4: 6, r5: 9 },
    { srNo: 16, date: "2025-07-07", session: "09:00 PM", r1: 3, r2: 0, r3: 2, r4: 7, r5: 9 },
    { srNo: 17, date: "2025-07-08", session: "12:00 PM", r1: 5, r2: 6, r3: 4, r4: 5, r5: 8 },
    { srNo: 18, date: "2025-07-08", session: "04:00 PM", r1: 9, r2: 8, r3: 1, r4: 1, r5: 7 },
    { srNo: 19, date: "2025-07-08", session: "07:00 PM", r1: 9, r2: 1, r3: 7, r4: 0, r5: 9 },
    { srNo: 20, date: "2025-07-08", session: "09:00 PM", r1: 1, r2: 1, r3: 9, r4: 4, r5: 6 },
    { srNo: 21, date: "2025-07-09", session: "12:00 PM", r1: 3, r2: 7, r3: 5, r4: 3, r5: 0 },
    { srNo: 22, date: "2025-07-09", session: "04:00 PM", r1: 3, r2: 1, r3: 4, r4: 8, r5: 2 },
    { srNo: 23, date: "2025-07-09", session: "07:00 PM", r1: 7, r2: 0, r3: 5, r4: 8, r5: 9 },
    { srNo: 24, date: "2025-07-09", session: "09:00 PM", r1: 1, r2: 3, r3: 5, r4: 7, r5: 4 },
    { srNo: 25, date: "2025-07-10", session: "12:00 PM", r1: 3, r2: 0, r3: 2, r4: 7, r5: 0 },
    { srNo: 26, date: "2025-07-10", session: "04:00 PM", r1: 9, r2: 6, r3: 4, r4: 5, r5: 8 },
    { srNo: 27, date: "2025-07-10", session: "07:00 PM", r1: 6, r2: 7, r3: 7, r4: 9, r5: 2 },
    { srNo: 28, date: "2025-07-10", session: "09:00 PM", r1: 5, r2: 4, r3: 9, r4: 8, r5: 2 },
    { srNo: 29, date: "2025-07-11", session: "12:00 PM", r1: 8, r2: 7, r3: 4, r4: 7, r5: 4 },
    { srNo: 30, date: "2025-07-11", session: "04:00 PM", r1: 0, r2: 3, r3: 4, r4: 1, r5: 5 },
    { srNo: 31, date: "2025-07-11", session: "07:00 PM", r1: 0, r2: 4, r3: 2, r4: 8, r5: 2 },
    { srNo: 32, date: "2025-07-11", session: "09:00 PM", r1: 7, r2: 7, r3: 5, r4: 9, r5: 0 },
    { srNo: 33, date: "2025-07-12", session: "12:00 PM", r1: 5, r2: 7, r3: 1, r4: 9, r5: 0 },
    { srNo: 34, date: "2025-07-12", session: "04:00 PM", r1: 2, r2: 8, r3: 0, r4: 9, r5: 2 },
    { srNo: 35, date: "2025-07-12", session: "07:00 PM", r1: 6, r2: 3, r3: 5, r4: 0, r5: 8 },
    { srNo: 36, date: "2025-07-12", session: "09:00 PM", r1: 1, r2: 8, r3: 0, r4: 8, r5: 8 },
    { srNo: 37, date: "2025-07-13", session: "12:00 PM", r1: 7, r2: 1, r3: 7, r4: 0, r5: 9 },
    { srNo: 38, date: "2025-07-13", session: "04:00 PM", r1: 4, r2: 1, r3: 9, r4: 4, r5: 6 },
    { srNo: 39, date: "2025-07-13", session: "07:00 PM", r1: 6, r2: 7, r3: 0, r4: 6, r5: 7 },
    { srNo: 40, date: "2025-07-13", session: "09:00 PM", r1: 8, r2: 5, r3: 4, r4: 9, r5: 8 },
    { srNo: 41, date: "2025-07-14", session: "12:00 PM", r1: 0, r2: 2, r3: 6, r4: 5, r5: 9 },
    { srNo: 42, date: "2025-07-14", session: "04:00 PM", r1: 5, r2: 5, r3: 4, r4: 7, r5: 2 },
    { srNo: 43, date: "2025-07-14", session: "07:00 PM", r1: 4, r2: 1, r3: 9, r4: 8, r5: 7 },
    { srNo: 44, date: "2025-07-14", session: "09:00 PM", r1: 7, r2: 1, r3: 4, r4: 3, r5: 0 },
    { srNo: 45, date: "2025-07-15", session: "12:00 PM", r1: 9, r2: 0, r3: 5, r4: 8, r5: 2 },
    { srNo: 46, date: "2025-07-15", session: "04:00 PM", r1: 0, r2: 3, r3: 9, r4: 2, r5: 1 },
    { srNo: 47, date: "2025-07-15", session: "07:00 PM", r1: 4, r2: 8, r3: 2, r4: 3, r5: 7 },
    { srNo: 48, date: "2025-07-15", session: "09:00 PM", r1: 9, r2: 1, r3: 9, r4: 1, r5: 9 },
    { srNo: 49, date: "2025-07-16", session: "12:00 PM", r1: 1, r2: 5, r3: 6, r4: 7, r5: 6 },
    { srNo: 50, date: "2025-07-16", session: "04:00 PM", r1: 0, r2: 1, r3: 7, r4: 7, r5: 0 },
    { srNo: 51, date: "2025-07-16", session: "07:00 PM", r1: 7, r2: 8, r3: 6, r4: 5, r5: 5 },
    { srNo: 52, date: "2025-07-16", session: "09:00 PM", r1: 9, r2: 2, r3: 4, r4: 3, r5: 7 },
    { srNo: 53, date: "2025-07-17", session: "12:00 PM", r1: 7, r2: 0, r3: 2, r4: 2, r5: 2 },
    { srNo: 54, date: "2025-07-17", session: "04:00 PM", r1: 5, r2: 8, r3: 4, r4: 2, r5: 0 },
    { srNo: 55, date: "2025-07-17", session: "07:00 PM", r1: 3, r2: 5, r3: 4, r4: 7, r5: 5 },
    { srNo: 56, date: "2025-07-17", session: "09:00 PM", r1: 0, r2: 7, r3: 7, r4: 7, r5: 6 },
    { srNo: 57, date: "2025-07-18", session: "12:00 PM", r1: 7, r2: 6, r3: 2, r4: 2, r5: 2 },
    { srNo: 58, date: "2025-07-18", session: "04:00 PM", r1: 3, r2: 8, r3: 4, r4: 2, r5: 0 },
    { srNo: 59, date: "2025-07-18", session: "07:00 PM", r1: 5, r2: 5, r3: 4, r4: 7, r5: 5 },
    { srNo: 60, date: "2025-07-18", session: "09:00 PM", r1: 9, r2: 7, r3: 7, r4: 7, r5: 8 },
    { srNo: 61, date: "2025-07-19", session: "12:00 PM", r1: 1, r2: 6, r3: 1, r4: 0, r5: 1 },
    { srNo: 62, date: "2025-07-19", session: "04:00 PM", r1: 6, r2: 0, r3: 3, r4: 7, r5: 3 },
    { srNo: 63, date: "2025-07-19", session: "07:00 PM", r1: 8, r2: 3, r3: 7, r4: 0, r5: 0 },
    { srNo: 64, date: "2025-07-19", session: "09:00 PM", r1: 5, r2: 8, r3: 3, r4: 4, r5: 7 },
    { srNo: 65, date: "2025-07-20", session: "12:00 PM", r1: 1, r2: 2, r3: 1, r4: 1, r5: 6 },
    { srNo: 66, date: "2025-07-20", session: "04:00 PM", r1: 9, r2: 7, r3: 5, r4: 6, r5: 1 },
    { srNo: 67, date: "2025-07-20", session: "07:00 PM", r1: 7, r2: 1, r3: 3, r4: 9, r5: 4 },
    { srNo: 68, date: "2025-07-20", session: "09:00 PM", r1: 0, r2: 0, r3: 5, r4: 8, r5: 7 },
    { srNo: 69, date: "2025-07-21", session: "12:00 PM", r1: 6, r2: 8, r3: 2, r4: 5, r5: 2 },
    { srNo: 70, date: "2025-07-21", session: "04:00 PM", r1: 8, r2: 2, r3: 8, r4: 5, r5: 0 },
    { srNo: 71, date: "2025-07-21", session: "07:00 PM", r1: 4, r2: 6, r3: 3, r4: 6, r5: 8 },
    { srNo: 72, date: "2025-07-21", session: "09:00 PM", r1: 3, r2: 2, r3: 1, r4: 9, r5: 3 },
    { srNo: 73, date: "2025-07-22", session: "12:00 PM", r1: 7, r2: 4, r3: 4, r4: 9, r5: 1 },
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

   {/* Scrolling Announcement Bar */}
      <ScrollingAnnouncementBar text="🎯 Welcome to Three Circle 7 Lottery • Latest Results Available • Play Responsibly • Good Luck! • 🎯 Welcome to Three Circle 7 Lottery • Latest Results Available • Play Responsibly • Good Luck! •" />

      {/* Main Content Area */}
      <main className="flex-1 p-3 sm:p-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4">
          {/* Date and Game Info */}
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
