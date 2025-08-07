// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useToast } from "@/hooks/use-toast"
// import { Toaster } from "@/components/ui/toaster"
// import { Switch } from "@/components/ui/switch"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Users, TrendingUp, Calendar, Settings, Bell, Database, LogOut, Plus, Edit, Eye, Trash2, Download, Upload, RefreshCw, Search, Filter, BarChart3, PieChart, Clock, AlertCircle, CheckCircle, XCircle, Send, FileText, Menu, X } from 'lucide-react'

// export function AdminDashboard() {
//   const { toast } = useToast()
//   const [activeTab, setActiveTab] = useState("overview")
//   const [realTimeUpdates, setRealTimeUpdates] = useState(true)
//   const [currentTime, setCurrentTime] = useState(new Date())
//   const [sidebarOpen, setSidebarOpen] = useState(false)

//   // Real-time clock
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date())
//     }, 1000)
//     return () => clearInterval(timer)
//   }, [])

//   // Mock data with more comprehensive structure
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       userId: "USER001",
//       name: "John Doe",
//       email: "john@example.com",
//       phone: "+91-9876543210",
//       status: "Active",
//       balance: 1500,
//       lastLogin: "2025-01-08",
//       totalBets: 45,
//       winnings: 2300,
//     },
//     {
//       id: 2,
//       userId: "USER002",
//       name: "Jane Smith",
//       email: "jane@example.com",
//       phone: "+91-9876543211",
//       status: "Active",
//       balance: 2300,
//       lastLogin: "2025-01-07",
//       totalBets: 67,
//       winnings: 1800,
//     },
//     {
//       id: 3,
//       userId: "USER003",
//       name: "Mike Johnson",
//       email: "mike@example.com",
//       phone: "+91-9876543212",
//       status: "Blocked",
//       balance: 500,
//       lastLogin: "2025-01-05",
//       totalBets: 23,
//       winnings: 450,
//     },
//   ])

//   const [lotteries, setLotteries] = useState([
//     {
//       id: 1,
//       name: "Three Circle Morning",
//       drawTime: "13:00",
//       price: 6,
//       prize: 5000,
//       status: "Active",
//       participants: 156,
//       nextDraw: "2025-01-09 13:00",
//     },
//     {
//       id: 2,
//       name: "Three Circle Evening",
//       drawTime: "18:00",
//       price: 6,
//       prize: 5000,
//       status: "Active",
//       participants: 234,
//       nextDraw: "2025-01-09 18:00",
//     },
//     {
//       id: 3,
//       name: "Three Circle Night",
//       drawTime: "20:00",
//       price: 6,
//       prize: 5000,
//       status: "Active",
//       participants: 189,
//       nextDraw: "2025-01-09 20:00",
//     },
//     {
//       id: 4,
//       name: "Seven Lucky Special",
//       drawTime: "15:30",
//       price: 10,
//       prize: 10000,
//       status: "Inactive",
//       participants: 0,
//       nextDraw: "2025-01-10 15:30",
//     },
//   ])

//   const [results, setResults] = useState([
//     {
//       id: 1,
//       lottery: "Three Circle Morning",
//       date: "2025-01-08",
//       time: "13:00",
//       result: "7-5-0",
//       status: "Published",
//       winners: 12,
//       totalPayout: 60000,
//     },
//     {
//       id: 2,
//       lottery: "Three Circle Evening",
//       date: "2025-01-07",
//       time: "18:00",
//       result: "8-2-9",
//       status: "Published",
//       winners: 8,
//       totalPayout: 40000,
//     },
//     {
//       id: 3,
//       lottery: "Three Circle Night",
//       date: "2025-01-07",
//       time: "20:00",
//       result: "1-4-6",
//       status: "Published",
//       winners: 15,
//       totalPayout: 75000,
//     },
//     {
//       id: 4,
//       lottery: "Three Circle Morning",
//       date: "2025-01-08",
//       time: "13:00",
//       result: "Pending",
//       status: "Pending",
//       winners: 0,
//       totalPayout: 0,
//     },
//   ])

//   const [news, setNews] = useState([
//     {
//       id: 1,
//       title: "New Year Special Draw",
//       content: "Special lottery draw with double prizes!",
//       priority: "High",
//       status: "Published",
//       date: "2025-01-08",
//     },
//     {
//       id: 2,
//       title: "System Maintenance",
//       content: "Scheduled maintenance on Sunday 2 AM",
//       priority: "Medium",
//       status: "Published",
//       date: "2025-01-07",
//     },
//     {
//       id: 3,
//       title: "Winner Announcement",
//       content: "Congratulations to all winners!",
//       priority: "Low",
//       status: "Draft",
//       date: "2025-01-06",
//     },
//   ])

//   const [notifications, setNotifications] = useState([
//     { id: 1, type: "Result", message: "Morning draw result published", time: "2 minutes ago", status: "Sent" },
//     { id: 2, type: "System", message: "New user registered: USER1234", time: "5 minutes ago", status: "Sent" },
//     { id: 3, type: "Alert", message: "High betting activity detected", time: "10 minutes ago", status: "Pending" },
//   ])

//   // Handler functions
//   const handlePublishResult = (lotteryId: number, winningNumbers: string) => {
//     setResults((prev) =>
//       prev.map((result) =>
//         result.id === lotteryId
//           ? {
//               ...result,
//               result: winningNumbers,
//               status: "Published",
//               winners: Math.floor(Math.random() * 20) + 1,
//               totalPayout: Math.floor(Math.random() * 100000) + 10000,
//             }
//           : result,
//       ),
//     )
//     toast({
//       title: "Result Published",
//       description: `Lottery result ${winningNumbers} has been published successfully.`,
//     })
//   }

//   const handleAddNews = (title: string, content: string, priority: string) => {
//     const newNews = {
//       id: news.length + 1,
//       title,
//       content,
//       priority,
//       status: "Published",
//       date: new Date().toISOString().split("T")[0],
//     }
//     setNews((prev) => [newNews, ...prev])
//     toast({
//       title: "News Added",
//       description: "News article has been added successfully.",
//     })
//   }

//   const handleUserAction = (userId: number, action: string) => {
//     setUsers((prev) =>
//       prev.map((user) => (user.id === userId ? { ...user, status: action === "block" ? "Blocked" : "Active" } : user)),
//     )
//     toast({
//       title: `User ${action === "block" ? "Blocked" : "Activated"}`,
//       description: `User has been ${action === "block" ? "blocked" : "activated"} successfully.`,
//     })
//   }

