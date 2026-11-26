import { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import {
  DashboardIcon,
  WorkoutIcon,
  ExercisesIcon,
  ReportsIcon,
  ProfileIcon,
  SettingsIcon,
  LogoutIcon,
  GymAppIcon,
  ChevronLeftIcon,
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
  const { user, logout } = useAuth();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [isCollapsed, setIsCollapsed] = useState(() => localStorage.getItem('sidebarCollapsed') === 'true');
  const [logoutError, setLogoutError] = useState('');
  const { pathname } = useLocation();
  const mainContentRef = useRef(null);
  const initials = user.username
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  const handleLogout = async () => {
    setLogoutError('');
    try {
      await logout();
    } catch (error) {
      setLogoutError(error.message);
    }
  };

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
            <ChevronLeftIcon
              style={{
                transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            />
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
          <NavLink to="/profile" className="user-profile-card" title={user.username}>
            <div className="user-avatar">{initials}</div>
            {!isCollapsed && (
              <>
                <div className="user-info">
                  <span className="user-name">{user.username}</span>
                  <span className="user-plan">{user.email}</span>
                </div>
                <span className="user-chevron" aria-hidden="true">
                  ›
                </span>
              </>
            )}
          </NavLink>

          <button type="button" className="logout-btn" title="Logout" aria-label="Logout" onClick={handleLogout}>
            <LogoutIcon />
          </button>
          {logoutError && <p className="login-notice" role="alert">{logoutError}</p>}
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
