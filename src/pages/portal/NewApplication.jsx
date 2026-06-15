import { useState } from 'react'
import { Link } from 'react-router-dom'

const steps = ['Organization Info', 'Project Details', 'Budget Request', 'Documents', 'Review & Submit']

export default function NewApplication() {
  const [step, setStep] = useState(0)

  return (
    <div className="p-6 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">New Grant Application</h1>
        <p className="text-gray-500 mt-1 text-sm">FY2025–26 Cycle · Due August 15, 2025</p>
      </div>

      {/* Step indicator */}
      <div className="flex items-center mb-8">
        {steps.map((label, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <button onClick={() => setStep(i)} className="flex flex-col items-center gap-1 group">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition ${i === step ? 'bg-[#1B4F8A] text-white' : i < step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                {i < step ? '✓' : i + 1}
              </div>
              <div className={`text-xs font-medium whitespace-nowrap hidden md:block ${i === step ? 'text-[#1B4F8A]' : 'text-gray-400'}`}>{label}</div>
            </button>
            {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < step ? 'bg-green-400' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-4">
        {step === 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Organization Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label><input defaultValue="Sunnyslope Block Watch" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label><input defaultValue="PHX-BW-2019-0042" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Date Registered</label><input type="date" defaultValue="2019-03-15" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Primary Contact Name</label><input defaultValue="Jane Smith" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label><input defaultValue="(602) 555-0182" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" /></div>
              <div className="col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">Service Area / Neighborhood Description</label><textarea rows="2" defaultValue="Sunnyslope neighborhood bounded by Northern Ave, 7th Ave, Dunlap Ave, and Cave Creek Rd." className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Active Member Households</label><input type="number" defaultValue="47" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" /></div>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Project Details</h2>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label><input placeholder="e.g., Intersection Security Camera Installation" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Grant Category</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                <option>Safety & Security Equipment</option>
                <option>Community Events & Outreach</option>
                <option>Safety Training & Education</option>
                <option>Signage & Communications</option>
                <option>Neighborhood Improvements</option>
              </select>
            </div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label><textarea rows="5" placeholder="Describe what you plan to do with this grant, how it will benefit your neighborhood, and how success will be measured..." className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Expected Outcomes</label><textarea rows="3" placeholder="What specific outcomes do you expect from this project?" className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none" /></div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Budget Request</h2>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-4 text-sm text-gray-600">Maximum award is <strong>$5,000</strong>. Itemize all expected expenses below.</div>
            <table className="w-full text-sm border border-gray-200 rounded overflow-hidden">
              <thead className="bg-gray-50"><tr><th className="text-left px-4 py-2 font-semibold text-gray-600">Item Description</th><th className="text-left px-4 py-2 font-semibold text-gray-600 w-28">Amount</th></tr></thead>
              <tbody className="divide-y divide-gray-100">
                {['Security camera (×3)', 'Professional installation', 'Conduit and cabling', 'Network video recorder', 'Annual monitoring (1 yr)'].map(item => (
                  <tr key={item}><td className="px-4 py-2"><input defaultValue={item} className="w-full bg-transparent text-gray-700 focus:outline-none" /></td><td className="px-4 py-2"><input className="w-full border border-gray-200 rounded px-2 py-1 text-right focus:outline-none focus:border-blue-400" defaultValue="$960" /></td></tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50"><tr><td className="px-4 py-2 font-bold text-gray-800">Total Requested</td><td className="px-4 py-2 font-bold text-gray-800 text-right">$4,800</td></tr></tfoot>
            </table>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Supporting Documents</h2>
            {[['Block Watch Registration Certificate', true], ['Membership Roster (10+ households)', true], ['Project Plan / Narrative', false], ['Itemized Budget (PDF)', true], ['Organization Bank Letter', false]].map(([doc, uploaded]) => (
              <div key={doc} className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${uploaded ? 'text-green-500' : 'text-gray-300'}`}>{uploaded ? '✓' : '○'}</span>
                  <div>
                    <div className="text-sm font-medium text-gray-800">{doc}</div>
                    <div className="text-xs text-gray-400">{uploaded ? 'Uploaded from My Documents' : 'Required — not yet uploaded'}</div>
                  </div>
                </div>
                <button className="text-xs text-[#1B4F8A] font-semibold hover:underline">{uploaded ? 'Replace' : 'Upload'}</button>
              </div>
            ))}
          </div>
        )}
        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Review & Submit</h2>
            <div className="space-y-3 text-sm">
              {[['Organization', 'Sunnyslope Block Watch · PHX-BW-2019-0042 · 47 households'], ['Project', 'Intersection Security Camera Installation · Safety & Security Equipment'], ['Amount Requested', '$4,800'], ['Documents', '3 of 5 uploaded']].map(([k, v]) => (
                <div key={k} className="flex gap-4 border-b border-gray-100 pb-3">
                  <span className="font-semibold text-gray-600 w-36 flex-shrink-0">{k}</span>
                  <span className="text-gray-800">{v}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <label className="flex gap-3 items-start text-sm text-gray-700">
                <input type="checkbox" className="mt-0.5" />
                <span>I certify that all information provided in this application is true and accurate to the best of my knowledge, and that our organization meets all eligibility requirements for the NBW Grant Program.</span>
              </label>
            </div>
            <Link to="/portal/applications" className="block w-full bg-[#1B4F8A] hover:bg-blue-800 text-white text-center font-semibold py-3 rounded transition">
              Submit Application
            </Link>
          </div>
        )}
      </div>

      {/* Nav buttons */}
      <div className="flex justify-between">
        <button onClick={() => setStep(Math.max(0, step - 1))} className={`px-5 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition ${step === 0 ? 'invisible' : ''}`}>← Back</button>
        {step < steps.length - 1 && (
          <button onClick={() => setStep(step + 1)} className="px-5 py-2 bg-[#1B4F8A] text-white rounded text-sm font-semibold hover:bg-blue-800 transition">Continue →</button>
        )}
      </div>
    </div>
  )
}
