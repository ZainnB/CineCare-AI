export const APP_NAME = "CineCare AI"
export const APP_DESCRIPTION = "Your Cinematic Medical Assistant"

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  RECORDS: "/records",
  APPOINTMENTS: "/appointments",
  PRESCRIPTIONS: "/prescriptions",
  REMINDERS: "/reminders",
  ASSISTANT: "/assistant",
} as const

export const DEMO_CREDENTIALS = {
  email: "demo@cinecare.ai",
  password: "demo123",
}

export const NOTIFICATION_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
} as const

export const PRESCRIPTION_STATUS = {
  ACTIVE: "active",
  REFILL_NEEDED: "refill_needed",
  COMPLETED: "completed",
} as const

export const APPOINTMENT_STATUS = {
  CONFIRMED: "confirmed",
  PENDING: "pending",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
} as const
