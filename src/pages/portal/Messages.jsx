const threads = [
  { id: 1, from: 'Program Office', subject: 'FY2025–26 cycle is now open', preview: 'The FY2025–26 Neighborhood Block Watch Grant cycle is now open. Applications are being accepted through August 15, 2025...', date: 'Jun 25, 2025', unread: true },
  { id: 2, from: 'Maria Gonzalez', subject: 'Additional information requested — APP-2024-0089', preview: 'Thank you for your application. We need an updated membership roster that reflects your current members...', date: 'Sep 5, 2024', unread: false },
  { id: 3, from: 'Program Office', subject: 'Award notification — APP-2024-0089 Funded', preview: 'Congratulations! Your application for the FY2024–25 NBW Grant has been approved for $3,500...', date: 'Oct 1, 2024', unread: false },
]

export default function Messages() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-500 mt-1 text-sm">Communications from the NBW Grant Program office</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-100">
          {threads.map(({ id, from, subject, preview, date, unread }) => (
            <div key={id} className={`flex gap-4 px-5 py-4 cursor-pointer hover:bg-gray-50 ${unread ? 'bg-blue-50' : ''}`}>
              <div className="w-9 h-9 bg-[#1B4F8A] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {from.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className={`text-sm ${unread ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>{from}</span>
                  <span className="text-xs text-gray-400 ml-3 flex-shrink-0">{date}</span>
                </div>
                <div className={`text-sm ${unread ? 'font-semibold text-gray-800' : 'text-gray-600'} truncate`}>{subject}</div>
                <div className="text-xs text-gray-400 truncate mt-0.5">{preview}</div>
              </div>
              {unread && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
