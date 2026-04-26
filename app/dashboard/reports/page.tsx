export default function Reports() {
  return (
    <>
      {/* Top Bar */}
      <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8 flex-shrink-0">
        <div>
          <h2 className="text-white font-semibold">Reports</h2>
          <p className="text-gray-500 text-xs">Scheduled and on-demand reporting</p>
        </div>
        <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-4 py-2 text-sm transition-colors">
          + New Report
        </button>
      </div>

      <div className="flex-1 p-8 overflow-auto">

        {/* Report Status Alert */}
        <div className="bg-red-950 border border-red-800 rounded-xl p-4 mb-6 flex items-center gap-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <div>
            <p className="text-red-300 font-semibold">2 scheduled reports failed to deliver</p>
            <p className="text-red-500 text-sm">Weekly Claims Summary and Monthly Payer Analysis were not sent. Queue appears stuck since 03:00 AM. Contact support to investigate.</p>
          </div>
          <a href="/dashboard/support" className="ml-auto bg-red-900 hover:bg-red-800 text-red-200 text-sm font-medium px-4 py-2 rounded-lg transition-colors flex-shrink-0">
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
                <th className="text-left pb-3">STATUS</th>
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
                <tr key={report.name} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                  <td className="py-3 text-white font-medium">{report.name}</td>
                  <td className="py-3 text-gray-400">{report.freq}</td>
                  <td className="py-3 text-gray-400">{report.recipients} users</td>
                  <td className="py-3 text-gray-400">{report.lastRun}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.status === 'Failed' ? 'bg-red-900 text-red-400' : 'bg-green-900 text-green-400'
                    }`}>
                      {report.status === 'Failed' ? 'Failed' : 'Delivered'}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">{report.format}</span>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <button className="text-cyan-400 hover:text-cyan-300 text-xs transition-colors">Run Now</button>
                      <button className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Edit</button>
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
              { name: "Claims by Payer", desc: "Breakdown of all claims by insurance payer with approval rates and avg processing time", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
              { name: "Provider Performance", desc: "Claims submitted, approval rate, and rejection reasons by provider", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10"/></svg> },
              { name: "Denial Management", desc: "Full analysis of claim denials — reason codes, trends, and resolution rates", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="14" y2="17"/></svg> },
              { name: "Revenue Cycle", desc: "AR aging, collections, write-offs, and net revenue by payer and period", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
              { name: "Eligibility Verification", desc: "Eligibility check results, failure rates, and coverage verification trends", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg> },
              { name: "Prior Authorization", desc: "PA approval rates, turnaround times, and denial reasons by payer", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
            ].map((r) => (
              <div key={r.name} className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-cyan-400 transition-colors cursor-pointer group">
                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors mb-2">{r.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-400 transition-colors">{r.name}</h4>
                <p className="text-gray-500 text-xs">{r.desc}</p>
                <button className="mt-3 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors">
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
                <tr key={f.file} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                  <td className="py-3 text-white font-mono text-xs">{f.file}</td>
                  <td className="py-3 text-gray-400">{f.by}</td>
                  <td className="py-3 text-gray-400">{f.date}</td>
                  <td className="py-3 text-gray-400">{f.size}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">{f.format}</span>
                  </td>
                  <td className="py-3">
                    <button className="text-cyan-400 hover:text-cyan-300 text-xs transition-colors">Download →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}
