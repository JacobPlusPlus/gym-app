export function DashboardIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </svg>
  );
}

export function WorkoutIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2" />
      <path d="M10 2h4" />
      <path d="M12 2v3" />
      <path d="m19 6 1.5-1.5" />
    </svg>
  );
}

export function ExercisesIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.5 6.5v11" />
      <path d="M17.5 6.5v11" />
      <path d="M3 9v6" />
      <path d="M21 9v6" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function ReportsIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

export function ProfileIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function SettingsIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
      <path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l1.5-1.2-1.5-2.6-1.8.7a7.6 7.6 0 0 0-2.6-1.5L14.7 4h-5.4l-.3 1.9a7.6 7.6 0 0 0-2.6 1.5l-1.8-.7-1.5 2.6 1.5 1.2a7.6 7.6 0 0 0 0 3l-1.5 1.2 1.5 2.6 1.8-.7a7.6 7.6 0 0 0 2.6 1.5l.3 1.9h5.4l.3-1.9a7.6 7.6 0 0 0 2.6-1.5l1.8.7 1.5-2.6-1.5-1.2Z" />
    </svg>
  );
}

export function LogoutIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  );
}

export function GymAppIcon({ size = 25, className = 'gym-logo-icon', ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="7" y1="7" x2="7" y2="17" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="17" y1="7" x2="17" y2="17" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="4" y1="9" x2="4" y2="15" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="20" y1="9" x2="20" y2="15" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronLeftIcon({ style }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
