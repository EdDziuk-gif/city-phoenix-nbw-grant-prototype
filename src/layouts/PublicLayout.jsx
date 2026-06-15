import { Outlet, NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/eligibility', label: 'Eligibility' },
  { to: '/how-to-apply', label: 'How to Apply' },
  { to: '/grant-categories', label: 'Grant Categories' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top bar */}
      <div className="bg-blue-900 text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <span>City of Phoenix — Official Website</span>
        <Link to="/sign-in" className="hover:underline">Staff / Admin Login</Link>
      </div>

      {/* Header */}
      <header className="bg-[#1B4F8A] text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-blue-200 mb-0.5">City of Phoenix</div>
            <div className="text-xl font-bold leading-tight">Neighborhood Block Watch<br />Grant Program</div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/sign-in"
              className="text-sm text-white border border-white/40 hover:border-white px-4 py-2 rounded transition"
            >
              Applicant Sign In
            </Link>
            <Link
              to="/portal/applications/new"
              className="text-sm bg-amber-500 hover:bg-amber-400 text-white font-semibold px-4 py-2 rounded transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="bg-[#154080] border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex overflow-x-auto">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm font-medium whitespace-nowrap transition border-b-2 ${
                      isActive
                        ? 'border-amber-400 text-white'
                        : 'border-transparent text-blue-200 hover:text-white hover:border-blue-300'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-sm mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="text-white font-semibold mb-2">City of Phoenix</div>
            <div>Neighborhood Block Watch Grant Program</div>
            <div className="mt-1">200 W. Washington St., Phoenix, AZ 85003</div>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Program Contact</div>
            <div>Office of Neighborhood Services</div>
            <div className="mt-1">nbw-grants@phoenix.gov</div>
            <div>(602) 262-7111</div>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1">
              <li><Link to="/eligibility" className="hover:text-white transition">Eligibility Requirements</Link></li>
              <li><Link to="/how-to-apply" className="hover:text-white transition">How to Apply</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} City of Phoenix. All rights reserved. This is a prototype for internal review only.
        </div>
      </footer>
    </div>
  )
}
