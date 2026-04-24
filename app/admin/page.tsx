'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const customers = [
  { id: 1, name: "Sandra Kim", company: "Vertex Logistics", email: "sandra.kim@vertexlogistics.com", avatar: "SK" },
  { id: 2, name: "David Osei", company: "Metro Health Group", email: "david.osei@metrohealth.com", avatar: "DO" },
  { id: 3, name: "Maria Santos", company: "Peak Surgical", email: "maria.santos@peaksurgical.com", avatar: "MS" },
  { id: 4, name: "James Park", company: "City Medical Center", email: "james.park@citymedical.com", avatar: "JP" },
  { id: 5, name: "Angela Torres", company: "Riverside Clinic", email: "angela.torres@riversideclinic.com", avatar: "AT" },
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

export default function AdminPanel() {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0])
  const [bugStates, setBugStates] = useState<Record<string, Record<number, boolean>>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  // Load all bug states from Supabase on mount
  useEffect(() => {
    loadBugStates()
  }, [])

  const loadBugStates = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('bug_states')
      .select('*')

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

  const isActive = (bugId: string, customerId: number) => {
    return bugStates[bugId]?.[customerId] || false
  }

  const toggle = (bugId: string, customerId: number) => {
    setBugStates(prev => ({
      ...prev,
      [bugId]: {
        ...prev[bugId],
        [customerId]: !prev[bugId]?.[customerId]
      }
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

    if (!error) {
      setSaved(true)
    }
    setSaving(false)
  }

  const activeCount = (customerId: number) =>
    bugTypes.filter(b => isActive(b.id, customerId)).length

  const severityColor = (s: string) => {
    if (s === "P1") return "bg-red-900 text-red-400"
    if (s === "P2") return "bg-orange-900 text-orange-400"
    return "bg-blue-900 text-blue-400"
  }

  return (
    <div className="min-h-screen bg-gray-950">

      {/* Admin Header */}
      <div className="bg-red-950 border-b border-red-800 px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-red-400 text-sm font-bold">⚠️ ADMIN PANEL</span>
          <span className="text-red-600 text-sm">— Internal use only — not visible to interns or customers</span>
        </div>
        <a href="/dashboard" className="text-red-400 hover:text-red-300 text-sm transition">← Back to Doxaflow</a>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-400 text-sm">Loading bug states from database...</p>
        </div>
      ) : (
        <div className="flex">

          {/* Customer Sidebar */}
          <div className="w-72 min-h-screen bg-gray-900 border-r border-gray-800 p-4">
            <h2 className="text-white font-bold mb-1">Customer Accounts</h2>
            <p className="text-gray-500 text-xs mb-4">Select a customer to manage their bug states</p>

            <div className="space-y-2">
              {customers.map(customer => {
                const count = activeCount(customer.id)
                return (
                  <button
                    key={customer.id}
                    onClick={() => { setSelectedCustomer(customer); setSaved(false) }}
                    className={`w-full text-left p-3 rounded-xl transition ${
                      selectedCustomer.id === customer.id
                        ? 'bg-gray-800 border border-cyan-400'
                        : 'bg-gray-800 border border-transparent hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-cyan-400 flex items-center justify-center text-gray-950 font-bold text-sm flex-shrink-0">
                        {customer.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{customer.name}</p>
                        <p className="text-gray-500 text-xs truncate">{customer.company}</p>
                      </div>
                      {count > 0 && (
                        <span className="bg-red-900 text-red-400 text-xs px-2 py-0.5 rounded-full font-bold flex-shrink-0">
                          {count}
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-xs font-medium mb-3">SEVERITY GUIDE</p>
              <div className="space-y-2">
                {[
                  { label: "P1", desc: "Critical — system down", color: "bg-red-900 text-red-400" },
                  { label: "P2", desc: "High — major feature broken", color: "bg-orange-900 text-orange-400" },
                  { label: "P3", desc: "Medium — workaround available", color: "bg-blue-900 text-blue-400" },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${s.color}`}>{s.label}</span>
                    <span className="text-gray-500 text-xs">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">

            {/* Customer Header */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-gray-950 font-bold">
                  {selectedCustomer.avatar}
                </div>
                <div>
                  <h2 className="text-white text-xl font-bold">{selectedCustomer.name}</h2>
                  <p className="text-gray-400 text-sm">{selectedCustomer.company} — {selectedCustomer.email}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white text-2xl font-bold">{activeCount(selectedCustomer.id)}</p>
                <p className="text-gray-400 text-sm">active bugs</p>
              </div>
            </div>

            {/* Save Banner */}
            {saved && (
              <div className="bg-green-900 border border-green-700 rounded-xl p-4 mb-6 flex items-center gap-3">
                <span className="text-green-400">✅</span>
                <p className="text-green-300 font-medium">
                  Bug states saved to database — {selectedCustomer.name} will now experience the active issues when logging into Doxaflow
                </p>
              </div>
            )}

            {/* Bug Toggles */}
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Bug States for {selectedCustomer.name}</h3>
                <button
                  onClick={saveChanges}
                  disabled={saving}
                  className="bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-5 py-2 text-sm transition disabled:opacity-50"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>

              {bugTypes.map(bug => {
                const active = isActive(bug.id, selectedCustomer.id)
                return (
                  <div
                    key={bug.id}
                    className={`border rounded-xl p-5 transition ${
                      active ? 'bg-red-950 border-red-800' : 'bg-gray-900 border-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-white font-semibold">{bug.label}</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${severityColor(bug.severity)}`}>
                            {bug.severity}
                          </span>
                          <span className="px-2 py-0.5 bg-gray-800 text-gray-400 rounded text-xs">
                            {bug.category}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">{bug.description}</p>
                      </div>

                      <button
                        onClick={() => toggle(bug.id, selectedCustomer.id)}
                        className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors flex-shrink-0 ml-6 ${
                          active ? 'bg-red-500' : 'bg-gray-700'
                        }`}
                      >
                        <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                          active ? 'translate-x-8' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>

                    {active && (
                      <div className="mt-3 pt-3 border-t border-red-800">
                        <p className="text-red-400 text-xs font-medium">
                          🔴 ACTIVE — {selectedCustomer.name} will experience this issue. This will generate a realistic {bug.severity} support ticket.
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}