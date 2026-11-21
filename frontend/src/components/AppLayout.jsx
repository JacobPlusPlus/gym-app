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

function AppLayout() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [isCollapsed, setIsCollapsed] = useState(() => localStorage.getItem('sidebarCollapsed') === 'true');
  const { pathname } = useLocation();
  const mainContentRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', isCollapsed);
  }, [isCollapsed]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="app-layout">
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <NavLink to="/" end className="sidebar-brand" title="GymApp">
            <GymAppIcon />
            {!isCollapsed && (
              <span className="brand-text">
                <span className="brand-gym">Gym</span>
                <span className="brand-app">App</span>
              </span>
            )}
          </NavLink>

          <button
            type="button"
            className="collapse-btn"
            onClick={() => setIsCollapsed((prev) => !prev)}
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        </div>

        <nav className="side-nav" aria-label="Main navigation">
          {NAV_SECTIONS.map((section) => (
            <Fragment key={section.heading}>
              {!isCollapsed && <p className="nav-heading">{section.heading}</p>}
              {section.items.map(({ to, label, icon: Icon, end }) => (
                <NavLink key={to} to={to} end={end} className="nav-item" title={isCollapsed ? label : undefined}>
                  <span className="nav-icon">
                    <Icon />
                  </span>
                  {!isCollapsed && <span>{label}</span>}
                </NavLink>
              ))}
            </Fragment>
          ))}
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/profile" className="user-profile-card" title="Alex Morgan">
            <div className="user-avatar">AM</div>
            {!isCollapsed && (
              <>
                <div className="user-info">
                  <span className="user-name">Alex M.</span>
                  <span className="user-plan">Pro plan</span>
                </div>
                <span className="user-chevron" aria-hidden="true">
                  ›
                </span>
              </>
            )}
          </NavLink>

          <NavLink to="/login" className="logout-btn" title="Logout" aria-label="Logout">
            <LogoutIcon />
          </NavLink>
        </div>
      </aside>

      <div className="main-area">
        <main ref={mainContentRef} className="main-content">
          <Outlet context={{ theme, setTheme }} />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
