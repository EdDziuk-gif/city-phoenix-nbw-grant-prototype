export default function Reports() {
  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-500 mt-1 text-sm">Program statistics, exports, and cycle summaries</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {[
          { title: 'Cycle Summary Report', desc: 'Applications received, funded, denied, and budget utilization by cycle', icon: '📊' },
          { title: 'Funded Organizations Report', desc: 'List of all organizations funded, project types, and award amounts', icon: '📋' },
          { title: 'Budget Utilization Report', desc: 'Committed vs. available funds, disbursement timeline', icon: '💰' },
          { title: 'Completion Reports Export', desc: 'All submitted completion reports for a given cycle', icon: '✓' },
        ].map(({ title, desc, icon }) => (
          <div key={title} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex gap-4 items-start">
            <div className="text-2xl">{icon}</div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800 mb-1">{title}</div>
              <div className="text-sm text-gray-500 mb-3">{desc}</div>
              <div className="flex gap-2">
                <select className="border border-gray-300 rounded px-2 py-1 text-xs text-gray-600 bg-white">
                  <option>FY2025–26</option>
                  <option>FY2024–25</option>
                  <option>FY2023–24</option>
                  <option>All Cycles</option>
                </select>
                <button className="text-xs bg-[#1B4F8A] text-white font-semibold px-3 py-1 rounded hover:bg-blue-800 transition">Export PDF</button>
                <button className="text-xs border border-gray-300 text-gray-600 px-3 py-1 rounded hover:bg-gray-50 transition">Export CSV</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h2 className="font-semibold text-gray-800 mb-4">Program Overview — FY2025–26</h2>
        <div className="grid grid-cols-4 gap-4 text-sm">
          {[['Applications Received', '47'], ['Total Requested', '$198,400'], ['Approved to Date', '$43,500'], ['Budget Remaining', '$206,500']].map(([k, v]) => (
            <div key={k} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-[#1B4F8A] mb-1">{v}</div>
              <div className="text-xs text-gray-500">{k}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
