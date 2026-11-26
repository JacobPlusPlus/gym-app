# Backend Documentation

[Polski](#polski) | [English](#english)

---

## Polski

### Opis

Backend aplikacji GymApp odpowiada za obsługę żądań HTTP, komunikację z bazą danych PostgreSQL oraz udostępnianie danych frontendowi za pomocą API.

Został zbudowany w Node.js z wykorzystaniem frameworka Express. Backend działa jako osobna część aplikacji i pośredniczy między frontendem a bazą danych.

### Technologie

- **Środowisko uruchomieniowe:** Node.js
- **Framework:** Express 5
- **Baza danych:** PostgreSQL 17
- **Komunikacja z bazą danych:** node-postgres (`pg`)
- **Haszowanie haseł:** `scrypt` z modułu `node:crypto`
- **Sesje:** losowe tokeny Bearer; PostgreSQL przechowuje tylko ich skróty SHA-256
- **Zmienne środowiskowe:** dotenv
- **Obsługa żądań z frontendu:** CORS

### Struktura katalogów

```text
backend/
├── src/
│   ├── auth/         # Haszowanie haseł i middleware sesji
│   ├── routes/       # Moduły obsługujące endpointy API
│   ├── db.js         # Konfiguracja połączenia z bazą danych
│   └── server.js     # Konfiguracja i uruchomienie serwera Express
├── test/             # Testy kryptografii uwierzytelniania
├── .env.example      # Przykładowa konfiguracja zmiennych środowiskowych
└── package.json      # Zależności i skrypty backendu
```

### Serwer Express

Główny plik `server.js` odpowiada za konfigurację i uruchomienie serwera.

Obecnie serwer:

- inicjalizuje aplikację Express,
- obsługuje żądania w formacie JSON,
- konfiguruje dostęp z adresu frontendowego `https://localhost:5173` za pomocą CORS,
- tworzy tabelę sesji, jeśli nie istnieje,
- rejestruje moduły routingu API,
- obsługuje błędy serwera za pomocą wspólnego middleware,
- uruchamia serwer na porcie określonym w zmiennej `PORT`.

### Routing API

Endpointy są podzielone na osobne moduły znajdujące się w katalogu `src/routes/`.

Aktualnie dostępne moduły:

- **exercises.js** – pobieranie listy ćwiczeń z bazy danych.
- **auth.js** – rejestracja, logowanie, odczyt i aktualizacja profilu oraz wylogowanie.
- **reports.js** – pobieranie raportów dla użytkownika z aktywną sesją.

Każdy moduł korzysta z Express Router i udostępnia swoje endpointy pod odpowiednim prefiksem `/api`.
Raporty i endpointy profilu wymagają nagłówka `Authorization: Bearer <token>`. Katalog ćwiczeń pozostaje publiczny.

### Uwierzytelnianie i sesje

Hasła są przechowywane jako hashe `scrypt` z unikalną solą; backend nigdy nie zapisuje ich w postaci jawnej.
Po rejestracji lub logowaniu API zwraca losowy token sesji ważny przez 7 dni. W bazie przechowywany jest
wyłącznie jego skrót SHA-256. Middleware sprawdza sesję przy każdym żądaniu chronionym, a wylogowanie
unieważnia ją w bazie. Tabela `auth_sessions` jest tworzona przy uruchomieniu backendu, także dla
istniejących wolumenów PostgreSQL.

Frontend wysyła token jako Bearer i pobiera aktualne dane konta z `/api/auth/me`. Identyfikator użytkownika
w raportach pochodzi z poprawnej sesji, nigdy z parametru klienta.

Szczegółowy opis metod HTTP, parametrów, odpowiedzi i kodów statusu znajduje się w dokumentacji [API](api.md).

### Połączenie z bazą danych

Do komunikacji z PostgreSQL wykorzystywana jest biblioteka `pg` (node-postgres).

Konfiguracja połączenia znajduje się w pliku `src/db.js`. Wykorzystywana jest pula połączeń (`Pool`), która pobiera adres bazy danych ze zmiennej środowiskowej `DATABASE_URL`.

Zapytania SQL wykonywane są po stronie backendu. Frontend nie łączy się bezpośrednio z bazą danych.

### Konfiguracja środowiska

Backend korzysta ze zmiennych środowiskowych przechowywanych w pliku `.env`.

Przykładowa konfiguracja znajduje się w pliku `.env.example`.

| Zmienna        | Opis                                    |
| -------------- | --------------------------------------- |
| `PORT`         | Port, na którym uruchamiany jest serwer |
| `DATABASE_URL` | Adres połączenia z bazą PostgreSQL      |

Przykładowa konfiguracja:

```env
PORT=3000
DATABASE_URL=postgres://gym:gym@localhost:5432/gym_app
```

Plik `.env` nie powinien być dodawany do repozytorium. Zawiera lokalną konfigurację środowiska.

### Obsługa błędów

Backend wykorzystuje bloki `try/catch` do obsługi błędów podczas wykonywania zapytań do bazy danych.

W przypadku błędów:

- szczegóły błędu są zapisywane w konsoli serwera,
- odpowiedź HTTP zawiera odpowiedni kod statusu,
- frontend otrzymuje komunikat o błędzie w formacie JSON.

Serwer posiada również wspólne middleware obsługujące nieprzechwycone błędy Express.

### Aktualny zakres funkcjonalności

Backend udostępnia obecnie:

- pobieranie ćwiczeń z tabeli `exercises`,
- rejestrację, logowanie i wylogowanie użytkowników,
- odczyt i aktualizację profilu zalogowanego użytkownika,
- pobieranie danych statystycznych na podstawie zapisanych treningów,
- zestawienie ostatnich treningów,
- zestawienie aktywności tygodniowej,
- zestawienie najlepszych wyników ćwiczeń.

Backend filtruje raporty według identyfikatora pobranego z uwierzytelnionej sesji. Katalog ćwiczeń jest wspólny dla kont.

### Dostępne skrypty

Skrypty backendu są zdefiniowane w pliku `backend/package.json`.

| Komenda       | Opis                                                                           |
| ------------- | ------------------------------------------------------------------------------ |
| `npm run dev` | Uruchamia backend w trybie deweloperskim z automatycznym restartem po zmianach |
| `npm start`   | Uruchamia backend                                                              |
| `npm test`    | Uruchamia testy kryptografii uwierzytelniania                                     |

Komendy należy wykonywać z katalogu `backend/`.

Instrukcja uruchamiania całego projektu znajduje się w głównym pliku [README.md](../README.md).

### Zasady rozwoju backendu

1. Umieszczaj endpointy w odpowiednich modułach katalogu `routes/`.
2. Korzystaj ze wspólnej konfiguracji połączenia z bazą danych.
3. Stosuj parametryzowane zapytania SQL.
4. Obsługuj błędy operacji bazodanowych.
5. Nie umieszczaj danych dostępowych bezpośrednio w kodzie.
6. Zachowuj spójny format odpowiedzi API.
7. Dodaj krótki komentarz nad każdą trasą i opisz endpoint w [api.md](api.md).
8. Sprawdzaj działanie zmian przed utworzeniem Pull Requesta.

---

## English

### Overview

The GymApp backend is responsible for handling HTTP requests, communicating with the PostgreSQL database and providing data to the frontend through the API.

It is built with Node.js and the Express framework. The backend operates as a separate part of the application and acts as an intermediary between the frontend and the database.

### Technologies

- **Runtime environment:** Node.js
- **Framework:** Express 5
- **Database:** PostgreSQL 17
- **Database communication:** node-postgres (`pg`)
- **Password hashing:** `scrypt` from `node:crypto`
- **Sessions:** random Bearer tokens; PostgreSQL stores only SHA-256 token hashes
- **Environment variables:** dotenv
- **Frontend request handling:** CORS

### Project Structure

```text
backend/
├── src/
│   ├── auth/         # Password hashing and session middleware
│   ├── routes/       # Modules handling API endpoints
│   ├── db.js         # Database connection configuration
│   └── server.js     # Express server configuration and startup
├── test/             # Authentication cryptography tests
├── .env.example      # Example environment configuration
└── package.json      # Backend dependencies and scripts
```

### Express Server

The main `server.js` file is responsible for configuring and starting the server.

Currently, the server:

- initializes the Express application,
- handles JSON requests,
- configures CORS access from the frontend address `https://localhost:5173`,
- creates the session table if it does not exist,
- registers API routing modules,
- handles server errors through shared middleware,
- starts the server on the port specified by the `PORT` environment variable.

### API Routing

Endpoints are divided into separate modules located in the `src/routes/` directory.

Currently available modules:

- **exercises.js** – retrieves the list of exercises from the database.
- **auth.js** – registers, signs in, retrieves and updates a profile, and signs out.
- **reports.js** – retrieves reports for the user with an active session.

Each module uses Express Router and exposes its endpoints under the appropriate `/api` prefix.
Reports and profile endpoints require an `Authorization: Bearer <token>` header. The exercise catalog remains public.

### Authentication and Sessions

Passwords are stored as uniquely salted `scrypt` hashes; the backend never stores them in plain text.
Registration and login return a random session token valid for 7 days. Only its SHA-256 hash is stored
in the database. Middleware checks the session on every protected request, and logout revokes it in the
database. The `auth_sessions` table is created during backend startup, including for existing PostgreSQL volumes.

The frontend sends the token as a Bearer credential and retrieves current account details from `/api/auth/me`.
The report user ID comes from the authenticated session, never from a client-supplied parameter.

A detailed description of HTTP methods, parameters, responses and status codes is available in the [API Documentation](api.md).

### Database Connection

The `pg` library (node-postgres) is used to communicate with PostgreSQL.

The connection configuration is located in `src/db.js`. It uses a connection pool (`Pool`) and retrieves the database connection string from the `DATABASE_URL` environment variable.

SQL queries are executed on the backend. The frontend does not connect directly to the database.

### Environment Configuration

The backend uses environment variables stored in a `.env` file.

An example configuration is provided in `.env.example`.

| Variable       | Description                  |
| -------------- | ---------------------------- |
| `PORT`         | Port used to run the server  |
| `DATABASE_URL` | PostgreSQL connection string |

Example configuration:

```env
PORT=3000
DATABASE_URL=postgres://gym:gym@localhost:5432/gym_app
```

The `.env` file should not be committed to the repository. It contains local environment configuration.

### Error Handling

The backend uses `try/catch` blocks to handle errors occurring during database queries.

In case of errors:

- error details are logged to the server console,
- the HTTP response contains an appropriate status code,
- the frontend receives an error message in JSON format.

The server also includes shared middleware for handling uncaught Express errors.

### Current Functionality

The backend currently provides:

- retrieving exercises from the `exercises` table,
- registering, signing in and signing out users,
- retrieving and updating the authenticated user's profile,
- retrieving statistical data based on recorded workouts,
- listing recent workouts,
- summarizing weekly activity,
- listing the best exercise results.

The backend filters reports by the ID from the authenticated session. The exercise catalog is shared by all accounts.

### Available Scripts

Backend scripts are defined in `backend/package.json`.

| Command       | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| `npm run dev` | Starts the backend in development mode with automatic restarts after changes |
| `npm start`   | Starts the backend                                                           |
| `npm test`    | Runs authentication cryptography tests                                       |

Commands should be executed from the `backend/` directory.

Instructions for running the entire application are available in the main [README.md](../README.md).

### Backend Development Guidelines

1. Place endpoints in the appropriate modules inside `routes/`.
2. Use the shared database connection configuration.
3. Use parameterized SQL queries.
4. Handle database operation errors.
5. Do not hardcode credentials in the source code.
6. Maintain a consistent API response format.
7. Add a short comment above every route and document the endpoint in [api.md](api.md).
8. Test changes before creating a Pull Request.
