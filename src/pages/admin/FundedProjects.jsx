const projects = [
  { org: 'Maryvale Neighbors', project: 'Community Safety Fair 2025', awarded: '$1,500', cycle: 'FY2025–26', report: 'Pending', disbursed: 'Pending' },
  { org: 'Ahwatukee Alliance', project: 'CPR Training Series', awarded: '$1,000', cycle: 'FY2025–26', report: 'Pending', disbursed: 'Pending' },
  { org: 'Sunnyslope Block Watch', project: 'Community Safety Fair 2024', awarded: '$3,500', cycle: 'FY2024–25', report: 'Submitted ✓', disbursed: 'Nov 1, 2024' },
  { org: 'Desert View Association', project: 'Neighborhood Signage Project', awarded: '$980', cycle: 'FY2024–25', report: 'Submitted ✓', disbursed: 'Nov 1, 2024' },
  { org: 'Central City Block Watch', project: 'Emergency Prep Training', awarded: '$1,000', cycle: 'FY2024–25', report: 'Overdue ⚠', disbursed: 'Nov 1, 2024' },
]

export default function FundedProjects() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Funded Projects</h1>
        <p className="text-gray-500 mt-1 text-sm">Active grants, disbursement status, and completion reports</p>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-5 text-sm text-amber-800">
        <strong>1 completion report overdue.</strong> Central City Block Watch — report was due January 29, 2025.
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Organization</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Project</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Cycle</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Award</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Disbursed</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Report</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {projects.map(({ org, project, awarded, cycle, report, disbursed }) => (
              <tr key={org + cycle} className="hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-gray-800">{org}</td>
                <td className="px-5 py-3 text-gray-600">{project}</td>
                <td className="px-5 py-3 text-gray-500">{cycle}</td>
                <td className="px-5 py-3 font-semibold text-gray-800">{awarded}</td>
                <td className="px-5 py-3 text-gray-500">{disbursed}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-semibold ${report.includes('✓') ? 'text-green-600' : report.includes('⚠') ? 'text-red-600' : 'text-amber-600'}`}>{report}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
