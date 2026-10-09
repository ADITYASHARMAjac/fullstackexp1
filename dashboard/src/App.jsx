import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'

function HomePage() {
  return (
    <main className="page home-page">
      <h1>Home</h1>
      <p>Welcome to the dashboard app.</p>
      <Link to="/dashboard" className="primary-link">
        Go to Dashboard
      </Link>
    </main>
  )
}

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

function DashboardHome() {
  return (
    <div className="panel">
      <h1>Dashboard</h1>
      <p>Select a section from the sidebar to view more details.</p>
    </div>
  )
}

function ProfilePage() {
  return (
    <div className="panel">
      <h1>Profile</h1>
      <p>This is the user profile page.</p>
    </div>
  )
}

function SettingsPage() {
  return (
    <div className="panel">
      <h1>Settings</h1>
      <p>Manage your account preferences here.</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}

export default App
