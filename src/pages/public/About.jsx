export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-1">About</div>
        <h1 className="text-3xl font-bold text-gray-900">About the Program</h1>
        <p className="text-gray-500 mt-2 text-lg">Mission, history, and impact of the NBW Grant Program.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-600">The Neighborhood Block Watch Grant Program supports Phoenix residents in building safer, more connected communities by providing direct funding to organized block watch groups. Established in 2010, the program has invested over $2.1 million in neighborhood safety and engagement initiatives citywide.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Program History</h2>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex gap-4"><span className="font-semibold text-gray-800 w-16">2010</span><span>Program established with $100,000 in initial funding. First 18 organizations funded.</span></div>
              <div className="flex gap-4"><span className="font-semibold text-gray-800 w-16">2015</span><span>Expanded to include safety equipment and community event categories. Budget doubled.</span></div>
              <div className="flex gap-4"><span className="font-semibold text-gray-800 w-16">2020</span><span>Online application system launched. Grant amounts increased to $5,000 maximum.</span></div>
              <div className="flex gap-4"><span className="font-semibold text-gray-800 w-16">2025</span><span>Fully integrated digital portal launched with applicant and admin management tools.</span></div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Recent Funded Projects</h2>
            <div className="space-y-3">
              {['Sunnyslope Block Watch — Security camera installation, 3 intersections', 'Ahwatukee Neighborhood Alliance — Annual community safety fair', 'Central City Block Watch — Emergency preparedness training series', 'Desert View Association — Neighborhood signage and lighting'].map(p => (
                <div key={p} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-[#1B4F8A] text-white rounded-lg p-5">
            <div className="text-2xl font-bold">$2.1M+</div>
            <div className="text-blue-200 text-sm">Total funding awarded</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="text-2xl font-bold text-gray-800">380+</div>
            <div className="text-gray-500 text-sm">Organizations funded</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">Program Office</div>
            <div className="text-sm text-gray-600">Office of Neighborhood Services<br />200 W. Washington St.<br />Phoenix, AZ 85003<br /><br />nbw-grants@phoenix.gov<br />(602) 262-7111</div>
          </div>
        </div>
      </div>
    </div>
  )
}
