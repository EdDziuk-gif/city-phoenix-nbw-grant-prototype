import { Link } from 'react-router-dom'

export default function RequestMoreInfo() {
  return (
    <div className="p-6 max-w-3xl">
      <div className="mb-2 text-sm text-gray-500"><Link to="/admin/applications" className="hover:underline">Queue</Link> → <Link to="/admin/applications/review" className="hover:underline">APP-2025-0201</Link> → Request Info</div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Request Additional Information</h1>
        <p className="text-gray-500 mt-1 text-sm">APP-2025-0201 · Desert Ridge Block Watch</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-4">
        <div className="text-sm text-gray-600 mb-4">
          <div className="font-semibold text-gray-800 mb-1">To:</div>
          <div>Robert Chen · Desert Ridge Block Watch · robert.chen@drblockwatch.org</div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 mb-1">Subject</label>
          <input defaultValue="Additional information needed — Application APP-2025-0201" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 mb-2">Information Requested</label>
          <div className="space-y-2 mb-3">
            {['Updated membership roster showing current active households', 'Two or more vendor quotes for camera installation', 'Documentation of the specific incidents referenced in the project narrative'].map(item => (
              <div key={item} className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="text-blue-600" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <textarea rows="5" defaultValue="Dear Robert,&#10;&#10;Thank you for your grant application. After initial review, we need the following additional information before we can continue our evaluation. Please respond by the date indicated below.&#10;&#10;Thank you for your cooperation." className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none focus:outline-none focus:border-blue-400" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">Response Deadline</label>
          <input type="date" defaultValue="2025-07-31" className="border border-gray-300 rounded px-3 py-2 text-sm" />
          <div className="text-xs text-gray-400 mt-1">Applicant will be notified by email and via their portal messages</div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="bg-[#1B4F8A] hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded text-sm transition">Send Request</button>
        <Link to="/admin/applications/review" className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded text-sm hover:bg-gray-50 transition inline-block">Cancel</Link>
      </div>
    </div>
  )
}
