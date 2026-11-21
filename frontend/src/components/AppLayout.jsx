import { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
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

const NAV_SECTIONS = [
  {
    heading: 'OVERVIEW',
    items: [
      { to: '/', label: 'Dashboard', icon: DashboardIcon, end: true },
      { to: '/workout', label: 'Workout', icon: WorkoutIcon },
      { to: '/exercises', label: 'Exercises', icon: ExercisesIcon },
      { to: '/reports', label: 'Reports', icon: ReportsIcon },
    ],
  },
  {
    heading: 'ACCOUNT',
    items: [
      { to: '/profile', label: 'Profile', icon: ProfileIcon },
      { to: '/settings', label: 'Settings', icon: SettingsIcon },
    ],
  },
];

// Mapa tytułów wyświetlanych w górnym pasku dla danej ścieżki
const PAGE_TITLES = {
  '/': 'Dashboard',
  '/workout': 'Workout',
  '/exercises': 'Exercises',
  '/reports': 'Reports',
  '/profile': 'Profile',
  '/settings': 'Settings',
};

function AppLayout() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const { pathname } = useLocation();
  const mainContentRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  const currentTitle = PAGE_TITLES[pathname] || 'GymApp';

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

        <nav className="side-nav" aria-label="Main navigation">
          {NAV_SECTIONS.map((section) => (
            <Fragment key={section.heading}>
              <p className="nav-heading">{section.heading}</p>
              {section.items.map(({ to, label, icon: Icon, end }) => (
                <NavLink key={to} to={to} end={end} className="nav-item">
                  <span className="nav-icon">
                    <Icon />
                  </span>
                  <span>{label}</span>
                </NavLink>
              ))}
            </Fragment>
          ))}
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
          <h2>{currentTitle}</h2>
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
        <main ref={mainContentRef} className="main-content">
          <Outlet context={{ theme, setTheme }} />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