//   const handleLotteryToggle = (lotteryId: number) => {
//     setLotteries((prev) =>
//       prev.map((lottery) =>
//         lottery.id === lotteryId
//           ? { ...lottery, status: lottery.status === "Active" ? "Inactive" : "Active" }
//           : lottery,
//       ),
//     )
//     toast({
//       title: "Lottery Updated",
//       description: "Lottery status has been updated successfully.",
//     })
//   }

//   const handleSendNotification = (message: string, type: string) => {
//     const newNotification = {
//       id: notifications.length + 1,
//       type,
//       message,
//       time: "Just now",
//       status: "Sent",
//     }
//     setNotifications((prev) => [newNotification, ...prev])
//     toast({
//       title: "Notification Sent",
//       description: "Push notification has been sent to all users.",
//     })
//   }

//   const navigationItems = [
//     { id: "overview", label: "Overview", icon: BarChart3 },
//     { id: "results", label: "Results", icon: CheckCircle },
//     { id: "lotteries", label: "Lotteries", icon: Calendar },
//     { id: "users", label: "Users", icon: Users },
//     { id: "news", label: "News", icon: FileText },
//     { id: "notifications", label: "Notifications", icon: Bell },
//     { id: "analytics", label: "Analytics", icon: TrendingUp },
//     { id: "settings", label: "Settings", icon: Settings },
//   ]

//   const NavigationContent = () => (
//     <nav className="space-y-1 p-4">
//       {navigationItems.map((item) => {
//         const Icon = item.icon
//         return (
//           <button
//             key={item.id}
//             onClick={() => {
//               setActiveTab(item.id)
//               setSidebarOpen(false)
//             }}
//             className={`w-full flex items-center px-3 py-2 text-left text-sm font-medium rounded-lg transition-colors ${
//               activeTab === item.id
//                 ? "bg-red-100 text-red-700 border-r-2 border-red-500"
//                 : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//             }`}
//           >
//             <Icon className="h-4 w-4 mr-3 shrink-0" />
//             <span className="truncate">{item.label}</span>
//           </button>
//         )
//       })}
//     </nav>
//   )

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg sticky top-0 z-40">
//         <div className="px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-14 sm:h-16">
//             <div className="flex items-center min-w-0 flex-1">
//               {/* Mobile menu button */}
//               <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
//                 <SheetTrigger asChild>
//                   <Button variant="ghost" size="icon" className="text-white hover:bg-red-700 lg:hidden mr-2 shrink-0">
//                     <Menu className="h-5 w-5" />
//                     <span className="sr-only">Open menu</span>
//                   </Button>
//                 </SheetTrigger>
//                 <SheetContent side="left" className="w-64 p-0">
//                   <div className="flex items-center px-4 py-4 border-b">
//                     <img
//                       src="/placeholder.svg?height=32&width=32&text=Logo"
//                       alt="Three Circle 7"
//                       className="h-8 w-8 rounded-full mr-3"
//                     />
//                     <h2 className="text-lg font-bold text-gray-900">Admin Panel</h2>
//                   </div>
//                   <NavigationContent />
//                 </SheetContent>
//               </Sheet>

//               <div className="flex items-center min-w-0">
//                 <img
//                   src="/placeholder.svg?height=32&width=32&text=Logo"
//                   alt="Three Circle 7"
//                   className="h-6 w-6 sm:h-8 sm:w-8 rounded-full mr-2 sm:mr-3 shrink-0"
//                 />
//                 <h1 className="text-sm sm:text-xl font-bold truncate">
//                   <span className="hidden sm:inline">Three Circle 7 - </span>Admin Panel
//                 </h1>
//               </div>
//             </div>

//             <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
//               <div className="hidden sm:block text-xs sm:text-sm">
//                 <div className="font-medium">{currentTime.toLocaleTimeString()}</div>
//                 <div className="text-red-200 hidden md:block">{currentTime.toLocaleDateString()}</div>
//               </div>
//               <div className="flex items-center space-x-1 sm:space-x-2">
//                 <Switch
//                   checked={realTimeUpdates}
//                   onCheckedChange={setRealTimeUpdates}
//                   className="data-[state=checked]:bg-green-500 scale-75 sm:scale-100"
//                 />
//                 <span className="text-xs sm:text-sm hidden sm:inline">Live</span>
//               </div>
//               <Button variant="ghost" size="sm" className="text-white hover:bg-red-700 p-1 sm:p-2">
//                 <LogOut className="h-4 w-4 sm:mr-2" />
//                 <span className="hidden sm:inline">Logout</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="flex">
//         {/* Desktop Sidebar */}
//         <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16 lg:bg-white lg:border-r lg:border-gray-200">
//           <div className="flex-1 flex flex-col min-h-0">
//             <NavigationContent />
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 lg:pl-64">
//           <main className="p-4 sm:p-6 lg:p-8">
//             {/* Overview Content */}
//             {activeTab === "overview" && (
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard Overview</h2>
//                   <div className="flex items-center space-x-2">
//                     <Switch
//                       checked={realTimeUpdates}
//                       onCheckedChange={setRealTimeUpdates}
//                       className="data-[state=checked]:bg-green-500"
//                     />
//                     <span className="text-sm text-gray-600">Live Updates</span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Total Users</CardTitle>
//                       <Users className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-xl sm:text-2xl font-bold">1,234</div>
//                       <p className="text-xs text-muted-foreground">+12% from last month</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
//                       <TrendingUp className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-xl sm:text-2xl font-bold">₹45,231</div>
//                       <p className="text-xs text-muted-foreground">+8% from yesterday</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Active Lotteries</CardTitle>
//                       <Calendar className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-xl sm:text-2xl font-bold">
//                         {lotteries.filter((l) => l.status === "Active").length}
//                       </div>
//                       <p className="text-xs text-muted-foreground">All systems running</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Pending Results</CardTitle>
//                       <Bell className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-xl sm:text-2xl font-bold">{results.filter((r) => r.status === "Pending").length}</div>
//                       <p className="text-xs text-muted-foreground">Awaiting publication</p>
//                     </CardContent>
//                   </Card>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="flex items-center text-lg">
//                         <Clock className="h-5 w-5 mr-2" />
//                         Real-Time Activity
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4 max-h-64 overflow-y-auto">
//                         {notifications.slice(0, 5).map((notification) => (
//                           <div key={notification.id} className="flex items-start space-x-3">
//                             <div
//                               className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
//                                 notification.type === "Result"
//                                   ? "bg-green-500"
//                                   : notification.type === "System"
//                                     ? "bg-blue-500"
//                                     : "bg-yellow-500"
//                               }`}
//                             ></div>
//                             <div className="flex-1 min-w-0">
//                               <p className="text-sm font-medium truncate">{notification.message}</p>
//                               <p className="text-xs text-muted-foreground">{notification.time}</p>
//                             </div>
//                             <Badge variant={notification.status === "Sent" ? "default" : "secondary"} className="shrink-0">
//                               {notification.status}
//                             </Badge>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="flex items-center text-lg">
//                         <Settings className="h-5 w-5 mr-2" />
//                         Quick Actions
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-3">
//                       <Button
//                         className="w-full text-sm"
//                         onClick={() =>
//                           handlePublishResult(
//                             4,
//                             `${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10)}`,
//                           )
//                         }
//                       >
//                         <Plus className="h-4 w-4 mr-2" />
//                         Publish Pending Result
//                       </Button>
//                       <Button
//                         variant="outline"
//                         className="w-full text-sm"
//                         onClick={() => handleSendNotification("System maintenance scheduled", "System")}
//                       >
//                         <Send className="h-4 w-4 mr-2" />
//                         Send Push Notification
//                       </Button>
//                       <Button variant="outline" className="w-full text-sm">
//                         <Database className="h-4 w-4 mr-2" />
//                         Database Backup
//                       </Button>
//                       <Button variant="outline" className="w-full text-sm">
//                         <Download className="h-4 w-4 mr-2" />
//                         Export Reports
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             )}

