'use client'

import { useState } from 'react'
import { Copy, Check, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function LandingPage() {
  const [copied, setCopied] = useState(false)
  const serverIP = 'play.nautilusmc.net'

  const copyIP = async () => {
    await navigator.clipboard.writeText(serverIP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Bubble animations */}
      <div className="bubble-container absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble" style={{ 
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }} />
        ))}
      </div>

      <h1 className="text-6xl md:text-8xl font-bold text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-teal-300 to-blue-100">
          Nautilus
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-100 inline-flex items-center">
          MC
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <ChevronDown className="h-8 w-8 text-blue-200 hover:text-teal-300 transition-colors ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-blue-900/90 backdrop-blur-sm border-blue-700 text-blue-100">
              <DropdownMenuItem className="hover:bg-blue-800/50 focus:bg-blue-800/50 cursor-pointer">
                <a href="/rules" className="flex items-center gap-2 w-full">
                  Server Rules
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-blue-800/50 focus:bg-blue-800/50 cursor-pointer">
                <a href="/forums" className="flex items-center gap-2 w-full">
                  Forums
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-blue-800/50 focus:bg-blue-800/50 cursor-pointer">
                <a href="/store" className="flex items-center gap-2 w-full">
                  Store
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
      </h1>

      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-2 mb-8 mt-8">
        <code className="text-xl md:text-2xl text-blue-100">{serverIP}</code>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyIP}
          className="hover:bg-white/20 transition-colors"
        >
          {copied ? (
            <Check className="h-5 w-5 text-green-400" />
          ) : (
            <Copy className="h-5 w-5 text-blue-100" />
          )}
          <span className="sr-only">Copy server IP</span>
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          className="bubble-button bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-semibold px-8 py-4 text-lg"
          onClick={() => window.open('https://cdn.nautilusmc.net/discord', '_blank')}
        >
          Join Discord
        </Button>
        <Button 
          className="bubble-button bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg"
          onClick={() => window.open('https://cdn.nautilusmc.net/vote', '_blank')}
        >
          Vote Now
        </Button>
      </div>
    </main>
  )
}

