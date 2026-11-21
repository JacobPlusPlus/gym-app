# Gym App

[Polski](#polski) | [English](#english)

---

## Polski

Aplikacja webowa do śledzenia treningów. Docelowo umożliwi przeglądanie ćwiczeń, planowanie treningów, zapisywanie sesji i analizowanie postępów. Projekt zespołowy realizowany w ramach zajęć z tworzenia oprogramowania. W pierwszej kolejności rozwijana jest wersja webowa, a w przyszłości planowana jest wersja mobilna.

### Zespół

| Osoba          | Rola         |
| -------------- | ------------ |
| Jakub Kukla    | Scrum Master |
| Alex Turcu     | Baza danych  |
| Szymon Gniadek | Backend      |
| Bartosz Flis   | Design       |
| Kamil Woda     | Frontend     |
| Igor Góral     | Frontend     |

### Technologie

- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Baza danych:** PostgreSQL 17, Docker

### Uruchomienie projektu

Wymagania: Node.js, npm i Docker Desktop z działającym Docker Compose.

**1. Instalacja zależności**

Przy pierwszym uruchomieniu, w głównym katalogu projektu, wykonaj:

```bash
npm install
npm --prefix backend install
npm --prefix frontend install
```

**2. Konfiguracja środowiska**

Utwórz plik `backend/.env` na podstawie `backend/.env.example`. Dla lokalnej bazy z Dockera wystarczy:

```env
PORT=3000
DATABASE_URL=postgres://gym:gym@localhost:5432/gym_app
```

**3. Uruchomienie aplikacji**

W głównym katalogu projektu wykonaj:

```bash
npm run dev
```

Polecenie uruchamia PostgreSQL w Dockerze oraz backend i frontend.

Skrypt nie czeka na pełną gotowość bazy danych, dlatego przy pierwszym uruchomieniu usługi mogą potrzebować chwili, zanim zaczną poprawnie współpracować.

Aby zatrzymać backend i frontend, naciśnij `Ctrl+C`. Baza danych pozostanie uruchomiona.

Skrypty SQL, reset bazy i połączenie przez `psql` opisano w [dokumentacji bazy danych](docs/database.md). Szczegółowe informacje techniczne znajdują się w dokumentacji poszczególnych części aplikacji.

### Struktura projektu

```text
gym-app/
├── frontend/           aplikacja frontendowa (React, Vite)
├── backend/            serwer aplikacji (Node.js, Express)
├── db/                 skrypty SQL
├── docs/               dokumentacja projektu
├── docker-compose.yml  konfiguracja Docker
├── package.json        główne skrypty projektu
└── README.md           dokumentacja główna
```

### Zasady pracy

1. Sprawdź w Trello, do jakiego zadania jesteś przypisany.
2. Twórz branch na podstawie `main`, a następnie otwieraj Pull Request.
3. Przed scaleniem zmian wymagany jest review innego członka zespołu.
4. Nazwy branchy:
   - `feature/krotka-nazwa` — nowe funkcjonalności,
   - `fix/krotka-nazwa` — poprawki błędów.
5. Commity powinny być krótkie i opisowe, z prefiksami `feat:`, `fix:`, `docs:` lub `chore:`, np. `feat: dodaj strone cwiczen`.
6. Nie wykonuj bezpośrednich commitów na `main`.

### Linki

- **Trello:** [Gym App](https://trello.com/b/8s6KedpA/gym-app)
- **Figma:** [Gym Tracker UI Design](https://www.figma.com/make/b2s33645iwv3cAqqjDGphV/Gym-Tracker-UI-Design)

**Dokumentacja techniczna:**

- [Frontend](docs/frontend.md)
- [Backend](docs/backend.md)
- [API](docs/api.md)
- [Baza danych](docs/database.md)

**Dokumentacja sprintów:**

- [Sprint 1](docs/sprint/sprint1.md)
- [Sprint 2](docs/sprint/sprint2.md)
- [Sprint 3](docs/sprint/sprint3.md)

---

## English

A web application for workout tracking. Its intended features include browsing exercises, planning workouts, logging training sessions and analyzing progress. This is a team project developed as part of a software engineering course. The web version is being developed first, with a mobile version planned for the future.

### Team

| Person         | Role         |
| -------------- | ------------ |
| Jakub Kukla    | Scrum Master |
| Alex Turcu     | Database     |
| Szymon Gniadek | Backend      |
| Bartosz Flis   | Design       |
| Kamil Woda     | Frontend     |
| Igor Góral     | Frontend     |

### Technologies

- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Database:** PostgreSQL 17, Docker

### Running the project

Requirements: Node.js, npm and Docker Desktop with Docker Compose running.

**1. Install dependencies**

On the first run, execute the following commands from the project root:

```bash
npm install
npm --prefix backend install
npm --prefix frontend install
```

**2. Environment configuration**

Create `backend/.env` based on `backend/.env.example`. For the local Docker database this is enough:

```env
PORT=3000
DATABASE_URL=postgres://gym:gym@localhost:5432/gym_app
```

**3. Start the application**

From the project root, run:

```bash
npm run dev
```

The command starts PostgreSQL in Docker, as well as the backend and frontend.

The script does not wait for the database to become fully ready, so the services may need a moment to start communicating correctly, especially on the first run.

Press `Ctrl+C` to stop the backend and frontend. The database remains running.

SQL scripts, resetting the database and connecting with `psql` are described in the [database documentation](docs/database.md). Detailed technical information is available in the documentation for each part of the application.

### Project structure

```text
gym-app/
├── frontend/           frontend application (React, Vite)
├── backend/            application server (Node.js, Express)
├── db/                 SQL scripts
├── docs/               project documentation
├── docker-compose.yml  Docker configuration
├── package.json        main project scripts
└── README.md           main documentation
```

### Working rules

1. Check Trello to see which task you are assigned to.
2. Create a branch from `main`, then open a Pull Request.
3. Another team member must review the changes before they are merged.
4. Branch naming:
   - `feature/short-name` — new features,
   - `fix/short-name` — bug fixes.
5. Commits should be short and descriptive, using prefixes such as `feat:`, `fix:`, `docs:` or `chore:`, e.g. `feat: add exercises page`.
6. Do not commit directly to `main`.

### Links

- **Trello:** [Gym App](https://trello.com/b/8s6KedpA/gym-app)
- **Figma:** [Gym Tracker UI Design](https://www.figma.com/make/b2s33645iwv3cAqqjDGphV/Gym-Tracker-UI-Design)

**Technical documentation:**

- [Frontend](docs/frontend.md)
- [Backend](docs/backend.md)
- [API](docs/api.md)
- [Database](docs/database.md)

**Sprint documentation:**

- [Sprint 1](docs/sprint/sprint1.md)
- [Sprint 2](docs/sprint/sprint2.md)
- [Sprint 3](docs/sprint/sprint3.md)
