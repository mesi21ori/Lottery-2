"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PasswordChangeForm() {
  return (
    <Card className="border-none shadow-none rounded-lg p-4 bg-white">
      <CardHeader className="py-4">
        <CardTitle className="text-xl font-semibold text-red-800 text-center">Password Change</CardTitle>{" "}
      
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col gap-2 max-w-sm mx-auto">
          <Label htmlFor="new-password" className="text-gray-700">
            Change Password *
          </Label>
          <Input
            id="new-password"
            type="password"
            required
            className="w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring-red-500" // Changed to red
          />
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <Button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-semibold shadow-md">
            {" "}
            Submit
          </Button>
          <Button
            variant="outline"
            className="text-gray-700 border-gray-300 px-6 py-2 rounded-md font-semibold hover:bg-gray-50 bg-transparent"
          >
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
