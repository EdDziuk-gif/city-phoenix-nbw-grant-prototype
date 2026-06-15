import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <div className="text-sm font-semibold text-[#1B4F8A] uppercase tracking-widest mb-1">City of Phoenix</div>
        <h1 className="text-2xl font-bold text-gray-900">Neighborhood Block Watch Grant Program</h1>
      </div>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button className="flex-1 py-3 text-sm font-semibold text-[#1B4F8A] border-b-2 border-[#1B4F8A]">Applicant Sign In</button>
            <Link to="/admin/dashboard" className="flex-1 py-3 text-sm text-gray-500 hover:text-gray-700 text-center transition border-b-2 border-transparent">Staff / Admin</Link>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="jane@blockwatch.org" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500" />
              <div className="text-right mt-1"><a href="#" className="text-xs text-[#1B4F8A] hover:underline">Forgot password?</a></div>
            </div>
            <Link to="/portal/dashboard" className="block w-full bg-[#1B4F8A] hover:bg-blue-800 text-white font-semibold py-2.5 rounded-lg text-center text-sm transition">
              Sign In
            </Link>
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
              <div className="relative text-center"><span className="bg-white px-3 text-xs text-gray-400">or</span></div>
            </div>
            <Link to="/portal/dashboard" className="block w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2.5 rounded-lg text-center text-sm transition">
              Create an Account
            </Link>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 transition">← Back to Program Website</Link>
        </div>
      </div>
    </div>
  )
}
