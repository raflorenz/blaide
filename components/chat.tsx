"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SendIcon } from "lucide-react"

type Message = {
  id: number
  content: string
  sender: "user" | "ai"
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hello! How can I assist you today?", sender: "ai" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, content: input, sender: "user" }])
      setInput("")
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, content: "I'm an AI assistant. How can I help you?", sender: "ai" },
        ])
      }, 1000)
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      <ScrollArea className="flex-1 p-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}>
            <div className={`flex items-start ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
              <Avatar className="mt-1">
                <AvatarImage src={message.sender === "user" ? "/placeholder-avatar.jpg" : "/ai-avatar.png"} />
                <AvatarFallback>{message.sender === "user" ? "U" : "AI"}</AvatarFallback>
              </Avatar>
              <div
                className={`mx-2 p-3 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex space-x-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit">
            <SendIcon className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}

