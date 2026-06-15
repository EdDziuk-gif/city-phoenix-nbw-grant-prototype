import { useState } from 'react'

const faqs = [
  { q: 'Who is eligible to apply?', a: 'Registered block watch organizations within Phoenix city limits with at least 10 active member households. HOAs and organizations outside city limits are not eligible.' },
  { q: 'How much can we request?', a: 'Up to $5,000 per organization per grant cycle. Awards may span multiple funding categories.' },
  { q: 'Do we need to provide matching funds?', a: 'No matching funds are required. However, applications that include additional funding sources may receive higher scores during review.' },
  { q: 'Can we apply for multiple grant cycles?', a: 'Yes. Previously funded organizations in good standing may apply in subsequent cycles. Each cycle requires a new application.' },
  { q: 'What is the application deadline?', a: 'August 15, 2025 at 11:59 PM for the FY2025–26 cycle. Late submissions will not be accepted.' },
  { q: 'How long does the review process take?', a: 'Approximately 6–8 weeks after the deadline. Award notifications are sent October 1, 2025.' },
  { q: 'What documents are required?', a: 'Block watch registration certificate, membership roster (10+ households), project narrative, itemized budget, and organization banking information for payment.' },
  { q: 'When are funds disbursed?', a: 'Funds are disbursed to awarded organizations beginning November 1, 2025, following execution of a grant agreement.' },
  { q: 'Can we request funds for expenses already incurred?', a: 'No. Grant funds may only be used for expenses incurred after the award date. Retroactive expenses are not eligible.' },
  { q: 'What reporting is required after receiving a grant?', a: 'Awarded organizations must submit a completion report within 90 days of the grant period end date, documenting how funds were used.' },
]

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition">
        <span className="font-semibold text-gray-800 text-sm">{q}</span>
        <span className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && <div className="px-5 py-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-600">{a}</div>}
    </div>
  )
}

export default function FAQs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-1">FAQs</div>
        <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <p className="text-gray-500 mt-2 text-lg">Common questions about the NBW Grant Program.</p>
      </div>
      <div className="space-y-3">
        {faqs.map(({ q, a }, i) => <FAQItem key={q} q={q} a={a} defaultOpen={i < 3} />)}
      </div>
      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <div className="font-semibold text-gray-800 mb-2">Still have questions?</div>
        <p className="text-sm text-gray-600 mb-4">Our program staff are happy to help. Contact us before the deadline.</p>
        <a href="/contact" className="text-[#1B4F8A] text-sm font-semibold hover:underline">Contact the Program Office →</a>
      </div>
    </div>
  )
}
