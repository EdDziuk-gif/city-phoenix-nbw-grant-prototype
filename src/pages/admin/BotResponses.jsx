const responses = [
  {
    id: 1,
    category: 'Eligibility',
    trigger: 'eligible, qualify, who can apply, requirements',
    response:
      'To be eligible, your Block Watch must be registered with the City of Phoenix Police Department, have a current registration certificate, and be in good standing with no overdue completion reports.',
    usage: 214,
    status: 'active',
  },
  {
    id: 2,
    category: 'Deadlines',
    trigger: 'deadline, due date, when is, cutoff, close',
    response:
      'The deadline for the FY2025–26 cycle is August 15, 2025 at 5:00 PM MST. Late submissions are not accepted. We recommend submitting at least 48 hours early.',
    usage: 189,
    status: 'active',
  },
  {
    id: 3,
    category: 'Grant Categories',
    trigger: 'categories, use funds, spend, buy, what is allowed, equipment',
    response:
      'Funds can be used across five categories: Security Equipment (up to $2,500), Community Events (up to $1,500), Safety Training & Education (up to $1,000), Signage & Communications (up to $750), and Neighborhood Improvements (up to $1,000). Up to two categories per application.',
    usage: 176,
    status: 'active',
  },
  {
    id: 4,
    category: 'Award Amount',
    trigger: 'how much, maximum, amount, dollars, award size',
    response:
      'The maximum award per organization per cycle is $5,000. There is no minimum award amount. Actual awards depend on your project budget, demonstrated need, and available cycle funding.',
    usage: 158,
    status: 'active',
  },
  {
    id: 5,
    category: 'Application Process',
    trigger: 'how to apply, steps, process, start application, submit',
    response:
      'Apply through the Applicant Portal in 5 steps: organization info, project description, budget breakdown, document upload, and review/submit. Takes about 20 minutes. You can save a draft and return before the deadline.',
    usage: 143,
    status: 'active',
  },
  {
    id: 6,
    category: 'Status Tracking',
    trigger: 'status, where is my application, decision, check progress, track',
    response:
      'Log in to your Applicant Portal and go to My Applications. Status updates in real time through every stage: Submitted, Under Review, Info Requested, Approved, or Denied. Email notifications are sent on every status change.',
    usage: 121,
    status: 'active',
  },
  {
    id: 7,
    category: 'Documents',
    trigger: 'documents, upload, what do I need, files, attach, required paperwork',
    response:
      "Required documents typically include: current Block Watch registration certificate, project description (1–2 pages), vendor quotes or cost estimates, and a W-9 if your organization hasn't been funded before. Upload as PDFs in Step 4.",
    usage: 98,
    status: 'active',
  },
  {
    id: 8,
    category: 'Completion Reports',
    trigger: 'completion report, after funded, what happens next, close out',
    response:
      'After funds are disbursed, you have 90 days from project completion to submit a completion report through the portal. It includes a project summary, photos, and expense documentation. Overdue reports affect future eligibility.',
    usage: 67,
    status: 'active',
  },
  {
    id: 9,
    category: 'Contact',
    trigger: 'contact, speak to someone, human, staff, phone, email',
    response:
      'Reach our program team at nbw-grants@phoenix.gov or (602) 262-7111, Monday–Friday 8 AM–5 PM MST. You can also send a message through your Applicant Portal once signed in.',
    usage: 54,
    status: 'active',
  },
  {
    id: 10,
    category: 'Fallback',
    trigger: '(no keywords matched)',
    response:
      "I'm not sure about that specific question. For detailed help, contact our program team at nbw-grants@phoenix.gov or (602) 262-7111.",
    usage: 31,
    status: 'active',
  },
]

const categoryColors = {
  Eligibility: 'bg-blue-100 text-blue-800',
  Deadlines: 'bg-amber-100 text-amber-800',
  'Grant Categories': 'bg-green-100 text-green-800',
  'Award Amount': 'bg-purple-100 text-purple-800',
  'Application Process': 'bg-cyan-100 text-cyan-800',
  'Status Tracking': 'bg-indigo-100 text-indigo-800',
  Documents: 'bg-orange-100 text-orange-800',
  'Completion Reports': 'bg-teal-100 text-teal-800',
  Contact: 'bg-pink-100 text-pink-800',
  Fallback: 'bg-gray-100 text-gray-700',
}

export default function BotResponses() {
  const totalUsage = responses.reduce((sum, r) => sum + r.usage, 0)

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Automated Responses</h1>
          <p className="text-gray-500 mt-1 text-sm">
            The Grant Assistant uses keyword matching to respond to applicant questions. Responses are editable by program staff.
          </p>
        </div>
        <button className="flex-shrink-0 bg-[#1B4F8A] hover:bg-[#154080] text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
          + Add Response
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Active Responses', value: responses.filter(r => r.status === 'active').length, color: 'text-[#1B4F8A]' },
          { label: 'Total Uses This Cycle', value: totalUsage.toLocaleString(), color: 'text-[#1B4F8A]' },
          { label: 'Avg. Uses per Response', value: Math.round(totalUsage / responses.length), color: 'text-[#1B4F8A]' },
          { label: 'Fallback Rate', value: `${Math.round((31 / totalUsage) * 100)}%`, color: 'text-amber-600' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4">
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Fallback alert */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
        <span className="text-amber-500 text-lg flex-shrink-0 mt-0.5">⚠</span>
        <div>
          <div className="text-sm font-semibold text-amber-800">Fallback rate at 2.4%</div>
          <div className="text-xs text-amber-700 mt-0.5">
            31 questions this cycle didn't match any response. Review the Knowledge Base to identify gaps. Common unmatched topics: "appeal process," "reimbursement timeline."
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <th className="text-left px-5 py-3">Category</th>
              <th className="text-left px-5 py-3">Trigger Keywords</th>
              <th className="text-left px-5 py-3">Response Preview</th>
              <th className="text-right px-5 py-3">Uses</th>
              <th className="text-center px-5 py-3">Status</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {responses.map(r => (
              <tr key={r.id} className="hover:bg-gray-50 transition">
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[r.category] || 'bg-gray-100 text-gray-700'}`}>
                    {r.category}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-xs text-gray-500 max-w-[180px]">
                  <span className="line-clamp-2 font-mono">{r.trigger}</span>
                </td>
                <td className="px-5 py-3.5 text-gray-700 max-w-xs">
                  <span className="line-clamp-2">{r.response}</span>
                </td>
                <td className="px-5 py-3.5 text-right font-semibold text-gray-700">
                  {r.usage}
                </td>
                <td className="px-5 py-3.5 text-center">
                  <span className="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
                    Active
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <button className="text-xs text-[#1B4F8A] hover:underline font-medium">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        Changes to responses take effect immediately for new conversations. Existing conversations are not affected.
      </p>
    </div>
  )
}
