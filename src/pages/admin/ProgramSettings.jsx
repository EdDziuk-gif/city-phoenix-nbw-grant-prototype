export default function ProgramSettings() {
  return (
    <div className="p-6 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Program Settings</h1>
        <p className="text-gray-500 mt-1 text-sm">Configure eligibility rules, award limits, and notification templates</p>
      </div>
      <div className="space-y-5">
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-4">Eligibility Rules</h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center"><span className="text-gray-700">Minimum active member households</span><input type="number" defaultValue="10" className="w-20 border border-gray-300 rounded px-3 py-1.5 text-right" /></div>
            <div className="flex justify-between items-center"><span className="text-gray-700">Maximum award per organization</span><input type="text" defaultValue="$5,000" className="w-28 border border-gray-300 rounded px-3 py-1.5 text-right" /></div>
            <div className="flex justify-between items-center"><span className="text-gray-700">Applications per cycle per organization</span><input type="number" defaultValue="1" className="w-20 border border-gray-300 rounded px-3 py-1.5 text-right" /></div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-4">Scoring Configuration</h2>
          <div className="space-y-3 text-sm">
            {[['Community Need & Impact', 25], ['Project Feasibility', 25], ['Budget Reasonableness', 20], ['Organization Capacity', 20], ['Prior Performance', 10]].map(([label, pts]) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-gray-700">{label}</span>
                <div className="flex items-center gap-2">
                  <input type="number" defaultValue={pts} className="w-16 border border-gray-300 rounded px-2 py-1.5 text-right text-sm" />
                  <span className="text-gray-400">pts</span>
                </div>
              </div>
            ))}
            <div className="pt-2 border-t border-gray-100 flex justify-between font-semibold text-gray-800">
              <span>Total</span><span>100 pts</span>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">Email Notification Templates</h2>
          <div className="space-y-2">
            {['Application received confirmation', 'Additional information request', 'Award notification', 'Denial notification', 'Completion report reminder'].map(t => (
              <div key={t} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-700">{t}</span>
                <button className="text-xs text-[#1B4F8A] font-semibold hover:underline">Edit Template</button>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-[#1B4F8A] hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded text-sm transition">Save Settings</button>
      </div>
    </div>
  )
}
