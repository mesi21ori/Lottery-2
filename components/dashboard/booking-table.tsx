"use client"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface BookingTableProps {
  selectedGame: string
  tableData: any[]
  onInputChange: (rowIndex: number, colIndex: number, value: string) => void
}

export function BookingTable({ selectedGame, tableData, onInputChange }: BookingTableProps) {
  const getTableTitle = () => {
    switch (selectedGame) {
      case "Dear Single":
        return "Game Time (No active session)"
      case "Rajshree Punjab":
        return "Rajshree Punjab Game"
      case "Booking - Choice":
        return "Booking/Choice Interface"
      default:
        return "Game Time (No active session)"
    }
  }

  if (selectedGame === "Booking - Choice") {
    return (
      <Card className="border-none shadow-none">
        <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-800 text-white rounded-t-lg py-3 px-4">
          <CardTitle className="text-lg font-semibold text-center">Booking/Choice no.</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Item*</label>
              <Input className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">From*</label>
              <Input className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To*</label>
              <Input className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Group</label>
              <Input className="w-full" value="30" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tickets*</label>
              <Input className="w-full" value="Dear 6RS" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Qty.</label>
              <Input className="w-full" value="-" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amt.</label>
              <Input className="w-full" value="5.15" readOnly />
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-gray-600">-</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="bg-gradient-to-r from-red-700 to-red-800 text-white rounded-t-lg py-3 px-4">
        <CardTitle className="text-lg font-semibold text-center">{getTableTitle()}</CardTitle>
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
                <TableHead className="text-center text-white py-1 px-2 sm:px-3">Result (13:00)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, rowIndex) => (
                <TableRow
                  key={row.group}
                  className={cn(rowIndex % 2 === 0 ? "bg-blue-50" : "bg-green-50", "hover:bg-opacity-80")}
                >
                  <TableCell className="font-medium text-gray-800 py-1 px-2 sm:px-3">{row.group}</TableCell>
                  {Array.from({ length: 10 }, (_, colIndex) => (
                    <TableCell key={colIndex} className="text-center py-1 px-1 sm:px-2">
                      <Input
                        type="text"
                        maxLength={1}
                        value={row.inputs[colIndex] || ""}
                        onChange={(e) => onInputChange(rowIndex, colIndex, e.target.value)}
                        className="w-8 h-6 sm:w-9 sm:h-7 text-center border border-gray-300 rounded-md focus:border-purple-500 focus:ring-purple-500"
                      />
                    </TableCell>
                  ))}
                  <TableCell className="text-center text-gray-600 py-1 px-2 sm:px-3">{row.qty}</TableCell>
                  <TableCell className="text-center text-gray-600 py-1 px-2 sm:px-3">{row.amt}</TableCell>
                  <TableCell className="text-center font-bold text-gray-800 py-1 px-2 sm:px-3">{row.result}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
