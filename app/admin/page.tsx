'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

const customers = [
  { id: 1, name: "Sandra Kim", company: "Vertex Logistics", email: "sandra.kim@vertexlogistics.com", avatar: "SK", initials: "SK" },
  { id: 2, name: "David Osei", company: "Metro Health Group", email: "david.osei@metrohealth.com", avatar: "DO", initials: "DO" },
  { id: 3, name: "Maria Santos", company: "Peak Surgical", email: "maria.santos@peaksurgical.com", avatar: "MS", initials: "MS" },
  { id: 4, name: "James Park", company: "City Medical Center", email: "james.park@citymedical.com", avatar: "JP", initials: "JP" },
  { id: 5, name: "Angela Torres", company: "Riverside Clinic", email: "angela.torres@riversideclinic.com", avatar: "AT", initials: "AT" },
]

const bugTypes = [
  { id: "sso_failure", label: "SSO Login Failure", description: "Customer cannot log in — auth token expired or invalid", severity: "P2", category: "Authentication" },
  { id: "claims_export", label: "Claims Export Broken", description: "PDF/CSV export button returns 500 error or blank file", severity: "P3", category: "Data" },
  { id: "change_hc_timeout", label: "Change Healthcare Timeout", description: "Clearinghouse submissions timing out after 30 seconds", severity: "P2", category: "Integration" },
  { id: "dashboard_slow", label: "Dashboard Performance", description: "Dashboard takes 15+ seconds to load — KPI queries timing out", severity: "P3", category: "Performance" },
  { id: "eligibility_mismatch", label: "Eligibility Data Mismatch", description: "Availity eligibility check returning wrong payer information", severity: "P2", category: "Data" },
  { id: "claim_rejected", label: "Claim Auto-Rejected", description: "Claims submitted through Waystar being auto-rejected with error code 277", severity: "P2", category: "Integration" },
  { id: "epic_sync_fail", label: "Epic EHR Sync Failure", description: "Patient records not syncing from Epic — last sync showing 6+ hours ago", severity: "P2", category: "Integration" },
  { id: "billing_error", label: "Billing Portal Error", description: "Invoice page returning 403 forbidden — customer cannot view or pay invoices", severity: "P3", category: "Billing" },
  { id: "report_blank", label: "Scheduled Reports Not Sending", description: "Weekly scheduled reports not being emailed — queue appears stuck", severity: "P3", category: "Data" },
  { id: "p1_outage", label: "Full Portal Outage", description: "Complete system down — all customers affected — all features unavailable", severity: "P1", category: "Critical" },
]

const severityConfig: Record<string, { label: string; dot: string; badge: string; border: string }> = {
  P1: { label: "Critical", dot: "bg-red-500", badge: "bg-red-500/10 text-red-400 border border-red-500/20", border: "border-red-500/30" },
  P2: { label: "High", dot: "bg-amber-400", badge: "bg-amber-400/10 text-amber-400 border border-amber-400/20", border: "border-amber-400/30" },
  P3: { label: "Medium", dot: "bg-blue-400", badge: "bg-blue-400/10 text-blue-400 border border-blue-400/20", border: "border-blue-400/30" },
}

