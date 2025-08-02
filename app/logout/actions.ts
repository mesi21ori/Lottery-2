"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function logout() {
  (await cookies()).delete("username")
  redirect("/") // Redirect to the root path (login page)
}
