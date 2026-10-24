# Gym App

[Polski](#polski) | [English](#english)

---

## Polski

Aplikacja do śledzenia treningów: przeglądanie ćwiczeń, planowanie treningów, zapisywanie sesji i raporty postępów. Projekt zespołowy na zajęcia z tworzenia oprogramowania. Najpierw aplikacja webowa, później wersja mobilna.

Cel i wyniki poszczególnych sprintów: [docs/sprint1.md](docs/sprint1.md).

### Zespół

|      Osoba     |    Rola      |
| -------------- | ------------ |
| Jakub Kukla    | Scrum Master |
| Alex Turcu     | Baza danych  |
| Szymon Gniadek | Backend      |
| Bartosz Flis   | Design       | 
| Kamil Woda     | Frontend     |
| Igor Góral     | Frontend     |

### Technologie

- Frontend: React, Vite, React Router
- Baza danych: PostgreSQL 17 (Docker)
- Backend: Node.js, Express

### Uruchomienie

Frontend:

    cd frontend
    npm install
    npm run dev

Baza danych (wymaga Dockera), z głównego folderu projektu:

    docker compose up -d

Polecenie uruchamia Postgresa i wykonuje `db/01_schema.sql` oraz `db/02_seed.sql` (tabele i przykładowe dane).

- połączenie: `postgres://gym:gym@localhost:5432/gym_app`
- z terminala: `docker compose exec db psql -U gym -d gym_app`

Pliki SQL wykonują się tylko przy pierwszym utworzeniu bazy. Po ich zmianie: `docker compose down -v`, a potem `docker compose up -d`.

### Struktura projektu

    frontend/            aplikacja React (Vite)
    backend/             serwer API (w przygotowaniu)
    db/                  schemat SQL i dane przykładowe
    docs/                dokumentacja (opis bazy, sprinty)
    docker-compose.yml   lokalna baza PostgreSQL
    README.md

### Zasady pracy

1. Sprawdź w Trello, do czego jesteś przypisany.
2. Praca: branch z `main` → Pull Request → review kogoś z zespołu → merge.
3. Nazwy branchy: `feature/krotka-nazwa` dla nowych funkcji, `fix/krotka-nazwa` dla poprawek.
4. Commity: krótkie i opisowe, z prefiksem `feat:`, `fix:`, `docs:` lub `chore:`, np. `feat: dodaj strone cwiczen`.
5. Zakaz commitów prosto na `main`.

### Linki

- Trello: https://trello.com/b/8s6KedpA/gym-app
- Figma: https://www.figma.com/make/b2s33645iwv3cAqqjDGphV/Gym-Tracker-UI-Design
- Opis bazy danych: [docs/database.md](docs/database.md)
- Sprint 1: [docs/sprint1.md](docs/sprint1.md)

---

## English

A workout tracking app: browse exercises, plan workouts, log training sessions and see progress reports. A team project for a software engineering course. A web app first, a mobile version later.

Goals and results of each sprint: [docs/sprint1.md](docs/sprint1.md).

### Team

|      Person    |     Role     |
| -------------- | ------------ |
| Jakub Kukla    | Scrum Master |
| Alex Turcu     | Baza danych  |
| Szymon Gniadek | Backend      |
| Bartosz Flis   | Design       | 
| Kamil Woda     | Frontend     |
| Igor Góral     | Frontend     |

### Tech stack

- Frontend: React, Vite, React Router
- Database: PostgreSQL 17 (Docker)
- Backend: to be decided

### Running the project

Frontend:

    cd frontend
    npm install
    npm run dev

Database (needs Docker), from the project root:

    docker compose up -d

This starts Postgres and runs `db/01_schema.sql` and `db/02_seed.sql` (tables and sample data).

- connect: `postgres://gym:gym@localhost:5432/gym_app`
- terminal: `docker compose exec db psql -U gym -d gym_app`

The SQL files only run when the database is created for the first time. If you change them: `docker compose down -v`, then `docker compose up -d`.

### Project structure

    frontend/            React app (Vite)
    backend/             API server (work in progress)
    db/                  SQL schema and sample data
    docs/                documentation (database description, sprints)
    docker-compose.yml   local PostgreSQL database
    README.md

### Working rules

1. Check Trello to see what you are assigned to.
2. Workflow: branch from `main` → Pull Request → review by someone from the team → merge.
3. Branch names: `feature/short-name` for new features, `fix/short-name` for fixes.
4. Commits: short and descriptive, prefixed with `feat:`, `fix:`, `docs:` or `chore:`, e.g. `feat: add exercises page`.
5. No direct commits to `main`.

### Links

- Trello: https://trello.com/b/8s6KedpA/gym-app
- Figma: https://www.figma.com/make/b2s33645iwv3cAqqjDGphV/Gym-Tracker-UI-Design
- Database description: [docs/database.md](docs/database.md)
- Sprint 1: [docs/sprint1.md](docs/sprint1.md)
