export default function Integrations() {
  return (
    <>
      {/* Top Bar */}
      <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8 flex-shrink-0">
        <div>
          <h2 className="text-white font-semibold">Integrations</h2>
          <p className="text-gray-500 text-xs">Manage your connected systems and data sources</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">April 21, 2026</span>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span className="text-gray-400 text-sm">All systems operational</span>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-auto">

        {/* Status Banner */}
        <div className="bg-amber-950 border border-amber-800 rounded-xl p-4 mb-8 flex items-center gap-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <div>
            <p className="text-amber-400 font-semibold">1 integration requires attention</p>
            <p className="text-amber-600 text-sm">Change Healthcare is experiencing degraded performance. Claims submitted through this clearinghouse may be delayed.</p>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 gap-6">

          {/* Epic EHR */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Epic EHR</h3>
                  <p className="text-gray-500 text-xs">Electronic Health Records</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-900 text-green-400 rounded-full text-xs font-medium">Connected</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">Last sync</span><span className="text-white">4 minutes ago</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Records synced today</span><span className="text-white">1,847</span></div>
              <div className="flex justify-between"><span className="text-gray-400">API version</span><span className="text-white">FHIR R4</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Uptime (30d)</span><span className="text-green-400">99.94%</span></div>
            </div>
            <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg py-2 transition-colors">
              View Sync Logs
            </button>
          </div>

          {/* Waystar */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-900 rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Waystar Clearinghouse</h3>
                  <p className="text-gray-500 text-xs">Claims Submission</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-900 text-green-400 rounded-full text-xs font-medium">Connected</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">Claims submitted today</span><span className="text-white">284</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Acceptance rate</span><span className="text-green-400">98.2%</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Avg response time</span><span className="text-white">1.2s</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Uptime (30d)</span><span className="text-green-400">99.97%</span></div>
            </div>
            <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg py-2 transition-colors">
              View Submission History
            </button>
          </div>

          {/* Change Healthcare — DEGRADED */}
          <div className="bg-gray-900 border border-amber-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-900 rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Change Healthcare</h3>
                  <p className="text-gray-500 text-xs">Claims Clearinghouse</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-amber-900 text-amber-400 rounded-full text-xs font-medium">Degraded</span>
            </div>
            <div className="bg-amber-950 border border-amber-800 rounded-lg p-3 mb-4">
              <p className="text-amber-400 text-xs font-medium">Elevated error rates detected</p>
              <p className="text-amber-600 text-xs mt-1">Claims submission timeouts occurring since 06:42 AM. Engineering is investigating. ETA for resolution: unknown.</p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">Claims submitted today</span><span className="text-white">41</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Error rate</span><span className="text-amber-400">34.7%</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Avg response time</span><span className="text-amber-400">12.4s</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Uptime (30d)</span><span className="text-amber-400">97.12%</span></div>
            </div>
            <button className="mt-4 w-full bg-amber-900 hover:bg-amber-800 text-amber-300 text-sm rounded-lg py-2 transition-colors">
              View Incident Report
            </button>
          </div>

          {/* Availity */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Availity Portal</h3>
                  <p className="text-gray-500 text-xs">Eligibility & Benefits</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-900 text-green-400 rounded-full text-xs font-medium">Connected</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">Eligibility checks today</span><span className="text-white">612</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Match rate</span><span className="text-green-400">96.8%</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Last verification</span><span className="text-white">12 minutes ago</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Uptime (30d)</span><span className="text-green-400">99.81%</span></div>
            </div>
            <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg py-2 transition-colors">
              View Eligibility Logs
            </button>
          </div>

        </div>

        {/* Add Integration */}
        <div className="mt-6 bg-gray-900 border border-dashed border-gray-700 rounded-xl p-6 flex items-center justify-between">
          <div>
            <h3 className="text-white font-medium">Add a new integration</h3>
            <p className="text-gray-500 text-sm mt-1">Connect additional clearinghouses, EHR systems, or payer portals</p>
          </div>
          <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-5 py-2 text-sm transition-colors">
            + Add Integration
          </button>
        </div>

      </div>
    </>
  )
}
