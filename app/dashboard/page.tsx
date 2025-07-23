"use client"

import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { AppCard } from "@/components/app-card"
import { AppButton } from "@/components/app-button"
import { Section } from "@/components/section"
import { Calendar, Bell, MessageSquare, TrendingUp, Heart, Pill, FileText } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Next Appointment",
      value: "Tomorrow, 2:00 PM",
      subtitle: "Dr. Sarah Johnson",
      icon: Calendar,
      color: "text-blue-500",
    },
    {
      title: "Pending Reminders",
      value: "3",
      subtitle: "Medication & Checkups",
      icon: Bell,
      color: "text-orange-500",
    },
    {
      title: "Health Score",
      value: "85%",
      subtitle: "Good condition",
      icon: Heart,
      color: "text-green-500",
    },
    {
      title: "Active Prescriptions",
      value: "2",
      subtitle: "Medications",
      icon: Pill,
      color: "text-purple-500",
    },
  ]

  const recentActivity = [
    {
      type: "appointment",
      title: "Checkup with Dr. Johnson",
      time: "2 days ago",
      icon: Calendar,
    },
    {
      type: "prescription",
      title: "New prescription added",
      time: "1 week ago",
      icon: Pill,
    },
    {
      type: "record",
      title: "Blood test results uploaded",
      time: "2 weeks ago",
      icon: FileText,
    },
  ]

  return (
    <DashboardLayout>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's your health overview."
        action={
          <AppButton>
            <MessageSquare className="w-4 h-4 mr-2" />
            Ask Assistant
          </AppButton>
        }
      />

      <Section>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <AppCard key={index} hover className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </AppCard>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Health Trends */}
          <AppCard title="Health Trends" className="lg:col-span-2">
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-cinematic-primary" />
                <p>Health trends chart will be displayed here</p>
                <p className="text-sm mt-2">Connect your health devices to see trends</p>
              </div>
            </div>
          </AppCard>

          {/* Recent Activity */}
          <AppCard title="Recent Activity">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="w-8 h-8 bg-cinematic-primary/10 rounded-full flex items-center justify-center">
                    <activity.icon className="w-4 h-4 text-cinematic-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </AppCard>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AppButton variant="outline" className="h-auto p-4 flex-col gap-2">
              <Calendar className="w-6 h-6" />
              <span>Schedule Appointment</span>
            </AppButton>
            <AppButton variant="outline" className="h-auto p-4 flex-col gap-2">
              <FileText className="w-6 h-6" />
              <span>Add Health Record</span>
            </AppButton>
            <AppButton variant="outline" className="h-auto p-4 flex-col gap-2">
              <Bell className="w-6 h-6" />
              <span>Set Reminder</span>
            </AppButton>
          </div>
        </div>
      </Section>
    </DashboardLayout>
  )
}
