import { Link } from 'react-router-dom'

export default function ApplicationDetail() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-2 text-sm text-gray-500"><Link to="/portal/applications" className="hover:underline">My Applications</Link> → APP-2024-0089</div>
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Application APP-2024-0089</h1>
          <p className="text-gray-500 mt-1 text-sm">FY2024–25 Cycle · Submitted August 12, 2024</p>
        </div>
        <span className="bg-green-50 text-green-700 text-sm font-semibold px-3 py-1 rounded">Funded</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-3">Project Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex gap-4"><span className="text-gray-500 w-36">Project Title</span><span className="font-medium text-gray-800">Community Safety Fair 2024</span></div>
              <div className="flex gap-4"><span className="text-gray-500 w-36">Category</span><span className="font-medium text-gray-800">Community Events & Outreach</span></div>
              <div className="flex gap-4"><span className="text-gray-500 w-36">Requested</span><span className="font-medium text-gray-800">$3,500</span></div>
              <div className="flex gap-4"><span className="text-gray-500 w-36">Awarded</span><span className="font-semibold text-green-700">$3,500</span></div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-3">Application Timeline</h2>
            <div className="space-y-3 text-sm">
              {[['Aug 12, 2024', 'Submitted', 'Application submitted before deadline', 'green'], ['Aug 20, 2024', 'Under Review', 'Assigned to program staff for review', 'blue'], ['Sep 5, 2024', 'Additional Info Requested', 'Staff requested updated membership roster', 'amber'], ['Sep 8, 2024', 'Info Provided', 'Updated roster uploaded by applicant', 'green'], ['Oct 1, 2024', 'Funded', 'Award of $3,500 approved', 'green']].map(([date, event, detail, color]) => (
                <div key={date} className="flex gap-4">
                  <div className="text-gray-400 w-24 flex-shrink-0 text-xs mt-0.5">{date}</div>
                  <div className="flex-1">
                    <div className={`font-semibold text-${color}-700 text-xs`}>{event}</div>
                    <div className="text-gray-500">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="font-semibold text-green-800 text-sm mb-1">Award Details</div>
            <div className="text-2xl font-bold text-green-700 mb-1">$3,500</div>
            <div className="text-xs text-green-600">Disbursed November 1, 2024</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="font-semibold text-gray-800 text-sm mb-2">Completion Report</div>
            <div className="text-xs text-gray-500 mb-2">Due January 29, 2025</div>
            <span className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded">Submitted ✓</span>
          </div>
          <Link to="/portal/messages" className="block bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:border-blue-300 transition">
            <div className="font-semibold text-gray-800 text-sm mb-1">Messages</div>
            <div className="text-xs text-gray-500">1 message in this thread</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
