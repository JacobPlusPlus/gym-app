# Frontend Documentation

[Polski](#polski) | [English](#english)

---

## Polski

### Opis

Frontend aplikacji GymApp odpowiada za interfejs użytkownika oraz prezentację danych związanych z treningami. Umożliwia poruszanie się między poszczególnymi sekcjami aplikacji, przeglądanie ćwiczeń, wyświetlanie raportów oraz zarządzanie ustawieniami.

Aplikacja została zbudowana w React z wykorzystaniem Vite. Do obsługi nawigacji wykorzystywany jest React Router, a wygląd interfejsu tworzony jest za pomocą czystego CSS.

### Technologie

- **Frontend:** React 19
- **Nawigacja:** React Router 7
- **Narzędzie deweloperskie:** Vite 8
- **Język programowania:** JavaScript
- **Stylowanie:** CSS
- **Kontrola jakości kodu:** ESLint

### Struktura katalogów

```text
frontend/
├── src/
│   ├── assets/       # Grafiki, ikony i pozostałe zasoby
│   ├── components/   # Współdzielone komponenty interfejsu
│   ├── context/      # Stan zalogowanego użytkownika i sesji
│   ├── pages/        # Widoki poszczególnych stron aplikacji
│   ├── styles/       # Style CSS poszczególnych sekcji i stron
│   ├── App.jsx       # Główny komponent aplikacji i konfiguracja routingu
│   ├── App.css       # Wspólne style aplikacji
│   ├── index.css     # Globalne style i zmienne CSS
│   └── main.jsx      # Punkt wejścia aplikacji React
├── index.html        # Główny dokument HTML
├── package.json      # Zależności i skrypty frontendu
└── vite.config.js    # Konfiguracja Vite i proxy API
```

### Strony i nawigacja

Nawigacja między stronami jest obsługiwana przez bibliotekę React Router.

| Ścieżka      | Strona    | Opis                                |
| ------------ | --------- | ----------------------------------- |
| `/`          | Dashboard | Główny ekran aplikacji              |
| `/workout`   | Workout   | Sekcja treningów                    |
| `/exercises` | Exercises | Przeglądanie i wyszukiwanie ćwiczeń |
| `/reports`   | Reports   | Raporty i statystyki                |
| `/profile`   | Profile   | Profil użytkownika                  |
| `/settings`  | Settings  | Ustawienia aplikacji                |
| `/login`     | Login     | Logowanie i rejestracja              |

Większość stron korzysta ze wspólnego komponentu `Layout`, który zawiera boczne menu nawigacyjne, górny pasek oraz główny obszar wyświetlania treści.

Strona logowania jest wyświetlana poza wspólnym układem aplikacji.

### Style i motywy

Wygląd aplikacji jest tworzony za pomocą czystego CSS, bez zewnętrznych bibliotek interfejsu użytkownika.

Style są podzielone na:

- `index.css` – globalne style i zmienne CSS.
- `App.css` – wspólne style głównego układu aplikacji.
- `styles/` – style poszczególnych sekcji i stron.

Aplikacja obsługuje dwa motywy: jasny i ciemny. Wybrany motyw jest ustawiany za pomocą atrybutu `data-theme` na elemencie HTML i zapisywany w `localStorage` pod kluczem `theme`.

### Komunikacja z backendem

Frontend komunikuje się z backendem za pomocą żądań HTTP wysyłanych do endpointów rozpoczynających się od `/api`.

W środowisku deweloperskim Vite przekierowuje żądania z prefiksem `/api` do backendu działającego pod adresem `https://localhost:3000`. Konfiguracja znajduje się w pliku `vite.config.js`.

Aktualnie API jest wykorzystywane do:

- pobierania listy ćwiczeń w sekcji Exercises,
- pobierania danych wykorzystywanych w Dashboard i Reports.

Szczegółowy opis endpointów, parametrów i odpowiedzi znajduje się w dokumentacji [API](api.md).

### Uwierzytelnianie, dane i ustawienia lokalne

Nie wszystkie sekcje aplikacji korzystają obecnie z danych pobieranych z backendu.

- **Exercises** – pobiera listę ćwiczeń z API, a wyszukiwanie i filtrowanie odbywa się po stronie frontendu.
- **Dashboard, Workout i Reports** – pobierają statystyki z API dla zalogowanego konta.
- **Workout** – obecnie korzysta z przykładowych danych.
- **Profile** – wyświetla i aktualizuje dane zalogowanego użytkownika.
- **Settings** – zapisuje preferencje osobno dla każdego konta.

Strony aplikacji są chronione przez kontekst uwierzytelniania. Po rejestracji lub logowaniu frontend
zapisuje token sesji, pobiera profil z `/api/auth/me` i wysyła token w nagłówku Bearer. Wylogowanie
unieważnia sesję w backendzie. Nie ma trybu demo ani opcji przypomnienia hasła.

Do przechowywania ustawień wykorzystywany jest mechanizm `localStorage`:

- `theme` – wybrany motyw aplikacji.
- `gymAppPreferences:<userId>` – preferencje zapisane w sekcji Settings dla danego konta.
- `gymAppToken` – token bieżącej sesji.

### Dostępne skrypty

Skrypty frontendu są zdefiniowane w pliku `frontend/package.json`.

| Komenda           | Opis                                  |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Uruchamia serwer deweloperski Vite    |
| `npm run build`   | Buduje wersję produkcyjną aplikacji   |
| `npm run lint`    | Uruchamia kontrolę jakości kodu       |
| `npm run preview` | Uruchamia podgląd wersji produkcyjnej |

Komendy należy wykonywać z katalogu `frontend/`.

Instrukcja instalacji zależności i uruchamiania całej aplikacji znajduje się w głównym pliku [README.md](../README.md).

### Dodawanie nowej strony

Podczas dodawania nowej strony należy:

1. Utworzyć komponent strony w katalogu `pages/`.
2. Dodać odpowiednią trasę w `App.jsx`.
3. Przygotować style w katalogu `styles/`.
4. Wykorzystać wspólny komponent `Layout`, jeśli strona ma zawierać standardową nawigację.
5. Dodać odnośnik do strony w menu, jeśli jest wymagany.
6. Sprawdzić działanie strony w jasnym i ciemnym motywie.

### Zasady rozwoju frontendu

1. Twórz współdzielone komponenty zamiast powielać ten sam kod.
2. Zachowuj logiczny podział między stronami, komponentami i stylami.
3. Stosuj spójne nazewnictwo plików i komponentów.
4. Unikaj niepotrzebnego duplikowania reguł CSS.
5. Korzystaj z istniejących zmiennych CSS i obsługi motywów.
6. Sprawdzaj działanie zmian przed utworzeniem Pull Requesta.

---

## English

### Overview

The GymApp frontend is responsible for the user interface and presentation of workout-related data. It allows users to navigate between application sections, browse exercises, view reports and manage settings.

The application is built with React and Vite. React Router is used for navigation, while the interface is styled using plain CSS.

### Technologies

- **Frontend:** React 19
- **Routing:** React Router 7
- **Development tool:** Vite 8
- **Programming language:** JavaScript
- **Styling:** CSS
- **Code quality:** ESLint

### Project Structure

```text
frontend/
├── src/
│   ├── assets/       # Images, icons and other application assets
│   ├── components/   # Shared user interface components
│   ├── context/      # Authenticated user and session state
│   ├── pages/        # Individual application pages
│   ├── styles/       # CSS styles for individual sections and pages
│   ├── App.jsx       # Main application component and routing configuration
│   ├── App.css       # Shared application styles
│   ├── index.css     # Global styles and CSS variables
│   └── main.jsx      # React application entry point
├── index.html        # Main HTML document
├── package.json      # Frontend dependencies and scripts
└── vite.config.js    # Vite configuration and API proxy
```

### Pages and Navigation

Navigation between pages is handled by React Router.

| Route        | Page      | Description                     |
| ------------ | --------- | ------------------------------- |
| `/`          | Dashboard | Main application dashboard      |
| `/workout`   | Workout   | Workout section                 |
| `/exercises` | Exercises | Exercise browsing and searching |
| `/reports`   | Reports   | Reports and statistics          |
| `/profile`   | Profile   | User profile                    |
| `/settings`  | Settings  | Application settings            |
| `/login`     | Login     | Sign-in and registration         |

Most pages use a shared `Layout` component, which contains the sidebar navigation, top bar and main content area.

The login page is displayed outside the shared application layout.

### Styling and Themes

The application uses plain CSS without external user interface libraries.

Styles are organized as follows:

- `index.css` – global styles and CSS variables.
- `App.css` – shared styles for the main application layout.
- `styles/` – styles for individual sections and pages.

The application supports two themes: light and dark. The selected theme is controlled through the `data-theme` attribute on the HTML element and stored in `localStorage` under the `theme` key.

### Backend Communication

The frontend communicates with the backend through HTTP requests sent to endpoints starting with `/api`.

During development, Vite redirects requests with the `/api` prefix to the backend running at `https://localhost:3000`. This configuration is defined in `vite.config.js`.

The API is currently used to:

- Retrieve the exercise list in the Exercises section.
- Retrieve report data used by Dashboard and Reports.

A detailed description of endpoints, parameters and responses is available in the [API Documentation](api.md).

### Authentication, Data and Local Settings

Not all application sections currently use data retrieved from the backend.

- **Exercises** – retrieves the exercise list from the API; searching and filtering are performed on the frontend.
- **Dashboard, Workout and Reports** – retrieve statistics for the authenticated account.
- **Workout** – currently uses sample data.
- **Profile** – displays and updates the authenticated user's details.
- **Settings** – stores preferences separately for each account.

Application pages are protected by the authentication context. After registration or sign-in, the frontend
stores the session token, loads the profile from `/api/auth/me` and sends the token as a Bearer credential.
Signing out revokes the backend session. There is no demo mode or password recovery option.

The browser's `localStorage` mechanism is used to store settings:

- `theme` – the selected application theme.
- `gymAppPreferences:<userId>` – preferences stored in Settings for that account.
- `gymAppToken` – the current session token.

### Available Scripts

Frontend scripts are defined in `frontend/package.json`.

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the Vite development server    |
| `npm run build`   | Builds the application for production |
| `npm run lint`    | Runs code quality checks              |
| `npm run preview` | Previews the production build         |

Commands should be executed from the `frontend/` directory.

Instructions for installing dependencies and running the entire application are available in the main [README.md](../README.md).

### Adding a New Page

When adding a new page:

1. Create the page component in the `pages/` directory.
2. Add the corresponding route in `App.jsx`.
3. Create the required styles in the `styles/` directory.
4. Use the shared `Layout` component if the page should include the standard navigation.
5. Add a navigation link if required.
6. Test the page in both light and dark themes.

### Frontend Development Guidelines

1. Create shared components instead of duplicating code.
2. Maintain a logical separation between pages, components and styles.
3. Use consistent file and component naming conventions.
4. Avoid unnecessary duplication of CSS rules.
5. Reuse existing CSS variables and theme settings.
6. Test changes before creating a Pull Request.
