import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Workout from './pages/Workout'
import Exercises from './pages/Exercises'
import Reports from './pages/Reports'
import Profile from './pages/Profile'
import './App.css'

function Layout() {
  // Motyw: 'dark' (domyślny) lub 'light'. Zapamiętany w localStorage.
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  // Ustawia data-theme na <html>, a kolory z index.css reagują na ten atrybut
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <NavLink to="/" end className="brand">
          GymApp
        </NavLink>

        <p className="nav-heading">MENU</p>

        <nav className="side-nav">
          <NavLink to="/" end className="nav-item">
            <span className="nav-icon">
              {/* Ikona Dashboard (Siatka) */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
            </span>
            Dashboard
          </NavLink>

          <NavLink to="/workout" className="nav-item">
            <span className="nav-icon">
              {/* Ikona Workout (Aktywność / Wykres linii) */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </span>
            Workout
          </NavLink>

          <NavLink to="/exercises" className="nav-item">
            <span className="nav-icon">
              {/* Ikona Exercises (Hantelek) */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>
            </span>
            Exercises
          </NavLink>

          <NavLink to="/reports" className="nav-item">
            <span className="nav-icon">
              {/* Ikona Reports (Wykres słupkowy) */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
            </span>
            Reports
          </NavLink>

          <NavLink to="/profile" className="nav-item">
            <span className="nav-icon">
              {/* Ikona Profile (Użytkownik) */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </span>
            Profile
          </NavLink>
        </nav>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <h2>GymApp</h2>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <span>{theme === 'dark' ? '☀' : '☾'}</span>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="workout" element={<Workout />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App