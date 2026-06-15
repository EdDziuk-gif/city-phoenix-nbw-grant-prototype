export default function AccountSettings() {
  return (
    <div className="p-6 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-gray-500 mt-1 text-sm">Manage your profile, organization details, and notification preferences</p>
      </div>
      <div className="space-y-5">
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><label className="block font-medium text-gray-700 mb-1">First Name</label><input defaultValue="Jane" className="w-full border border-gray-300 rounded px-3 py-2" /></div>
            <div><label className="block font-medium text-gray-700 mb-1">Last Name</label><input defaultValue="Smith" className="w-full border border-gray-300 rounded px-3 py-2" /></div>
            <div className="col-span-2"><label className="block font-medium text-gray-700 mb-1">Email Address</label><input defaultValue="jane.smith@sunnyslopebw.org" className="w-full border border-gray-300 rounded px-3 py-2" /></div>
            <div><label className="block font-medium text-gray-700 mb-1">Phone</label><input defaultValue="(602) 555-0182" className="w-full border border-gray-300 rounded px-3 py-2" /></div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-4">Organization Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="col-span-2"><label className="block font-medium text-gray-700 mb-1">Organization Name</label><input defaultValue="Sunnyslope Block Watch" className="w-full border border-gray-300 rounded px-3 py-2" /></div>
            <div><label className="block font-medium text-gray-700 mb-1">Registration Number</label><input defaultValue="PHX-BW-2019-0042" className="w-full border border-gray-300 rounded px-3 py-2" disabled /></div>
            <div><label className="block font-medium text-gray-700 mb-1">Neighborhood</label><input defaultValue="Sunnyslope" className="w-full border border-gray-300 rounded px-3 py-2" /></div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">Notification Preferences</h2>
          <div className="space-y-3 text-sm">
            {['New messages from program staff', 'Application status changes', 'Deadline reminders (30, 14, 7 days before)', 'Grant cycle opening announcements'].map(pref => (
              <label key={pref} className="flex items-center gap-3 text-gray-700">
                <input type="checkbox" defaultChecked className="rounded" />
                {pref}
              </label>
            ))}
          </div>
        </div>
        <button className="bg-[#1B4F8A] hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded text-sm transition">Save Changes</button>
      </div>
    </div>
  )
}
