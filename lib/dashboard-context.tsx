'use client'

import { createContext, useContext } from 'react'

export interface Customer {
  id: number
  name: string
  company: string
  email: string
  avatar: string
}

interface DashboardContextValue {
  customer: Customer
  activeBugs: string[]
  hasBug: (bugId: string) => boolean
}

export const DashboardContext = createContext<DashboardContextValue | null>(null)

export function useDashboard() {
  const ctx = useContext(DashboardContext)
  if (!ctx) throw new Error('useDashboard must be used within DashboardLayout')
  return ctx
}
