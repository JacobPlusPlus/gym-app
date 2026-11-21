import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  DashboardIcon,
  WorkoutIcon,
  ExercisesIcon,
  ReportsIcon,
  ProfileIcon,
  SettingsIcon,
  LogoutIcon,
  GymAppIcon,
} from './Icons';

function AppLayout() {
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
        <nav className="side-nav" aria-label="Main navigation">
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
            <span className="nav-icon">
              <SettingsIcon />
            </span>
            <span>Settings</span>
          </NavLink>
        </nav>
        <div className="sidebar-footer">
          <NavLink to="/profile" className="user-profile-card">
            <div className="user-avatar">AM</div>
            <div className="user-info">
              <span className="user-name">Alex Morgan</span>
              <span className="user-plan">Pro plan</span>
            </div>
            <span className="user-chevron" aria-hidden="true">
              ›
            </span>
          </NavLink>
          <NavLink to="/login" className="logout-btn" title="Logout" aria-label="Logout">
            <LogoutIcon />
          </NavLink>
        </div>
      </aside>
      <div className="main-area">
        <header className="topbar">
          <h2>GymApp</h2>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </header>
        <main className="main-content">
          <Outlet context={{ theme, setTheme }} />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
