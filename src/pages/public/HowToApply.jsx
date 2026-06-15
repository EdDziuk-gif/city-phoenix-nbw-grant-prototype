import { Link } from 'react-router-dom'

const steps = [
  { n: 1, title: 'Check Eligibility', desc: 'Review the eligibility requirements to confirm your block watch organization qualifies. Contact the program office if you have questions.', link: '/eligibility', linkLabel: 'View Requirements' },
  { n: 2, title: 'Create an Account', desc: 'Register for an applicant account on this portal using your organization email. You\'ll use this account for all future applications and communications.', link: '/sign-in', linkLabel: 'Create Account' },
  { n: 3, title: 'Complete the Application', desc: 'Fill out all five sections of the online application: organization information, project description, budget request, supporting documents, and certification.', link: '/portal/applications/new', linkLabel: 'Start Application' },
  { n: 4, title: 'Submit Before Deadline', desc: 'Review your application and submit before August 15, 2025. You\'ll receive a confirmation email with your application number.', link: null },
  { n: 5, title: 'Review Period', desc: 'Program staff will review submitted applications during August–September 2025. You may be contacted for additional information.', link: null },
  { n: 6, title: 'Award Notification', desc: 'Award decisions are announced October 1, 2025. Funded organizations receive instructions for accepting the grant and submitting required documentation.', link: null },
]

export default function HowToApply() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-1">How to Apply</div>
        <h1 className="text-3xl font-bold text-gray-900">How to Apply</h1>
        <p className="text-gray-500 mt-2 text-lg">Step-by-step guide to the NBW Grant application process.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="space-y-4">
            {steps.map(({ n, title, desc, link, linkLabel }) => (
              <div key={n} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex gap-5">
                <div className="w-10 h-10 rounded-full bg-[#1B4F8A] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">{n}</div>
                <div>
                  <div className="font-bold text-gray-800 mb-1">{title}</div>
                  <p className="text-gray-600 text-sm">{desc}</p>
                  {link && <Link to={link} className="text-[#1B4F8A] text-sm font-semibold hover:underline mt-2 inline-block">{linkLabel} →</Link>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="font-semibold text-gray-800 mb-3">Key Dates — FY2025–26</div>
            <div className="space-y-2 text-sm">
              {[['July 1', 'Applications Open'], ['Aug 15', 'Submission Deadline'], ['Aug–Sep', 'Review Period'], ['Oct 1', 'Awards Announced'], ['Nov 1', 'Funds Disbursed']].map(([d, l]) => (
                <div key={d} className="flex justify-between">
                  <span className="text-gray-500">{l}</span>
                  <span className="font-semibold text-gray-800">{d}, 2025</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">Documents to Prepare</div>
            <ul className="text-sm text-gray-600 space-y-1.5">
              {['Block watch registration certificate', 'Current membership roster (10+ households)', 'Project plan or proposal narrative', 'Itemized budget', 'Organization bank account info (for payment)'].map(d => (
                <li key={d} className="flex gap-2"><span className="text-[#1B4F8A] font-bold">·</span>{d}</li>
              ))}
            </ul>
          </div>
          <Link to="/portal/applications/new" className="block bg-amber-500 hover:bg-amber-400 text-white text-center font-semibold py-3 px-4 rounded-lg transition">
            Start Your Application →
          </Link>
        </div>
      </div>
    </div>
  )
}
