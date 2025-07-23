"use client"

import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { AppCard } from "@/components/app-card"
import { AppButton } from "@/components/app-button"
import { Section } from "@/components/section"
import { Plus, Pill, Calendar, Download, AlertTriangle, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function PrescriptionsPage() {
  const [activeTab, setActiveTab] = useState("active")

  const activePrescriptions = [
    {
      id: 1,
      medication: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      prescribedBy: "Dr. Sarah Johnson",
      prescribedDate: "2024-01-15",
      refillsLeft: 2,
      nextRefill: "2024-02-15",
      instructions: "Take with food in the morning",
      status: "active",
    },
    {
      id: 2,
      medication: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      prescribedBy: "Dr. Michael Chen",
      prescribedDate: "2024-01-10",
      refillsLeft: 0,
      nextRefill: "2024-01-25",
      instructions: "Take with meals",
      status: "refill_needed",
    },
  ]

  const pastPrescriptions = [
    {
      id: 3,
      medication: "Amoxicillin",
      dosage: "500mg",
      frequency: "Three times daily",
      prescribedBy: "Dr. Emily Davis",
      prescribedDate: "2023-12-01",
      completedDate: "2023-12-10",
      instructions: "Complete full course",
      status: "completed",
    },
    {
      id: 4,
      medication: "Ibuprofen",
      dosage: "400mg",
      frequency: "As needed",
      prescribedBy: "Dr. Robert Wilson",
      prescribedDate: "2023-11-15",
      completedDate: "2023-11-30",
      instructions: "For pain relief",
      status: "completed",
    },
  ]

  const tabs = [
    { id: "active", label: "Active", count: activePrescriptions.length },
    { id: "past", label: "Past", count: pastPrescriptions.length },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "refill_needed":
        return <AlertTriangle className="w-4 h-4 text-orange-500" />
      case "completed":
        return <CheckCircle className="w-4 h-4 text-blue-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string, refillsLeft?: number) => {
    if (status === "refill_needed" || refillsLeft === 0) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400">
          <AlertTriangle className="w-3 h-3" />
          Refill Needed
        </span>
      )
    }
    if (status === "active") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
          <CheckCircle className="w-3 h-3" />
          Active
        </span>
      )
    }
    if (status === "completed") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
          <CheckCircle className="w-3 h-3" />
          Completed
        </span>
      )
    }
    return null
  }

  return (
    <DashboardLayout>
      <PageHeader
        title="Prescriptions"
        subtitle="Manage your medications and prescription history"
        action={
          <AppButton>
            <Plus className="w-4 h-4 mr-2" />
            Add Prescription
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

        {/* Active Prescriptions */}
        {activeTab === "active" && (
          <div className="space-y-4">
            {activePrescriptions.map((prescription) => (
              <AppCard key={prescription.id} hover>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cinematic-primary/10 rounded-lg flex items-center justify-center">
                      <Pill className="w-6 h-6 text-cinematic-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{prescription.medication}</h3>
                        {getStatusBadge(prescription.status, prescription.refillsLeft)}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>
                          <p>
                            <strong>Dosage:</strong> {prescription.dosage}
                          </p>
                          <p>
                            <strong>Frequency:</strong> {prescription.frequency}
                          </p>
                          <p>
                            <strong>Instructions:</strong> {prescription.instructions}
                          </p>
                        </div>
                        <div>
                          <p>
                            <strong>Prescribed by:</strong> {prescription.prescribedBy}
                          </p>
                          <p>
                            <strong>Date:</strong> {prescription.prescribedDate}
                          </p>
                          <p>
                            <strong>Refills left:</strong> {prescription.refillsLeft}
                          </p>
                          <p>
                            <strong>Next refill:</strong> {prescription.nextRefill}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AppButton variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </AppButton>
                    {prescription.refillsLeft === 0 && <AppButton size="sm">Request Refill</AppButton>}
                  </div>
                </div>
              </AppCard>
            ))}
          </div>
        )}

        {/* Past Prescriptions */}
        {activeTab === "past" && (
          <div className="space-y-4">
            {pastPrescriptions.map((prescription) => (
              <AppCard key={prescription.id} hover>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                      <Pill className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{prescription.medication}</h3>
                        {getStatusBadge(prescription.status)}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div>
                          <p>
                            <strong>Dosage:</strong> {prescription.dosage}
                          </p>
                          <p>
                            <strong>Frequency:</strong> {prescription.frequency}
                          </p>
                          <p>
                            <strong>Instructions:</strong> {prescription.instructions}
                          </p>
                        </div>
                        <div>
                          <p>
                            <strong>Prescribed by:</strong> {prescription.prescribedBy}
                          </p>
                          <p>
                            <strong>Prescribed:</strong> {prescription.prescribedDate}
                          </p>
                          <p>
                            <strong>Completed:</strong> {prescription.completedDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <AppButton variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </AppButton>
                </div>
              </AppCard>
            ))}
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <AppCard className="text-center p-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{activePrescriptions.length}</h3>
            <p className="text-sm text-muted-foreground">Active Prescriptions</p>
          </AppCard>

          <AppCard className="text-center p-6">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{activePrescriptions.filter((p) => p.refillsLeft === 0).length}</h3>
            <p className="text-sm text-muted-foreground">Need Refills</p>
          </AppCard>

          <AppCard className="text-center p-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-1">{pastPrescriptions.length}</h3>
            <p className="text-sm text-muted-foreground">Completed</p>
          </AppCard>
        </div>
      </Section>
    </DashboardLayout>
  )
}
