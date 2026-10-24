# Sprint 1

Okres: październik 2026

## Cel sprintu

Przygotować podstawy projektu: repozytorium i zasady pracy zespołu, projekt wizualny (Figma), projekt i uruchomienie bazy PostgreSQL oraz szkielet aplikacji w React z nawigacją i podstronami.

## Co się udało zrobić

- **Repozytorium i organizacja pracy:** repozytorium GitHub z całym zespołem, zasady pracy (branch, Pull Request, review, merge), tablica Trello z etykietami i listami oraz README z opisem projektu.
- **Projekt wizualny:** makieta aplikacji w Figmie.
- **Baza danych:** projekt bazy, diagram i konfiguracja PostgreSQL uruchamianego w Dockerze (`docker compose up -d`). Baza ma sześć tabel (`users`, `exercises`, `plans`, `plan_exercises`, `workouts`, `workout_sets`) i dane przykładowe. Opis jest w [database.md](database.md).
- **Aplikacja w React:** projekt w Vite z React Router, strona główna, dolna nawigacja i cztery podstrony: Workout, Exercises, Raport, Profile.

## Jak teraz wygląda produkt

Po uruchomieniu (`cd frontend`, `npm install`, `npm run dev`) otwiera się aplikacja z dolnym paskiem nawigacji. Pasek ma cztery zakładki: **Workout**, **Exercises**, **Raport** i **Profile**. Aktywna zakładka jest podświetlona.

- **Dashboard** (adres `/`) pokazuje nazwę „Gym App” i powitanie z prośbą o wybór sekcji z menu.
- **Workout** to nagłówek „Workout” i krótki opis, że tu znajdą się treningi.
- **Exercises** to nagłówek „Ćwiczenia” i opis, że tu znajdą się dostępne ćwiczenia.
- **Raport** to nagłówek „Raport Treningów” i opis, że tu pojawi się raport z treningów.
- **Profile** to nagłówek „Profil użytkownika” i opis, że tu znajdą się dane profilu.

Strony są na razie szkieletami z nagłówkiem i jednym zdaniem, bez danych i bez funkcji. Baza danych działa osobno i nie jest jeszcze połączona z aplikacją, bo backend dopiero powstanie.

## Co dalej

Najważniejszy brak do nadrobienia to połączenie frontendu z bazą przez backend. Zadania na Sprint 2 zostaną wybrane z Backlogu na planowaniu sprintu.