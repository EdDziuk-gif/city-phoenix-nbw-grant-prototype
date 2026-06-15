import { Link } from 'react-router-dom'

export default function ApplicationReview() {
  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-2 text-sm text-gray-500"><Link to="/admin/applications" className="hover:underline">Queue</Link> → APP-2025-0201</div>
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Application Review</h1>
          <p className="text-gray-500 mt-1 text-sm">APP-2025-0201 · Desert Ridge Block Watch · Submitted Jun 29, 2025</p>
        </div>
        <div className="flex gap-2">
          <Link to="/admin/applications/evaluate" className="bg-[#1B4F8A] hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded text-sm transition">Score Application</Link>
          <Link to="/admin/applications/request-info" className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-4 py-2 rounded text-sm transition">Request Info</Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-3">Organization Information</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[['Organization', 'Desert Ridge Block Watch'], ['Registration #', 'PHX-BW-2017-0088'], ['Primary Contact', 'Robert Chen'], ['Phone', '(602) 555-0247'], ['Active Members', '34 households'], ['Neighborhood', 'Desert Ridge / North Phoenix']].map(([k, v]) => (
                <div key={k}><span className="text-gray-500 text-xs">{k}</span><div className="font-medium text-gray-800">{v}</div></div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-3">Project Description</h2>
            <div className="text-sm text-gray-800 mb-2 font-semibold">Security Camera Network Expansion</div>
            <div className="text-xs text-gray-500 mb-3">Category: Safety & Security Equipment</div>
            <p className="text-sm text-gray-700">Desert Ridge Block Watch proposes to expand its existing security camera network by adding three high-definition cameras at key neighborhood entry points. The cameras will monitor Pinnacle Peak Road at 56th Street, Desert Ridge Marketplace entrance, and the community park on 44th Street. Footage will be stored on a local NVR with 30-day retention and accessible to Phoenix PD upon request. This project addresses a documented increase in vehicle break-ins over the past 12 months and has strong community support with 28 of 34 member households signing the project endorsement letter.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-3">Budget Request — $4,500</h2>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                {[['Security cameras (3×)', '$2,100'], ['Installation labor', '$900'], ['NVR / storage system', '$1,200'], ['Cabling and conduit', '$300']].map(([item, amount]) => (
                  <tr key={item}><td className="py-2 text-gray-700">{item}</td><td className="py-2 text-right font-medium text-gray-800">{amount}</td></tr>
                ))}
                <tr className="border-t-2 border-gray-200"><td className="py-2 font-bold text-gray-800">Total</td><td className="py-2 text-right font-bold text-gray-800">$4,500</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-3 text-sm">Documents</h2>
            <div className="space-y-2">
              {[['Registration Certificate', true], ['Membership Roster', true], ['Project Narrative', true], ['Itemized Budget', true], ['Bank Letter', true]].map(([doc, uploaded]) => (
                <div key={doc} className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">{doc}</span>
                  <span className={uploaded ? 'text-green-600 font-semibold' : 'text-red-500'}>{uploaded ? '✓ Uploaded' : '✗ Missing'}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-2 text-sm">Assign Reviewer</h2>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
              <option>— Unassigned —</option>
              <option>Maria Gonzalez</option>
              <option>Tom Rodriguez</option>
              <option>Sara Williams</option>
            </select>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-2 text-sm">Internal Notes</h2>
            <textarea rows="4" placeholder="Add reviewer notes..." className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none focus:outline-none focus:border-blue-400" />
            <button className="mt-2 text-xs text-[#1B4F8A] font-semibold hover:underline">Save Note</button>
          </div>
        </div>
      </div>
    </div>
  )
}
