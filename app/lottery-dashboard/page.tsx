import { cookies } from "next/headers"
import { LotteryDashboard } from "@/components/dashboard/lottery-dashboard"

export default function Page() {
  const username = cookies().get("username")?.value || "Guest" // Get username from cookie

  return <LotteryDashboard username={username} />
}
