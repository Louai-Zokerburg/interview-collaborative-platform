"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "./ui/label"
import { Switch } from "./ui/switch"

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="w-full flex justify-between items-center">
      <Label htmlFor="theme-switch">
        Dark Theme
      </Label>

      <Switch id='theme-switch' checked={theme === 'dark'} onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
    </div>
  )
}
