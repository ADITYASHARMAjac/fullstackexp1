import { NavLink, Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <NavLink to="/dashboard" end className="nav-link">
            Overview
          </NavLink>
          <NavLink to="/dashboard/profile" className="nav-link">
            Profile
          </NavLink>
          <NavLink to="/dashboard/settings" className="nav-link">
            Settings
          </NavLink>
        </nav>
      </aside>

      <section className="content-panel">
        <Outlet />
      </section>
    </main>
  )
}

export default DashboardLayout