# Sprint 2

[Polski](#polski) | [English](#english)

---

## Polski

**Okres:** 6 listopada 2026

### Cel sprintu

Rozbudować aplikację GymApp poprzez połączenie frontendu React z bazą danych PostgreSQL za pośrednictwem backendu Node.js i Express. Stworzyć działający moduł ćwiczeń umożliwiający wyświetlanie, wyszukiwanie i filtrowanie ćwiczeń pobieranych z bazy danych. Dostosować wygląd aplikacji do projektu w Figmie, przygotować wizualizacje pozostałych podstron oraz zastąpić statyczną treść bardziej rozbudowanym interfejsem z pierwszymi działającymi funkcjonalnościami.

### Zrealizowane zadania

#### 1. Backend i integracja z bazą danych

- Przygotowano backend oparty na Node.js i Express.
- Skonfigurowano połączenie backendu z bazą PostgreSQL.
- Przygotowano endpoint API umożliwiający pobieranie ćwiczeń z bazy danych.
- Skonfigurowano komunikację między frontendem React a backendem.

#### 2. Moduł ćwiczeń

- Przygotowano wyświetlanie ćwiczeń pobieranych z API.
- Dodano wyszukiwanie ćwiczeń.
- Dodano filtrowanie ćwiczeń według grupy mięśniowej.
- Uwzględniono obsługę ładowania danych i błędów podczas pobierania ćwiczeń.

#### 3. Rozwój interfejsu

- Dostosowano wygląd aplikacji do projektu wizualnego w Figmie.
- Przygotowano projekty wizualne pozostałych podstron.
- Rozbudowano interfejs Dashboard, Workout, Reports i Profile zgodnie z zakresem sprintu.
- Ujednolicono wygląd elementów interfejsu, aby aplikacja była spójna wizualnie.

#### 4. Testowanie i dokumentacja

- Sprawdzono działanie modułu ćwiczeń oraz komunikacji między frontendem, backendem i bazą danych.
- Zweryfikowano podstawowe scenariusze wyszukiwania i filtrowania ćwiczeń.
- Zaktualizowano dokumentację techniczną projektu, w tym opis bazy danych i instrukcje dotyczące backendu.

### Stan produktu po zakończeniu sprintu

Aplikacja została rozbudowana o backend pośredniczący między frontendem a bazą PostgreSQL oraz pierwszy moduł korzystający z danych pobieranych z bazy.

- **Dashboard** — rozbudowany interfejs strony głównej.
- **Workout** — rozwinięta wizualizacja sekcji treningowej.
- **Exercises** — wyświetlanie ćwiczeń z bazy danych, wyszukiwanie i filtrowanie według grupy mięśniowej.
- **Reports** — przygotowana wizualizacja sekcji raportów.
- **Profile** — przygotowana wizualizacja sekcji profilu użytkownika.

Zakres działania poszczególnych podstron zależy od zaimplementowanych funkcjonalności. Przygotowanie wizualizacji nie oznacza jeszcze, że wszystkie sekcje obsługują docelowe procesy użytkownika.

### Rezultat sprintu

Przygotowano podstawową integrację React, Node.js, Express i PostgreSQL oraz pierwszy funkcjonalny moduł aplikacji korzystający z danych z bazy. Rozwinięto również interfejs i przygotowano wizualizacje kolejnych podstron, tworząc podstawę do dalszego wdrażania funkcji treningowych.

### Wnioski i dalsze kroki

Kolejnym etapem będzie rozwijanie funkcjonalności treningowych, zapisywanie sesji treningowych i historii ćwiczeń oraz rozbudowa raportów postępów. Zakres następnego sprintu zostanie ustalony podczas planowania na podstawie priorytetów projektu i zadań dostępnych w Backlogu.

---

## English

**Period:**  6 November 2026

### Sprint goal

Extend GymApp by connecting the React frontend to the PostgreSQL database through a Node.js and Express backend. Develop a working exercise module that supports displaying, searching and filtering exercises retrieved from the database. Align the application's appearance with the Figma design, prepare visual designs for the remaining subpages, and replace static content with a more developed interface and the first working features.

### Completed tasks

#### 1. Backend and database integration

- Prepared a backend using Node.js and Express.
- Configured the backend connection to PostgreSQL.
- Created an API endpoint for retrieving exercises from the database.
- Configured communication between the React frontend and the backend.

#### 2. Exercise module

- Implemented displaying exercises retrieved from the API.
- Added exercise search.
- Added filtering by muscle group.
- Included loading and error handling when retrieving exercises.

#### 3. Interface development

- Aligned the application's appearance with the Figma design.
- Prepared visual designs for the remaining subpages.
- Expanded the Dashboard, Workout, Reports and Profile interfaces according to the sprint scope.
- Standardized interface elements to improve visual consistency.

#### 4. Testing and documentation

- Checked the exercise module and communication between the frontend, backend and database.
- Verified the basic exercise search and filtering scenarios.
- Updated the project's technical documentation, including the database description and backend instructions.

### Product state at the end of the sprint

The application has been extended with a backend connecting the frontend to PostgreSQL and an initial module that uses data retrieved from the database.

- **Dashboard** — an expanded home page interface.
- **Workout** — an enhanced visual representation of the workout section.
- **Exercises** — displaying exercises from the database, searching and filtering by muscle group.
- **Reports** — a prepared visual design for the reporting section.
- **Profile** — a prepared visual design for the user profile section.

The functionality of each subpage depends on what has actually been implemented. Preparing a visual design does not necessarily mean that the section supports all intended user workflows.

### Sprint outcome

The basic integration between React, Node.js, Express and PostgreSQL was prepared, together with the first functional application module using database data. The interface was also expanded and visual designs for additional subpages were prepared, providing a foundation for further workout-related features.

### Retrospective and next steps

The next stage will focus on developing workout features, saving workout sessions and exercise history, and expanding progress reports. The scope of the next sprint will be determined during sprint planning based on project priorities and the tasks available in the Backlog.