const docs = [
  { name: 'Block Watch Registration Certificate', type: 'PDF', size: '124 KB', uploaded: 'Mar 15, 2024', used: 3 },
  { name: 'Membership Roster — June 2025', type: 'PDF', size: '88 KB', uploaded: 'Jun 20, 2025', used: 1 },
  { name: 'Organization Bank Letter', type: 'PDF', size: '56 KB', uploaded: 'Mar 15, 2024', used: 2 },
  { name: 'Project Budget — FY2025-26', type: 'PDF', size: '42 KB', uploaded: 'Jun 28, 2025', used: 1 },
  { name: 'Safety Fair Completion Report', type: 'PDF', size: '210 KB', uploaded: 'Jan 15, 2025', used: 1 },
]

export default function MyDocuments() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Documents</h1>
          <p className="text-gray-500 mt-1 text-sm">Uploaded files reusable across all applications</p>
        </div>
        <button className="bg-[#1B4F8A] hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded text-sm transition">+ Upload Document</button>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Document</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Type</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Uploaded</th>
              <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Used In</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {docs.map(({ name, type, size, uploaded, used }) => (
              <tr key={name} className="hover:bg-gray-50">
                <td className="px-5 py-4">
                  <div className="font-medium text-gray-800">{name}</div>
                  <div className="text-xs text-gray-400">{size}</div>
                </td>
                <td className="px-5 py-4"><span className="bg-red-50 text-red-600 text-xs font-semibold px-2 py-0.5 rounded">{type}</span></td>
                <td className="px-5 py-4 text-gray-500">{uploaded}</td>
                <td className="px-5 py-4 text-gray-500">{used} application{used !== 1 ? 's' : ''}</td>
                <td className="px-5 py-4 flex gap-3">
                  <button className="text-xs text-[#1B4F8A] font-semibold hover:underline">View</button>
                  <button className="text-xs text-gray-400 hover:text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
