import { Outlet, NavLink, Link } from 'react-router-dom'

const navItems = [
  { to: '/portal/dashboard', icon: '⊞', label: 'Dashboard' },
  { to: '/portal/applications', icon: '📋', label: 'My Applications' },
  { to: '/portal/applications/new', icon: '＋', label: 'New Application' },
  { to: '/portal/documents', icon: '📁', label: 'My Documents' },
  { to: '/portal/messages', icon: '✉', label: 'Messages', badge: 2 },
  { to: '/portal/settings', icon: '⚙', label: 'Account Settings' },
]

export default function PortalLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top bar */}
      <header className="bg-[#1B4F8A] text-white shadow z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-blue-200 hover:text-white text-xs transition">← Public Site</Link>
            <span className="text-blue-300 text-xs">|</span>
            <div>
              <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Applicant Portal</div>
              <div className="text-sm font-bold leading-tight">NBW Grant Program</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-blue-100">Jane Smith · Sunnyslope Block Watch</span>
            <Link to="/sign-in" className="text-xs border border-white/30 hover:border-white px-3 py-1.5 rounded transition">
              Sign Out
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-56 bg-[#154080] text-white flex-shrink-0 flex flex-col">
          <nav className="flex-1 py-4">
            {navItems.map(({ to, icon, label, badge }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/portal/applications' || to === '/portal/dashboard'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 text-sm transition relative ${
                    isActive
                      ? 'bg-white/15 text-white font-semibold border-r-2 border-amber-400'
                      : 'text-blue-200 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <span className="text-base w-5 text-center">{icon}</span>
                <span className="flex-1">{label}</span>
                {badge && (
                  <span className="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10 text-xs text-blue-300">
            <div className="font-semibold text-blue-100 mb-1">Current Cycle</div>
            <div>FY2025–26 Grants</div>
            <div className="mt-1 text-amber-400 font-medium">Deadline: Aug 15, 2025</div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
