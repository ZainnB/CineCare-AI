"use client"

import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { AppCard } from "@/components/app-card"
import { AppButton } from "@/components/app-button"
import { Section } from "@/components/section"
import { EmptyState } from "@/components/empty-state"
import { Plus, FileText, Heart, Thermometer, Weight, Activity, Upload, Download } from "lucide-react"
import { useState } from "react"

export default function RecordsPage() {
  const [activeTab, setActiveTab] = useState("vitals")

  const vitalSigns = [
    {
      type: "Blood Pressure",
      value: "120/80 mmHg",
      date: "2024-01-15",
      status: "normal",
      icon: Heart,
    },
    {
      type: "Heart Rate",
      value: "72 bpm",
      date: "2024-01-15",
      status: "normal",
      icon: Activity,
    },
    {
      type: "Temperature",
      value: "98.6°F",
      date: "2024-01-15",
      status: "normal",
      icon: Thermometer,
    },
    {
      type: "Weight",
      value: "165 lbs",
      date: "2024-01-15",
      status: "normal",
      icon: Weight,
    },
  ]

  const medicalHistory = [
    {
      condition: "Hypertension",
      diagnosed: "2020-03-15",
      status: "Managed",
      doctor: "Dr. Sarah Johnson",
    },
    {
      condition: "Type 2 Diabetes",
      diagnosed: "2019-08-22",
      status: "Controlled",
      doctor: "Dr. Michael Chen",
    },
  ]

  const reports = [
    {
      name: "Blood Test Results",
      date: "2024-01-10",
      type: "Lab Report",
      size: "2.4 MB",
    },
    {
      name: "Chest X-Ray",
      date: "2023-12-15",
      type: "Imaging",
      size: "8.1 MB",
    },
    {
      name: "ECG Report",
      date: "2023-11-20",
      type: "Diagnostic",
      size: "1.2 MB",
    },
  ]

  const tabs = [
    { id: "vitals", label: "Vital Signs", icon: Heart },
    { id: "history", label: "Medical History", icon: FileText },
    { id: "reports", label: "Reports", icon: Upload },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "normal":
        return "text-green-500"
      case "managed":
      case "controlled":
        return "text-blue-500"
      default:
        return "text-yellow-500"
    }
  }

  return (
    <DashboardLayout>
      <PageHeader
        title="Health Records"
        subtitle="Manage your medical information and health data"
        action={
          <AppButton>
            <Plus className="w-4 h-4 mr-2" />
            Add Record
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
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "vitals" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vitalSigns.map((vital, index) => (
              <AppCard key={index} hover>
                <div className="flex items-center justify-between mb-4">
                  <vital.icon className="w-6 h-6 text-cinematic-primary" />
                  <span className={`text-sm font-medium ${getStatusColor(vital.status)}`}>{vital.status}</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{vital.type}</p>
                  <p className="text-2xl font-bold mb-2">{vital.value}</p>
                  <p className="text-xs text-muted-foreground">{vital.date}</p>
                </div>
              </AppCard>
            ))}
          </div>
        )}

        {activeTab === "history" && (
          <div className="space-y-4">
            {medicalHistory.map((condition, index) => (
              <AppCard key={index} hover>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">{condition.condition}</h3>
                    <p className="text-sm text-muted-foreground mb-2">Diagnosed: {condition.diagnosed}</p>
                    <p className="text-sm text-muted-foreground">Doctor: {condition.doctor}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(condition.status)} bg-current/10`}
                    >
                      {condition.status}
                    </span>
                  </div>
                </div>
              </AppCard>
            ))}
          </div>
        )}

        {activeTab === "reports" && (
          <div className="space-y-4">
            {reports.map((report, index) => (
              <AppCard key={index} hover>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cinematic-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-cinematic-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{report.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {report.type} • {report.date} • {report.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AppButton variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </AppButton>
                  </div>
                </div>
              </AppCard>
            ))}
          </div>
        )}

        {/* Empty State Example */}
        {activeTab === "vitals" && vitalSigns.length === 0 && (
          <EmptyState
            icon={<Heart className="w-16 h-16" />}
            title="No vital signs recorded"
            description="Start tracking your health by adding your first vital signs measurement."
            action={{
              label: "Add Vital Signs",
              onClick: () => console.log("Add vital signs"),
            }}
          />
        )}
      </Section>
    </DashboardLayout>
  )
}
