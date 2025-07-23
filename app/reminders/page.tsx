"use client"

import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { AppCard } from "@/components/app-card"
import { AppButton } from "@/components/app-button"
import { Section } from "@/components/section"
import { Switch } from "@/components/ui/switch"
import { Plus, Bell, Clock, Calendar, Pill, Activity, Trash2, Edit } from "lucide-react"
import { useState } from "react"

export default function RemindersPage() {
  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: "Take Lisinopril",
      description: "10mg with breakfast",
      type: "medication",
      frequency: "Daily",
      time: "8:00 AM",
      enabled: true,
      icon: Pill,
    },
    {
      id: 2,
      title: "Blood Pressure Check",
      description: "Weekly monitoring",
      type: "health",
      frequency: "Weekly",
      time: "7:00 PM",
      enabled: true,
      icon: Activity,
    },
    {
      id: 3,
      title: "Doctor Appointment",
      description: "Cardiology follow-up",
      type: "appointment",
      frequency: "One-time",
      time: "2:00 PM",
      date: "2024-01-20",
      enabled: true,
      icon: Calendar,
    },
    {
      id: 4,
      title: "Take Metformin",
      description: "500mg with dinner",
      type: "medication",
      frequency: "Daily",
      time: "6:00 PM",
      enabled: false,
      icon: Pill,
    },
  ])

  const toggleReminder = (id: number) => {
    setReminders((prev) =>
      prev.map((reminder) => (reminder.id === id ? { ...reminder, enabled: !reminder.enabled } : reminder)),
    )
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "medication":
        return "text-blue-500 bg-blue-100 dark:bg-blue-900/20"
      case "health":
        return "text-green-500 bg-green-100 dark:bg-green-900/20"
      case "appointment":
        return "text-purple-500 bg-purple-100 dark:bg-purple-900/20"
      default:
        return "text-gray-500 bg-gray-100 dark:bg-gray-900/20"
    }
  }

  const getFrequencyIcon = (frequency: string) => {
    switch (frequency.toLowerCase()) {
      case "daily":
        return <Clock className="w-4 h-4" />
      case "weekly":
        return <Calendar className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  const activeReminders = reminders.filter((r) => r.enabled)
  const inactiveReminders = reminders.filter((r) => !r.enabled)

  return (
    <DashboardLayout>
      <PageHeader
        title="Reminders"
        subtitle="Manage your medication and health reminders"
        action={
          <AppButton>
            <Plus className="w-4 h-4 mr-2" />
            Add Reminder
          </AppButton>
        }
      />

      <Section>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <AppCard className="text-center p-6">
            <div className="w-12 h-12 bg-cinematic-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Bell className="w-6 h-6 text-cinematic-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{activeReminders.length}</h3>
            <p className="text-sm text-muted-foreground">Active Reminders</p>
          </AppCard>

          <AppCard className="text-center p-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Pill className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-1">
              {reminders.filter((r) => r.type === "medication" && r.enabled).length}
            </h3>
            <p className="text-sm text-muted-foreground">Medication Reminders</p>
          </AppCard>

          <AppCard className="text-center p-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-1">
              {reminders.filter((r) => r.type === "health" && r.enabled).length}
            </h3>
            <p className="text-sm text-muted-foreground">Health Reminders</p>
          </AppCard>
        </div>

        {/* Active Reminders */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Active Reminders</h2>
          <div className="space-y-4">
            {activeReminders.map((reminder) => (
              <AppCard key={reminder.id} hover>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(reminder.type)}`}
                    >
                      <reminder.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{reminder.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{reminder.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          {getFrequencyIcon(reminder.frequency)}
                          {reminder.frequency}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {reminder.time}
                        </div>
                        {reminder.date && (
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {reminder.date}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch checked={reminder.enabled} onCheckedChange={() => toggleReminder(reminder.id)} />
                    <AppButton variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </AppButton>
                    <AppButton variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </AppButton>
                  </div>
                </div>
              </AppCard>
            ))}
          </div>
        </div>

        {/* Inactive Reminders */}
        {inactiveReminders.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Inactive Reminders</h2>
            <div className="space-y-4">
              {inactiveReminders.map((reminder) => (
                <AppCard key={reminder.id} className="opacity-60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(reminder.type)}`}
                      >
                        <reminder.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{reminder.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{reminder.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            {getFrequencyIcon(reminder.frequency)}
                            {reminder.frequency}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {reminder.time}
                          </div>
                          {reminder.date && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {reminder.date}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Switch checked={reminder.enabled} onCheckedChange={() => toggleReminder(reminder.id)} />
                      <AppButton variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </AppButton>
                      <AppButton variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </AppButton>
                    </div>
                  </div>
                </AppCard>
              ))}
            </div>
          </div>
        )}
      </Section>
    </DashboardLayout>
  )
}
