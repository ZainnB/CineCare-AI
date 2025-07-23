// Mock authentication service - replace with real FastAPI calls later

interface LoginResponse {
  token: string
  user: {
    id: string
    name: string
    email: string
    avatar?: string
  }
}

interface RegisterResponse {
  token: string
  user: {
    id: string
    name: string
    email: string
    avatar?: string
  }
}

export const authService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "demo@cinecare.ai" && password === "demo123") {
          resolve({
            token: "mock-jwt-token",
            user: {
              id: "1",
              name: "Dr. Sarah Johnson",
              email: "demo@cinecare.ai",
              avatar: "/placeholder.svg?height=40&width=40",
            },
          })
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  },

  register: async (name: string, email: string, password: string): Promise<RegisterResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: "mock-jwt-token",
          user: {
            id: "2",
            name,
            email,
            avatar: "/placeholder.svg?height=40&width=40",
          },
        })
      }, 1000)
    })
  },

  logout: async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 500)
    })
  },
}
