import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div className="p-6 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1 text-sm">FY2025–26 Grant Cycle · Deadline August 15, 2025</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Submitted', value: '47', color: 'text-gray-800' },
          { label: 'Pending Review', value: '14', color: 'text-amber-600' },
          { label: 'Under Review', value: '21', color: 'text-blue-600' },
          { label: 'Decisions Made', value: '12', color: 'text-green-600' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{label}</div>
            <div className={`text-3xl font-bold ${color}`}>{value}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Pending queue */}
        <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-gray-800">Pending Review <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full ml-2">14</span></h2>
            <Link to="/admin/applications" className="text-xs text-[#1B4F8A] hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { id: 'APP-2025-0201', org: 'Desert Ridge Block Watch', category: 'Safety & Security', amount: '$4,500', submitted: 'Jun 29' },
              { id: 'APP-2025-0198', org: 'Central City Neighborhood', category: 'Community Events', amount: '$1,500', submitted: 'Jun 28' },
              { id: 'APP-2025-0195', org: 'Ahwatukee Alliance', category: 'Safety Training & Education', amount: '$1,000', submitted: 'Jun 27' },
              { id: 'APP-2025-0192', org: 'Laveen Block Watch', category: 'Neighborhood Improvements', amount: '$2,000', submitted: 'Jun 25' },
            ].map(({ id, org, category, amount, submitted }) => (
              <div key={id} className="px-5 py-3 flex justify-between items-center hover:bg-gray-50">
                <div>
                  <div className="text-sm font-medium text-gray-800">{org}</div>
                  <div className="text-xs text-gray-400">{id} · {category} · {submitted}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-700 text-sm">{amount}</span>
                  <Link to="/admin/applications/review" className="text-xs bg-[#1B4F8A] text-white px-3 py-1.5 rounded hover:bg-blue-800 transition font-semibold">Review</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar stats */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-3">Budget Overview</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Total Available</span><span className="font-bold text-gray-800">$250,000</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Requested (all apps)</span><span className="font-bold text-gray-800">$198,400</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Committed</span><span className="font-bold text-green-700">$43,500</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Remaining</span><span className="font-bold text-blue-700">$206,500</span></div>
            </div>
            <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-400 rounded-full" style={{ width: '17%' }} />
            </div>
            <div className="text-xs text-gray-400 mt-1">17% of budget committed</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-3">Upcoming Deadlines</h2>
            <div className="space-y-2 text-sm">
              {[['Aug 15, 2025', 'Application Deadline', 'amber'], ['Oct 1, 2025', 'Award Notifications', 'blue'], ['Nov 1, 2025', 'Fund Disbursement', 'green']].map(([date, event, color]) => (
                <div key={event} className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full bg-${color}-400 mt-1.5 flex-shrink-0`} />
                  <div><div className="font-medium text-gray-800">{date}</div><div className="text-gray-400 text-xs">{event}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
