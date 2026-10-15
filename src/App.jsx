import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Workout from './pages/Workout'
import Exercises from './pages/Exercises'
import Raport from './pages/Raport'
import Profile from './pages/Profile'
import './App.css'

function Layout() {
  return (
    <>
      <main className="main-content">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        <NavLink to="/workout" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">🏋️</span>
          <span>Workout</span>
        </NavLink>
        <NavLink to="/exercises" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">🤸</span>
          <span>Exercises</span>
        </NavLink>
        <NavLink to="/raport" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">📋</span>
          <span>Raport</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">👤</span>
          <span>Profile</span>
        </NavLink>
      </nav>
    </>
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
          <Route path="raport" element={<Raport />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
