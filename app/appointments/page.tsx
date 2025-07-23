"use client"

import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { AppCard } from "@/components/app-card"
import { AppButton } from "@/components/app-button"
import { Section } from "@/components/section"
import { Plus, Calendar, Clock, MapPin, Phone, Video, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2024-01-20",
      time: "2:00 PM",
      type: "In-person",
      location: "Medical Center, Room 205",
      status: "confirmed",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Endocrinologist",
      date: "2024-01-25",
      time: "10:30 AM",
      type: "Video Call",
      location: "Online Consultation",
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const pastAppointments = [
    {
      id: 3,
      doctor: "Dr. Emily Davis",
      specialty: "General Practitioner",
      date: "2024-01-10",
      time: "3:00 PM",
      type: "In-person",
      location: "Medical Center, Room 101",
      status: "completed",
      notes: "Regular checkup completed. All vitals normal.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      doctor: "Dr. Robert Wilson",
      specialty: "Dermatologist",
      date: "2023-12-15",
      time: "11:00 AM",
      type: "In-person",
      location: "Skin Care Clinic",
      status: "completed",
      notes: "Skin examination completed. Follow-up in 6 months.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const tabs = [
    { id: "upcoming", label: "Upcoming", count: upcomingAppointments.length },
    { id: "past", label: "Past", count: pastAppointments.length },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "pending":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case "completed":
        return <CheckCircle className="w-4 h-4 text-blue-500" />
      default:
        return null
    }
  }

  const getTypeIcon = (type: string) => {
    return type === "Video Call" ? (
      <Video className="w-4 h-4 text-cinematic-primary" />
    ) : (
      <MapPin className="w-4 h-4 text-cinematic-primary" />
    )
  }

  return (
    <DashboardLayout>
      <PageHeader
        title="Appointments"
        subtitle="Manage your medical appointments and consultations"
        action={
          <AppButton>
            <Plus className="w-4 h-4 mr-2" />
            Schedule Appointment
          </AppButton>
        }
      />

      <Section>
        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              <span className="bg-muted-foreground/20 text-xs px-2 py-0.5 rounded-full">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Upcoming Appointments */}
        {activeTab === "upcoming" && (
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <AppCard key={appointment.id} hover>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={appointment.avatar || "/placeholder.svg"}
                      alt={appointment.doctor}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{appointment.doctor}</h3>
                        {getStatusIcon(appointment.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{appointment.specialty}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {appointment.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {appointment.time}
                        </div>
                        <div className="flex items-center gap-1">
                          {getTypeIcon(appointment.type)}
                          {appointment.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {appointment.type === "Video Call" && (
                      <AppButton variant="outline" size="sm">
                        <Video className="w-4 h-4 mr-2" />
                        Join Call
                      </AppButton>
                    )}
                    <AppButton variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact
                    </AppButton>
                  </div>
                </div>
              </AppCard>
            ))}
          </div>
        )}

        {/* Past Appointments */}
        {activeTab === "past" && (
          <div className="space-y-4">
            {pastAppointments.map((appointment) => (
              <AppCard key={appointment.id} hover>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={appointment.avatar || "/placeholder.svg"}
                      alt={appointment.doctor}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{appointment.doctor}</h3>
                        {getStatusIcon(appointment.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{appointment.specialty}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {appointment.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {appointment.time}
                        </div>
                        <div className="flex items-center gap-1">
                          {getTypeIcon(appointment.type)}
                          {appointment.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <AppButton variant="outline" size="sm">
                    View Details
                  </AppButton>
                </div>
                {appointment.notes && (
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Notes:</strong> {appointment.notes}
                    </p>
                  </div>
                )}
              </AppCard>
            ))}
          </div>
        )}
      </Section>
    </DashboardLayout>
  )
}
