"use client"

import { useActionState } from "react"
import { login } from "./actions" // Updated import path
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#2a003a] to-[#1a002a] px-4 py-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl text-white relative z-10">
        <CardHeader className="text-center pt-8 pb-6">
          <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Welcome to Dhankesari Play
          </CardTitle>
          <CardDescription className="text-white/80 mt-2">Enter your credentials to continue.</CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <form action={formAction} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="userId" className="text-white/90">
                User ID
              </Label>
              <Input
                id="userId"
                name="userId"
                type="text"
                placeholder="Enter your ID"
                required
                className="bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pin" className="text-white/90">
                PIN
              </Label>
              <Input
                id="pin"
                name="pin"
                type="password"
                placeholder="Enter PIN"
                required
                className="bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            {state?.error && <p className="text-red-400 text-sm text-center">{state.error}</p>}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
              disabled={isPending}
            >
              {isPending ? "Logging In..." : "Login"}
            </Button>
          </form>
          <p className="text-center text-white/60 text-sm mt-8">{"© 2025 Dhankesari Play. All rights reserved."}</p>
        </CardContent>
      </Card>
    </div>
  )
}
