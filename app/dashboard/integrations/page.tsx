export default function Integrations() {
  return (
    <div className="min-h-screen bg-gray-950 flex">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-white">
            Doxa<span className="text-cyan-400">flow</span>
          </h1>
          <p className="text-gray-500 text-xs mt-1">Insurance Claims Platform</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition">
            <span>📊</span> Dashboard
          </a>
          <a href="/dashboard/claims" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition">
            <span>📋</span> Claims
          </a>
          <a href="/dashboard/patients" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition">
            <span>👥</span> Patients
          </a>
          <a href="/dashboard/providers" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition">
            <span>🏥</span> Providers
          </a>
          <a href="/dashboard/integrations" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-800 text-white text-sm font-medium">
            <span>🔗</span> Integrations
          </a>
          <a href="/dashboard/reports" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition">
            <span>📈</span> Reports
          </a>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <a href="/dashboard/support" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition">
            <span>🎫</span> Help & Support
          </a>
          <div className="flex items-center gap-3 px-3 py-2 mt-2">
            <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-gray-950 font-bold text-sm">
              SK
            </div>
            <div>
              <p className="text-white text-sm font-medium">Sandra Kim</p>
              <p className="text-gray-500 text-xs">Vertex Logistics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Bar */}
        <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8">
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
          <div className="bg-yellow-900 border border-yellow-700 rounded-xl p-4 mb-8 flex items-center gap-4">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="text-yellow-300 font-semibold">1 integration requires attention</p>
              <p className="text-yellow-500 text-sm">Change Healthcare is experiencing degraded performance. Claims submitted through this clearinghouse may be delayed.</p>
            </div>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-2 gap-6">

            {/* Epic EHR */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-lg">🏥</div>
                  <div>
                    <h3 className="text-white font-semibold">Epic EHR</h3>
                    <p className="text-gray-500 text-xs">Electronic Health Records</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-900 text-green-400 rounded-full text-xs font-medium">Connected</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Last sync</span>
                  <span className="text-white">4 minutes ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Records synced today</span>
                  <span className="text-white">1,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">API version</span>
                  <span className="text-white">FHIR R4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Uptime (30d)</span>
                  <span className="text-green-400">99.94%</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg py-2 transition">
                View Sync Logs
              </button>
            </div>

            {/* Waystar Clearinghouse */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-900 rounded-lg flex items-center justify-center text-lg">📡</div>
                  <div>
                    <h3 className="text-white font-semibold">Waystar Clearinghouse</h3>
                    <p className="text-gray-500 text-xs">Claims Submission</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-900 text-green-400 rounded-full text-xs font-medium">Connected</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Claims submitted today</span>
                  <span className="text-white">284</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Acceptance rate</span>
                  <span className="text-green-400">98.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg response time</span>
                  <span className="text-white">1.2s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Uptime (30d)</span>
                  <span className="text-green-400">99.97%</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg py-2 transition">
                View Submission History
              </button>
            </div>

            {/* Change Healthcare — DEGRADED */}
            <div className="bg-gray-900 border border-yellow-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-900 rounded-lg flex items-center justify-center text-lg">⚡</div>
                  <div>
                    <h3 className="text-white font-semibold">Change Healthcare</h3>
                    <p className="text-gray-500 text-xs">Claims Clearinghouse</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-900 text-yellow-400 rounded-full text-xs font-medium">Degraded</span>
              </div>
              <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-3 mb-4">
                <p className="text-yellow-300 text-xs font-medium">⚠️ Elevated error rates detected</p>
                <p className="text-yellow-500 text-xs mt-1">Claims submission timeouts occurring since 06:42 AM. Engineering is investigating. ETA for resolution: unknown.</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Claims submitted today</span>
                  <span className="text-white">41</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Error rate</span>
                  <span className="text-yellow-400">34.7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg response time</span>
                  <span className="text-yellow-400">12.4s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Uptime (30d)</span>
                  <span className="text-yellow-400">97.12%</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-yellow-900 hover:bg-yellow-800 text-yellow-300 text-sm rounded-lg py-2 transition">
                View Incident Report
              </button>
            </div>

            {/* Availity Portal */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center text-lg">🔐</div>
                  <div>
                    <h3 className="text-white font-semibold">Availity Portal</h3>
                    <p className="text-gray-500 text-xs">Eligibility & Benefits</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-900 text-green-400 rounded-full text-xs font-medium">Connected</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Eligibility checks today</span>
                  <span className="text-white">612</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Match rate</span>
                  <span className="text-green-400">96.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last verification</span>
                  <span className="text-white">12 minutes ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Uptime (30d)</span>
                  <span className="text-green-400">99.81%</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg py-2 transition">
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
            <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-5 py-2 text-sm transition">
              + Add Integration
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}