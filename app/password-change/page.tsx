"use client"

import { ScrollingAnnouncementBar } from "@/components/dashboard/scrolling-announcement-bar"
import { GameInfoSection } from "@/components/dashboard/game-info-section"
import { NavigationMenu } from "@/components/dashboard/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Eye, EyeOff, User, Mail, Phone, Lock, Bell, Shield, Globe, Clock, Heart, SettingsIcon, Gamepad2, DollarSign, Zap, Check } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function UserProfilePage() {
  const username = "Guest"
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState("Dear Single")
  const [activeTab, setActiveTab] = useState("profile")

  // Profile state
  const [profile, setProfile] = useState({
    name: "Ranjan Kumar",
    email: "Ranjan@gamil.com",
    phone: "+2519"
  })

  // Password state
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: ""
  })

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  })

  // Settings state
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: false,
      push: true
    },
    security: {
      twoFactor: false,
      autoLogout: "30"
    },
    system: {
      language: "English",
      timezone: "UTC-05:00 (Eastern Time)"
    }
  })

  // Preferences state
  const [preferences, setPreferences] = useState({
    favoriteLotteries: {
      "Choice": false,
      "Dear Single": true,
      "Rajshree ": false
    },
    gamePreferences: {
      defaultBet: 5,
      quickPick: true,
      notifications: true
    }
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPassword(prev => ({ ...prev, [name]: value }))
  }

  const togglePasswordVisibility = (field: keyof typeof showPassword) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const handleSubmit = (section: string) => {
    console.log(`Saved ${section}`, { profile, password, settings, preferences })
    alert(`${section} saved successfully!`)
  }

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: SettingsIcon },
    { id: "preferences", label: "Preferences", icon: Heart }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-800 to-red-900 text-white py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          <Button variant="ghost" size="icon" className="text-white hover:bg-red-700 transition-colors shrink-0">
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Back</span>
          </Button>
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <User className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
              <span className={cn(
                "text-sm sm:text-lg font-semibold truncate",
                isMobileMenuOpen && "hidden sm:block"
              )}>
                Welcome, {username}
              </span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-white/30 shrink-0" />
          </div>
        </div>
        <NavigationMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </header>

      {/* Scrolling Announcement Bar */}
      <div className="fixed top-[60px] sm:top-[68px] left-0 right-0 z-40">
        <ScrollingAnnouncementBar text="🎯 Welcome to Three Circle 7 Lottery • Latest Results Available • Play Responsibly • Good Luck! • 🎯 Welcome to Three Circle 7 Lottery • Latest Results Available • Play Responsibly • Good Luck! •" />
      </div>

      {/* Main Content with proper top spacing */}
      <main className="pt-[100px] sm:pt-[108px] pb-6 px-4 sm:px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation with Game Selection - Mobile Optimized */}
          <div className="flex flex-col gap-4 mb-6">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <Button
                      key={tab.id}
                      variant={activeTab === tab.id ? "default" : "outline"}
                      onClick={() => setActiveTab(tab.id)}
                      size="sm"
                      className={cn(
                        "flex items-center gap-2 transition-all duration-200 text-xs sm:text-sm",
                        activeTab === tab.id
                          ? "bg-red-700 hover:bg-red-800 text-white shadow-md"
                          : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200"
                      )}
                    >
                      <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden xs:inline">{tab.label}</span>
                    </Button>
                  )
                })}
              </div>
              
              {/* Game Selection */}
              <div className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-2 sm:p-3 shadow-sm">
                <Gamepad2 className="h-4 w-4 sm:h-5 sm:w-5 text-red-700 shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 min-w-0">
                  <Label htmlFor="game-select" className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                    Current Game:
                  </Label>
                  <Select value={selectedGame} onValueChange={setSelectedGame}>
                    <SelectTrigger id="game-select" className="w-full sm:w-48 h-8 sm:h-10 text-xs sm:text-sm border-gray-200 focus:border-red-500 focus:ring-red-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dear Single">Dear Single</SelectItem>
                      <SelectItem value="Three Circle 7">Rajshree</SelectItem>
                      <SelectItem value="Powerball">Choice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-red-800 text-lg sm:text-xl">
                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                    Personal Information
                  </CardTitle>
                  <CardDescription className="text-sm">Update your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2 font-medium text-sm">
                        <User className="h-4 w-4 text-gray-500" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="border-gray-200 focus:border-red-500 focus:ring-red-500 h-10 sm:h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2 font-medium text-sm">
                        <Mail className="h-4 w-4 text-gray-500" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="border-gray-200 focus:border-red-500 focus:ring-red-500 h-10 sm:h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2 font-medium text-sm">
                        <Phone className="h-4 w-4 text-gray-500" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={profile.phone}
                        onChange={handleProfileChange}
                        className="border-gray-200 focus:border-red-500 focus:ring-red-500 h-10 sm:h-11"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      onClick={() => handleSubmit('Profile')}
                      className="bg-red-700 hover:bg-red-800 flex-1 shadow-md h-10 sm:h-11"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button variant="outline" className="flex-1 h-10 sm:h-11">
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-red-800 text-lg sm:text-xl">
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5" />
                    Change Password
                  </CardTitle>
                  <CardDescription className="text-sm">Update your password to keep your account secure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password" className="font-medium text-sm">Current Password</Label>
                      <div className="relative">
                        <Input
                          id="current-password"
                          name="current"
                          type={showPassword.current ? "text" : "password"}
                          value={password.current}
                          onChange={handlePasswordChange}
                          className="border-gray-200 focus:border-red-500 focus:ring-red-500 pr-10 h-10 sm:h-11"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('current')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          {showPassword.current ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password" className="font-medium text-sm">New Password</Label>
                      <div className="relative">
                        <Input
                          id="new-password"
                          name="new"
                          type={showPassword.new ? "text" : "password"}
                          value={password.new}
                          onChange={handlePasswordChange}
                          className="border-gray-200 focus:border-red-500 focus:ring-red-500 pr-10 h-10 sm:h-11"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('new')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          {showPassword.new ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="font-medium text-sm">Confirm New Password</Label>
                      <div className="relative">
                        <Input
                          id="confirm-password"
                          name="confirm"
                          type={showPassword.confirm ? "text" : "password"}
                          value={password.confirm}
                          onChange={handlePasswordChange}
                          className="border-gray-200 focus:border-red-500 focus:ring-red-500 pr-10 h-10 sm:h-11"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('confirm')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          {showPassword.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={() => handleSubmit('Password')}
                      className="bg-red-700 hover:bg-red-800 shadow-md flex items-center justify-center gap-2 h-10 sm:h-11 px-6"
                    >
                      <Check className="h-4 w-4" />
                      Update Password
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-red-800 text-lg sm:text-xl">
                      <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                      Notifications
                    </CardTitle>
                    <CardDescription className="text-sm">Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <Label htmlFor="email-notifications" className="font-medium text-sm">Email Notifications</Label>
                      </div>
                      <Checkbox
                        id="email-notifications"
                        checked={settings.notifications.email}
                        onCheckedChange={(checked) => setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, email: !!checked }
                        }))}
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <Label htmlFor="sms-notifications" className="font-medium text-sm">SMS Notifications</Label>
                      </div>
                      <Checkbox
                        id="sms-notifications"
                        checked={settings.notifications.sms}
                        onCheckedChange={(checked) => setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, sms: !!checked }
                        }))}
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Bell className="h-4 w-4 text-gray-500" />
                        <Label htmlFor="push-notifications" className="font-medium text-sm">Push Notifications</Label>
                      </div>
                      <Checkbox
                        id="push-notifications"
                        checked={settings.notifications.push}
                        onCheckedChange={(checked) => setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, push: !!checked }
                        }))}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-red-800 text-lg sm:text-xl">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                      Security
                    </CardTitle>
                    <CardDescription className="text-sm">Protect your account with security features</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-4 w-4 text-gray-500" />
                        <div>
                          <Label htmlFor="two-factor" className="font-medium text-sm">Two-Factor Authentication</Label>
                          <p className="text-xs text-gray-500">Add an extra layer of security</p>
                        </div>
                      </div>
                      <Checkbox
                        id="two-factor"
                        checked={settings.security.twoFactor}
                        onCheckedChange={(checked) => setSettings(prev => ({
                          ...prev,
                          security: { ...prev.security, twoFactor: !!checked }
                        }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="auto-logout" className="flex items-center gap-2 font-medium text-sm">
                        <Clock className="h-4 w-4 text-gray-500" />
                        Auto Logout Timer
                      </Label>
                      <Select
                        value={settings.security.autoLogout}
                        onValueChange={(value) => setSettings(prev => ({
                          ...prev,
                          security: { ...prev.security, autoLogout: value }
                        }))}
                      >
                        <SelectTrigger id="auto-logout" className="border-gray-200 focus:border-red-500 focus:ring-red-500 h-10">
                          <SelectValue placeholder="Select timeout" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 minutes</SelectItem>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">60 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm md:col-span-2 xl:col-span-1">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-red-800 text-lg sm:text-xl">
                      <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                      System
                    </CardTitle>
                    <CardDescription className="text-sm">Configure your system preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="language" className="flex items-center gap-2 font-medium text-sm">
                        <Globe className="h-4 w-4 text-gray-500" />
                        Language
                      </Label>
                      <Select
                        value={settings.system.language}
                        onValueChange={(value) => setSettings(prev => ({
                          ...prev,
                          system: { ...prev.system, language: value }
                        }))}
                      >
                        <SelectTrigger id="language" className="border-gray-200 focus:border-red-500 focus:ring-red-500 h-10">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Spanish">Spanish</SelectItem>
                          <SelectItem value="French">French</SelectItem>
                          <SelectItem value="Chinese">Chinese</SelectItem>
                          <SelectItem value="Hindi">Hindi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone" className="flex items-center gap-2 font-medium text-sm">
                        <Clock className="h-4 w-4 text-gray-500" />
                        Timezone
                      </Label>
                      <Select
                        value={settings.system.timezone}
                        onValueChange={(value) => setSettings(prev => ({
                          ...prev,
                          system: { ...prev.system, timezone: value }
                        }))}
                      >
                        <SelectTrigger id="timezone" className="border-gray-200 focus:border-red-500 focus:ring-red-500 h-10">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="UTC-05:00 (Eastern Time)">UTC-05:00 (Eastern Time)</SelectItem>
                          <SelectItem value="UTC-06:00 (Central Time)">UTC-06:00 (Central Time)</SelectItem>
                          <SelectItem value="UTC-07:00 (Mountain Time)">UTC-07:00 (Mountain Time)</SelectItem>
                          <SelectItem value="UTC-08:00 (Pacific Time)">UTC-08:00 (Pacific Time)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-center">
                <Button
                  onClick={() => handleSubmit('Settings')}
                  className="bg-red-700 hover:bg-red-800 shadow-md flex items-center justify-center gap-2 h-10 sm:h-11 px-6"
                >
                  <Check className="h-4 w-4" />
                  Save All Settings
                </Button>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === "preferences" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-red-800 text-lg sm:text-xl">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                      Favorite Lotteries
                    </CardTitle>
                    <CardDescription className="text-sm">Select your preferred lottery games</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    {Object.entries(preferences.favoriteLotteries).map(([lottery, isChecked]) => (
                      <div key={lottery} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3 min-w-0 flex-1">
                          <Gamepad2 className="h-4 w-4 text-gray-500 shrink-0" />
                          <Label htmlFor={`lottery-${lottery}`} className="font-medium text-sm truncate">{lottery}</Label>
                          {isChecked && <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs shrink-0">Favorite</Badge>}
                        </div>
                        <Checkbox
                          id={`lottery-${lottery}`}
                          checked={isChecked}
                          onCheckedChange={(checked) => setPreferences(prev => ({
                            ...prev,
                            favoriteLotteries: { ...prev.favoriteLotteries, [lottery]: !!checked }
                          }))}
                          className="shrink-0"
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-red-800 text-lg sm:text-xl">
                      <Gamepad2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      Game Preferences
                    </CardTitle>
                    <CardDescription className="text-sm">Customize your gaming experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="default-bet" className="flex items-center gap-2 font-medium text-sm">
                        <DollarSign className="h-4 w-4 text-gray-500" />
                        Default Bet Amount ($)
                      </Label>
                      <Input
                        id="default-bet"
                        name="gamePreferences.defaultBet"
                        type="number"
                        min="1"
                        max="100"
                        value={preferences.gamePreferences.defaultBet}
                        onChange={(e) => setPreferences(prev => ({
                          ...prev,
                          gamePreferences: { ...prev.gamePreferences, defaultBet: Number(e.target.value) }
                        }))}
                        className="border-gray-200 focus:border-red-500 focus:ring-red-500 h-10 sm:h-11"
                      />
                    </div>
                    <Separator />
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Zap className="h-4 w-4 text-gray-500" />
                          <div>
                            <Label htmlFor="quick-pick" className="font-medium text-sm">Enable Quick Pick</Label>
                            <p className="text-xs text-gray-500">Automatically select numbers</p>
                          </div>
                        </div>
                        <Checkbox
                          id="quick-pick"
                          checked={preferences.gamePreferences.quickPick}
                          onCheckedChange={(checked) => setPreferences(prev => ({
                            ...prev,
                            gamePreferences: { ...prev.gamePreferences, quickPick: !!checked }
                          }))}
                        />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Bell className="h-4 w-4 text-gray-500" />
                          <div>
                            <Label htmlFor="game-notifications" className="font-medium text-sm">Game Result Notifications</Label>
                            <p className="text-xs text-gray-500">Get notified of results</p>
                          </div>
                        </div>
                        <Checkbox
                          id="game-notifications"
                          checked={preferences.gamePreferences.notifications}
                          onCheckedChange={(checked) => setPreferences(prev => ({
                            ...prev,
                            gamePreferences: { ...prev.gamePreferences, notifications: !!checked }
                          }))}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-center">
                <Button
                  onClick={() => handleSubmit('Preferences')}
                  className="bg-red-700 hover:bg-red-800 shadow-md flex items-center justify-center gap-2 h-10 sm:h-11 px-6"
                >
                  <Check className="h-4 w-4" />
                  Save Preferences
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
