# CSS Manifest

This document describes the existing GymApp styling system and is the guide for AI agents adding or changing frontend styles.

## Sources of truth

- `frontend/src/index.css` defines theme tokens, the global reset, and base element styles.
- `frontend/src/App.css` defines the application layout and shared components.
- `frontend/src/styles/utilities.css` contains small reusable layout and presentation helpers.
- `frontend/src/styles/login.css`, `settings.css`, and `dashboard-reports.css` contain styles specific to those screens.
- `frontend/src/main.jsx` imports these stylesheets. Check it before adding another stylesheet.

Read the relevant existing CSS before writing new rules. Extend an existing component or utility when appropriate instead of creating a duplicate.

## Design principles

- Preserve the existing dark and light themes. The dark theme is the default; the light theme is selected with `:root[data-theme='light']`.
- Use the CSS custom properties below for colors. Do not introduce new hard-coded UI colors in component styles. If a new semantic color is genuinely needed, define it in both themes in `index.css`.
- Reuse existing shared classes such as `.page`, `.card`, `.btn`, `.input`, `.badge`, and the grid helpers before creating alternatives.
- Keep styles responsive, keyboard-accessible, and consistent with existing component states, including hover, disabled, and focus-visible states.
- Follow the existing kebab-case class naming convention. Keep page-specific rules in the corresponding stylesheet and shared rules in `App.css`.
- Match the spacing, typography, borders, and rounded corners of nearby components. There is no separate rigid spacing scale; use existing values and patterns rather than inventing a new system.

## Theme color tokens

| Token | Dark theme | Light theme | Intended use |
| --- | --- | --- | --- |
| `--bg` | `#0e131c` | `#f4f6f8` | Page and sidebar background |
| `--surface` | `#131b25` | `#ffffff` | Cards, panels, tables, and modals |
| `--surface-2` | `#212c3f` | `#eef1f6` | Secondary surfaces and table headings |
| `--input-bg` | `#0b1119` | `#ffffff` | Form fields |
| `--text` | `#e6ebf2` | `#172033` | Primary text |
| `--text-muted` | `#8b9bb4` | `#667085` | Supporting text |
| `--text-subtle` | `#58687e` | `#8794a8` | Subtle labels |
| `--border` | `#23334d` | `#dce3ee` | Borders and separators |
| `--accent` | `#60a5fa` | `#2b6cdf` | Primary actions, active links, and emphasis |
| `--accent-contrast` | `#0e131c` | `#ffffff` | Text on accent backgrounds |
| `--accent-soft` | `#172030` | `#eaf2ff` | Subtle accent backgrounds |
| `--accent-soft-border` | `#2c4268` | `#c7dcff` | Borders for accent elements |
| `--success` | `#8dd9ae` | `#1a7f4b` | Positive status |
| `--danger` | `#f87171` | `#dc2626` | Destructive actions and errors |
| `--hover-bg` | `rgb(148 163 184 / 7%)` | `rgb(0 0 0 / 4%)` | Subtle hover background |
| `--overlay` | `rgb(0 0 0 / 72%)` | `rgb(15 23 42 / 45%)` | Modal backdrop |
| `--shadow` | `0 8px 24px rgb(0 0 0 / 35%)` | `0 8px 24px rgb(36 51 38 / 12%)` | Elevated surfaces |

## Global typography and behavior

- The base font is the system sans-serif stack, with a `16px` root size and `1.5` line height.
- The global reset uses `border-box` sizing and removes default margins and padding.
- Body text and backgrounds use `--text` and `--bg`.
- Form controls inherit the application font and text color.
- Use the global `:focus-visible` outline; do not remove keyboard focus indicators.
- The global layout supports narrow screens down to `320px`.

## Existing component patterns

- Pages use `.page` with a vertical layout and consistent gaps. Main content is centered and width-limited.
- Cards use a surface background, a theme border, rounded corners, and a subtle accent hover state.
- Buttons use `.btn` with `.btn-primary`, `.btn-secondary`, or `.btn-block` as appropriate.
- Inputs use `.input`; form layouts use `.form-grid` and `.form-full`.
- Active filters, chips, and badges use the soft accent tokens.
- Modals use `.modal-overlay` and `.modal`, with theme-aware backdrop, border, and shadow.
- Reuse the shared grid and helper classes in `App.css` and `utilities.css` rather than duplicating their layout rules.

## Responsive behavior

Existing responsive breakpoints are `1100px`, `900px`, and `700px`. Follow the closest existing pattern:

- Reduce four-column grids at `1100px`.
- Collapse multi-column content at `900px` where appropriate.
- Use a single-column layout and tighter padding for small screens at `700px`.
- Prevent horizontal overflow; use a local scroll wrapper for wide tables when needed.

## Before finishing a style change

1. Confirm the new rule belongs in the correct existing stylesheet.
2. Check both dark and light themes; use semantic tokens rather than theme-specific literals.
3. Check hover, focus-visible, and disabled states where applicable.
4. Check the layout at desktop and mobile breakpoints.
5. Avoid unrelated restyling and duplicated selectors.