//             {/* Results Management Content */}
//             {activeTab === "results" && (
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Results Management</h2>
//                 </div>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">Publish New Result</CardTitle>
//                       <CardDescription>Add winning numbers for lottery draws</CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div className="grid gap-2">
//                         <Label htmlFor="lottery-select">Select Lottery</Label>
//                         <Select>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Choose lottery" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             {lotteries
//                               .filter((l) => l.status === "Active")
//                               .map((lottery) => (
//                                 <SelectItem key={lottery.id} value={lottery.id.toString()}>
//                                   {lottery.name} - {lottery.drawTime}
//                                 </SelectItem>
//                               ))}
//                           </SelectContent>
//                         </Select>
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="result">Winning Numbers</Label>
//                         <Input id="result" placeholder="e.g., 7-5-0" />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="date">Draw Date</Label>
//                         <Input id="date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="winners">Number of Winners</Label>
//                         <Input id="winners" type="number" placeholder="Enter winner count" />
//                       </div>
//                       <Button className="w-full" onClick={() => handlePublishResult(1, "7-5-0")}>
//                         <CheckCircle className="h-4 w-4 mr-2" />
//                         Publish Result
//                       </Button>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">Recent Results</CardTitle>
//                       <CardDescription>Published and pending lottery results</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4 max-h-96 overflow-y-auto">
//                         {results.map((result) => (
//                           <div key={result.id} className="border rounded-lg p-3 sm:p-4">
//                             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
//                               <div className="min-w-0">
//                                 <h4 className="font-medium truncate">{result.lottery}</h4>
//                                 <p className="text-sm text-muted-foreground">
//                                   {result.date} at {result.time}
//                                 </p>
//                               </div>
//                               <Badge variant={result.status === "Published" ? "default" : "secondary"} className="shrink-0">
//                                 {result.status}
//                               </Badge>
//                             </div>
//                             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
//                               <div className="text-lg font-bold text-green-600">{result.result}</div>
//                               <div className="text-sm">
//                                 <div>Winners: {result.winners}</div>
//                                 <div>Payout: ₹{result.totalPayout.toLocaleString()}</div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             )}

//             {/* Lottery Management Content */}
//             {activeTab === "lotteries" && (
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Lottery Management</h2>
//                   <Button>
//                     <Plus className="h-4 w-4 mr-2" />
//                     Add New Lottery
//                   </Button>
//                 </div>
//                 <Card>
//                   <CardContent className="p-0">
//                     <div className="overflow-x-auto">
//                       <Table>
//                         <TableHeader>
//                           <TableRow>
//                             <TableHead className="min-w-[150px]">Lottery Name</TableHead>
//                             <TableHead className="min-w-[100px]">Draw Time</TableHead>
//                             <TableHead className="min-w-[100px]">Price</TableHead>
//                             <TableHead className="min-w-[100px]">Prize</TableHead>
//                             <TableHead className="min-w-[80px]">Status</TableHead>
//                             <TableHead className="min-w-[100px]">Participants</TableHead>
//                             <TableHead className="min-w-[150px]">Next Draw</TableHead>
//                             <TableHead className="min-w-[120px]">Actions</TableHead>
//                           </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                           {lotteries.map((lottery) => (
//                             <TableRow key={lottery.id}>
//                               <TableCell className="font-medium">{lottery.name}</TableCell>
//                               <TableCell>{lottery.drawTime}</TableCell>
//                               <TableCell>₹{lottery.price}</TableCell>
//                               <TableCell>₹{lottery.prize.toLocaleString()}</TableCell>
//                               <TableCell>
//                                 <Badge variant={lottery.status === "Active" ? "default" : "secondary"}>
//                                   {lottery.status}
//                                 </Badge>
//                               </TableCell>
//                               <TableCell>{lottery.participants}</TableCell>
//                               <TableCell className="text-sm">{lottery.nextDraw}</TableCell>
//                               <TableCell>
//                                 <div className="flex space-x-1">
//                                   <Button size="sm" variant="outline" onClick={() => handleLotteryToggle(lottery.id)}>
//                                     {lottery.status === "Active" ? (
//                                       <XCircle className="h-4 w-4" />
//                                     ) : (
//                                       <CheckCircle className="h-4 w-4" />
//                                     )}
//                                   </Button>
//                                   <Button size="sm" variant="outline">
//                                     <Edit className="h-4 w-4" />
//                                   </Button>
//                                   <Button size="sm" variant="outline">
//                                     <Settings className="h-4 w-4" />
//                                   </Button>
//                                 </div>
//                               </TableCell>
//                             </TableRow>
//                           ))}
//                         </TableBody>
//                       </Table>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             )}

