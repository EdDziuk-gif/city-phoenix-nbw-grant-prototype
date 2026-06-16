const documents = [
  {
    id: 1,
    name: 'NBW Grant Program Guidelines FY2025–26',
    type: 'PDF',
    size: '1.2 MB',
    added: 'Mar 12, 2025',
    status: 'trained',
    chunks: 47,
    icon: '📄',
  },
  {
    id: 2,
    name: 'Eligibility Requirements — Full Criteria',
    type: 'PDF',
    size: '340 KB',
    added: 'Mar 12, 2025',
    status: 'trained',
    chunks: 12,
    icon: '📄',
  },
  {
    id: 3,
    name: 'Grant Category Descriptions & Allowable Costs',
    type: 'PDF',
    size: '520 KB',
    added: 'Mar 14, 2025',
    status: 'trained',
    chunks: 21,
    icon: '📄',
  },
  {
    id: 4,
    name: 'Application Instructions — Step-by-Step Guide',
    type: 'PDF',
    size: '890 KB',
    added: 'Mar 14, 2025',
    status: 'trained',
    chunks: 34,
    icon: '📄',
  },
  {
    id: 5,
    name: 'FY2024–25 FAQ Sheet (Applicant Edition)',
    type: 'DOCX',
    size: '210 KB',
    added: 'Mar 15, 2025',
    status: 'trained',
    chunks: 18,
    icon: '📝',
  },
  {
    id: 6,
    name: 'Completion Report Instructions',
    type: 'PDF',
    size: '415 KB',
    added: 'Mar 15, 2025',
    status: 'trained',
    chunks: 15,
    icon: '📄',
  },
  {
    id: 7,
    name: 'FY2025–26 Scoring Rubric',
    type: 'PDF',
    size: '280 KB',
    added: 'Apr 2, 2025',
    status: 'trained',
    chunks: 9,
    icon: '📄',
  },
  {
    id: 8,
    name: 'Appeals & Review Process Policy',
    type: 'PDF',
    size: '195 KB',
    added: 'Jun 1, 2025',
    status: 'pending',
    chunks: 0,
    icon: '📄',
  },
]

const trainingLog = [
  { date: 'Jun 1, 2025', event: 'Document uploaded: Appeals & Review Process Policy', status: 'pending' },
  { date: 'Apr 2, 2025', event: 'Document trained: FY2025–26 Scoring Rubric — 9 chunks indexed', status: 'success' },
  { date: 'Mar 15, 2025', event: 'Document trained: Completion Report Instructions — 15 chunks indexed', status: 'success' },
  { date: 'Mar 15, 2025', event: 'Document trained: FY2024–25 FAQ Sheet — 18 chunks indexed', status: 'success' },
  { date: 'Mar 14, 2025', event: 'Document trained: Application Instructions — 34 chunks indexed', status: 'success' },
  { date: 'Mar 14, 2025', event: 'Document trained: Grant Category Descriptions — 21 chunks indexed', status: 'success' },
  { date: 'Mar 12, 2025', event: 'Document trained: Eligibility Requirements — 12 chunks indexed', status: 'success' },
  { date: 'Mar 12, 2025', event: 'Initial knowledge base created from program guidelines — 47 chunks indexed', status: 'success' },
]

export default function BotTraining() {
  const trainedDocs = documents.filter(d => d.status === 'trained')
  const totalChunks = documents.reduce((sum, d) => sum + d.chunks, 0)

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Documents uploaded here train the Grant Assistant. The assistant searches this knowledge base before generating responses.
          </p>
        </div>
        <button className="flex-shrink-0 bg-[#1B4F8A] hover:bg-[#154080] text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
          + Upload Document
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Documents in Knowledge Base', value: trainedDocs.length, color: 'text-[#1B4F8A]' },
          { label: 'Total Knowledge Chunks', value: totalChunks, color: 'text-[#1B4F8A]' },
          { label: 'Pending Training', value: documents.filter(d => d.status === 'pending').length, color: 'text-amber-600' },
          { label: 'Last Updated', value: 'Jun 1, 2025', color: 'text-gray-700' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4">
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Pending training alert */}
      {documents.some(d => d.status === 'pending') && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
          <span className="text-amber-500 text-lg flex-shrink-0 mt-0.5">⚠</span>
          <div className="flex-1">
            <div className="text-sm font-semibold text-amber-800">1 document pending training</div>
            <div className="text-xs text-amber-700 mt-0.5">
              "Appeals & Review Process Policy" was uploaded but not yet trained. The assistant cannot answer questions about this topic until training is complete.
            </div>
          </div>
          <button className="flex-shrink-0 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition">
            Train Now
          </button>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Document list */}
        <div className="col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between">
              <div className="text-sm font-semibold text-gray-700">Source Documents</div>
              <div className="text-xs text-gray-400">{documents.length} documents</div>
            </div>
            <div className="divide-y divide-gray-100">
              {documents.map(doc => (
                <div key={doc.id} className="px-5 py-3.5 flex items-center gap-4 hover:bg-gray-50 transition">
                  <span className="text-xl flex-shrink-0">{doc.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 truncate">{doc.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {doc.type} · {doc.size} · Added {doc.added}
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    {doc.status === 'trained' ? (
                      <>
                        <div className="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full inline-block">
                          Trained
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{doc.chunks} chunks</div>
                      </>
                    ) : (
                      <div className="text-xs font-semibold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full inline-block">
                        Pending
                      </div>
                    )}
                  </div>
                  <button className="flex-shrink-0 text-xs text-gray-400 hover:text-red-500 transition ml-1">✕</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training log + coverage */}
        <div className="flex flex-col gap-4">
          {/* Coverage */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="text-sm font-semibold text-gray-700 mb-3">Topic Coverage</div>
            {[
              { topic: 'Eligibility', pct: 96 },
              { topic: 'Application Process', pct: 94 },
              { topic: 'Grant Categories', pct: 91 },
              { topic: 'Deadlines & Dates', pct: 89 },
              { topic: 'Documents Required', pct: 85 },
              { topic: 'Status & Decisions', pct: 82 },
              { topic: 'Appeals', pct: 24 },
            ].map(item => (
              <div key={item.topic} className="mb-2.5">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">{item.topic}</span>
                  <span className={`font-semibold ${item.pct < 50 ? 'text-amber-600' : 'text-gray-700'}`}>
                    {item.pct}%
                  </span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.pct < 50 ? 'bg-amber-400' : 'bg-[#1B4F8A]'}`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
            <p className="text-xs text-amber-600 mt-3 font-medium">
              ⚠ Appeals coverage low — upload the policy document to improve.
            </p>
          </div>

          {/* Training log */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 flex-1">
            <div className="text-sm font-semibold text-gray-700 mb-3">Training Log</div>
            <div className="flex flex-col gap-3">
              {trainingLog.map((entry, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <span className={`mt-0.5 flex-shrink-0 text-base ${entry.status === 'pending' ? '⏳' : '✅'}`}>
                    {entry.status === 'pending' ? '⏳' : '✅'}
                  </span>
                  <div>
                    <div className="text-xs text-gray-700 leading-snug">{entry.event}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{entry.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
