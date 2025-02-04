import { Sidebar } from "@/components/sidebar"
import { Chat } from "@/components/chat"

export default function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <Chat />
    </main>
  )
}

