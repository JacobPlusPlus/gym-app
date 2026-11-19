# Backend

**Język / Language:** [Polski](#polski) | [English](#english)

<a id="polski"></a>

## Opis

Backend GymApp jest REST API napisanym w Node.js. Używa Express do obsługi
endpointów HTTP oraz modułu `pg` do połączenia z PostgreSQL.

Obecnie backend udostępnia dane ćwiczeń i raportów treningowych dla frontendu
React. Nie ma jeszcze logowania, autoryzacji ani sesji użytkownika. Raporty i
dane testowe są obecnie ograniczone do użytkownika o identyfikatorze `1`.

## Technologie

- Node.js z ES Modules (`"type": "module"`).
- Express 5.
- `pg` i pulę połączeń PostgreSQL.
- `cors` z dopuszczonym originem `http://localhost:5173`.
- `dotenv` do odczytu zmiennych środowiskowych.
- PostgreSQL uruchamiany przez Docker Compose.

## Struktura plików

```text
backend/
  .env
  .env.example
  package.json
  src/
    db.js
    server.js
    routes/
      exercises.js
      reports.js
```

### `src/server.js`

Plik uruchamia aplikację Express i rejestruje:

- middleware CORS,
- parser JSON,
- router ćwiczeń pod `/api/exercises`,
- router raportów pod `/api/reports`,
- globalny middleware błędów.

Serwer nasłuchuje na porcie z `process.env.PORT`.

### `src/db.js`

Tworzy pojedynczą pulę połączeń PostgreSQL:

```js
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
})
```

Routery importują tę pulę i wykonują przez nią zapytania SQL.

### `src/routes/exercises.js`

Udostępnia katalog ćwiczeń.

```text
GET /api/exercises
```

Odpowiedź to tablica obiektów:

```json
[
  {
    "id": 1,
    "name": "Barbell Back Squat",
    "equipment": "Barbell",
    "muscleGroup": "Legs",
    "image": "barbell-back-squat.jpg",
    "difficulty": "Intermediate"
  }
]
```

Alias kolumny `muscle_group` na `muscleGroup` umożliwia bezpośrednie użycie
wyniku przez frontend. Dane są sortowane według `id`.

Błąd zapytania jest logowany w konsoli, a klient otrzymuje:

```json
{ "error": "Database error" }
```

ze statusem HTTP `500`.

### `src/routes/reports.js`

Udostępnia wszystkie dane potrzebne przez stronę raportów:

```text
GET /api/reports
```

Router używa stałego identyfikatora `USER_ID = 1`. Cztery zapytania są
wykonane równolegle za pomocą `Promise.all`:

1. `summary`
   - zlicza treningi,
   - sumuje ich czas,
   - zlicza serie i powtórzenia,
   - dodatkowo oblicza wolumen jako sumę `reps * weight_kg`.
2. `workouts`
   - łączy `workouts` z `plans` i `workout_sets`,
   - zwraca osiem najnowszych treningów,
   - używa nazwy `Independent workout`, gdy trening nie miał planu.
3. `weeklyActivity`
   - tworzy bieżący tydzień i poprzednich siedem tygodni,
   - zlicza treningi przypisane do każdego tygodnia,
   - zwraca również tygodnie bez treningów.
4. `records`
   - łączy `workout_sets`, `workouts` i `exercises`,
   - pomija serie o ciężarze `0`,
   - wybiera najwyższy ciężar dla każdego ćwiczenia,
   - zwraca trzy najlepsze rekordy.

Przykładowa odpowiedź:

```json
{
  "summary": {
    "workouts": 3,
    "minutes": 180,
    "sets": 30,
    "reps": 260,
    "volume": "20100"
  },
  "workouts": [],
  "weeklyActivity": [],
  "records": []
}
```

Dane są używane przez [Reports.jsx](../frontend/src/pages/Reports.jsx) oraz
[Home.jsx](../frontend/src/pages/Home.jsx). Frontend wyświetla podsumowania,
wykres ośmiu tygodni, rekordy ćwiczeń i tabelę ostatnich sesji.

Błąd zapytania jest logowany w konsoli, a klient otrzymuje:

```json
{ "error": "Could not load workout reports" }
```

ze statusem HTTP `500`.

## Konfiguracja

Plik `.env.example` dokumentuje wymagane zmienne:

```env
PORT=3000
DATABASE_URL=postgres://gym:gym@localhost:5432/gym_app
```

Rzeczywisty port lokalnego PostgreSQL wystawiony przez Docker Compose
jest `5433`, ponieważ Compose mapuje `5433:5432`. Lokalny backend powinien więc
korzystać z:

```env
PORT=3000
DATABASE_URL=postgres://gym:gym@localhost:5433/gym_app
```

Plik `backend/.env` nie jest wersjonowany i zawiera konfigurację konkretnego
środowiska.

## Uruchomienie

Z katalogu głównego projektu uruchom PostgreSQL:

```bash
docker compose up -d
```

Zainstaluj zależności i uruchom backend:

```bash
npm --prefix backend install
npm --prefix backend run dev
```

Backend będzie dostępny pod `http://localhost:3000`.

Alternatywnie projekt można uruchomić jednym skryptem opisanym w głównym
`README.md`.

## Połączenie z frontendem

Frontend Vite używa proxy:

```js
'/api': 'http://localhost:3000'
```

Dlatego komponenty frontendowe pobierają `/api/exercises` i `/api/reports`
zamiast wpisywać bezpośrednio adres backendu.

Backend CORS dopuszcza tylko origin `http://localhost:5173`.

## Połączenie z bazą

Backend korzysta z bazy opisanej w [database.md](./database.md).

Główne połączenia SQL:

| Router | Tabele |
|---|---|
| `/api/exercises` | `exercises` |
| `/api/reports` | `workouts`, `workout_sets`, `plans`, `exercises` |

Pełny schemat, relacje i dane inicjalizujące znajdują się w `db/01_schema.sql`
i `db/02_seed.sql`.

## Obsługa błędów

- Błędy w routerach są przechwytywane lokalnie i zwracane jako JSON.
- `/api/exercises` zwraca `500`, jeśli wystąpi problem z bazą.
- `/api/reports` zwraca `500`, jeśli którekolwiek zapytanie się nie powiedzie.
- Globalny middleware w `server.js` zwraca `500`, gdy błąd dotrze do niego
  nieskrócony przez router.
- Endpointy obecnie nie używają kodów `401`, `403` ani `404`; nie ma też
  autoryzacji na podstawie zalogowanego użytkownika.

## Obecne ograniczenia

- Brak rejestracji i logowania.
- Brak haseł i tokenów sesji.
- Brak CRUD dla treningów i planów.
- Raporty zawsze dotyczą użytkownika `1`.
- Nie ma paginacji ani filtrowania raportów.
- CORS jest skonfigurowany tylko dla lokalnego frontendu Vite.
- Baza i backend są uruchamiane lokalnie lub przez Docker.

<a id="english"></a>

## Overview

The GymApp backend is a REST API built with Node.js. It uses Express for HTTP
routing and `pg` for PostgreSQL connections.

The backend currently provides the exercise catalog and workout report data
used by the React frontend. Authentication and user sessions are not
implemented. Report data is temporarily restricted to user ID `1`.

## Technology

- Node.js ES Modules (`"type": "module"`).
- Express 5.
- `pg` connection pool.
- `cors` allowing `http://localhost:5173`.
- `dotenv` environment-variable loading.
- PostgreSQL through Docker Compose.

## File structure

```text
backend/
  .env
  .env.example
  package.json
  src/
    db.js
    server.js
    routes/
      exercises.js
      reports.js
```

### `src/server.js`

Starts Express and registers CORS, the JSON body parser, `/api/exercises`,
`/api/reports`, and a global error-handling middleware. The listening port comes
from `process.env.PORT`.

### `src/db.js`

Creates a PostgreSQL pool from `DATABASE_URL` and exports it for route modules.

### `src/routes/exercises.js`

`GET /api/exercises` returns the complete exercise catalog ordered by ID. The
query selects `id`, `name`, `equipment`, `muscle_group`, `image`, and
`difficulty`. It aliases `muscle_group` as `muscleGroup` for the React
frontend.

Database failures return HTTP `500` with:

```json
{ "error": "Database error" }
```

### `src/routes/reports.js`

`GET /api/reports` runs four PostgreSQL queries in parallel for demo user `1`:

- `summary`: workout count, duration, set count, repetition count, and volume.
- `workouts`: eight most recent sessions joined with plans and workout sets.
- `weeklyActivity`: workout counts for the current week and previous seven weeks.
- `records`: the highest positive weight for the top three exercises.

The response has this shape:

```json
{
  "summary": {},
  "workouts": [],
  "weeklyActivity": [],
  "records": []
}
```

The React Reports page and Dashboard consume this endpoint. SQL failures return
HTTP `500` with:

```json
{ "error": "Could not load workout reports" }
```

## Configuration

Create `backend/.env` from `.env.example`:

```env
PORT=3000
DATABASE_URL=postgres://gym:gym@localhost:5433/gym_app
```

Docker Compose maps PostgreSQL port `5433` on the host to port `5432` in the
container.

## Running

```bash
docker compose up -d
npm --prefix backend install
npm --prefix backend run dev
```

The API listens on `http://localhost:3000`.

## Frontend integration

The Vite proxy forwards `/api` requests to `http://localhost:3000`. The
frontend currently calls `/api/exercises` and `/api/reports`.

## Database integration

The backend uses the schema documented in [database.md](./database.md):

| Endpoint | Tables |
|---|---|
| `/api/exercises` | `exercises` |
| `/api/reports` | `workouts`, `workout_sets`, `plans`, `exercises` |

Schema and seed files are located in `db/01_schema.sql` and `db/02_seed.sql`.

## Current limitations

- No login or authentication.
- No password verification or sessions.
- No workout or plan CRUD API.
- Reports always use user ID `1`.
- No report pagination or filters.
- CORS allows only the local Vite origin.
