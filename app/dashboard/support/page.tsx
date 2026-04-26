'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useDashboard } from '@/lib/dashboard-context'

export default function Support() {
  const { customer } = useDashboard()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [caseNumber, setCaseNumber] = useState('')
  const [form, setForm] = useState({
    subject: '',
    category: '',
    priority: '',
    description: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const newCaseNumber = `INC${Math.floor(Math.random() * 90000) + 10000}`

    const { error } = await supabase
      .from('tickets')
      .insert([{
        subject: form.subject,
        category: form.category,
        priority: form.priority,
        description: form.description,
        status: 'Open',
        customer_name: customer.name,
        customer_email: customer.email,
        company: customer.company,
      }])

    if (error) {
      console.error('Error submitting ticket:', error)
      setLoading(false)
      return
    }

    setCaseNumber(newCaseNumber)
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8 flex-shrink-0">
        <div>
          <h2 className="text-white font-semibold">Help & Support</h2>
          <p className="text-gray-500 text-xs">Submit a ticket or view your open cases</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">April 21, 2026</span>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span className="text-gray-400 text-sm">All systems operational</span>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">

          {/* Open Tickets */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-white font-semibold mb-4">Your Open Cases</h3>
            <table className="w-full">
              <thead>
                <tr className="text-gray-500 text-xs border-b border-gray-800">
                  <th className="text-left pb-3">CASE #</th>
                  <th className="text-left pb-3">SUBJECT</th>
                  <th className="text-left pb-3">PRIORITY</th>
                  <th className="text-left pb-3">STATUS</th>
                  <th className="text-left pb-3">LAST UPDATE</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { id: "INC0024891", subject: "SSO login failure — cannot access portal", priority: "P2", status: "In Progress", update: "2 hours ago" },
                  { id: "INC0024756", subject: "Claims export not generating PDF", priority: "P3", status: "Pending", update: "1 day ago" },
                  { id: "INC0024601", subject: "Change Healthcare integration showing degraded", priority: "P2", status: "Escalated", update: "3 days ago" },
                ].map((ticket) => (
                  <tr key={ticket.id} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                    <td className="py-3 text-cyan-400 font-mono text-xs">{ticket.id}</td>
                    <td className="py-3 text-white">{ticket.subject}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs font-bold
                        ${ticket.priority === 'P1' ? 'bg-red-900 text-red-400' : ''}
                        ${ticket.priority === 'P2' ? 'bg-orange-900 text-orange-400' : ''}
                        ${ticket.priority === 'P3' ? 'bg-blue-900 text-blue-400' : ''}
                      `}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs
                        ${ticket.status === 'In Progress' ? 'bg-blue-900 text-blue-400' : ''}
                        ${ticket.status === 'Pending' ? 'bg-gray-800 text-gray-400' : ''}
                        ${ticket.status === 'Escalated' ? 'bg-purple-900 text-purple-400' : ''}
                      `}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="py-3 text-gray-400">{ticket.update}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Submit Ticket Form */}
          {!submitted ? (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Submit a New Case</h3>
              <p className="text-gray-400 text-sm mb-6">
                Our support team typically responds within 4 hours for P2 issues and 1 hour for P1.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-gray-400 text-sm block mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="Brief description of the issue"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">Category *</label>
                    <select
                      required
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="">Select a category</option>
                      <option value="authentication">Authentication / Login</option>
                      <option value="integration">Integration Issue</option>
                      <option value="performance">Performance / Slowness</option>
                      <option value="data">Data / Reporting Issue</option>
                      <option value="billing">Billing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm block mb-2">Priority *</label>
                    <select
                      required
                      value={form.priority}
                      onChange={(e) => setForm({ ...form, priority: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="">Select priority</option>
                      <option value="P1">P1 — Critical (system down)</option>
                      <option value="P2">P2 — High (major feature broken)</option>
                      <option value="P3">P3 — Medium (workaround available)</option>
                      <option value="P4">P4 — Low (minor issue)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-2">Description *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Please describe the issue in detail. Include steps to reproduce, what you expected to happen, and what actually happened."
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-gray-500 text-xs">
                    * Required fields. You will receive a confirmation email at {customer.email}
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-6 py-3 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Submit Case'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-gray-900 border border-green-800 rounded-xl p-8 text-center">
              <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Case Submitted Successfully</h3>
              <p className="text-gray-400 mb-2">Your case has been assigned number <span className="text-cyan-400 font-mono">{caseNumber}</span></p>
              <p className="text-gray-500 text-sm mb-6">
                A confirmation has been sent to {customer.email}. Our support team will respond within 4 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ subject: '', category: '', priority: '', description: '' }) }}
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-6 py-3 transition-colors text-sm"
              >
                Submit another case
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
