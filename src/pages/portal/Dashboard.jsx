import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Jane</h1>
        <p className="text-gray-500 mt-1 text-sm">Sunnyslope Block Watch · Member since 2022</p>
      </div>

      {/* Alert */}
      <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6 flex gap-3 items-start">
        <span className="text-amber-500 text-lg">⚠</span>
        <div>
          <div className="font-semibold text-amber-800 text-sm">Application deadline approaching</div>
          <div className="text-amber-700 text-sm">Your FY2025–26 application is in draft. The deadline is <strong>August 15, 2025</strong> — 21 days away.</div>
          <Link to="/portal/applications/new" className="text-amber-800 text-sm font-semibold hover:underline mt-1 inline-block">Continue Application →</Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Applications Submitted', value: '3', sub: 'Total lifetime' },
          { label: 'Total Awarded', value: '$11,500', sub: 'Across all cycles' },
          { label: 'Current Status', value: 'Draft', sub: 'FY2025–26', highlight: true },
        ].map(({ label, value, sub, highlight }) => (
          <div key={label} className={`rounded-lg border p-4 ${highlight ? 'bg-amber-50 border-amber-200' : 'bg-white border-gray-200'}`}>
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{label}</div>
            <div className={`text-2xl font-bold ${highlight ? 'text-amber-700' : 'text-gray-800'}`}>{value}</div>
            <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent applications */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-gray-800">My Applications</h2>
            <Link to="/portal/applications" className="text-xs text-[#1B4F8A] hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { cycle: 'FY2025–26', status: 'Draft', statusColor: 'text-amber-600 bg-amber-50', amount: '$4,800' },
              { cycle: 'FY2024–25', status: 'Funded', statusColor: 'text-green-700 bg-green-50', amount: '$3,500' },
              { cycle: 'FY2023–24', status: 'Funded', statusColor: 'text-green-700 bg-green-50', amount: '$4,200' },
            ].map(({ cycle, status, statusColor, amount }) => (
              <div key={cycle} className="px-5 py-3 flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium text-gray-800">{cycle}</div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${statusColor}`}>{status}</span>
                </div>
                <div className="text-sm font-semibold text-gray-700">{amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-gray-800">Messages</h2>
            <Link to="/portal/messages" className="text-xs text-[#1B4F8A] hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { from: 'Program Office', subject: 'FY2025–26 cycle is now open', time: '3 days ago', unread: true },
              { from: 'Program Office', subject: 'Your FY2024–25 grant agreement', time: '8 months ago', unread: false },
            ].map(({ from, subject, time, unread }) => (
              <div key={subject} className={`px-5 py-3 ${unread ? 'bg-blue-50' : ''}`}>
                <div className="flex justify-between items-start">
                  <div className="text-sm font-medium text-gray-800">{from}</div>
                  <div className="text-xs text-gray-400">{time}</div>
                </div>
                <div className={`text-sm mt-0.5 ${unread ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>{subject}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
