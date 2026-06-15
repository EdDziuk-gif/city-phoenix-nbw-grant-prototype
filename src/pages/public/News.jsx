const articles = [
  { date: 'Jun 25, 2025', tag: 'Announcement', title: 'FY2025–26 Grant Cycle Now Open', body: 'Applications for the FY2025–26 Neighborhood Block Watch Grant cycle are now being accepted. The deadline is August 15, 2025. A total of $250,000 is available for distribution this cycle.' },
  { date: 'Oct 3, 2024', tag: 'Awards', title: '52 Organizations Funded in FY2024–25 Cycle', body: 'The City of Phoenix awarded $248,500 in grants to 52 block watch organizations citywide in the FY2024–25 cycle. Awards supported security equipment, community events, and neighborhood improvements.' },
  { date: 'Aug 30, 2024', tag: 'Reminder', title: 'FY2024–25 Cycle Now Closed', body: 'The FY2024–25 application cycle closed August 15, 2024. All submitted applications are now under review. Applicants can check their status through the applicant portal.' },
  { date: 'Jul 1, 2024', tag: 'Announcement', title: 'Online Portal Launched for FY2024–25 Cycle', body: 'The new online application portal is live for the FY2024–25 grant cycle. Applicants no longer need to submit paper applications. All submissions, document uploads, and status tracking are now handled through this portal.' },
]

const tagColors = { Announcement: 'bg-blue-100 text-blue-700', Awards: 'bg-green-100 text-green-700', Reminder: 'bg-amber-100 text-amber-700' }

export default function News() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-1">News</div>
        <h1 className="text-3xl font-bold text-gray-900">News & Announcements</h1>
        <p className="text-gray-500 mt-2 text-lg">Program updates, cycle announcements, and award news.</p>
      </div>
      <div className="space-y-5">
        {articles.map(({ date, tag, title, body }) => (
          <div key={title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-semibold px-2 py-1 rounded ${tagColors[tag]}`}>{tag}</span>
              <span className="text-xs text-gray-400">{date}</span>
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-sm text-gray-600">{body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
