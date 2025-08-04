"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function login(prevState: any, formData: FormData) {
  const userId = formData.get("userId") as string
  const pin = formData.get("pin") as string

  // Simulate authentication
  if (userId === "demo" && pin === "password") {
    (await cookies()).set("username", userId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })
    redirect("/single/add-single")
  } else {
    return { error: "Invalid User ID or PIN." }
  }
}
