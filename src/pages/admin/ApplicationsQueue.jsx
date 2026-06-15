import { Link } from 'react-router-dom'

const apps = [
  { id: 'APP-2025-0201', org: 'Desert Ridge Block Watch', category: 'Safety & Security', amount: '$4,500', submitted: 'Jun 29, 2025', status: 'Pending', reviewer: '—' },
  { id: 'APP-2025-0198', org: 'Central City Neighborhood', category: 'Community Events', amount: '$1,500', submitted: 'Jun 28, 2025', status: 'Pending', reviewer: '—' },
  { id: 'APP-2025-0195', org: 'Ahwatukee Alliance', category: 'Safety Training & Education', amount: '$1,000', submitted: 'Jun 27, 2025', status: 'Under Review', reviewer: 'M. Gonzalez' },
  { id: 'APP-2025-0192', org: 'Laveen Block Watch', category: 'Neighborhood Improvements', amount: '$2,000', submitted: 'Jun 25, 2025', status: 'Under Review', reviewer: 'T. Rodriguez' },
  { id: 'APP-2025-0189', org: 'Sunnyslope Block Watch', category: 'Safety & Security', amount: '$4,800', submitted: 'Jun 24, 2025', status: 'Info Requested', reviewer: 'M. Gonzalez' },
  { id: 'APP-2025-0185', org: 'Maryvale Neighbors', category: 'Community Events', amount: '$1,500', submitted: 'Jun 22, 2025', status: 'Approved', reviewer: 'T. Rodriguez' },
  { id: 'APP-2025-0181', org: 'South Mountain Block Watch', category: 'Signage & Communications', amount: '$980', submitted: 'Jun 21, 2025', status: 'Denied', reviewer: 'M. Gonzalez' },
]

const statusStyles = { Pending: 'bg-gray-100 text-gray-600', 'Under Review': 'bg-blue-50 text-blue-700', 'Info Requested': 'bg-amber-50 text-amber-700', Approved: 'bg-green-50 text-green-700', Denied: 'bg-red-50 text-red-700' }

export default function ApplicationsQueue() {
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Applications Queue</h1>
          <p className="text-gray-500 mt-1 text-sm">FY2025–26 Cycle · 47 total submissions</p>
        </div>
        <div className="flex gap-2">
          <select className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-700 bg-white">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Under Review</option>
            <option>Info Requested</option>
            <option>Approved</option>
            <option>Denied</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-700 bg-white">
            <option>All Categories</option>
            <option>Safety & Security</option>
            <option>Community Events</option>
            <option>Safety Training & Education</option>
            <option>Signage & Communications</option>
            <option>Neighborhood Improvements</option>
          </select>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">ID</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Organization</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Category</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Amount</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Submitted</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Reviewer</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {apps.map(({ id, org, category, amount, submitted, status, reviewer }) => (
              <tr key={id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-mono text-xs text-gray-500">{id}</td>
                <td className="px-4 py-3 font-medium text-gray-800">{org}</td>
                <td className="px-4 py-3 text-gray-600">{category}</td>
                <td className="px-4 py-3 font-semibold text-gray-800">{amount}</td>
                <td className="px-4 py-3 text-gray-500">{submitted}</td>
                <td className="px-4 py-3"><span className={`text-xs font-semibold px-2 py-0.5 rounded ${statusStyles[status]}`}>{status}</span></td>
                <td className="px-4 py-3 text-gray-500 text-xs">{reviewer}</td>
                <td className="px-4 py-3">
                  <Link to="/admin/applications/review" className="text-xs text-[#1B4F8A] font-semibold hover:underline">Review →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
