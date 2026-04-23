export default function Providers() {
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
          <a href="/dashboard/providers" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-800 text-white text-sm font-medium">
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
            <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-gray-950 font-bold text-sm">SK</div>
            <div>
              <p className="text-white text-sm font-medium">Sandra Kim</p>
              <p className="text-gray-500 text-xs">Vertex Logistics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-slate-50">

        {/* Top Bar */}
        <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-slate-800 font-bold text-lg">Provider Directory</h2>
              <p className="text-slate-500 text-xs">Credentialed network providers — Zeloric Health Network</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm">Last updated: Apr 21, 2026 at 06:00 AM</span>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded px-4 py-2 text-sm transition">
              + Credential Provider
            </button>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-8 py-3 flex items-center gap-3">
          <span className="text-amber-600 text-sm">⚠️</span>
          <p className="text-amber-700 text-sm font-medium">3 providers have credentialing renewals due within 30 days.</p>
          <button className="text-blue-600 hover:underline text-sm ml-2">Review now →</button>
        </div>

        <div className="flex-1 p-6 overflow-auto">

          {/* KPI Row */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            {[
              { label: "Total Providers", value: "284", sub: "in network" },
              { label: "Active", value: "271", sub: "credentialed" },
              { label: "Pending Review", value: "8", sub: "applications" },
              { label: "Renewal Due", value: "3", sub: "within 30 days", alert: true },
              { label: "Avg Claims/Provider", value: "94.2", sub: "this quarter" },
            ].map(k => (
              <div key={k.label} className={`bg-white border rounded-lg p-4 shadow-sm ${k.alert ? 'border-amber-300' : 'border-slate-200'}`}>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">{k.label}</p>
                <p className={`text-2xl font-bold mt-1 ${k.alert ? 'text-amber-600' : 'text-slate-800'}`}>{k.value}</p>
                <p className="text-slate-400 text-xs mt-0.5">{k.sub}</p>
              </div>
            ))}
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 mb-4 shadow-sm flex items-center gap-3 flex-wrap">
            <input type="text" placeholder="Search by name, NPI, specialty..." className="border border-slate-300 rounded px-3 py-2 text-slate-700 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 transition w-72" />
            <select className="border border-slate-300 rounded px-3 py-2 text-slate-600 text-sm focus:outline-none focus:border-blue-500 transition">
              <option>All Specialties</option>
              <option>Internal Medicine</option>
              <option>Orthopedic Surgery</option>
              <option>Cardiology</option>
              <option>Radiology</option>
              <option>Emergency Medicine</option>
              <option>Oncology</option>
            </select>
            <select className="border border-slate-300 rounded px-3 py-2 text-slate-600 text-sm focus:outline-none focus:border-blue-500 transition">
              <option>All Networks</option>
              <option>BlueCross BlueShield</option>
              <option>Aetna</option>
              <option>UnitedHealth</option>
              <option>Cigna</option>
            </select>
            <select className="border border-slate-300 rounded px-3 py-2 text-slate-600 text-sm focus:outline-none focus:border-blue-500 transition">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
              <option>Renewal Due</option>
            </select>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 rounded px-4 py-2 text-sm transition font-medium">
              Export CSV
            </button>
          </div>

          {/* Provider Table */}
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">

            {/* Table Header */}
            <div className="bg-slate-700 px-6 py-3 flex items-center gap-2">
              <span className="text-white text-sm font-semibold">Provider Roster</span>
              <span className="bg-slate-500 text-slate-200 text-xs px-2 py-0.5 rounded-full">284 providers</span>
            </div>

            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wide">
                  <th className="text-left px-6 py-3">PROVIDER</th>
                  <th className="text-left px-6 py-3">NPI</th>
                  <th className="text-left px-6 py-3">SPECIALTY</th>
                  <th className="text-left px-6 py-3">FACILITY</th>
                  <th className="text-left px-6 py-3">NETWORKS</th>
                  <th className="text-left px-6 py-3">CRED. EXPIRY</th>
                  <th className="text-left px-6 py-3">STATUS</th>
                  <th className="text-left px-6 py-3">CLAIMS YTD</th>
                  <th className="text-left px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: "Dr. Priya Nair", credentials: "MD, FACP", npi: "1234567890", specialty: "Internal Medicine", facility: "Metro Health Group", networks: ["BCBS","Aetna"], expiry: "Dec 2026", status: "Active", claims: 412 },
                  { name: "Dr. James Whitfield", credentials: "MD, FACS", npi: "2345678901", specialty: "Orthopedic Surgery", facility: "Peak Surgical Center", networks: ["UHC","Cigna"], expiry: "Mar 2026", status: "Renewal Due", claims: 287 },
                  { name: "Dr. Elena Vasquez", credentials: "MD, PhD", npi: "3456789012", specialty: "Cardiology", facility: "City Medical Center", networks: ["BCBS","UHC","Aetna"], expiry: "Aug 2026", status: "Active", claims: 334 },
                  { name: "Dr. Marcus Thompson", credentials: "MD", npi: "4567890123", specialty: "Emergency Medicine", facility: "Riverside Clinic", networks: ["Cigna"], expiry: "Jun 2026", status: "Active", claims: 198 },
                  { name: "Dr. Aisha Patel", credentials: "MD, DABR", npi: "5678901234", specialty: "Radiology", facility: "Metro Health Group", networks: ["BCBS","Aetna","Cigna"], expiry: "Feb 2026", status: "Renewal Due", claims: 521 },
                  { name: "Dr. Samuel Okonkwo", credentials: "MD, FACC", npi: "6789012345", specialty: "Cardiology", facility: "Peak Surgical Center", networks: ["UHC"], expiry: "Oct 2026", status: "Active", claims: 267 },
                  { name: "Dr. Rachel Kim", credentials: "MD", npi: "7890123456", specialty: "Oncology", facility: "City Medical Center", networks: ["BCBS","UHC"], expiry: "Sep 2026", status: "Active", claims: 143 },
                  { name: "Dr. Thomas Berg", credentials: "MD, FACS", npi: "8901234567", specialty: "Orthopedic Surgery", facility: "Riverside Clinic", networks: ["Aetna","Cigna"], expiry: "Jan 2026", status: "Renewal Due", claims: 309 },
                  { name: "Dr. Fatima Al-Rashid", credentials: "MD", npi: "9012345678", specialty: "Internal Medicine", facility: "Metro Health Group", networks: ["BCBS"], expiry: "Nov 2026", status: "Active", claims: 88 },
                  { name: "Dr. Chris Mendoza", credentials: "MD, MPH", npi: "0123456789", specialty: "Emergency Medicine", facility: "City Medical Center", networks: ["UHC","Aetna"], expiry: "—", status: "Pending", claims: 0 },
                ].map((provider, i) => (
                  <tr key={provider.npi} className={`hover:bg-blue-50 transition cursor-pointer ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {provider.name.split(' ').slice(1).map(n => n[0]).join('').slice(0,2)}
                        </div>
                        <div>
                          <p className="text-slate-800 font-semibold text-sm">{provider.name}</p>
                          <p className="text-slate-400 text-xs">{provider.credentials}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-mono text-xs">{provider.npi}</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">{provider.specialty}</td>
                    <td className="px-6 py-4 text-slate-500 text-sm">{provider.facility}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1 flex-wrap">
                        {provider.networks.map(n => (
                          <span key={n} className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">{n}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={provider.status === 'Renewal Due' ? 'text-amber-600 font-semibold' : 'text-slate-500'}>
                        {provider.expiry}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold
                        ${provider.status === 'Active' ? 'bg-green-100 text-green-700' : ''}
                        ${provider.status === 'Renewal Due' ? 'bg-amber-100 text-amber-700' : ''}
                        ${provider.status === 'Pending' ? 'bg-slate-100 text-slate-600' : ''}
                        ${provider.status === 'Suspended' ? 'bg-red-100 text-red-700' : ''}
                      `}>
                        {provider.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-700 font-medium text-sm">{provider.claims.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-800 text-xs font-medium transition">View Profile →</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Table Footer */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between">
              <p className="text-slate-500 text-sm">Showing 10 of 284 providers</p>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 border border-slate-300 bg-white text-slate-500 rounded text-sm hover:bg-slate-100 transition">Previous</button>
                <button className="px-3 py-1 bg-blue-700 text-white rounded text-sm font-medium">1</button>
                <button className="px-3 py-1 border border-slate-300 bg-white text-slate-500 rounded text-sm hover:bg-slate-100 transition">2</button>
                <button className="px-3 py-1 border border-slate-300 bg-white text-slate-500 rounded text-sm hover:bg-slate-100 transition">3</button>
                <button className="px-3 py-1 border border-slate-300 bg-white text-slate-500 rounded text-sm hover:bg-slate-100 transition">Next</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}