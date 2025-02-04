import "./globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Chat App",
  description: "A simple AI chat app similar to v0",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  )
}

