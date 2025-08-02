"use client"

import { Button } from "@/components/ui/button"

export function ActionButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold shadow-md flex-grow sm:flex-grow-0">
        BUY (F4)
      </Button>
      <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold shadow-md flex-grow sm:flex-grow-0">
        CLEAR (F6)
      </Button>
      <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold shadow-md flex-grow sm:flex-grow-0">
        CANCEL (F7)
      </Button>
      <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold shadow-md flex-grow sm:flex-grow-0">
        Single Result (Ctrl+H)
      </Button>
      <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold shadow-md flex-grow sm:flex-grow-0">
        Single Report (Ctrl+R)
      </Button>
    </div>
  )
}
