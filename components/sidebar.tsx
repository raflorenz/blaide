"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PanelLeftIcon, PlusCircle, Settings } from "lucide-react"
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const sampleChats = [
  { id: 1, title: "Chat about React" },
  { id: 2, title: "AI Ethics Discussion" },
  { id: 3, title: "Next.js Project Ideas" },
  { id: 4, title: "Machine Learning Basics" },
  { id: 5, title: "Web Development Tips" },
]

export function Sidebar() {
  const [chats, setChats] = useState(sampleChats)

  return (
    <ShadcnSidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">AI Chat App</h2>
          <SidebarTrigger>
            <PanelLeftIcon className="h-6 w-6" />
          </SidebarTrigger>
        </div>
        <Button
          className="w-full mt-4"
          onClick={() => setChats([...chats, { id: chats.length + 1, title: `New Chat ${chats.length + 1}` }])}
        >
          <PlusCircle className="mr-2 h-4 w-4" /> New Chat
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-12rem)] px-4">
          {chats.map((chat) => (
            <Button key={chat.id} variant="ghost" className="w-full justify-start mb-1">
              {chat.title}
            </Button>
          ))}
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </ShadcnSidebar>
  )
}

