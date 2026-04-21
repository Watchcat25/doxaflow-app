export default function Claims() {
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
          <a href="/dashboard/claims" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-800 text-white text-sm font-medium">
            <span>📋</span> Claims
          </a>
          <a href="/dashboard/patients" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition">
            <span>👥</span> Patients
          </a>
          <a href="/dashboard/providers" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition">
            <span>🏥</span> Providers
          </a>
          <a href="/dashboard/integrations" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition">
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
            <h2 className="text-white font-semibold">Claims</h2>
            <p className="text-gray-500 text-xs">View and manage all insurance claims</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-4 py-2 text-sm transition">
              + New Claim
            </button>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-auto">

          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search claims..."
              className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition w-64"
            />
            <select className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm focus:outline-none focus:border-cyan-400 transition">
              <option>All Statuses</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>In Review</option>
              <option>Rejected</option>
            </select>
            <select className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm focus:outline-none focus:border-cyan-400 transition">
              <option>All Providers</option>
              <option>Metro Health</option>
              <option>Peak Surgical</option>
              <option>City Medical</option>
            </select>
            <select className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm focus:outline-none focus:border-cyan-400 transition">
              <option>Last 30 days</option>
              <option>Last 60 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
          </div>

          {/* Claims Table */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="text-gray-500 text-xs border-b border-gray-800 bg-gray-900">
                  <th className="text-left px-6 py-4">CLAIM ID</th>
                  <th className="text-left px-6 py-4">PATIENT</th>
                  <th className="text-left px-6 py-4">PROVIDER</th>
                  <th className="text-left px-6 py-4">PAYER</th>
                  <th className="text-left px-6 py-4">DATE</th>
                  <th className="text-left px-6 py-4">AMOUNT</th>
                  <th className="text-left px-6 py-4">STATUS</th>
                  <th className="text-left px-6 py-4">ACTION</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-800">
                {[
                  { id: "CLM-8821", patient: "James Osei", provider: "Metro Health", payer: "BlueCross", date: "Apr 21, 2026", amount: "$4,200", status: "Approved", color: "green" },
                  { id: "CLM-8820", patient: "Maria Santos", provider: "Peak Surgical", payer: "Aetna", date: "Apr 21, 2026", amount: "$12,500", status: "Pending", color: "yellow" },
                  { id: "CLM-8819", patient: "David Chen", provider: "City Medical", payer: "UnitedHealth", date: "Apr 20, 2026", amount: "$890", status: "Approved", color: "green" },
                  { id: "CLM-8818", patient: "Lisa Park", provider: "Metro Health", payer: "Cigna", date: "Apr 20, 2026", amount: "$3,100", status: "In Review", color: "blue" },
                  { id: "CLM-8817", patient: "Robert Miles", provider: "Peak Surgical", payer: "BlueCross", date: "Apr 19, 2026", amount: "$7,650", status: "Rejected", color: "red" },
                  { id: "CLM-8816", patient: "Angela Torres", provider: "City Medical", payer: "Aetna", date: "Apr 19, 2026", amount: "$2,340", status: "Approved", color: "green" },
                  { id: "CLM-8815", patient: "Michael Brown", provider: "Metro Health", payer: "UnitedHealth", date: "Apr 18, 2026", amount: "$5,800", status: "Pending", color: "yellow" },
                  { id: "CLM-8814", patient: "Sarah Johnson", provider: "Peak Surgical", payer: "Cigna", date: "Apr 18, 2026", amount: "$9,200", status: "Approved", color: "green" },
                  { id: "CLM-8813", patient: "Kevin Lee", provider: "City Medical", payer: "BlueCross", date: "Apr 17, 2026", amount: "$1,450", status: "In Review", color: "blue" },
                  { id: "CLM-8812", patient: "Patricia Wilson", provider: "Metro Health", payer: "Aetna", date: "Apr 17, 2026", amount: "$6,700", status: "Approved", color: "green" },
                ].map((claim) => (
                  <tr key={claim.id} className="hover:bg-gray-800 transition">
                    <td className="px-6 py-4 text-cyan-400 font-mono text-xs">{claim.id}</td>
                    <td className="px-6 py-4 text-white">{claim.patient}</td>
                    <td className="px-6 py-4 text-gray-400">{claim.provider}</td>
                    <td className="px-6 py-4 text-gray-400">{claim.payer}</td>
                    <td className="px-6 py-4 text-gray-400">{claim.date}</td>
                    <td className="px-6 py-4 text-white font-medium">{claim.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium
                        ${claim.color === 'green' ? 'bg-green-900 text-green-400' : ''}
                        ${claim.color === 'yellow' ? 'bg-yellow-900 text-yellow-400' : ''}
                        ${claim.color === 'blue' ? 'bg-blue-900 text-blue-400' : ''}
                        ${claim.color === 'red' ? 'bg-red-900 text-red-400' : ''}
                      `}>
                        {claim.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-cyan-400 hover:text-cyan-300 text-xs transition">
                        View →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between">
              <p className="text-gray-500 text-sm">Showing 10 of 1,284 claims</p>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-gray-800 text-gray-400 rounded text-sm hover:bg-gray-700 transition">Previous</button>
                <button className="px-3 py-1 bg-cyan-400 text-gray-950 rounded text-sm font-medium">1</button>
                <button className="px-3 py-1 bg-gray-800 text-gray-400 rounded text-sm hover:bg-gray-700 transition">2</button>
                <button className="px-3 py-1 bg-gray-800 text-gray-400 rounded text-sm hover:bg-gray-700 transition">3</button>
                <button className="px-3 py-1 bg-gray-800 text-gray-400 rounded text-sm hover:bg-gray-700 transition">Next</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}