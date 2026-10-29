# Gym App

[Polski](#polski) | [English](#english)

---

## Polski

Aplikacja webowa do śledzenia treningów. Docelowo umożliwi przeglądanie ćwiczeń, planowanie treningów, zapisywanie sesji i analizowanie postępów. Projekt zespołowy realizowany w ramach zajęć z tworzenia oprogramowania. W pierwszej kolejności rozwijana jest wersja webowa, a w przyszłości planowana jest wersja mobilna.

### Zespół

| Osoba | Rola |
|---|---|
| Jakub Kukla | Scrum Master |
| Alex Turcu | Baza danych |
| Szymon Gniadek | Backend |
| Bartosz Flis | Design |
| Kamil Woda | Frontend |
| Igor Góral | Frontend |

### Technologie

- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Baza danych:** PostgreSQL 17, Docker

### Uruchomienie projektu

Wymagania: Node.js, npm i Docker Desktop z działającym Docker Compose.

Przy pierwszym uruchomieniu, w głównym katalogu projektu, zainstaluj zależności:

```bash
npm install
npm --prefix backend install
npm --prefix frontend install
```

Utwórz plik `backend/.env` na podstawie `backend/.env.example`. Ustaw w nim `DATABASE_URL` oraz `PORT`.

Przykładowa konfiguracja lokalnej bazy:

```env
DATABASE_URL=postgres://gym:gym@localhost:5432/gym_app
PORT=3000
```

Uruchom bazę danych, backend i frontend jedną komendą:

```bash
npm run dev
```

Polecenie uruchamia PostgreSQL w Dockerze oraz backend i frontend. Skrypt nie czeka na pełną gotowość bazy danych, więc przy pierwszym uruchomieniu usługi mogą potrzebować chwili, zanim zaczną poprawnie współpracować.

Aby zatrzymać backend i frontend, naciśnij `Ctrl+C`. Baza danych pozostanie uruchomiona.

### Baza danych

Podczas pierwszego tworzenia bazy wykonywane są skrypty:

- `db/01_schema.sql` — tworzy strukturę tabel.
- `db/02_seed.sql` — dodaje przykładowe dane.

Skrypty inicjalizacyjne wykonują się automatycznie tylko przy pierwszym utworzeniu bazy z pustym wolumenem.

Po zmianie skryptów SQL, jeśli chcesz utworzyć bazę od nowa, możesz wykonać:

```bash
docker compose down -v
docker compose up -d
```

**Uwaga:** `docker compose down -v` usuwa wolumeny, a tym samym dane zapisane w lokalnej bazie. Używaj tej komendy tylko wtedy, gdy chcesz zresetować bazę.

Wyłączenie bazy bez usuwania danych:

```bash
docker compose down
```

Połączenie z bazą z terminala:

```bash
docker compose exec db psql -U gym -d gym_app
```

Dane dostępowe podane w tym pliku są przeznaczone wyłącznie do lokalnego środowiska deweloperskiego.

### Struktura projektu

```text
frontend/           aplikacja React (Vite)
backend/            serwer API (Node.js, Express)
db/                 schemat SQL i dane przykładowe
docs/               dokumentacja projektu i sprintów
docker-compose.yml  konfiguracja PostgreSQL
package.json        skrypty projektu
README.md           dokumentacja główna
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

- **Trello:** https://trello.com/b/8s6KedpA/gym-app
- **Figma:** https://www.figma.com/make/b2s33645iwv3cAqqjDGphV/Gym-Tracker-UI-Design
- **Baza danych:** [docs/database.md](docs/database.md)
- **Sprint 1:** [docs/sprint1.md](docs/sprint1.md)
- **Sprint 2:** [docs/sprint2.md](docs/sprint2.md)

---

## English

A web application for workout tracking. Its intended features include browsing exercises, planning workouts, logging training sessions and analyzing progress. This is a team project developed as part of a software engineering course. The web version is being developed first, with a mobile version planned for the future.

### Team

| Person | Role |
|---|---|
| Jakub Kukla | Scrum Master |
| Alex Turcu | Database |
| Szymon Gniadek | Backend |
| Bartosz Flis | Design |
| Kamil Woda | Frontend |
| Igor Góral | Frontend |

### Technologies

- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Database:** PostgreSQL 17, Docker

### Running the project

Requirements: Node.js, npm and Docker Desktop with Docker Compose running.

On the first run, install the dependencies from the project root:

```bash
npm install
npm --prefix backend install
npm --prefix frontend install
```

Create `backend/.env` based on `backend/.env.example`. Set `DATABASE_URL` and `PORT`.

Example configuration for the local database:

```env
DATABASE_URL=postgres://gym:gym@localhost:5432/gym_app
PORT=3000
```

Start the database, backend and frontend with one command:

```bash
npm run dev
```

The command starts PostgreSQL in Docker, as well as the backend and frontend. The script does not wait for the database to become fully ready, so the services may need a moment to start communicating correctly, especially on the first run.

Press `Ctrl+C` to stop the backend and frontend. The database remains running.

### Database

When the database is created for the first time, the following SQL scripts are executed:

- `db/01_schema.sql` — creates the database tables.
- `db/02_seed.sql` — inserts sample data.

The initialization scripts run automatically only when the database is first created with an empty volume.

If you change the SQL scripts and want to recreate the database, you can run:

```bash
docker compose down -v
docker compose up -d
```

**Warning:** `docker compose down -v` removes volumes and therefore deletes the data stored in the local database. Use this command only when you intend to reset the database.

To stop the database without deleting its data:

```bash
docker compose down
```

Connect to the database from the terminal:

```bash
docker compose exec db psql -U gym -d gym_app
```

The credentials in this file are intended for the local development environment only.

### Project structure

```text
frontend/           React application (Vite)
backend/            API server (Node.js, Express)
db/                 SQL schema and sample data
docs/               project and sprint documentation
docker-compose.yml  PostgreSQL configuration
package.json        project scripts
README.md           main documentation
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

- **Trello:** https://trello.com/b/8s6KedpA/gym-app
- **Figma:** https://www.figma.com/make/b2s33645iwv3cAqqjDGphV/Gym-Tracker-UI-Design
- **Database:** [docs/database.md](docs/database.md)
- **Sprint 1:** [docs/sprint1.md](docs/sprint1.md)
- **Sprint 2:** [docs/sprint2.md](docs/sprint2.md)