export default function AdminPanel() {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0])
  const [bugStates, setBugStates] = useState<Record<string, Record<number, boolean>>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [adminEmail, setAdminEmail] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all')
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) setAdminEmail(user.email || '')
    }
    getUser()
    loadBugStates()
  }, [])

  const loadBugStates = async () => {
    setLoading(true)
    const { data } = await supabase.from('bug_states').select('*')
    if (data) {
      const states: Record<string, Record<number, boolean>> = {}
      data.forEach((row: any) => {
        if (!states[row.bug_id]) states[row.bug_id] = {}
        states[row.bug_id][row.customer_id] = row.is_active
      })
      setBugStates(states)
    }
    setLoading(false)
  }

  const isActive = (bugId: string, customerId: number) =>
    bugStates[bugId]?.[customerId] || false

  const toggle = (bugId: string, customerId: number) => {
    setBugStates(prev => ({
      ...prev,
      [bugId]: { ...prev[bugId], [customerId]: !prev[bugId]?.[customerId] }
    }))
    setSaved(false)
  }

  const saveChanges = async () => {
    setSaving(true)
    const upserts = bugTypes.map(bug => ({
      customer_id: selectedCustomer.id,
      bug_id: bug.id,
      is_active: isActive(bug.id, selectedCustomer.id)
    }))
    const { error } = await supabase
      .from('bug_states')
      .upsert(upserts, { onConflict: 'customer_id,bug_id' })
    if (!error) setSaved(true)
    setSaving(false)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const activeCount = (customerId: number) =>
    bugTypes.filter(b => isActive(b.id, customerId)).length

  const filteredBugs = bugTypes.filter(bug => {
    if (filter === 'active') return isActive(bug.id, selectedCustomer.id)
    if (filter === 'inactive') return !isActive(bug.id, selectedCustomer.id)
    return true
  })

  const totalActive = activeCount(selectedCustomer.id)
  const adminName = adminEmail.split('@')[0].replace('.', ' ').replace(/\b\w/g, c => c.toUpperCase())

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2a2a2e; border-radius: 4px; }
        .toggle-track { transition: background 0.2s ease; }
        .toggle-thumb { transition: transform 0.2s ease; }
        .bug-row { transition: all 0.15s ease; }
        .customer-btn { transition: all 0.15s ease; }
      `}</style>

      {/* Top Navigation */}
      <header className="h-14 border-b border-white/[0.06] flex items-center justify-between px-6 bg-[#0d0d0f] flex-shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-cyan-400 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 2h3.5v3.5H2V2zm4.5 0H10v3.5H6.5V2zM2 6.5h3.5V10H2V6.5zm4.5 0H10V10H6.5V6.5z" fill="#0a0a0b"/>
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-tight">Doxaflow</span>
            <span className="text-white/20 text-xs">/</span>
            <span className="text-white/40 text-xs font-medium">Control Panel</span>
          </div>
          <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-red-400 text-xs font-medium tracking-wide">RESTRICTED ACCESS</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3 py-1.5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-[10px] font-bold text-white">
              {adminName.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
            </div>
            <span className="text-white/60 text-xs">{adminEmail}</span>
          </div>
          <button
            onClick={handleSignOut}
            className="text-white/40 hover:text-white/70 text-xs border border-white/[0.07] hover:border-white/20 rounded-lg px-3 py-1.5 transition-all"
          >
            Sign out
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <aside className="w-64 border-r border-white/[0.06] bg-[#0d0d0f] flex flex-col flex-shrink-0">
          <div className="p-4 border-b border-white/[0.06]">
            <p className="text-white/30 text-[10px] font-medium tracking-widest uppercase mb-3">Accounts</p>
            <div className="space-y-1">
              {customers.map(customer => {
                const count = activeCount(customer.id)
                const isSelected = selectedCustomer.id === customer.id
                return (
                  <button
                    key={customer.id}
                    onClick={() => { setSelectedCustomer(customer); setSaved(false) }}
                    className={`customer-btn w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 ${
                      isSelected
                        ? 'bg-white/[0.08] border border-white/[0.1]'
                        : 'hover:bg-white/[0.04] border border-transparent'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                      isSelected ? 'bg-cyan-400 text-[#0a0a0b]' : 'bg-white/[0.08] text-white/50'
                    }`}>
                      {customer.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${isSelected ? 'text-white' : 'text-white/50'}`}>
                        {customer.name}
                      </p>
                      <p className="text-white/25 text-[11px] truncate">{customer.company}</p>
                    </div>
                    {count > 0 && (
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md flex-shrink-0 ${
                        count >= 3 ? 'bg-red-500/20 text-red-400' : 'bg-amber-400/20 text-amber-400'
                      }`}>
                        {count}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="p-4">
            <p className="text-white/30 text-[10px] font-medium tracking-widest uppercase mb-3">Severity</p>
            <div className="space-y-2.5">
              {Object.entries(severityConfig).map(([key, val]) => (
                <div key={key} className="flex items-center gap-2.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${val.dot}`}></div>
                  <span className="text-white/25 text-xs font-mono">{key}</span>
                  <span className="text-white/30 text-xs">—</span>
                  <span className="text-white/40 text-xs">{val.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto p-4 border-t border-white/[0.06]">
            <div className="bg-white/[0.03] rounded-lg p-3">
              <p className="text-white/25 text-[10px] uppercase tracking-widest mb-2">Session</p>
              <p className="text-white/50 text-xs leading-relaxed">Changes take effect immediately upon saving. Interns and customers cannot access this panel.</p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-auto">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
                <span className="text-white/30 text-sm">Loading environment state...</span>
              </div>
            </div>
          ) : (
            <div className="p-6">

              {/* Page Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-lg font-semibold text-white mb-1">Fault Injection</h1>
                  <p className="text-white/30 text-sm">Configure active bugs for <span className="text-white/50">{selectedCustomer.name}</span> at {selectedCustomer.company}</p>
                </div>
                <button
                  onClick={saveChanges}
                  disabled={saving}
                  className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-[#0a0a0b] font-semibold text-sm rounded-lg px-4 py-2 transition-all disabled:opacity-40"
                >
                  {saving ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-[#0a0a0b]/30 border-t-[#0a0a0b] rounded-full animate-spin"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7.5L5.5 11L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Apply Changes
                    </>
                  )}
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Active Faults", value: totalActive, color: totalActive > 0 ? "text-red-400" : "text-white" },
                  { label: "Inactive", value: bugTypes.length - totalActive, color: "text-white/50" },
                  { label: "Total Scenarios", value: bugTypes.length, color: "text-white/50" },
                  { label: "Severity P1", value: bugTypes.filter(b => b.severity === 'P1' && isActive(b.id, selectedCustomer.id)).length, color: "text-red-400" },
                ].map(stat => (
                  <div key={stat.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                    <p className="text-white/30 text-xs mb-2">{stat.label}</p>
                    <p className={`text-2xl font-semibold ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Save success */}
              {saved && (
                <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 mb-5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5L6.5 12L13 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-emerald-400 text-sm">Environment state saved — {selectedCustomer.name} will experience {totalActive} active fault{totalActive !== 1 ? 's' : ''}</p>
                </div>
              )}

              {/* Filter tabs */}
              <div className="flex items-center gap-1 mb-4 bg-white/[0.03] border border-white/[0.06] rounded-lg p-1 w-fit">
                {(['all', 'active', 'inactive'] as const).map(f => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-all ${
                      filter === f
                        ? 'bg-white/[0.08] text-white'
                        : 'text-white/30 hover:text-white/50'
                    }`}
                  >
                    {f === 'all' ? `All (${bugTypes.length})` : f === 'active' ? `Active (${totalActive})` : `Inactive (${bugTypes.length - totalActive})`}
                  </button>
                ))}
              </div>

              {/* Bug List */}
              <div className="space-y-2">
                {filteredBugs.map(bug => {
                  const active = isActive(bug.id, selectedCustomer.id)
                  const sev = severityConfig[bug.severity]
                  return (
                    <div
                      key={bug.id}
                      className={`bug-row border rounded-xl p-4 ${
                        active
                          ? 'bg-red-500/[0.04] border-red-500/20'
                          : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.1]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 min-w-0">
                          <div className={`w-1.5 h-8 rounded-full flex-shrink-0 ${active ? 'bg-red-500' : 'bg-white/10'}`}></div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className={`text-sm font-medium ${active ? 'text-white' : 'text-white/60'}`}>
                                {bug.label}
                              </span>
                              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md font-mono ${sev.badge}`}>
                                {bug.severity}
                              </span>
                              <span className="text-[10px] text-white/25 border border-white/[0.06] px-2 py-0.5 rounded-md">
                                {bug.category}
                              </span>
                              {active && (
                                <span className="text-[10px] text-red-400 font-medium flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block"></span>
                                  ACTIVE
                                </span>
                              )}
                            </div>
                            <p className="text-white/30 text-xs leading-relaxed">{bug.description}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => toggle(bug.id, selectedCustomer.id)}
                          className={`toggle-track relative flex-shrink-0 w-11 h-6 rounded-full ${
                            active ? 'bg-red-500' : 'bg-white/10'
                          }`}
                        >
                          <span className={`toggle-thumb absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm ${
                            active ? 'left-[calc(100%-1.375rem)]' : 'left-0.5'
                          }`} />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          )}
        </main>
      </div>
    </div>
  )
}