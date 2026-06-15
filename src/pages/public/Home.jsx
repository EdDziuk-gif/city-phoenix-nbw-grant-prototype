import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-[#1B4F8A] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">FY2025–26 Grant Cycle Now Open</div>
            <h1 className="text-4xl font-bold leading-tight mb-4">Strengthening Phoenix Neighborhoods, One Block at a Time</h1>
            <p className="text-blue-100 text-lg mb-8">The Neighborhood Block Watch Grant Program provides funding to registered block watch organizations to enhance public safety, community engagement, and neighborhood improvements across Phoenix.</p>
            <div className="flex gap-4">
              <Link to="/portal/applications/new" className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded transition">Apply Now</Link>
              <Link to="/how-to-apply" className="border border-white/50 hover:border-white text-white px-6 py-3 rounded transition">Learn How It Works</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key dates */}
      <div className="bg-amber-50 border-b border-amber-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 text-sm">
          <div><span className="font-semibold text-gray-700">Application Opens:</span> <span className="text-amber-700">July 1, 2025</span></div>
          <div><span className="font-semibold text-gray-700">Deadline:</span> <span className="text-amber-700">August 15, 2025</span></div>
          <div><span className="font-semibold text-gray-700">Awards Announced:</span> <span className="text-amber-700">October 1, 2025</span></div>
          <div><span className="font-semibold text-gray-700">Max Award:</span> <span className="text-amber-700">$5,000 per organization</span></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: '$2.1M', label: 'Awarded to Date' },
            { value: '380+', label: 'Organizations Funded' },
            { value: '15', label: 'Years of the Program' },
            { value: '$5,000', label: 'Maximum Award' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[#1B4F8A]">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="text-[#1B4F8A] font-bold text-lg mb-2">Who Can Apply</div>
            <p className="text-gray-600 text-sm mb-4">Registered block watch organizations in the City of Phoenix with an active membership of 10 or more households.</p>
            <Link to="/eligibility" className="text-[#1B4F8A] text-sm font-semibold hover:underline">Check Eligibility →</Link>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="text-[#1B4F8A] font-bold text-lg mb-2">What's Funded</div>
            <p className="text-gray-600 text-sm mb-4">Security equipment, community events, safety training, signage, communications tools, and neighborhood improvement projects.</p>
            <Link to="/grant-categories" className="text-[#1B4F8A] text-sm font-semibold hover:underline">View Grant Categories →</Link>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="text-[#1B4F8A] font-bold text-lg mb-2">How to Apply</div>
            <p className="text-gray-600 text-sm mb-4">Create an account, complete the online application, upload supporting documents, and submit before the deadline.</p>
            <Link to="/how-to-apply" className="text-[#1B4F8A] text-sm font-semibold hover:underline">See the Process →</Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#1B4F8A] text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Apply?</h2>
          <p className="text-blue-100 mb-6">Create your applicant account to get started. Applications for the FY2025–26 cycle are open now.</p>
          <Link to="/sign-in" className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3 rounded transition inline-block">Create an Account</Link>
        </div>
      </div>
    </div>
  )
}
