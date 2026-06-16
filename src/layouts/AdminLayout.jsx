import { Outlet, NavLink, Link } from 'react-router-dom'

const navItems = [
  { to: '/admin/dashboard', icon: '⊞', label: 'Dashboard' },
  { divider: true, label: 'Review' },
  { to: '/admin/applications', icon: '📋', label: 'Applications Queue', badge: 14 },
  { to: '/admin/applications/review', icon: '🔍', label: 'Application Review' },
  { to: '/admin/applications/evaluate', icon: '★', label: 'Evaluation / Score' },
  { to: '/admin/applications/request-info', icon: '✉', label: 'Request More Info' },
  { divider: true, label: 'Program Management' },
  { to: '/admin/cycles', icon: '📅', label: 'Grant Cycles' },
  { to: '/admin/funded', icon: '✓', label: 'Funded Projects' },
  { divider: true, label: 'Settings & Reports' },
  { to: '/admin/reports', icon: '📊', label: 'Reports' },
  { to: '/admin/users', icon: '👥', label: 'User Management' },
  { to: '/admin/settings', icon: '⚙', label: 'Program Settings' },
  { divider: true, label: 'AI Assistant' },
  { to: '/admin/bot-responses', icon: '🤖', label: 'Automated Responses' },
  { to: '/admin/bot-training', icon: '🧠', label: 'Knowledge Base' },
]

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Prototype banner */}
      <div className="bg-amber-400 text-amber-900 text-xs font-semibold text-center py-1.5 px-4 tracking-wide">
        CONCEPT PROTOTYPE — For Board Review Only · Not a live system
      </div>

      {/* Top bar */}
      <header className="bg-gray-900 text-white shadow z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-gray-400 hover:text-white text-xs transition">← Public Site</Link>
            <span className="text-gray-600 text-xs">|</span>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Admin Portal</div>
              <div className="text-sm font-bold leading-tight">NBW Grant Program</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-green-700 text-green-100 text-xs font-semibold px-2 py-0.5 rounded">Staff</span>
            <span className="text-sm text-gray-300">Maria Gonzalez · Program Administrator</span>
            <Link to="/sign-in" className="text-xs border border-gray-600 hover:border-gray-400 text-gray-300 px-3 py-1.5 rounded transition">
              Sign Out
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-gray-800 text-white flex-shrink-0 flex flex-col">
          <nav className="flex-1 py-4">
            {navItems.map((item, i) => {
              if (item.divider) {
                return (
                  <div key={i} className="px-4 pt-5 pb-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">{item.label}</div>
                  </div>
                )
              }
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/admin/dashboard' || item.to === '/admin/applications'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 text-sm transition relative ${
                      isActive
                        ? 'bg-white/10 text-white font-semibold border-r-2 border-green-400'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  <span className="text-base w-5 text-center">{item.icon}</span>
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              )
            })}
          </nav>

          <div className="p-4 border-t border-white/10 text-xs text-gray-400">
            <div className="font-semibold text-gray-300 mb-1">Active Cycle</div>
            <div>FY2025–26 Grants</div>
            <div className="mt-1 flex justify-between">
              <span>Submitted</span>
              <span className="text-white font-semibold">47</span>
            </div>
            <div className="flex justify-between">
              <span>Pending Review</span>
              <span className="text-amber-400 font-semibold">14</span>
            </div>
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
