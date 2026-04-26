export default function Patients() {
  return (
    <>
      {/* Top Bar */}
      <div className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8 flex-shrink-0">
        <div>
          <h2 className="text-white font-semibold">Patients</h2>
          <p className="text-gray-500 text-xs">Manage patient records and insurance information</p>
        </div>
        <button className="bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-4 py-2 text-sm transition-colors">
          + Add Patient
        </button>
      </div>

      <div className="flex-1 p-8 overflow-auto">

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Patients", value: "3,847" },
            { label: "Active This Month", value: "612" },
            { label: "Pending Verification", value: "43" },
            { label: "Avg Claims Per Patient", value: "2.1" },
          ].map(s => (
            <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
              <p className="text-gray-400 text-xs">{s.label}</p>
              <p className="text-white text-2xl font-bold mt-1">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <input type="text" placeholder="Search patients..." className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors w-64" />
          <select className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm focus:outline-none focus:border-cyan-400 transition-colors">
            <option>All Insurers</option>
            <option>BlueCross BlueShield</option>
            <option>Aetna</option>
            <option>UnitedHealth</option>
            <option>Cigna</option>
          </select>
          <select className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm focus:outline-none focus:border-cyan-400 transition-colors">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
        </div>

        {/* Patients Table */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="text-gray-500 text-xs border-b border-gray-800">
                <th className="text-left px-6 py-4">PATIENT</th>
                <th className="text-left px-6 py-4">DATE OF BIRTH</th>
                <th className="text-left px-6 py-4">INSURER</th>
                <th className="text-left px-6 py-4">MEMBER ID</th>
                <th className="text-left px-6 py-4">CLAIMS</th>
                <th className="text-left px-6 py-4">STATUS</th>
                <th className="text-left px-6 py-4">ACTION</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-800">
              {[
                { name: "James Osei", dob: "Mar 14, 1978", insurer: "BlueCross BlueShield", memberId: "BCB-4821-77", claims: 3, status: "Active" },
                { name: "Maria Santos", dob: "Jul 22, 1965", insurer: "Aetna", memberId: "ATN-9204-31", claims: 7, status: "Active" },
                { name: "David Chen", dob: "Nov 03, 1990", insurer: "UnitedHealth", memberId: "UHC-1147-88", claims: 1, status: "Active" },
                { name: "Lisa Park", dob: "Feb 19, 1982", insurer: "Cigna", memberId: "CGN-3309-54", claims: 4, status: "Active" },
                { name: "Robert Miles", dob: "Aug 07, 1955", insurer: "BlueCross BlueShield", memberId: "BCB-7712-22", claims: 12, status: "Active" },
                { name: "Angela Torres", dob: "Jan 30, 1973", insurer: "Aetna", memberId: "ATN-6641-09", claims: 2, status: "Pending" },
                { name: "Michael Brown", dob: "Sep 11, 1988", insurer: "UnitedHealth", memberId: "UHC-8823-67", claims: 5, status: "Active" },
                { name: "Sarah Johnson", dob: "Dec 04, 1970", insurer: "Cigna", memberId: "CGN-5540-13", claims: 8, status: "Active" },
                { name: "Kevin Lee", dob: "Apr 27, 1995", insurer: "BlueCross BlueShield", memberId: "BCB-2298-41", claims: 1, status: "Pending" },
                { name: "Patricia Wilson", dob: "Jun 16, 1960", insurer: "Aetna", memberId: "ATN-3317-76", claims: 15, status: "Active" },
              ].map((patient) => (
                <tr key={patient.name} className="hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-white font-medium">{patient.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{patient.dob}</td>
                  <td className="px-6 py-4 text-gray-400">{patient.insurer}</td>
                  <td className="px-6 py-4 text-cyan-400 font-mono text-xs">{patient.memberId}</td>
                  <td className="px-6 py-4 text-white">{patient.claims}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      patient.status === 'Active' ? 'bg-green-900 text-green-400' : 'bg-yellow-900 text-yellow-400'
                    }`}>
                      {patient.status}
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
            <p className="text-gray-500 text-sm">Showing 10 of 3,847 patients</p>
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
