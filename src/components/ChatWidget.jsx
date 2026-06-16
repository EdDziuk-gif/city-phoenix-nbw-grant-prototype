import { useState, useRef, useEffect } from 'react'

const QUICK_QUESTIONS = [
  'Am I eligible to apply?',
  'When is the deadline?',
  'What can funds be used for?',
  'How much can I apply for?',
  'How do I check my status?',
]

const KB = [
  {
    words: ['eligible', 'eligibility', 'qualify', 'requirement', 'who can'],
    answer:
      'To be eligible, your Block Watch organization must be registered with the City of Phoenix Police Department, have a current registration certificate, and be in good standing (no overdue completion reports). The registered block captain or a designee must submit the application. Organizations that received a grant in the prior cycle must have submitted their completion report before applying again.',
  },
  {
    words: ['deadline', 'due date', 'when', 'close', 'cutoff'],
    answer:
      'The deadline for the FY2025–26 grant cycle is August 15, 2025 at 5:00 PM MST. Late submissions are not accepted. We recommend submitting at least 48 hours early in case you have questions about required documents.',
  },
  {
    words: ['categories', 'use', 'spend', 'fund', 'equipment', 'buy', 'purchase', 'allowed'],
    answer:
      'Grant funds can be used across five categories: Security Equipment (cameras, lighting, locks — up to $2,500), Community Events (block parties, watch meetings — up to $1,500), Safety Training & Education (CPR, emergency prep, safety courses — up to $1,000), Signage & Communications (signs, newsletters, banners — up to $750), and Neighborhood Improvements (beautification directly tied to safety — up to $1,000). You can apply in up to two categories per cycle.',
  },
  {
    words: ['much', 'amount', 'maximum', 'minimum', 'max', 'how much', '$', 'dollar'],
    answer:
      'The maximum award per organization per cycle is $5,000. There is no minimum. You can apply for multiple categories within that cap. Award amounts are based on your project budget, demonstrated need, and available cycle funding.',
  },
  {
    words: ['apply', 'application', 'how to', 'submit', 'steps', 'process', 'start'],
    answer:
      "Applying takes about 20 minutes. Create an account (or sign in), then complete the 5-step application: (1) Organization info, (2) Project description, (3) Budget breakdown, (4) Supporting documents, (5) Review and submit. Once submitted you'll receive a confirmation number immediately. You can save a draft and return at any time before the deadline.",
  },
  {
    words: ['status', 'track', 'check', 'progress', 'where', 'update', 'decision'],
    answer:
      "Log in to your applicant portal and go to My Applications. You'll see real-time status for each application: Submitted, Under Review, Additional Info Requested, Approved, or Denied. You'll also receive email notifications whenever your status changes — no need to call the office.",
  },
  {
    words: ['document', 'upload', 'attach', 'files', 'required', 'what do i need'],
    answer:
      "Required documents vary by category, but typically include: your current Block Watch registration certificate, a project description (1–2 pages), vendor quotes or cost estimates, and a W-9 if your organization hasn't been funded before. Upload them as PDFs in Step 4 of the application. Staff will contact you through the portal if anything is missing.",
  },
  {
    words: ['contact', 'help', 'human', 'person', 'staff', 'phone', 'email', 'office', 'speak'],
    answer:
      "The program team is here to help. Reach the Office of Neighborhood Services at nbw-grants@phoenix.gov or (602) 262-7111, Monday–Friday 8 AM–5 PM MST. You can also send a message directly through your applicant portal once you're signed in.",
  },
  {
    words: ['completion report', 'report', 'after', 'funded', 'what happens'],
    answer:
      "After your grant is awarded and funds are disbursed, you'll have 90 days from your project completion date to submit a completion report through the portal. The report includes a project summary, photos, and expense documentation. Overdue reports make your organization ineligible for future cycles.",
  },
  {
    words: ['sign in', 'account', 'login', 'password', 'create account', 'register'],
    answer:
      "Click \"Applicant Sign In\" in the top-right corner of any page, then select the \"Applicant Sign In\" tab. First-time users: click \"Create Account\" and use your organization's email address. If you've applied before, sign in with your existing credentials. Staff members use the \"Staff Sign In\" tab.",
  },
]

function getResponse(input) {
  const lower = input.toLowerCase()
  for (const entry of KB) {
    if (entry.words.some(w => lower.includes(w))) return entry.answer
  }
  return "I'm not sure about that specific question. For detailed help, contact our program team at nbw-grants@phoenix.gov or call (602) 262-7111, Monday–Friday 8 AM–5 PM. You can also send a message through your applicant portal."
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "Hi! I'm the NBW Grant Assistant. I can answer questions about eligibility, deadlines, grant categories, and how to apply. What would you like to know?",
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [unread, setUnread] = useState(0)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setUnread(0)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  function sendMessage(text) {
    const msg = text.trim()
    if (!msg) return
    setMessages(prev => [...prev, { from: 'user', text: msg }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      const reply = getResponse(msg)
      setMessages(prev => [...prev, { from: 'bot', text: reply }])
      if (!open) setUnread(n => n + 1)
    }, 900 + Math.random() * 600)
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 bg-[#1B4F8A] hover:bg-[#154080] text-white rounded-full shadow-xl flex items-center gap-2.5 px-4 py-3 transition-all"
        style={{ boxShadow: '0 4px 24px rgba(27,79,138,0.35)' }}
        aria-label="Open grant assistant chat"
      >
        <span className="text-xl leading-none">{open ? '✕' : '🤖'}</span>
        {!open && (
          <span className="text-sm font-semibold whitespace-nowrap">Grant Assistant</span>
        )}
        {!open && unread > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ maxHeight: '70vh', boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
        >
          {/* Header */}
          <div className="bg-[#1B4F8A] text-white px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <div className="text-2xl">🤖</div>
            <div>
              <div className="font-bold text-sm leading-tight">NBW Grant Assistant</div>
              <div className="text-xs text-blue-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online · Instant answers
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50" style={{ minHeight: 0 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.from === 'bot' && (
                  <span className="text-base mr-2 self-end mb-0.5 flex-shrink-0">🤖</span>
                )}
                <div
                  className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed max-w-[85%] ${
                    m.from === 'user'
                      ? 'bg-[#1B4F8A] text-white rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <span className="text-base mr-2 self-end mb-0.5">🤖</span>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex gap-1.5 items-center">
                  {[0, 1, 2].map(i => (
                    <span
                      key={i}
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick questions */}
          {messages.length <= 2 && !typing && (
            <div className="px-4 py-2 bg-white border-t border-gray-100 flex-shrink-0">
              <div className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wide">Common questions</div>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_QUESTIONS.map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs bg-blue-50 hover:bg-blue-100 text-[#1B4F8A] rounded-full px-3 py-1.5 transition border border-blue-100 font-medium"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 bg-white border-t border-gray-100 flex gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask a question…"
              className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || typing}
              className="bg-[#1B4F8A] disabled:opacity-40 hover:bg-[#154080] text-white rounded-full w-9 h-9 flex items-center justify-center transition flex-shrink-0"
            >
              <span className="text-base">↑</span>
            </button>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-xs text-gray-400 py-1.5 bg-white border-t border-gray-50 flex-shrink-0">
            Automated assistant · For live help call (602) 262-7111
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  )
}