//             {/* User Management Content */}
//             {activeTab === "users" && (
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900">User Management</h2>
//                   <div className="flex flex-wrap gap-2">
//                     <Button variant="outline" size="sm">
//                       <Search className="h-4 w-4 mr-2" />
//                       Search
//                     </Button>
//                     <Button variant="outline" size="sm">
//                       <Filter className="h-4 w-4 mr-2" />
//                       Filter
//                     </Button>
//                     <Button variant="outline" size="sm">
//                       <Download className="h-4 w-4 mr-2" />
//                       Export
//                     </Button>
//                   </div>
//                 </div>
//                 <Card>
//                   <CardContent className="p-0">
//                     <div className="overflow-x-auto">
//                       <Table>
//                         <TableHeader>
//                           <TableRow>
//                             <TableHead className="min-w-[100px]">User ID</TableHead>
//                             <TableHead className="min-w-[120px]">Name</TableHead>
//                             <TableHead className="min-w-[150px]">Email</TableHead>
//                             <TableHead className="min-w-[120px]">Phone</TableHead>
//                             <TableHead className="min-w-[80px]">Status</TableHead>
//                             <TableHead className="min-w-[100px]">Balance</TableHead>
//                             <TableHead className="min-w-[80px]">Bets</TableHead>
//                             <TableHead className="min-w-[100px]">Winnings</TableHead>
//                             <TableHead className="min-w-[100px]">Last Login</TableHead>
//                             <TableHead className="min-w-[120px]">Actions</TableHead>
//                           </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                           {users.map((user) => (
//                             <TableRow key={user.id}>
//                               <TableCell className="font-medium">{user.userId}</TableCell>
//                               <TableCell>{user.name}</TableCell>
//                               <TableCell className="text-sm">{user.email}</TableCell>
//                               <TableCell className="text-sm">{user.phone}</TableCell>
//                               <TableCell>
//                                 <Badge
//                                   variant={
//                                     user.status === "Active"
//                                       ? "default"
//                                       : user.status === "Blocked"
//                                         ? "destructive"
//                                         : "secondary"
//                                   }
//                                 >
//                                   {user.status}
//                                 </Badge>
//                               </TableCell>
//                               <TableCell>₹{user.balance}</TableCell>
//                               <TableCell>{user.totalBets}</TableCell>
//                               <TableCell>₹{user.winnings}</TableCell>
//                               <TableCell className="text-sm">{user.lastLogin}</TableCell>
//                               <TableCell>
//                                 <div className="flex space-x-1">
//                                   <Button size="sm" variant="outline">
//                                     <Eye className="h-4 w-4" />
//                                   </Button>
//                                   <Button size="sm" variant="outline">
//                                     <Edit className="h-4 w-4" />
//                                   </Button>
//                                   <Button
//                                     size="sm"
//                                     variant={user.status === "Blocked" ? "default" : "destructive"}
//                                     onClick={() =>
//                                       handleUserAction(user.id, user.status === "Blocked" ? "activate" : "block")
//                                     }
//                                   >
//                                     {user.status === "Blocked" ? (
//                                       <CheckCircle className="h-4 w-4" />
//                                     ) : (
//                                       <XCircle className="h-4 w-4" />
//                                     )}
//                                   </Button>
//                                 </div>
//                               </TableCell>
//                             </TableRow>
//                           ))}
//                         </TableBody>
//                       </Table>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             )}

//             {/* News Management Content */}
//             {activeTab === "news" && (
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900">News & Announcements</h2>
//                 </div>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">Add News & Announcements</CardTitle>
//                       <CardDescription>Create news articles and system announcements</CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div className="grid gap-2">
//                         <Label htmlFor="news-title">Title</Label>
//                         <Input id="news-title" placeholder="Enter news title" />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="news-content">Content</Label>
//                         <Textarea id="news-content" placeholder="Enter news content" rows={4} />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="news-priority">Priority</Label>
//                         <Select>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select priority" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="low">Low</SelectItem>
//                             <SelectItem value="medium">Medium</SelectItem>
//                             <SelectItem value="high">High</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                       <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
//                         <Button
//                           onClick={() => handleAddNews("Sample News", "Sample content", "Medium")}
//                           className="flex-1"
//                         >
//                           <Plus className="h-4 w-4 mr-2" />
//                           Publish News
//                         </Button>
//                         <Button variant="outline" className="flex-1">
//                           <FileText className="h-4 w-4 mr-2" />
//                           Save Draft
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">Recent News</CardTitle>
//                       <CardDescription>Published and draft news articles</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4 max-h-96 overflow-y-auto">
//                         {news.map((article) => (
//                           <div key={article.id} className="border rounded-lg p-3 sm:p-4">
//                             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
//                               <div className="min-w-0">
//                                 <h4 className="font-medium truncate">{article.title}</h4>
//                                 <p className="text-sm text-muted-foreground">{article.date}</p>
//                               </div>
//                               <div className="flex flex-wrap gap-2">
//                                 <Badge
//                                   variant={
//                                     article.priority === "High"
//                                       ? "destructive"
//                                       : article.priority === "Medium"
//                                         ? "default"
//                                         : "secondary"
//                                   }
//                                 >
//                                   {article.priority}
//                                 </Badge>
//                                 <Badge variant={article.status === "Published" ? "default" : "secondary"}>
//                                   {article.status}
//                                 </Badge>
//                               </div>
//                             </div>
//                             <p className="text-sm mb-3 line-clamp-2">{article.content}</p>
//                             <div className="flex space-x-2">
//                               <Button size="sm" variant="outline">
//                                 <Edit className="h-4 w-4" />
//                               </Button>
//                               <Button size="sm" variant="outline">
//                                 <Eye className="h-4 w-4" />
//                               </Button>
//                               <Button size="sm" variant="outline">
//                                 <Trash2 className="h-4 w-4" />
//                               </Button>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             )}

