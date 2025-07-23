"use client"

import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { PageHeader } from "@/components/page-header"
import { AppCard } from "@/components/app-card"
import { AppButton } from "@/components/app-button"
import { Section } from "@/components/section"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Calendar, Pill, FileText, Heart, MessageSquare, Sparkles, Clock } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"

export default function AssistantPage() {
  const { user } = useAuth()
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content: `Hello ${user?.name || "there"}! I'm your CineCare AI assistant. I can help you with scheduling appointments, medication reminders, health records, and answer any medical questions you might have. How can I assist you today?`,
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
    },
    {
      id: 2,
      type: "user",
      content: "What medications am I currently taking?",
      timestamp: new Date(Date.now() - 3 * 60 * 1000),
    },
    {
      id: 3,
      type: "assistant",
      content:
        "Based on your records, you are currently taking:\n\n• **Lisinopril 10mg** - Once daily with breakfast\n• **Metformin 500mg** - Twice daily with meals\n\nI notice your Metformin prescription needs a refill soon. Would you like me to help you request a refill from Dr. Michael Chen?",
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
    },
  ])

  const quickActions = [
    {
      icon: Calendar,
      label: "Schedule Appointment",
      description: "Book a new appointment",
      action: () => handleQuickAction("I need to schedule an appointment"),
    },
    {
      icon: Pill,
      label: "Medication Info",
      description: "Ask about medications",
      action: () => handleQuickAction("Tell me about my medications"),
    },
    {
      icon: FileText,
      label: "Health Records",
      description: "Review health data",
      action: () => handleQuickAction("Show me my recent health records"),
    },
    {
      icon: Heart,
      label: "Health Tips",
      description: "Get personalized advice",
      action: () => handleQuickAction("Give me some health tips"),
    },
  ]

  const handleQuickAction = (actionMessage: string) => {
    setMessage(actionMessage)
  }

  const handleSendMessage = () => {
    if (!message.trim()) return

    const newUserMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: message,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newUserMessage])
    setMessage("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "assistant" as const,
        content:
          "I understand your request. This is a placeholder response from the CineCare AI assistant. In the full implementation, this would connect to the Gemini API to provide intelligent, contextual responses based on your health data.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <DashboardLayout>
      <PageHeader title="AI Assistant" subtitle="Your intelligent health companion powered by AI" />

      <Section className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
          {/* Quick Actions Sidebar */}
          <div className="lg:col-span-1">
            <AppCard title="Quick Actions" className="h-fit">
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="w-full p-3 text-left rounded-lg border border-border hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cinematic-primary/10 rounded-lg flex items-center justify-center">
                        <action.icon className="w-4 h-4 text-cinematic-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{action.label}</p>
                        <p className="text-xs text-muted-foreground">{action.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </AppCard>

            <AppCard title="AI Features" className="mt-4">
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cinematic-primary" />
                  <span>Personalized health insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cinematic-primary" />
                  <span>Natural language queries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cinematic-primary" />
                  <span>24/7 availability</span>
                </div>
              </div>
            </AppCard>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <AppCard className="h-full flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-3 ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.type === "assistant" && (
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-cinematic-primary text-white text-xs">AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.type === "user" ? "bg-cinematic-primary text-white ml-auto" : "bg-muted"
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
                      <div
                        className={`text-xs mt-2 ${msg.type === "user" ? "text-white/70" : "text-muted-foreground"}`}
                      >
                        {formatTime(msg.timestamp)}
                      </div>
                    </div>
                    {msg.type === "user" && (
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={user?.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask me anything about your health..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <AppButton onClick={handleSendMessage} disabled={!message.trim()}>
                    <Send className="w-4 h-4" />
                  </AppButton>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  CineCare AI can make mistakes. Please verify important information with your healthcare provider.
                </p>
              </div>
            </AppCard>
          </div>
        </div>
      </Section>
    </DashboardLayout>
  )
}
