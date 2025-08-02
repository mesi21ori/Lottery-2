"use client"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function BookingTable() {
  const prizeLevels = ["DEAR-1st", "DEAR-2nd", "DEAR-3rd", "DEAR-4th", "DEAR-5th Last", "All"]
  const lastResults = ["8", "9", "3", "7", "6", "-"]

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="bg-gradient-to-r from-red-700 to-red-800 text-white rounded-t-lg py-3 px-4">
        <CardTitle className="text-lg font-semibold text-center">Game Time (No active session)</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table className="min-w-max">
            <TableHeader>
              <TableRow className="bg-red-600 hover:bg-red-600 text-white">
                <TableHead className="w-[120px] text-white py-1 px-2 sm:px-3">Group</TableHead>
                {Array.from({ length: 10 }, (_, i) => (
                  <TableHead key={i} className="text-center text-white py-1 px-1 sm:px-2">
                    {i}
                  </TableHead>
                ))}
                <TableHead className="text-center text-white py-1 px-2 sm:px-3">Qty</TableHead>
                <TableHead className="text-center text-white py-1 px-2 sm:px-3">Amt.</TableHead>
                <TableHead className="text-center text-white py-1 px-2 sm:px-3">Result (20:00)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prizeLevels.map((level, rowIndex) => (
                <TableRow
                  key={level}
                  className={cn(rowIndex % 2 === 0 ? "bg-blue-50" : "bg-green-50", "hover:bg-opacity-80")}
                >
                  <TableCell className="font-medium text-gray-800 py-1 px-2 sm:px-3">{level}</TableCell>
                  {Array.from({ length: 10 }, (_, i) => (
                    <TableCell key={i} className="text-center py-1 px-1 sm:px-2">
                      <Input
                        type="text"
                        maxLength={1}
                        className="w-8 h-6 sm:w-9 sm:h-7 text-center border border-gray-300 rounded-md focus:border-purple-500 focus:ring-purple-500"
                      />
                    </TableCell>
                  ))}
                  <TableCell className="text-center text-gray-600 py-1 px-2 sm:px-3">-</TableCell>
                  <TableCell className="text-center text-gray-600 py-1 px-2 sm:px-3">-</TableCell>
                  <TableCell className="text-center font-bold text-gray-800 py-1 px-2 sm:px-3">
                    {lastResults[rowIndex]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