//             {/* Notifications Content */}
//             {activeTab === "notifications" && (
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Notifications</h2>
//                 </div>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">Send Push Notification</CardTitle>
//                       <CardDescription>Send notifications to all users or specific groups</CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div className="grid gap-2">
//                         <Label htmlFor="notification-type">Notification Type</Label>
//                         <Select>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select type" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="result">Result Announcement</SelectItem>
//                             <SelectItem value="system">System Update</SelectItem>
//                             <SelectItem value="promotion">Promotion</SelectItem>
//                             <SelectItem value="alert">Alert</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="notification-message">Message</Label>
//                         <Textarea id="notification-message" placeholder="Enter notification message" rows={3} />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="target-users">Target Users</Label>
//                         <Select>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select target" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="all">All Users</SelectItem>
//                             <SelectItem value="active">Active Users Only</SelectItem>
//                             <SelectItem value="premium">Premium Users</SelectItem>
//                             <SelectItem value="custom">Custom Selection</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                       <Button
//                         className="w-full"
//                         onClick={() => handleSendNotification("New promotion available!", "Promotion")}
//                       >
//                         <Send className="h-4 w-4 mr-2" />
//                         Send Notification
//                       </Button>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">Notification History</CardTitle>
//                       <CardDescription>Recent sent notifications and their status</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4 max-h-96 overflow-y-auto">
//                         {notifications.map((notification) => (
//                           <div key={notification.id} className="border rounded-lg p-3 sm:p-4">
//                             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
//                               <div className="min-w-0">
//                                 <Badge variant="outline" className="mb-2">
//                                   {notification.type}
//                                 </Badge>
//                                 <p className="text-sm font-medium">{notification.message}</p>
//                                 <p className="text-xs text-muted-foreground">{notification.time}</p>
//                               </div>
//                               <Badge variant={notification.status === "Sent" ? "default" : "secondary"} className="shrink-0">
//                                 {notification.status}
//                               </Badge>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             )}

//             {/* Analytics Content */}
//             {activeTab === "analytics" && (
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Analytics</h2>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
//                       <BarChart3 className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-xl sm:text-2xl font-bold">₹12,34,567</div>
//                       <p className="text-xs text-muted-foreground">+15% from last month</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Total Bets</CardTitle>
//                       <PieChart className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-xl sm:text-2xl font-bold">45,678</div>
//                       <p className="text-xs text-muted-foreground">+22% from last month</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Winners</CardTitle>
//                       <TrendingUp className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-xl sm:text-2xl font-bold">1,234</div>
//                       <p className="text-xs text-muted-foreground">+8% from last month</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                       <CardTitle className="text-sm font-medium">Payout Ratio</CardTitle>
//                       <AlertCircle className="h-4 w-4 text-muted-foreground" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-xl sm:text-2xl font-bold">68.5%</div>
//                       <p className="text-xs text-muted-foreground">Within normal range</p>
//                     </CardContent>
//                   </Card>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">Revenue Analytics</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4">
//                         <div className="flex justify-between items-center">
//                           <span>Today</span>
//                           <span className="font-bold">₹45,231</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span>This Week</span>
//                           <span className="font-bold">₹3,12,456</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span>This Month</span>
//                           <span className="font-bold">₹12,34,567</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span>This Year</span>
//                           <span className="font-bold">₹1,45,67,890</span>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">User Statistics</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4">
//                         <div className="flex justify-between items-center">
//                           <span>Active Users</span>
//                           <span className="font-bold">1,156</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span>New Registrations</span>
//                           <span className="font-bold">78</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span>Total Transactions</span>
//                           <span className="font-bold">2,345</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span>Average Bet Amount</span>
//                           <span className="font-bold">₹125</span>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             )}

//             {/* Settings Content */}
//             {activeTab === "settings" && (
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Settings</h2>
//                 </div>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">System Settings</CardTitle>
//                       <CardDescription>Configure system-wide settings</CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
//                           <p className="text-sm text-muted-foreground">Enable to prevent user access</p>
//                         </div>
//                         <Switch id="maintenance-mode" />
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <Label htmlFor="auto-results">Auto Result Publishing</Label>
//                           <p className="text-sm text-muted-foreground">Automatically publish results</p>
//                         </div>
//                         <Switch id="auto-results" />
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <Label htmlFor="notifications">Push Notifications</Label>
//                           <p className="text-sm text-muted-foreground">Enable push notifications</p>
//                         </div>
//                         <Switch id="notifications" defaultChecked />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="max-bet">Maximum Bet Amount</Label>
//                         <Input id="max-bet" type="number" placeholder="Enter max bet amount" defaultValue="1000" />
//                       </div>
//                       <div className="grid gap-2">
//                         <Label htmlFor="min-bet">Minimum Bet Amount</Label>
//                         <Input id="min-bet" type="number" placeholder="Enter min bet amount" defaultValue="5" />
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">Database Operations</CardTitle>
//                       <CardDescription>Manage database and system data</CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-3">
//                       <Button className="w-full" variant="outline">
//                         <Database className="h-4 w-4 mr-2" />
//                         Create Database Backup
//                       </Button>
//                       <Button className="w-full" variant="outline">
//                         <Upload className="h-4 w-4 mr-2" />
//                         Restore from Backup
//                       </Button>
//                       <Button className="w-full" variant="outline">
//                         <RefreshCw className="h-4 w-4 mr-2" />
//                         Clear Cache
//                       </Button>
//                       <Button className="w-full" variant="outline">
//                         <Download className="h-4 w-4 mr-2" />
//                         Export User Data
//                       </Button>
//                       <Button className="w-full" variant="destructive">
//                         <Trash2 className="h-4 w-4 mr-2" />
//                         Clear Old Logs
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             )}
//           </main>
//         </div>
//       </div>

//       <Toaster />
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Switch } from "@/components/ui/switch"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ResponsiveTable } from "@/components/ui/responsive-table"
import { Users, TrendingUp, Calendar, Settings, Bell, Database, LogOut, Plus, Edit, Eye, Trash2, Download, Upload, RefreshCw, Search, Filter, BarChart3, PieChart, Clock, AlertCircle, CheckCircle, XCircle, Send, FileText, Menu } from 'lucide-react'

