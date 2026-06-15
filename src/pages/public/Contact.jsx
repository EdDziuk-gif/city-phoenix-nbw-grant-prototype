export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-1">Contact</div>
        <h1 className="text-3xl font-bold text-gray-900">Contact & Support</h1>
        <p className="text-gray-500 mt-2 text-lg">Reach the NBW Grant Program office with questions or for assistance.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="font-bold text-gray-800 mb-4">Program Office</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div><span className="font-semibold text-gray-800 block">Office</span>Office of Neighborhood Services<br />City of Phoenix</div>
              <div><span className="font-semibold text-gray-800 block">Address</span>200 W. Washington St., 3rd Floor<br />Phoenix, AZ 85003</div>
              <div><span className="font-semibold text-gray-800 block">Email</span><a href="mailto:nbw-grants@phoenix.gov" className="text-[#1B4F8A] hover:underline">nbw-grants@phoenix.gov</a></div>
              <div><span className="font-semibold text-gray-800 block">Phone</span>(602) 262-7111</div>
              <div><span className="font-semibold text-gray-800 block">Office Hours</span>Monday–Friday, 8:00 AM – 5:00 PM<br />Closed City holidays</div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <div className="font-semibold text-blue-800 mb-2">Application Support</div>
            <p className="text-sm text-blue-700">For help with the online application or portal access, contact our technical support team at <a href="mailto:portal-support@phoenix.gov" className="underline">portal-support@phoenix.gov</a> or call (602) 262-7222.</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-4">Send Us a Message</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input type="text" placeholder="Jane Smith" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="jane@example.com" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
              <input type="text" placeholder="Sunnyslope Block Watch" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500">
                <option>General Question</option>
                <option>Eligibility Question</option>
                <option>Application Help</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows="4" placeholder="How can we help you?" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-none" />
            </div>
            <button className="w-full bg-[#1B4F8A] hover:bg-blue-800 text-white font-semibold py-2.5 rounded transition text-sm">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}
