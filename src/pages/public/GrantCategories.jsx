import { Link } from 'react-router-dom'

const categories = [
  { name: 'Safety & Security Equipment', max: '$2,500', color: 'blue', examples: ['Security cameras and installation', 'Motion-sensor lighting', 'Emergency alert systems', 'Lock boxes and door hardware'] },
  { name: 'Community Events & Outreach', max: '$1,500', color: 'green', examples: ['National Night Out events', 'Block watch recruitment drives', 'Community safety workshops', 'Neighborhood clean-up events'] },
  { name: 'Safety Training & Education', max: '$1,000', color: 'purple', examples: ['CPR and first aid certification', 'Emergency preparedness training', 'Crime prevention workshops', 'Youth safety programs'] },
  { name: 'Signage & Communications', max: '$1,000', color: 'amber', examples: ['Block watch signage', 'Neighborhood entrance markers', 'Communication tools (radios, apps)', 'Printed safety materials'] },
  { name: 'Neighborhood Improvements', max: '$2,000', color: 'red', examples: ['Traffic calming measures', 'Landscaping for visibility', 'Public space improvements', 'Environmental design projects'] },
]

const colorMap = { blue: 'bg-blue-50 border-blue-200 text-blue-800', green: 'bg-green-50 border-green-200 text-green-800', purple: 'bg-purple-50 border-purple-200 text-purple-800', amber: 'bg-amber-50 border-amber-200 text-amber-800', red: 'bg-red-50 border-red-200 text-red-800' }

export default function GrantCategories() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-1">Grant Categories</div>
        <h1 className="text-3xl font-bold text-gray-900">Grant Categories & Funding</h1>
        <p className="text-gray-500 mt-2 text-lg">What the NBW Grant Program funds and how much is available per category.</p>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-800">
        <strong>Maximum award: $5,000 per organization per cycle.</strong> Awards may span multiple categories. The total requested amount cannot exceed $5,000.
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {categories.map(({ name, max, color, examples }) => (
          <div key={name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <h2 className="font-bold text-gray-800 text-lg">{name}</h2>
              <span className={`text-sm font-semibold px-2 py-1 rounded border ${colorMap[color]}`}>Up to {max}</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              {examples.map(e => <li key={e} className="flex gap-2"><span className="text-[#1B4F8A]">·</span>{e}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-[#1B4F8A] text-white rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Ready to Apply?</h2>
        <p className="text-blue-100 mb-4 text-sm">Applications for the FY2025–26 cycle are open through August 15, 2025.</p>
        <Link to="/portal/applications/new" className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-2.5 rounded transition inline-block">Apply Now</Link>
      </div>
    </div>
  )
}
