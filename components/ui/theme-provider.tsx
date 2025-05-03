"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

interface ThemeProviderProps {
  readonly children: React.ReactNode
  readonly attribute: React.ComponentProps<typeof NextThemesProvider>["attribute"]
  readonly defaultTheme?: string
  readonly enableSystem?: boolean
  readonly disableTransitionOnChange?: boolean
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
