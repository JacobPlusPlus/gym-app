import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Workout from './pages/Workout';
import Exercises from './pages/Exercises';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login';
import './App.css';
import {
  DashboardIcon,
  WorkoutIcon,
  ExercisesIcon,
  ReportsIcon,
  ProfileIcon,
  SettingsIcon,
  LogoutIcon,
  GymAppIcon,
} from './components/Icons';

function Layout() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <NavLink to="/" end className="sidebar-brand">
          <GymAppIcon />
          <span className="brand-text">
            <span className="brand-gym">Gym</span>
            <span className="brand-app">App</span>
          </span>
        </NavLink>

        <p className="nav-heading">OVERVIEW</p>

        <nav className="side-nav">
          <NavLink to="/" end className="nav-item">
            <span className="nav-icon">
              <DashboardIcon />
            </span>
            Dashboard
          </NavLink>

          <NavLink to="/workout" className="nav-item">
            <span className="nav-icon">
              <WorkoutIcon />
            </span>
            Workout
          </NavLink>

          <NavLink to="/exercises" className="nav-item">
            <span className="nav-icon">
              <ExercisesIcon />
            </span>
            Exercises
          </NavLink>

          <NavLink to="/reports" className="nav-item">
            <span className="nav-icon">
              <ReportsIcon />
            </span>
            Reports
          </NavLink>

          <p className="nav-heading">ACCOUNT</p>

          <NavLink to="/profile" className="nav-item">
            <span className="nav-icon">
              <ProfileIcon />
            </span>
            Profile
          </NavLink>

          <NavLink to="/settings" className="nav-item">
            <SettingsIcon />
            <span>Settings</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/profile" className="user-profile-card">
            <div className="user-avatar">EP</div>

            <div className="user-info">
              <span className="user-name">Ernest Pacocha</span>
              <span className="user-plan">Pro plan</span>
            </div>

            <span className="user-chevron">›</span>
          </NavLink>

          <NavLink to="/login" className="logout-btn" title="Logout">
            <LogoutIcon />
          </NavLink>
        </div>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <h2>GymApp</h2>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <span>{theme === 'dark' ? '☀' : '☾'}</span>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="workout" element={<Workout />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
