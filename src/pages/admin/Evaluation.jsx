import { useState } from 'react'
import { Link } from 'react-router-dom'

const criteria = [
  { label: 'Community Need & Impact', description: 'Does the project address a documented neighborhood safety need?', max: 25 },
  { label: 'Project Feasibility', description: 'Is the plan realistic, well-defined, and achievable within the grant period?', max: 25 },
  { label: 'Budget Reasonableness', description: 'Are costs appropriate and well-justified for the project scope?', max: 20 },
  { label: 'Organization Capacity', description: 'Does the organization have the capacity to execute and report on the project?', max: 20 },
  { label: 'Prior Performance', description: 'Has the organization successfully managed prior grants and submitted required reports?', max: 10 },
]

export default function Evaluation() {
  const [scores, setScores] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '' })
  const total = Object.values(scores).reduce((sum, v) => sum + (parseInt(v) || 0), 0)
  const maxTotal = criteria.reduce((sum, c) => sum + c.max, 0)

  return (
    <div className="p-6 max-w-3xl">
      <div className="mb-2 text-sm text-gray-500"><Link to="/admin/applications" className="hover:underline">Queue</Link> → <Link to="/admin/applications/review" className="hover:underline">APP-2025-0201</Link> → Evaluate</div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Evaluation & Scoring</h1>
        <p className="text-gray-500 mt-1 text-sm">APP-2025-0201 · Desert Ridge Block Watch</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4">
        <div className="px-5 py-3 bg-gray-50 border-b border-gray-200 flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Scoring Rubric</span>
          <span className={`font-bold ${total >= 75 ? 'text-green-600' : total >= 50 ? 'text-amber-600' : 'text-red-600'}`}>{total} / {maxTotal} pts</span>
        </div>
        <div className="divide-y divide-gray-100">
          {criteria.map(({ label, description, max }, i) => (
            <div key={i} className="px-5 py-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{description}</div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <input
                    type="number"
                    min="0"
                    max={max}
                    placeholder="—"
                    value={scores[i]}
                    onChange={e => setScores({ ...scores, [i]: e.target.value })}
                    className="w-16 border border-gray-300 rounded px-2 py-1 text-sm text-right focus:outline-none focus:border-blue-400"
                  />
                  <span className="text-xs text-gray-400">/ {max}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-4">
        <label className="block font-semibold text-gray-800 text-sm mb-2">Evaluator Notes</label>
        <textarea rows="4" placeholder="Summarize your evaluation rationale..." className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none focus:outline-none focus:border-blue-400" />
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-6">
        <label className="block font-semibold text-gray-800 text-sm mb-3">Recommendation</label>
        <div className="flex gap-4">
          {['Approve', 'Approve with Conditions', 'Request More Info', 'Deny'].map(opt => (
            <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="recommendation" className="text-blue-600" />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button className="bg-[#1B4F8A] hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded text-sm transition">Submit Evaluation</button>
        <button className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded text-sm hover:bg-gray-50 transition">Save Draft</button>
      </div>
    </div>
  )
}
