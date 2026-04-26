export default function Claims() {
  return (
    <>
      {/* Top Bar */}
      <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8 flex-shrink-0">
        <div>
          <h2 className="text-white font-semibold">Claims</h2>
          <p className="text-gray-500 text-xs">View and manage all insurance claims</p>
        </div>
        <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-4 py-2 text-sm transition-colors">
          + New Claim
        </button>
      </div>

      <div className="flex-1 p-8 overflow-auto">

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search claims..."
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors w-64"
          />
          <select className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm focus:outline-none focus:border-cyan-400 transition-colors">
            <option>All Statuses</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>In Review</option>
            <option>Rejected</option>
          </select>
          <select className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm focus:outline-none focus:border-cyan-400 transition-colors">
            <option>All Providers</option>
            <option>Metro Health</option>
            <option>Peak Surgical</option>
            <option>City Medical</option>
          </select>
          <select className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm focus:outline-none focus:border-cyan-400 transition-colors">
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
                <tr key={claim.id} className="hover:bg-gray-800 transition-colors">
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
                    <button className="text-cyan-400 hover:text-cyan-300 text-xs transition-colors">View →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between">
            <p className="text-gray-500 text-sm">Showing 10 of 1,284 claims</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-gray-800 text-gray-400 rounded text-sm hover:bg-gray-700 transition-colors">Previous</button>
              <button className="px-3 py-1 bg-cyan-400 text-gray-950 rounded text-sm font-medium">1</button>
              <button className="px-3 py-1 bg-gray-800 text-gray-400 rounded text-sm hover:bg-gray-700 transition-colors">2</button>
              <button className="px-3 py-1 bg-gray-800 text-gray-400 rounded text-sm hover:bg-gray-700 transition-colors">3</button>
              <button className="px-3 py-1 bg-gray-800 text-gray-400 rounded text-sm hover:bg-gray-700 transition-colors">Next</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
