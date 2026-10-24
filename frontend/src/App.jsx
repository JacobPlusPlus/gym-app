
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Workout from './pages/Workout'
import Exercises from './pages/Exercises'
import Reports from './pages/Reports'
import Profile from './pages/Profile'
import './App.css'

function Layout() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <NavLink to="/" end className="brand">
          GymApp
        </NavLink>

        <p className="nav-heading">MENU</p>

        <nav className="side-nav">
          <NavLink to="/" end className="nav-item">
            <span className="nav-icon">⌂</span>
            Dashboard
          </NavLink>

          <NavLink to="/workout" className="nav-item">
            <span className="nav-icon">↗</span>
            Workout
          </NavLink>

          <NavLink to="/exercises" className="nav-item">
            <span className="nav-icon">◇</span>
            Exercises
          </NavLink>

          <NavLink to="/raport" className="nav-item">
            <span className="nav-icon">▤</span>
            Reports
          </NavLink>

          <NavLink to="/profile" className="nav-item">
            <span className="nav-icon">○</span>
            Profile
          </NavLink>
        </nav>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <h2>GymApp</h2>
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
          <Route path="raport" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
