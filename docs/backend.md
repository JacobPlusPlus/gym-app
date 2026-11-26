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
- **Zmienne środowiskowe:** dotenv
- **Obsługa żądań z frontendu:** CORS

### Struktura katalogów

```text
backend/
├── src/
│   ├── routes/       # Moduły obsługujące endpointy API
│   ├── db.js         # Konfiguracja połączenia z bazą danych
│   └── server.js     # Konfiguracja i uruchomienie serwera Express
├── .env.example      # Przykładowa konfiguracja zmiennych środowiskowych
└── package.json      # Zależności i skrypty backendu
```

### Serwer Express

Główny plik `server.js` odpowiada za konfigurację i uruchomienie serwera.

Obecnie serwer:

- inicjalizuje aplikację Express,
- obsługuje żądania w formacie JSON,
- konfiguruje dostęp z adresu frontendowego `https://localhost:5173` za pomocą CORS,
- rejestruje moduły routingu API,
- obsługuje błędy serwera za pomocą wspólnego middleware,
- uruchamia serwer na porcie określonym w zmiennej `PORT`.

### Routing API

Endpointy są podzielone na osobne moduły znajdujące się w katalogu `src/routes/`.

Aktualnie dostępne moduły:

- **exercises.js** – pobieranie listy ćwiczeń z bazy danych.
- **reports.js** – pobieranie podsumowania treningów, ostatnich sesji, aktywności tygodniowej i rekordów ćwiczeń.

Każdy moduł korzysta z Express Router i udostępnia swoje endpointy pod odpowiednim prefiksem `/api`.

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
- pobieranie danych statystycznych na podstawie zapisanych treningów,
- zestawienie ostatnich treningów,
- zestawienie aktywności tygodniowej,
- zestawienie najlepszych wyników ćwiczeń.

W module raportów identyfikator użytkownika jest obecnie ustawiony na stałą wartość `1` (`USER_ID = 1`). Nie jest jeszcze pobierany z systemu uwierzytelniania.

Backend nie posiada obecnie pełnego mechanizmu rejestracji, logowania ani zarządzania sesją użytkownika.

### Dostępne skrypty

Skrypty backendu są zdefiniowane w pliku `backend/package.json`.

| Komenda       | Opis                                                                           |
| ------------- | ------------------------------------------------------------------------------ |
| `npm run dev` | Uruchamia backend w trybie deweloperskim z automatycznym restartem po zmianach |
| `npm start`   | Uruchamia backend                                                              |

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
- **Environment variables:** dotenv
- **Frontend request handling:** CORS

### Project Structure

```text
backend/
├── src/
│   ├── routes/       # Modules handling API endpoints
│   ├── db.js         # Database connection configuration
│   └── server.js     # Express server configuration and startup
├── .env.example      # Example environment configuration
└── package.json      # Backend dependencies and scripts
```

### Express Server

The main `server.js` file is responsible for configuring and starting the server.

Currently, the server:

- initializes the Express application,
- handles JSON requests,
- configures CORS access from the frontend address `https://localhost:5173`,
- registers API routing modules,
- handles server errors through shared middleware,
- starts the server on the port specified by the `PORT` environment variable.

### API Routing

Endpoints are divided into separate modules located in the `src/routes/` directory.

Currently available modules:

- **exercises.js** – retrieves the list of exercises from the database.
- **reports.js** – retrieves workout summaries, recent sessions, weekly activity and exercise records.

Each module uses Express Router and exposes its endpoints under the appropriate `/api` prefix.

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
- retrieving statistical data based on recorded workouts,
- listing recent workouts,
- summarizing weekly activity,
- listing the best exercise results.

In the reports module, the user ID is currently set to a fixed value of `1` (`USER_ID = 1`). It is not yet retrieved from an authentication system.

The backend does not currently provide a complete user registration, login or session management mechanism.

### Available Scripts

Backend scripts are defined in `backend/package.json`.

| Command       | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| `npm run dev` | Starts the backend in development mode with automatic restarts after changes |
| `npm start`   | Starts the backend                                                           |

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
