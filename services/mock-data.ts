// Mock data for the application - replace with real API calls later

export const mockUser = {
  id: "1",
  name: "Dr. Sarah Johnson",
  email: "demo@cinecare.ai",
  avatar: "/placeholder.svg?height=40&width=40",
  role: "patient",
}

export const mockHealthRecords = {
  vitals: [
    {
      id: 1,
      type: "Blood Pressure",
      value: "120/80 mmHg",
      date: "2024-01-15",
      status: "normal",
    },
    {
      id: 2,
      type: "Heart Rate",
      value: "72 bpm",
      date: "2024-01-15",
      status: "normal",
    },
  ],
  conditions: [
    {
      id: 1,
      name: "Hypertension",
      diagnosed: "2020-03-15",
      status: "Managed",
    },
  ],
}

export const mockAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "2024-01-20",
    time: "2:00 PM",
    type: "In-person",
    status: "confirmed",
  },
]

export const mockPrescriptions = [
  {
    id: 1,
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    prescribedBy: "Dr. Sarah Johnson",
    status: "active",
  },
]

export const mockReminders = [
  {
    id: 1,
    title: "Take Lisinopril",
    description: "10mg with breakfast",
    type: "medication",
    frequency: "Daily",
    time: "8:00 AM",
    enabled: true,
  },
]
