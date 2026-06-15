const users = [
  { name: 'Maria Gonzalez', email: 'mgonzalez@phoenix.gov', role: 'Program Administrator', status: 'Active', lastLogin: 'Today' },
  { name: 'Tom Rodriguez', email: 'trodriguez@phoenix.gov', role: 'Grant Reviewer', status: 'Active', lastLogin: 'Yesterday' },
  { name: 'Sara Williams', email: 'swilliams@phoenix.gov', role: 'Grant Reviewer', status: 'Active', lastLogin: 'Jun 28' },
  { name: 'James Park', email: 'jpark@phoenix.gov', role: 'Read Only', status: 'Inactive', lastLogin: 'Apr 15' },
]

export default function UserManagement() {
  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-500 mt-1 text-sm">Staff accounts and applicant account administration</p>
        </div>
        <button className="bg-[#1B4F8A] hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded text-sm transition">+ Invite Staff</button>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Staff Accounts</h2>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Name</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Role</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Status</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600 text-xs uppercase tracking-wide">Last Login</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map(({ name, email, role, status, lastLogin }) => (
                <tr key={email} className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <div className="font-medium text-gray-800">{name}</div>
                    <div className="text-xs text-gray-400">{email}</div>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{role}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{status}</span>
                  </td>
                  <td className="px-5 py-3 text-gray-500">{lastLogin}</td>
                  <td className="px-5 py-3">
                    <button className="text-xs text-[#1B4F8A] font-semibold hover:underline">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Applicant Account Search</h2>
        <div className="flex gap-3 mb-4">
          <input placeholder="Search by name, email, or organization..." className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400" />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition">Search</button>
        </div>
        <div className="text-center py-8 text-gray-400 text-sm bg-white border border-gray-200 rounded-lg">
          Search for an applicant account above to view or manage
        </div>
      </div>
    </div>
  )
}
