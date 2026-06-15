import { Link } from 'react-router-dom'

const requirements = [
  { label: 'Registered block watch organization', detail: 'Must be registered with the City of Phoenix Office of Neighborhood Services' },
  { label: 'Active membership', detail: 'Minimum 10 participating households within the defined block watch area' },
  { label: 'Phoenix city limits', detail: 'Organization area must fall within incorporated City of Phoenix boundaries' },
  { label: 'Good standing', detail: 'No outstanding compliance issues from prior grant awards' },
  { label: 'Matching funds not required', detail: 'No match requirement, but additional funding sources are encouraged and noted in scoring' },
  { label: 'One application per cycle', detail: 'Each registered organization may submit one application per grant cycle' },
]

export default function Eligibility() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-1">Eligibility</div>
        <h1 className="text-3xl font-bold text-gray-900">Eligibility Requirements</h1>
        <p className="text-gray-500 mt-2 text-lg">Who qualifies for NBW Grant Program funding.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Organization Requirements</h2>
            <div className="space-y-4">
              {requirements.map(({ label, detail }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">✓</div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{label}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Ineligible Organizations</h2>
            <div className="space-y-2">
              {['Homeowners associations (HOAs) — separate funding programs available', 'Organizations located outside Phoenix city limits', 'Groups that are not formally registered block watches', 'Organizations with unresolved prior grant compliance issues'].map(i => (
                <div key={i} className="flex gap-3 text-sm text-gray-600">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <div className="font-semibold text-amber-800 mb-2">Not sure if you qualify?</div>
            <p className="text-sm text-amber-700 mb-3">Contact the program office before applying. We can help determine eligibility and assist with registration if needed.</p>
            <Link to="/contact" className="text-amber-700 text-sm font-semibold hover:underline">Contact Us →</Link>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">Register Your Block Watch</div>
            <p className="text-sm text-gray-600 mb-3">Not yet registered? The Office of Neighborhood Services can help you establish a recognized block watch organization.</p>
            <Link to="/contact" className="text-[#1B4F8A] text-sm font-semibold hover:underline">Get Started →</Link>
          </div>
          <Link to="/portal/applications/new" className="block bg-[#1B4F8A] text-white text-center font-semibold py-3 px-4 rounded-lg hover:bg-blue-800 transition">
            Apply Now →
          </Link>
        </div>
      </div>
    </div>
  )
}
