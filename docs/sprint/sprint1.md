# Sprint 1

[Polski](#polski) | [English](#english)

---

## Polski

**Okres:** 23 październik 2026

### Cel sprintu

Przygotować podstawy projektu GymApp: repozytorium GitHub i zasady współpracy zespołu, projekt wizualny w Figmie, strukturę i konfigurację bazy danych PostgreSQL oraz szkielet aplikacji frontendowej w React z nawigacją i podstawowymi podstronami.

### Zrealizowane zadania

#### 1. Repozytorium i organizacja pracy

- Utworzono repozytorium GitHub i dodano członków zespołu.
- Ustalono zasady pracy z branchami, Pull Requestami, code review i merge.
- Przygotowano tablicę Trello z listami i etykietami do organizacji zadań.
- Przygotowano README z opisem projektu, zespołu, technologii i zasad pracy.

#### 2. Projekt wizualny

- Przygotowano makietę aplikacji w Figmie, stanowiącą punkt odniesienia dla dalszego rozwoju interfejsu.

#### 3. Baza danych

- Zaprojektowano strukturę bazy danych i przygotowano diagram relacji.
- Skonfigurowano PostgreSQL 17 uruchamiany w Dockerze.
- Przygotowano sześć tabel: `users`, `exercises`, `plans`, `plan_exercises`, `workouts` i `workout_sets`.
- Dodano przykładowe dane do wykorzystania podczas dalszego rozwoju i testowania aplikacji.

Szczegóły dotyczące struktury bazy danych opisano w pliku [`database.md`](database.md).

#### 4. Szkielet aplikacji frontendowej

- Zainicjalizowano projekt React z wykorzystaniem Vite.
- Skonfigurowano React Router do obsługi nawigacji.
- Przygotowano stronę główną oraz cztery podstrony: Workout, Exercises, Raport i Profile.
- Dodano dolny pasek nawigacyjny z wyróżnianiem aktywnej zakładki.

### Stan produktu po zakończeniu sprintu

Aplikacja posiada podstawową strukturę frontendową, nawigację i przygotowane podstrony:

- **Dashboard** — nazwa aplikacji i komunikat powitalny.
- **Workout** — nagłówek i opis sekcji przeznaczonej do obsługi treningów.
- **Exercises** — nagłówek i opis sekcji przeznaczonej do prezentowania ćwiczeń.
- **Raport** — nagłówek i opis przyszłej sekcji raportowania treningów.
- **Profile** — nagłówek i opis przyszłej sekcji profilu użytkownika.

Podstrony pełnią na tym etapie funkcję szkieletu interfejsu. Nie zawierają jeszcze docelowych funkcjonalności ani dynamicznych danych.

Baza PostgreSQL została przygotowana i działa niezależnie od frontendu. Aplikacja nie pobiera jeszcze danych z bazy, ponieważ komunikacja między frontendem a PostgreSQL za pośrednictwem backendu nie została zrealizowana w tym sprincie.

### Rezultat sprintu

Przygotowano podstawowe środowisko do dalszego rozwoju GymApp: repozytorium i zasady współpracy, projekt wizualny, strukturę bazy danych z przykładowymi danymi oraz szkielet aplikacji React z nawigacją i podstronami.

### Wnioski i dalsze kroki

Kolejnym etapem jest rozwinięcie aplikacji o pierwsze działające funkcjonalności. Priorytetem będzie połączenie frontendu z bazą danych za pośrednictwem backendu oraz przygotowanie modułu ćwiczeń umożliwiającego pobieranie, wyświetlanie, wyszukiwanie i filtrowanie danych.

Szczegółowy zakres prac zostanie ustalony podczas planowania Sprintu 2 na podstawie zadań dostępnych w Backlogu.

---

## English

**Period:** 23 October 2026

### Sprint goal

Prepare the foundations of GymApp: the GitHub repository and team collaboration rules, the visual design in Figma, the PostgreSQL database structure and configuration, and the React frontend skeleton with navigation and basic subpages.

### Completed tasks

#### 1. Repository and team organization

- Created the GitHub repository and added the team members.
- Established the workflow for branches, Pull Requests, code reviews and merges.
- Prepared a Trello board with lists and labels for task organization.
- Created a README describing the project, team, technologies and working rules.

#### 2. Visual design

- Prepared an application mockup in Figma to guide further interface development.

#### 3. Database

- Designed the database structure and prepared a relational diagram.
- Configured PostgreSQL 17 to run in Docker.
- Created six tables: `users`, `exercises`, `plans`, `plan_exercises`, `workouts` and `workout_sets`.
- Added sample data for future development and testing.

Further details about the database structure are available in [`database.md`](database.md).

#### 4. Frontend skeleton

- Initialized the React project using Vite.
- Configured React Router for navigation.
- Created the home page and four subpages: Workout, Exercises, Raport and Profile.
- Added a bottom navigation bar with visual highlighting of the active tab.

### Product state at the end of the sprint

The application has a basic frontend structure, navigation and prepared subpages:

- **Dashboard** — the application name and a welcome message.
- **Workout** — a heading and a description of the section intended for workout management.
- **Exercises** — a heading and a description of the section intended for displaying exercises.
- **Raport** — a heading and a description of the planned workout reporting section.
- **Profile** — a heading and a description of the planned user profile section.

At this stage, the subpages serve as interface skeletons. They do not yet provide the intended functionality or dynamic data.

The PostgreSQL database has been prepared and operates independently of the frontend. The application does not yet retrieve data from the database because communication between the frontend and PostgreSQL through a backend was not implemented during this sprint.

### Sprint outcome

The basic foundations for further GymApp development have been prepared: the repository and collaboration rules, the visual design, the database structure with sample data, and the React application skeleton with navigation and subpages.

### Retrospective and next steps

The next stage is to extend the application with its first working features. The main priority will be connecting the frontend to the database through a backend and developing an exercise module that supports retrieving, displaying, searching and filtering data.

The detailed scope of work will be determined during Sprint 2 planning based on the tasks available in the Backlog.