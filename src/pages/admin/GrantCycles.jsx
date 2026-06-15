const cycles = [
  { year: 'FY2025–26', status: 'Open', opens: 'Jul 1, 2025', deadline: 'Aug 15, 2025', awards: 'Oct 1, 2025', budget: '$250,000', apps: 47, statusColor: 'bg-green-50 text-green-700' },
  { year: 'FY2024–25', status: 'Closed', opens: 'Jul 1, 2024', deadline: 'Aug 15, 2024', awards: 'Oct 1, 2024', budget: '$248,500', apps: 63, statusColor: 'bg-gray-100 text-gray-600' },
  { year: 'FY2023–24', status: 'Closed', opens: 'Jul 1, 2023', deadline: 'Aug 15, 2023', awards: 'Oct 2, 2023', budget: '$235,000', apps: 58, statusColor: 'bg-gray-100 text-gray-600' },
]

export default function GrantCycles() {
  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Grant Cycles</h1>
          <p className="text-gray-500 mt-1 text-sm">Manage grant cycle dates, budgets, and status</p>
        </div>
        <button className="bg-[#1B4F8A] hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded text-sm transition">+ New Cycle</button>
      </div>

      <div className="space-y-4">
        {cycles.map(({ year, status, opens, deadline, awards, budget, apps, statusColor }) => (
          <div key={year} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-bold text-gray-800">{year}</h2>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${statusColor}`}>{status}</span>
                </div>
                <div className="text-sm text-gray-500 mt-0.5">{apps} applications received</div>
              </div>
              <div className="flex gap-2">
                {status === 'Open' && <button className="text-xs bg-red-50 text-red-600 border border-red-200 font-semibold px-3 py-1.5 rounded hover:bg-red-100 transition">Close Cycle</button>}
                <button className="text-xs border border-gray-300 text-gray-700 font-medium px-3 py-1.5 rounded hover:bg-gray-50 transition">Edit</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-sm">
              {[['Opens', opens], ['Deadline', deadline], ['Awards Sent', awards], ['Budget', budget]].map(([label, val]) => (
                <div key={label}><div className="text-xs text-gray-400 mb-0.5">{label}</div><div className="font-semibold text-gray-800">{val}</div></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