export function AdminDashboard() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("overview")
  const [realTimeUpdates, setRealTimeUpdates] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Mock data with more comprehensive structure
  const [users, setUsers] = useState([
    {
      id: 1,
      userId: "USER001",
      name: "John Doe",
      email: "john@example.com",
      phone: "+91-9876543210",
      status: "Active",
      balance: 1500,
      lastLogin: "2025-01-08",
      totalBets: 45,
      winnings: 2300,
    },
    {
      id: 2,
      userId: "USER002",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+91-9876543211",
      status: "Active",
      balance: 2300,
      lastLogin: "2025-01-07",
      totalBets: 67,
      winnings: 1800,
    },
    {
      id: 3,
      userId: "USER003",
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+91-9876543212",
      status: "Blocked",
      balance: 500,
      lastLogin: "2025-01-05",
      totalBets: 23,
      winnings: 450,
    },
  ])

  const [lotteries, setLotteries] = useState([
    {
      id: 1,
      name: "Three Circle Morning",
      drawTime: "13:00",
      price: 6,
      prize: 5000,
      status: "Active",
      participants: 156,
      nextDraw: "2025-01-09 13:00",
    },
    {
      id: 2,
      name: "Three Circle Evening",
      drawTime: "18:00",
      price: 6,
      prize: 5000,
      status: "Active",
      participants: 234,
      nextDraw: "2025-01-09 18:00",
    },
    {
      id: 3,
      name: "Three Circle Night",
      drawTime: "20:00",
      price: 6,
      prize: 5000,
      status: "Active",
      participants: 189,
      nextDraw: "2025-01-09 20:00",
    },
    {
      id: 4,
      name: "Seven Lucky Special",
      drawTime: "15:30",
      price: 10,
      prize: 10000,
      status: "Inactive",
      participants: 0,
      nextDraw: "2025-01-10 15:30",
    },
  ])

  const [results, setResults] = useState([
    {
      id: 1,
      lottery: "Three Circle Morning",
      date: "2025-01-08",
      time: "13:00",
      result: "7-5-0",
      status: "Published",
      winners: 12,
      totalPayout: 60000,
    },
    {
      id: 2,
      lottery: "Three Circle Evening",
      date: "2025-01-07",
      time: "18:00",
      result: "8-2-9",
      status: "Published",
      winners: 8,
      totalPayout: 40000,
    },
    {
      id: 3,
      lottery: "Three Circle Night",
      date: "2025-01-07",
      time: "20:00",
      result: "1-4-6",
      status: "Published",
      winners: 15,
      totalPayout: 75000,
    },
    {
      id: 4,
      lottery: "Three Circle Morning",
      date: "2025-01-08",
      time: "13:00",
      result: "Pending",
      status: "Pending",
      winners: 0,
      totalPayout: 0,
    },
  ])

  const [news, setNews] = useState([
    {
      id: 1,
      title: "New Year Special Draw",
      content: "Special lottery draw with double prizes!",
      priority: "High",
      status: "Published",
      date: "2025-01-08",
    },
    {
      id: 2,
      title: "System Maintenance",
      content: "Scheduled maintenance on Sunday 2 AM",
      priority: "Medium",
      status: "Published",
      date: "2025-01-07",
    },
    {
      id: 3,
      title: "Winner Announcement",
      content: "Congratulations to all winners!",
      priority: "Low",
      status: "Draft",
      date: "2025-01-06",
    },
  ])

  const [notifications, setNotifications] = useState([
    { id: 1, type: "Result", message: "Morning draw result published", time: "2 minutes ago", status: "Sent" },
    { id: 2, type: "System", message: "New user registered: USER1234", time: "5 minutes ago", status: "Sent" },
    { id: 3, type: "Alert", message: "High betting activity detected", time: "10 minutes ago", status: "Pending" },
  ])

  // Handler functions
  const handlePublishResult = (lotteryId: number, winningNumbers: string) => {
    setResults((prev) =>
      prev.map((result) =>
        result.id === lotteryId
          ? {
              ...result,
              result: winningNumbers,
              status: "Published",
              winners: Math.floor(Math.random() * 20) + 1,
              totalPayout: Math.floor(Math.random() * 100000) + 10000,
            }
          : result,
      ),
    )
    toast({
      title: "Result Published",
      description: `Lottery result ${winningNumbers} has been published successfully.`,
    })
  }

  const handleAddNews = (title: string, content: string, priority: string) => {
    const newNews = {
      id: news.length + 1,
      title,
      content,
      priority,
      status: "Published",
      date: new Date().toISOString().split("T")[0],
    }
    setNews((prev) => [newNews, ...prev])
    toast({
      title: "News Added",
      description: "News article has been added successfully.",
    })
  }

  const handleUserAction = (userId: number, action: string) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === userId ? { ...user, status: action === "block" ? "Blocked" : "Active" } : user)),
    )
    toast({
      title: `User ${action === "block" ? "Blocked" : "Activated"}`,
      description: `User has been ${action === "block" ? "blocked" : "activated"} successfully.`,
    })
  }

  const handleLotteryToggle = (lotteryId: number) => {
    setLotteries((prev) =>
      prev.map((lottery) =>
        lottery.id === lotteryId
          ? { ...lottery, status: lottery.status === "Active" ? "Inactive" : "Active" }
          : lottery,
      ),
    )
    toast({
      title: "Lottery Updated",
      description: "Lottery status has been updated successfully.",
    })
  }

  const handleSendNotification = (message: string, type: string) => {
    const newNotification = {
      id: notifications.length + 1,
      type,
      message,
      time: "Just now",
      status: "Sent",
    }
    setNotifications((prev) => [newNotification, ...prev])
    toast({
      title: "Notification Sent",
      description: "Push notification has been sent to all users.",
    })
  }

  const navigationItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "results", label: "Results", icon: CheckCircle },
    { id: "lotteries", label: "Lotteries", icon: Calendar },
    { id: "users", label: "Users", icon: Users },
    { id: "news", label: "News", icon: FileText },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const NavigationContent = () => (
    <nav className="space-y-1 p-4">
      {navigationItems.map((item) => {
        const Icon = item.icon
        return (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id)
              setSidebarOpen(false)
            }}
            className={`w-full flex items-center px-3 py-2 text-left text-sm font-medium rounded-lg transition-colors ${
              activeTab === item.id
                ? "bg-red-100 text-red-700 border-r-2 border-red-500"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <Icon className="h-4 w-4 mr-3 shrink-0" />
            <span className="truncate">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )

  // Table column definitions
  const userColumns = [
    { key: "userId", label: "User ID", className: "font-medium" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email", className: "text-sm" },
    { key: "phone", label: "Phone", className: "text-sm" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge
          variant={
            value === "Active"
              ? "default"
              : value === "Blocked"
                ? "destructive"
                : "secondary"
          }
        >
          {value}
        </Badge>
      ),
    },
    { key: "balance", label: "Balance", render: (value: number) => `₹${value}` },
    { key: "totalBets", label: "Total Bets" },
    { key: "winnings", label: "Winnings", render: (value: number) => `₹${value}` },
    { key: "lastLogin", label: "Last Login", className: "text-sm" },
    {
      key: "actions",
      label: "Actions",
      render: (value: any, row: any) => (
        <div className="flex flex-wrap gap-1">
          <Button size="sm" variant="outline">
            <Eye className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline">
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant={row.status === "Blocked" ? "default" : "destructive"}
            onClick={() => handleUserAction(row.id, row.status === "Blocked" ? "activate" : "block")}
          >
            {row.status === "Blocked" ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
          </Button>
        </div>
      ),
    },
  ]

  const lotteryColumns = [
    { key: "name", label: "Lottery Name", className: "font-medium" },
    { key: "drawTime", label: "Draw Time" },
    { key: "price", label: "Ticket Price", render: (value: number) => `₹${value}` },
    { key: "prize", label: "Prize Amount", render: (value: number) => `₹${value.toLocaleString()}` },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <Badge variant={value === "Active" ? "default" : "secondary"}>
          {value}
        </Badge>
      ),
    },
    { key: "participants", label: "Participants" },
    { key: "nextDraw", label: "Next Draw", className: "text-sm" },
    {
      key: "actions",
      label: "Actions",
      render: (value: any, row: any) => (
        <div className="flex flex-wrap gap-1">
          <Button size="sm" variant="outline" onClick={() => handleLotteryToggle(row.id)}>
            {row.status === "Active" ? <XCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
          </Button>
          <Button size="sm" variant="outline">
            <Edit className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center min-w-0 flex-1">
              {/* Mobile menu button */}
              <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-red-700 lg:hidden mr-2 shrink-0">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <div className="flex items-center px-4 py-4 border-b">
                    <img
                      src="/placeholder.svg?height=32&width=32&text=Logo"
                      alt="Three Circle 7"
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    <h2 className="text-lg font-bold text-gray-900">Admin Panel</h2>
                  </div>
                  <NavigationContent />
                </SheetContent>
              </Sheet>

              <div className="flex items-center min-w-0">
                <img
                  src="/placeholder.svg?height=32&width=32&text=Logo"
                  alt="Three Circle 7"
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full mr-2 sm:mr-3 shrink-0"
                />
                <h1 className="text-sm sm:text-xl font-bold truncate">
                  <span className="hidden sm:inline">Three Circle 7 - </span>Admin Panel
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
              <div className="hidden sm:block text-xs sm:text-sm">
                <div className="font-medium">{currentTime.toLocaleTimeString()}</div>
                <div className="text-red-200 hidden md:block">{currentTime.toLocaleDateString()}</div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Switch
                  checked={realTimeUpdates}
                  onCheckedChange={setRealTimeUpdates}
                  className="data-[state=checked]:bg-green-500 scale-75 sm:scale-100"
                />
                <span className="text-xs sm:text-sm hidden sm:inline">Live</span>
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-red-700 p-1 sm:p-2">
                <LogOut className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16 lg:bg-white lg:border-r lg:border-gray-200">
          <div className="flex-1 flex flex-col min-h-0">
            <NavigationContent />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:pl-64">
          <main className="p-4 sm:p-6 lg:p-8">
            {/* Overview Content */}
            {activeTab === "overview" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard Overview</h2>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={realTimeUpdates}
                      onCheckedChange={setRealTimeUpdates}
                      className="data-[state=checked]:bg-green-500"
                    />
                    <span className="text-sm text-gray-600">Live Updates</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">1,234</div>
                      <p className="text-xs text-muted-foreground">+12% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">₹45,231</div>
                      <p className="text-xs text-muted-foreground">+8% from yesterday</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Lotteries</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">
                        {lotteries.filter((l) => l.status === "Active").length}
                      </div>
                      <p className="text-xs text-muted-foreground">All systems running</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pending Results</CardTitle>
                      <Bell className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">{results.filter((r) => r.status === "Pending").length}</div>
                      <p className="text-xs text-muted-foreground">Awaiting publication</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Clock className="h-5 w-5 mr-2" />
                        Real-Time Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 max-h-64 overflow-y-auto">
                        {notifications.slice(0, 5).map((notification) => (
                          <div key={notification.id} className="flex items-start space-x-3">
                            <div
                              className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                                notification.type === "Result"
                                  ? "bg-green-500"
                                  : notification.type === "System"
                                    ? "bg-blue-500"
                                    : "bg-yellow-500"
                              }`}
                            ></div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{notification.message}</p>
                              <p className="text-xs text-muted-foreground">{notification.time}</p>
                            </div>
                            <Badge variant={notification.status === "Sent" ? "default" : "secondary"} className="shrink-0">
                              {notification.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Settings className="h-5 w-5 mr-2" />
                        Quick Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button
                        className="w-full text-sm"
                        onClick={() =>
                          handlePublishResult(
                            4,
                            `${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10)}`,
                          )
                        }
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Publish Pending Result
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full text-sm"
                        onClick={() => handleSendNotification("System maintenance scheduled", "System")}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Push Notification
                      </Button>
                      <Button variant="outline" className="w-full text-sm">
                        <Database className="h-4 w-4 mr-2" />
                        Database Backup
                      </Button>
                      <Button variant="outline" className="w-full text-sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export Reports
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Lottery Management Content */}
            {activeTab === "lotteries" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Lottery Management</h2>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Lottery
                  </Button>
                </div>
                <Card>
                  <CardContent className="p-4">
                    <ResponsiveTable columns={lotteryColumns} data={lotteries} />
                  </CardContent>
                </Card>
              </div>
            )}

            {/* User Management Content */}
            {activeTab === "users" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">User Management</h2>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
                <Card>
                  <CardContent className="p-4">
                    <ResponsiveTable columns={userColumns} data={users} />
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Results Management Content */}
            {activeTab === "results" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Results Management</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Publish New Result</CardTitle>
                      <CardDescription>Add winning numbers for lottery draws</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="lottery-select">Select Lottery</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose lottery" />
                          </SelectTrigger>
                          <SelectContent>
                            {lotteries
                              .filter((l) => l.status === "Active")
                              .map((lottery) => (
                                <SelectItem key={lottery.id} value={lottery.id.toString()}>
                                  {lottery.name} - {lottery.drawTime}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="result">Winning Numbers</Label>
                        <Input id="result" placeholder="e.g., 7-5-0" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="date">Draw Date</Label>
                        <Input id="date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="winners">Number of Winners</Label>
                        <Input id="winners" type="number" placeholder="Enter winner count" />
                      </div>
                      <Button className="w-full" onClick={() => handlePublishResult(1, "7-5-0")}>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Publish Result
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recent Results</CardTitle>
                      <CardDescription>Published and pending lottery results</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {results.map((result) => (
                          <div key={result.id} className="border rounded-lg p-3 sm:p-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                              <div className="min-w-0">
                                <h4 className="font-medium truncate">{result.lottery}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {result.date} at {result.time}
                                </p>
                              </div>
                              <Badge variant={result.status === "Published" ? "default" : "secondary"} className="shrink-0">
                                {result.status}
                              </Badge>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                              <div className="text-lg font-bold text-green-600">{result.result}</div>
                              <div className="text-sm">
                                <div>Winners: {result.winners}</div>
                                <div>Payout: ₹{result.totalPayout.toLocaleString()}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* News Management Content */}
            {activeTab === "news" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">News & Announcements</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Add News & Announcements</CardTitle>
                      <CardDescription>Create news articles and system announcements</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="news-title">Title</Label>
                        <Input id="news-title" placeholder="Enter news title" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="news-content">Content</Label>
                        <Textarea id="news-content" placeholder="Enter news content" rows={4} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="news-priority">Priority</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <Button
                          onClick={() => handleAddNews("Sample News", "Sample content", "Medium")}
                          className="flex-1"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Publish News
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <FileText className="h-4 w-4 mr-2" />
                          Save Draft
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recent News</CardTitle>
                      <CardDescription>Published and draft news articles</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {news.map((article) => (
                          <div key={article.id} className="border rounded-lg p-3 sm:p-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                              <div className="min-w-0">
                                <h4 className="font-medium truncate">{article.title}</h4>
                                <p className="text-sm text-muted-foreground">{article.date}</p>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                <Badge
                                  variant={
                                    article.priority === "High"
                                      ? "destructive"
                                      : article.priority === "Medium"
                                        ? "default"
                                        : "secondary"
                                  }
                                >
                                  {article.priority}
                                </Badge>
                                <Badge variant={article.status === "Published" ? "default" : "secondary"}>
                                  {article.status}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-sm mb-3 line-clamp-2">{article.content}</p>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Notifications Content */}
            {activeTab === "notifications" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Notifications</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Send Push Notification</CardTitle>
                      <CardDescription>Send notifications to all users or specific groups</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="notification-type">Notification Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="result">Result Announcement</SelectItem>
                            <SelectItem value="system">System Update</SelectItem>
                            <SelectItem value="promotion">Promotion</SelectItem>
                            <SelectItem value="alert">Alert</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="notification-message">Message</Label>
                        <Textarea id="notification-message" placeholder="Enter notification message" rows={3} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="target-users">Target Users</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select target" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Users</SelectItem>
                            <SelectItem value="active">Active Users Only</SelectItem>
                            <SelectItem value="premium">Premium Users</SelectItem>
                            <SelectItem value="custom">Custom Selection</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button
                        className="w-full"
                        onClick={() => handleSendNotification("New promotion available!", "Promotion")}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Notification
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Notification History</CardTitle>
                      <CardDescription>Recent sent notifications and their status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div key={notification.id} className="border rounded-lg p-3 sm:p-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                              <div className="min-w-0">
                                <Badge variant="outline" className="mb-2">
                                  {notification.type}
                                </Badge>
                                <p className="text-sm font-medium">{notification.message}</p>
                                <p className="text-xs text-muted-foreground">{notification.time}</p>
                              </div>
                              <Badge variant={notification.status === "Sent" ? "default" : "secondary"} className="shrink-0">
                                {notification.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Analytics Content */}
            {activeTab === "analytics" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Analytics</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">₹12,34,567</div>
                      <p className="text-xs text-muted-foreground">+15% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Bets</CardTitle>
                      <PieChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">45,678</div>
                      <p className="text-xs text-muted-foreground">+22% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Winners</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">1,234</div>
                      <p className="text-xs text-muted-foreground">+8% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Payout Ratio</CardTitle>
                      <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">68.5%</div>
                      <p className="text-xs text-muted-foreground">Within normal range</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Revenue Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Today</span>
                          <span className="font-bold">₹45,231</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>This Week</span>
                          <span className="font-bold">₹3,12,456</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>This Month</span>
                          <span className="font-bold">₹12,34,567</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>This Year</span>
                          <span className="font-bold">₹1,45,67,890</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">User Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Active Users</span>
                          <span className="font-bold">1,156</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>New Registrations</span>
                          <span className="font-bold">78</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Total Transactions</span>
                          <span className="font-bold">2,345</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Average Bet Amount</span>
                          <span className="font-bold">₹125</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Settings Content */}
            {activeTab === "settings" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Settings</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">System Settings</CardTitle>
                      <CardDescription>Configure system-wide settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                          <p className="text-sm text-muted-foreground">Enable to prevent user access</p>
                        </div>
                        <Switch id="maintenance-mode" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-results">Auto Result Publishing</Label>
                          <p className="text-sm text-muted-foreground">Automatically publish results</p>
                        </div>
                        <Switch id="auto-results" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="notifications">Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">Enable push notifications</p>
                        </div>
                        <Switch id="notifications" defaultChecked />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="max-bet">Maximum Bet Amount</Label>
                        <Input id="max-bet" type="number" placeholder="Enter max bet amount" defaultValue="1000" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="min-bet">Minimum Bet Amount</Label>
                        <Input id="min-bet" type="number" placeholder="Enter min bet amount" defaultValue="5" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Database Operations</CardTitle>
                      <CardDescription>Manage database and system data</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full" variant="outline">
                        <Database className="h-4 w-4 mr-2" />
                        Create Database Backup
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Upload className="h-4 w-4 mr-2" />
                        Restore from Backup
                      </Button>
                      <Button className="w-full" variant="outline">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Clear Cache
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export User Data
                      </Button>
                      <Button className="w-full" variant="destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Clear Old Logs
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <Toaster />
    </div>
  )
}
