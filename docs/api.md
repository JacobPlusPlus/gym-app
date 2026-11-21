# Dokumentacja API

[Polski](#polski) | [English](#english)

---

## Polski

## 1. Opis

API GymApp umożliwia frontendowi pobieranie danych z backendu. Komunikacja odbywa się przez HTTP, a dane są przesyłane w formacie JSON.

**Adres bazowy:** `http://localhost:3000`

Endpointy są dostępne pod prefiksem `/api`.

## 2. Dostępne endpointy

| Metoda | Endpoint         | Opis                                  |
| ------ | ---------------- | ------------------------------------- |
| GET    | `/api/exercises` | Pobiera listę ćwiczeń                 |
| GET    | `/api/reports`   | Pobiera dane do raportów treningowych |

## 3. Ćwiczenia

### GET `/api/exercises`

Pobiera wszystkie ćwiczenia z tabeli `exercises`, posortowane według identyfikatora.

**Parametry:** brak.

**Przykładowa odpowiedź – 200 OK:**

```json
[
  {
    "id": 1,
    "name": "Bench Press",
    "equipment": "Barbell",
    "muscleGroup": "Chest",
    "image": "bench-press.jpg",
    "difficulty": "Intermediate"
  }
]
```

Każdy element zawiera:

| Pole          | Typ    | Opis                                                   |
| ------------- | ------ | ------------------------------------------------------ |
| `id`          | number | Identyfikator ćwiczenia                                |
| `name`        | string | Nazwa ćwiczenia                                        |
| `equipment`   | string | Wymagany sprzęt                                        |
| `muscleGroup` | string | Grupa mięśniowa                                        |
| `image`       | string | Nazwa pliku obrazu (z `frontend/src/assets/exercises`) |
| `difficulty`  | string | Poziom trudności                                       |

**Błąd – 500 Internal Server Error:**

```json
{
  "error": "Database error"
}
```

## 4. Raporty treningowe

### GET `/api/reports`

Pobiera dane wykorzystywane do wyświetlania statystyk i historii treningów.

**Parametry:** brak.

**Przykładowa odpowiedź – 200 OK:**

```json
{
  "summary": {
    "workouts": 12,
    "minutes": 840,
    "sets": 96,
    "reps": 720,
    "volume": "12500"
  },
  "workouts": [
    {
      "id": 1,
      "workoutDate": "2026-11-20",
      "planName": "Push Day",
      "durationMin": 60,
      "sets": 12
    }
  ],
  "weeklyActivity": [
    {
      "weekStart": "2026-11-16",
      "workouts": 3
    }
  ],
  "records": [
    {
      "name": "Bench Press",
      "bestWeight": "80"
    }
  ]
}
```

Przykład przedstawia strukturę odpowiedzi. Wartości są przykładowe.

**Uwaga:** `volume` i `bestWeight` są zwracane jako tekst (PostgreSQL zwraca typ `numeric` jako string). Przed obliczeniami zamień je przez `Number(...)`.

**Struktura odpowiedzi:**

| Pole             | Opis                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------- |
| `summary`        | Podsumowanie aktywności treningowej                                                      |
| `workouts`       | Lista maksymalnie 8 ostatnich treningów                                                  |
| `weeklyActivity` | Liczba treningów w każdym z 8 tygodni, łącznie z bieżącym                                |
| `records`        | Maksymalnie 3 ćwiczenia z najwyższym zarejestrowanym ciężarem (bez ćwiczeń z ciężarem 0) |

**Pola `summary`:**

| Pole       | Typ    | Opis                                                        |
| ---------- | ------ | ----------------------------------------------------------- |
| `workouts` | number | Liczba treningów                                            |
| `minutes`  | number | Łączny czas treningów w minutach                            |
| `sets`     | number | Łączna liczba serii                                         |
| `reps`     | number | Łączna liczba powtórzeń                                     |
| `volume`   | string | Łączny tonaż (suma `reps × weight_kg`), zwracany jako tekst |

**Pola elementu `workouts`:**

| Pole          | Typ    | Opis                                  |
| ------------- | ------ | ------------------------------------- |
| `id`          | number | Identyfikator treningu                |
| `workoutDate` | string | Data treningu (`YYYY-MM-DD`)          |
| `planName`    | string | Nazwa planu lub `Independent workout` |
| `durationMin` | number | Czas treningu w minutach              |
| `sets`        | number | Liczba serii                          |

**Pola elementu `weeklyActivity`:**

| Pole        | Typ    | Opis                                     |
| ----------- | ------ | ---------------------------------------- |
| `weekStart` | string | Data rozpoczęcia tygodnia (`YYYY-MM-DD`) |
| `workouts`  | number | Liczba treningów w danym tygodniu        |

**Pola elementu `records`:**

| Pole         | Typ    | Opis                                                  |
| ------------ | ------ | ----------------------------------------------------- |
| `name`       | string | Nazwa ćwiczenia                                       |
| `bestWeight` | string | Największy zarejestrowany ciężar, zwracany jako tekst |

**Błąd – 500 Internal Server Error:**

```json
{
  "error": "Could not load workout reports"
}
```

## 5. Obsługa błędów

API wykorzystuje standardowe kody statusu HTTP:

| Kod                         | Znaczenie                                                       |
| --------------------------- | --------------------------------------------------------------- |
| `200 OK`                    | Żądanie zakończone powodzeniem                                  |
| `500 Internal Server Error` | Błąd podczas przetwarzania żądania lub pobierania danych z bazy |

W przypadku błędu backend zwraca odpowiedź JSON zawierającą pole `error` z opisem problemu.

## 6. Komunikacja z frontendem

Frontend korzysta z endpointów API za pomocą żądań `fetch()`.

W konfiguracji Vite ustawiono proxy:

- Żądania rozpoczynające się od `/api` są przekazywane do `http://localhost:3000`.
- Dzięki temu frontend może korzystać ze ścieżek względnych, np. `/api/exercises`.
  Przykład:

```javascript
const response = await fetch('/api/exercises');

if (!response.ok) {
  throw new Error('Failed to fetch exercises');
}

const exercises = await response.json();
```

## 7. Aktualne ograniczenia API

- API udostępnia obecnie wyłącznie żądania GET.
- Nie zaimplementowano jeszcze uwierzytelniania użytkowników.
- Endpoint raportów korzysta ze stałego identyfikatora użytkownika `USER_ID = 1`.
- API nie udostępnia obecnie endpointów do tworzenia, edycji ani usuwania danych.

---

## English

## 1. Overview

The GymApp API allows the frontend to retrieve data from the backend. Communication uses HTTP, and data is transferred in JSON format.

**Base URL:** `http://localhost:3000`

All endpoints use the `/api` prefix.

## 2. Available Endpoints

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| GET    | `/api/exercises` | Retrieves the exercise list   |
| GET    | `/api/reports`   | Retrieves workout report data |

## 3. Exercises

### GET `/api/exercises`

Retrieves all exercises from the `exercises` table, ordered by ID.

**Parameters:** none.

**Example response – 200 OK:**

```json
[
  {
    "id": 1,
    "name": "Bench Press",
    "equipment": "Barbell",
    "muscleGroup": "Chest",
    "image": "bench-press.jpg",
    "difficulty": "Intermediate"
  }
]
```

Each item contains:

| Field         | Type   | Description                                            |
| ------------- | ------ | ------------------------------------------------------ |
| `id`          | number | Exercise identifier                                    |
| `name`        | string | Exercise name                                          |
| `equipment`   | string | Required equipment                                     |
| `muscleGroup` | string | Target muscle group                                    |
| `image`       | string | Image file name (from `frontend/src/assets/exercises`) |
| `difficulty`  | string | Difficulty level                                       |

**Error – 500 Internal Server Error:**

```json
{
  "error": "Database error"
}
```

## 4. Workout Reports

### GET `/api/reports`

Retrieves data used to display workout statistics and workout history.

**Parameters:** none.

**Example response – 200 OK:**

```json
{
  "summary": {
    "workouts": 12,
    "minutes": 840,
    "sets": 96,
    "reps": 720,
    "volume": "12500"
  },
  "workouts": [
    {
      "id": 1,
      "workoutDate": "2026-11-20",
      "planName": "Push Day",
      "durationMin": 60,
      "sets": 12
    }
  ],
  "weeklyActivity": [
    {
      "weekStart": "2026-11-16",
      "workouts": 3
    }
  ],
  "records": [
    {
      "name": "Bench Press",
      "bestWeight": "80"
    }
  ]
}
```

The example shows the response structure. The values are illustrative.

**Note:** `volume` and `bestWeight` are returned as text (PostgreSQL returns `numeric` as a string). Convert them with `Number(...)` before doing calculations.

**Response structure:**

| Field            | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| `summary`        | Workout activity summary                                                            |
| `workouts`       | List of up to 8 most recent workouts                                                |
| `weeklyActivity` | Number of workouts in each of 8 weeks, including the current week                   |
| `records`        | Up to 3 exercises with the highest recorded weight (zero-weight exercises excluded) |

**`summary` fields:**

| Field      | Type   | Description                                                |
| ---------- | ------ | ---------------------------------------------------------- |
| `workouts` | number | Number of workouts                                         |
| `minutes`  | number | Total workout duration in minutes                          |
| `sets`     | number | Total number of sets                                       |
| `reps`     | number | Total number of repetitions                                |
| `volume`   | string | Total volume (sum of `reps × weight_kg`), returned as text |

**`workouts` item fields:**

| Field         | Type   | Description                        |
| ------------- | ------ | ---------------------------------- |
| `id`          | number | Workout identifier                 |
| `workoutDate` | string | Workout date (`YYYY-MM-DD`)        |
| `planName`    | string | Plan name or `Independent workout` |
| `durationMin` | number | Workout duration in minutes        |
| `sets`        | number | Number of sets                     |

**`weeklyActivity` item fields:**

| Field       | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `weekStart` | string | Week start date (`YYYY-MM-DD`)      |
| `workouts`  | number | Number of workouts during that week |

**`records` item fields:**

| Field        | Type   | Description                               |
| ------------ | ------ | ----------------------------------------- |
| `name`       | string | Exercise name                             |
| `bestWeight` | string | Highest recorded weight, returned as text |

**Error – 500 Internal Server Error:**

```json
{
  "error": "Could not load workout reports"
}
```

## 5. Error Handling

The API uses standard HTTP status codes:

| Code                        | Description                                                                |
| --------------------------- | -------------------------------------------------------------------------- |
| `200 OK`                    | Request completed successfully                                             |
| `500 Internal Server Error` | An error occurred while processing the request or retrieving database data |

When an error occurs, the backend returns a JSON response containing an `error` field with a description.

## 6. Frontend Communication

The frontend accesses API endpoints using `fetch()` requests.

Vite is configured with a proxy:

- Requests starting with `/api` are forwarded to `http://localhost:3000`.
- The frontend can use relative paths, for example `/api/exercises`.
  Example:

```javascript
const response = await fetch('/api/exercises');

if (!response.ok) {
  throw new Error('Failed to fetch exercises');
}

const exercises = await response.json();
```

## 7. Current API Limitations

- The API currently supports GET requests only.
- User authentication has not been implemented.
- The reports endpoint uses a fixed user identifier: `USER_ID = 1`.
- There are currently no endpoints for creating, updating or deleting data.
