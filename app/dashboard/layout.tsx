'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { DashboardContext, Customer } from '@/lib/dashboard-context'

const customers: Customer[] = [
  { id: 1, name: "Sandra Kim", company: "Vertex Medical Associates", email: "sandra.kim@vertexmedical.com", avatar: "SK" },
  { id: 2, name: "David Osei", company: "Metro Health Group", email: "david.osei@metrohealth.com", avatar: "DO" },
  { id: 3, name: "Maria Santos", company: "Peak Surgical Center", email: "maria.santos@peaksurgical.com", avatar: "MS" },
  { id: 4, name: "James Park", company: "City Medical Center", email: "james.park@citymedical.com", avatar: "JP" },
  { id: 5, name: "Angela Torres", company: "Riverside Clinic", email: "angela.torres@riversideclinic.com", avatar: "AT" },
]

const navItems = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    href: '/dashboard/claims',
    label: 'Claims',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="8" y1="13" x2="16" y2="13"/>
        <line x1="8" y1="17" x2="14" y2="17"/>
      </svg>
    ),
  },
  {
    href: '/dashboard/patients',
    label: 'Patients',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    href: '/dashboard/providers',
    label: 'Providers',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10"/>
      </svg>
    ),
  },
  {
    href: '/dashboard/integrations',
    label: 'Integrations',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    href: '/dashboard/reports',
    label: 'Reports',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
]

const supportItem = {
  href: '/dashboard/support',
  label: 'Help & Support',
  icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0118 0v6"/>
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
    </svg>
  ),
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [customer, setCustomer] = useState<Customer | null>(null)
  const [activeBugs, setActiveBugs] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/'); return }

      const matched = customers.find(c => c.email === user.email)
      if (!matched) { router.push('/'); return }
      setCustomer(matched)

      const { data: bugs } = await supabase
        .from('bug_states')
        .select('bug_id')
        .eq('customer_id', matched.id)
        .eq('is_active', true)

      if (bugs) setActiveBugs(bugs.map((b: any) => b.bug_id))
      setLoading(false)
    }
    init()
  }, [])

  const hasBug = (bugId: string) => activeBugs.includes(bugId)

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading || !customer) {
    return (
      <div className="h-screen bg-gray-950 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"/>
          <span className="text-gray-500 text-sm">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <DashboardContext.Provider value={{ customer, activeBugs, hasBug }}>
      <div className="h-screen bg-gray-950 flex overflow-hidden">

        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col flex-shrink-0">
          <div className="p-6 border-b border-gray-800 flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              Doxa<span className="text-cyan-400">flow</span>
            </h1>
            <p className="text-gray-500 text-xs mt-1">Insurance Claims Platform</p>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map(item => {
              const active = pathname === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    active
                      ? 'bg-gray-800 text-white font-medium'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="p-4 border-t border-gray-800 flex-shrink-0">
            <a
              href={supportItem.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                pathname === supportItem.href
                  ? 'bg-gray-800 text-white font-medium'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {supportItem.icon}
              {supportItem.label}
            </a>

            <div className="flex items-center gap-3 px-3 py-2 mt-1">
              <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-gray-950 font-bold text-sm flex-shrink-0">
                {customer.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{customer.name}</p>
                <p className="text-gray-500 text-xs truncate">{customer.company}</p>
              </div>
            </div>

            <button
              onClick={handleSignOut}
              className="w-full mt-1 flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-red-400 text-xs transition-colors rounded-lg hover:bg-gray-800"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                <polyline points="16,17 21,12 16,7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Sign out
            </button>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {children}
        </div>

      </div>
    </DashboardContext.Provider>
  )
}
