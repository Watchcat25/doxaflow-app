export default function Providers() {
  return (
    <>
      {/* Top Bar */}
      <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8 flex-shrink-0">
        <div>
          <h2 className="text-white font-semibold">Provider Directory</h2>
          <p className="text-gray-500 text-xs">Credentialed network providers — Zeloric Health Network</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-500 text-sm">Last updated: Apr 21, 2026 at 06:00 AM</span>
          <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-4 py-2 text-sm transition-colors">
            + Credential Provider
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-amber-950 border-b border-amber-900 px-8 py-3 flex items-center gap-3 flex-shrink-0">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        <p className="text-amber-400 text-sm font-medium">3 providers have credentialing renewals due within 30 days.</p>
        <button className="text-cyan-400 hover:underline text-sm ml-2">Review now →</button>
      </div>

      <div className="flex-1 p-6 overflow-auto">

        {/* KPI Row */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {[
            { label: "Total Providers", value: "284", sub: "in network", alert: false },
            { label: "Active", value: "271", sub: "credentialed", alert: false },
            { label: "Pending Review", value: "8", sub: "applications", alert: false },
            { label: "Renewal Due", value: "3", sub: "within 30 days", alert: true },
            { label: "Avg Claims/Provider", value: "94.2", sub: "this quarter", alert: false },
          ].map(k => (
            <div key={k.label} className={`bg-gray-900 border rounded-xl p-4 ${k.alert ? 'border-amber-800' : 'border-gray-800'}`}>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{k.label}</p>
              <p className={`text-2xl font-bold mt-1 ${k.alert ? 'text-amber-400' : 'text-white'}`}>{k.value}</p>
              <p className="text-gray-500 text-xs mt-0.5">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-4 flex items-center gap-3 flex-wrap">
          <input type="text" placeholder="Search by name, NPI, specialty..." className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors w-72" />
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-400 text-sm focus:outline-none focus:border-cyan-400 transition-colors">
            <option>All Specialties</option>
            <option>Internal Medicine</option>
            <option>Orthopedic Surgery</option>
            <option>Cardiology</option>
            <option>Radiology</option>
            <option>Emergency Medicine</option>
            <option>Oncology</option>
          </select>
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-400 text-sm focus:outline-none focus:border-cyan-400 transition-colors">
            <option>All Networks</option>
            <option>BlueCross BlueShield</option>
            <option>Aetna</option>
            <option>UnitedHealth</option>
            <option>Cigna</option>
          </select>
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-400 text-sm focus:outline-none focus:border-cyan-400 transition-colors">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Suspended</option>
            <option>Renewal Due</option>
          </select>
          <button className="bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-lg px-4 py-2 text-sm transition-colors font-medium ml-auto">
            Export CSV
          </button>
        </div>

        {/* Provider Table */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <div className="bg-gray-800 px-6 py-3 flex items-center gap-2 border-b border-gray-700">
            <span className="text-white text-sm font-semibold">Provider Roster</span>
            <span className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded-full">284 providers</span>
          </div>

          <table className="w-full">
            <thead>
              <tr className="text-gray-500 text-xs border-b border-gray-800 font-semibold uppercase tracking-wide">
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
            <tbody className="divide-y divide-gray-800">
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
              ].map((provider) => (
                <tr key={provider.npi} className="hover:bg-gray-800 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {provider.name.split(' ').slice(1).map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{provider.name}</p>
                        <p className="text-gray-500 text-xs">{provider.credentials}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-cyan-400 font-mono text-xs">{provider.npi}</td>
                  <td className="px-6 py-4 text-gray-300 text-sm">{provider.specialty}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{provider.facility}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1 flex-wrap">
                      {provider.networks.map(n => (
                        <span key={n} className="px-1.5 py-0.5 bg-gray-800 text-gray-300 border border-gray-700 rounded text-xs font-medium">{n}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={provider.status === 'Renewal Due' ? 'text-amber-400 font-semibold' : 'text-gray-400'}>
                      {provider.expiry}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold
                      ${provider.status === 'Active' ? 'bg-green-900 text-green-400' : ''}
                      ${provider.status === 'Renewal Due' ? 'bg-amber-900 text-amber-400' : ''}
                      ${provider.status === 'Pending' ? 'bg-gray-800 text-gray-400' : ''}
                      ${provider.status === 'Suspended' ? 'bg-red-900 text-red-400' : ''}
                    `}>
                      {provider.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white font-medium text-sm">{provider.claims.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <button className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors">View Profile →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-gray-900 border-t border-gray-800 px-6 py-3 flex items-center justify-between">
            <p className="text-gray-500 text-sm">Showing 10 of 284 providers</p>
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
