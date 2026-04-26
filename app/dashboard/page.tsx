'use client'

import { useDashboard } from '@/lib/dashboard-context'

export default function Dashboard() {
  const { customer, hasBug } = useDashboard()

  return (
    <>
      {/* Top Bar */}
      <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8 flex-shrink-0">
        <div>
          <h2 className="text-white font-semibold">Dashboard</h2>
          <p className="text-gray-500 text-xs">Welcome back, {customer.name.split(' ')[0]}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">April 21, 2026</span>
          {hasBug('p1_outage') ? (
            <>
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
              <span className="text-red-400 text-sm font-medium">System outage detected</span>
            </>
          ) : (
            <>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-gray-400 text-sm">All systems operational</span>
            </>
          )}
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="flex-1 p-8 overflow-auto">

        {hasBug('p1_outage') && (
          <div className="bg-red-950 border border-red-800 rounded-xl p-4 mb-6">
            <p className="text-red-400 font-medium">🔴 System Outage — All features are currently unavailable. Our team is investigating.</p>
          </div>
        )}

        {hasBug('sso_failure') && (
          <div className="bg-orange-950 border border-orange-800 rounded-xl p-4 mb-6">
            <p className="text-orange-400 font-medium">⚠️ Authentication issues detected — some users may experience login problems.</p>
          </div>
        )}

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: "Claims Submitted", value: "1,284", change: "+12%", up: true },
            { label: "Claims Approved", value: "1,047", change: "+8%", up: true },
            { label: "Pending Review", value: "163", change: "-3%", up: false },
            { label: "Avg Processing Time", value: hasBug('dashboard_slow') ? "15+ secs" : "2.4 days", change: hasBug('dashboard_slow') ? "Degraded" : "-0.3d", up: !hasBug('dashboard_slow') },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400 text-sm">{kpi.label}</p>
              <p className="text-white text-3xl font-bold mt-2">{kpi.value}</p>
              <p className={`text-sm mt-2 ${kpi.up ? 'text-green-400' : 'text-red-400'}`}>
                {kpi.change} vs last month
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-3 gap-6 mb-8">

          {/* Recent Claims */}
          <div className="col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Recent Claims</h3>
            {hasBug('claims_export') ? (
              <div className="bg-red-950 border border-red-800 rounded-lg p-4">
                <p className="text-red-400 text-sm">⚠️ Error loading claims data — server returned 500. Please try again later.</p>
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-gray-800">
                    <th className="text-left pb-3">CLAIM ID</th>
                    <th className="text-left pb-3">PATIENT</th>
                    <th className="text-left pb-3">PROVIDER</th>
                    <th className="text-left pb-3">AMOUNT</th>
                    <th className="text-left pb-3">STATUS</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { id: "CLM-8821", patient: "James Osei", provider: "Metro Health", amount: "$4,200", status: "Approved", color: "green" },
                    { id: "CLM-8820", patient: "Maria Santos", provider: "Peak Surgical", amount: "$12,500", status: hasBug('claim_rejected') ? "Rejected" : "Pending", color: hasBug('claim_rejected') ? "red" : "yellow" },
                    { id: "CLM-8819", patient: "David Chen", provider: "City Medical", amount: "$890", status: "Approved", color: "green" },
                    { id: "CLM-8818", patient: "Lisa Park", provider: "Metro Health", amount: "$3,100", status: "In Review", color: "blue" },
                    { id: "CLM-8817", patient: "Robert Miles", provider: "Peak Surgical", amount: "$7,650", status: "Rejected", color: "red" },
                  ].map((claim) => (
                    <tr key={claim.id} className="border-b border-gray-800 hover:bg-gray-800 transition">
                      <td className="py-3 text-cyan-400 font-mono">{claim.id}</td>
                      <td className="py-3 text-white">{claim.patient}</td>
                      <td className="py-3 text-gray-400">{claim.provider}</td>
                      <td className="py-3 text-white">{claim.amount}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium
                          ${claim.color === 'green' ? 'bg-green-900 text-green-400' : ''}
                          ${claim.color === 'yellow' ? 'bg-yellow-900 text-yellow-400' : ''}
                          ${claim.color === 'blue' ? 'bg-blue-900 text-blue-400' : ''}
                          ${claim.color === 'red' ? 'bg-red-900 text-red-400' : ''}
                        `}>
                          {claim.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Claim Status Breakdown */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Claim Status</h3>
            <div className="space-y-4">
              {[
                { label: "Approved", value: 82, color: "bg-green-400" },
                { label: "Pending", value: 13, color: "bg-yellow-400" },
                { label: "Rejected", value: hasBug('claim_rejected') ? 18 : 5, color: "bg-red-400" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-white font-medium">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full">
                    <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="text-gray-400 text-sm mb-3">Top Payers</h4>
              {[
                { name: "BlueCross BlueShield", claims: 412 },
                { name: "Aetna", claims: 287 },
                { name: "UnitedHealth", claims: 243 },
                { name: "Cigna", claims: 198 },
              ].map((payer) => (
                <div key={payer.name} className="flex justify-between text-sm py-2 border-b border-gray-800">
                  <span className="text-gray-400">{payer.name}</span>
                  <span className="text-white">{payer.claims}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Integrations */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4">System Integrations</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "Epic EHR", status: hasBug('epic_sync_fail') ? "Sync Failed" : "Connected", up: !hasBug('epic_sync_fail') },
              { name: "Waystar Clearinghouse", status: hasBug('claim_rejected') ? "Errors Detected" : "Connected", up: !hasBug('claim_rejected') },
              { name: "Change Healthcare", status: hasBug('change_hc_timeout') ? "Timing Out" : "Connected", up: !hasBug('change_hc_timeout') },
              { name: "Availity Portal", status: hasBug('eligibility_mismatch') ? "Data Mismatch" : "Connected", up: !hasBug('eligibility_mismatch') },
            ].map((sys) => (
              <div key={sys.name} className={`rounded-lg p-4 ${sys.up ? 'bg-gray-800' : 'bg-red-950 border border-red-800'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${sys.up ? 'bg-green-400' : 'bg-red-400 animate-pulse'}`}></div>
                  <span className={`text-xs font-medium ${sys.up ? 'text-green-400' : 'text-red-400'}`}>{sys.status}</span>
                </div>
                <p className="text-white text-sm font-medium">{sys.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
