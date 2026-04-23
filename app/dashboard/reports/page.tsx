export default function Reports() {
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
          <a href="/dashboard/integrations" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition">
            <span>🔗</span> Integrations
          </a>
          <a href="/dashboard/reports" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-800 text-white text-sm font-medium">
            <span>📈</span> Reports
          </a>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <a href="/dashboard/support" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm transition">
            <span>🎫</span> Help & Support
          </a>
          <div className="flex items-center gap-3 px-3 py-2 mt-2">
            <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-gray-950 font-bold text-sm">SK</div>
            <div>
              <p className="text-white text-sm font-medium">Sandra Kim</p>
              <p className="text-gray-500 text-xs">Vertex Logistics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8">
          <div>
            <h2 className="text-white font-semibold">Reports</h2>
            <p className="text-gray-500 text-xs">Scheduled and on-demand reporting</p>
          </div>
          <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-4 py-2 text-sm transition">
            + New Report
          </button>
        </div>

        <div className="flex-1 p-8 overflow-auto">

          {/* Report Status Alert */}
          <div className="bg-red-950 border border-red-800 rounded-xl p-4 mb-6 flex items-center gap-4">
            <span className="text-2xl">🔴</span>
            <div>
              <p className="text-red-300 font-semibold">2 scheduled reports failed to deliver</p>
              <p className="text-red-500 text-sm">Weekly Claims Summary and Monthly Payer Analysis were not sent. Queue appears stuck since 03:00 AM. Contact support to investigate.</p>
            </div>
            <a href="/dashboard/support" className="ml-auto bg-red-800 hover:bg-red-700 text-red-200 text-sm font-medium px-4 py-2 rounded-lg transition flex-shrink-0">
              Submit Ticket →
            </a>
          </div>

          {/* Scheduled Reports */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Scheduled Reports</h3>
              <span className="text-gray-500 text-sm">Next run: Monday 06:00 AM</span>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-gray-500 text-xs border-b border-gray-800">
                  <th className="text-left pb-3">REPORT NAME</th>
                  <th className="text-left pb-3">FREQUENCY</th>
                  <th className="text-left pb-3">RECIPIENTS</th>
                  <th className="text-left pb-3">LAST RUN</th>
                  <th className="text-left pb-3">LAST STATUS</th>
                  <th className="text-left pb-3">FORMAT</th>
                  <th className="text-left pb-3">ACTION</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: "Weekly Claims Summary", freq: "Every Monday", recipients: 4, lastRun: "Apr 14, 2026", status: "Failed", format: "PDF" },
                  { name: "Monthly Payer Analysis", freq: "1st of month", recipients: 6, lastRun: "Apr 01, 2026", status: "Failed", format: "XLSX" },
                  { name: "Daily Eligibility Report", freq: "Daily 07:00 AM", recipients: 2, lastRun: "Apr 21, 2026", status: "Delivered", format: "CSV" },
                  { name: "Quarterly Provider Report", freq: "Quarterly", recipients: 8, lastRun: "Jan 01, 2026", status: "Delivered", format: "PDF" },
                  { name: "Claims Rejection Analysis", freq: "Every Friday", recipients: 3, lastRun: "Apr 18, 2026", status: "Delivered", format: "XLSX" },
                  { name: "AR Aging Report", freq: "Every Monday", recipients: 5, lastRun: "Apr 14, 2026", status: "Delivered", format: "XLSX" },
                ].map((report) => (
                  <tr key={report.name} className="border-b border-gray-800 hover:bg-gray-800 transition">
                    <td className="py-3 text-white font-medium">{report.name}</td>
                    <td className="py-3 text-gray-400">{report.freq}</td>
                    <td className="py-3 text-gray-400">{report.recipients} users</td>
                    <td className="py-3 text-gray-400">{report.lastRun}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        report.status === 'Failed'
                          ? 'bg-red-900 text-red-400'
                          : 'bg-green-900 text-green-400'
                      }`}>
                        {report.status === 'Failed' ? '❌ Failed' : '✅ Delivered'}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">{report.format}</span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <button className="text-cyan-400 hover:text-cyan-300 text-xs transition">Run Now</button>
                        <button className="text-gray-500 hover:text-gray-300 text-xs transition">Edit</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* On Demand Reports */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-white font-semibold mb-4">On-Demand Reports</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Claims by Payer", desc: "Breakdown of all claims by insurance payer with approval rates and avg processing time", icon: "📊" },
                { name: "Provider Performance", desc: "Claims submitted, approval rate, and rejection reasons by provider", icon: "🏥" },
                { name: "Denial Management", desc: "Full analysis of claim denials — reason codes, trends, and resolution rates", icon: "📋" },
                { name: "Revenue Cycle", desc: "AR aging, collections, write-offs, and net revenue by payer and period", icon: "💰" },
                { name: "Eligibility Verification", desc: "Eligibility check results, failure rates, and coverage verification trends", icon: "✅" },
                { name: "Prior Authorization", desc: "PA approval rates, turnaround times, and denial reasons by payer", icon: "📝" },
              ].map((r) => (
                <div key={r.name} className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-cyan-400 transition cursor-pointer group">
                  <div className="text-2xl mb-2">{r.icon}</div>
                  <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-400 transition">{r.name}</h4>
                  <p className="text-gray-500 text-xs">{r.desc}</p>
                  <button className="mt-3 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition">
                    Generate Report →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Downloads */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Recent Downloads</h3>
            <table className="w-full">
              <thead>
                <tr className="text-gray-500 text-xs border-b border-gray-800">
                  <th className="text-left pb-3">FILE NAME</th>
                  <th className="text-left pb-3">GENERATED BY</th>
                  <th className="text-left pb-3">DATE</th>
                  <th className="text-left pb-3">SIZE</th>
                  <th className="text-left pb-3">FORMAT</th>
                  <th className="text-left pb-3">ACTION</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { file: "Claims_by_Payer_Apr2026.xlsx", by: "Sandra Kim", date: "Apr 21, 2026", size: "2.4 MB", format: "XLSX" },
                  { file: "Daily_Eligibility_Apr21.csv", by: "System", date: "Apr 21, 2026", size: "847 KB", format: "CSV" },
                  { file: "Provider_Performance_Q1.pdf", by: "Sandra Kim", date: "Apr 18, 2026", size: "1.1 MB", format: "PDF" },
                  { file: "AR_Aging_Apr14.xlsx", by: "System", date: "Apr 14, 2026", size: "3.2 MB", format: "XLSX" },
                  { file: "Claims_Summary_Apr14.pdf", by: "System", date: "Apr 14, 2026", size: "980 KB", format: "PDF" },
                ].map((f) => (
                  <tr key={f.file} className="border-b border-gray-800 hover:bg-gray-800 transition">
                    <td className="py-3 text-white font-mono text-xs">{f.file}</td>
                    <td className="py-3 text-gray-400">{f.by}</td>
                    <td className="py-3 text-gray-400">{f.date}</td>
                    <td className="py-3 text-gray-400">{f.size}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">{f.format}</span>
                    </td>
                    <td className="py-3">
                      <button className="text-cyan-400 hover:text-cyan-300 text-xs transition">Download →</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}