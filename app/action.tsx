"use server"

import { redirect } from "next/navigation"

import { cookies } from "next/headers"
export async function login(prevState: any, formData: FormData) {
  const userId = formData.get("userId") as string
  const pin = formData.get("pin") as string

  // Simulate authentication delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Admin credentials
  if (userId === "admin" && pin === "admin123") {
         (await cookies()).set("username", userId, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: "/",
        })
    redirect("/admin")
  }

  // Demo user credentials
  if (userId === "demo" && pin === "1234") {
     (await cookies()).set("username", userId, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: "/",
        })
        redirect("/lottery-dashboard")
  }

  return {
    error: "Invalid credentials. Use 'demo/1234' for user or 'admin/admin123' for admin access.",
  }
}
