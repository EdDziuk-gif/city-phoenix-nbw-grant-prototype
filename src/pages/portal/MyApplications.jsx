import { Link } from 'react-router-dom'

const apps = [
  { id: 'APP-2025-0147', cycle: 'FY2025–26', submitted: 'In Progress', status: 'Draft', amount: '$4,800', updated: 'Jun 28, 2025' },
  { id: 'APP-2024-0089', cycle: 'FY2024–25', submitted: 'Aug 12, 2024', status: 'Funded', amount: '$3,500', updated: 'Oct 1, 2024' },
  { id: 'APP-2023-0054', cycle: 'FY2023–24', submitted: 'Aug 9, 2023', status: 'Funded', amount: '$4,200', updated: 'Oct 3, 2023' },
]

const statusStyles = { Draft: 'bg-amber-50 text-amber-700', Funded: 'bg-green-50 text-green-700', 'Under Review': 'bg-blue-50 text-blue-700', Denied: 'bg-red-50 text-red-700' }

export default function MyApplications() {
  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
          <p className="text-gray-500 mt-1 text-sm">All grant applications for Sunnyslope Block Watch</p>
        </div>
        <Link to="/portal/applications/new" className="bg-[#1B4F8A] hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded text-sm transition">
          + New Application
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Application ID</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Cycle</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Status</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Amount</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Last Updated</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {apps.map(({ id, cycle, status, amount, updated }) => (
              <tr key={id} className="hover:bg-gray-50">
                <td className="px-5 py-4 font-mono text-xs text-gray-600">{id}</td>
                <td className="px-5 py-4 font-medium text-gray-800">{cycle}</td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${statusStyles[status]}`}>{status}</span>
                </td>
                <td className="px-5 py-4 font-semibold text-gray-800">{amount}</td>
                <td className="px-5 py-4 text-gray-500">{updated}</td>
                <td className="px-5 py-4">
                  <Link to="/portal/applications/APP-2025-0147" className="text-[#1B4F8A] text-xs font-semibold hover:underline">
                    {status === 'Draft' ? 'Continue →' : 'View →'}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
