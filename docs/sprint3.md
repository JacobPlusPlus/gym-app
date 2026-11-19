# Sprint 3 — wprowadzone zmiany

**Język / Language:** [Polski](#polski) | [English](#english)

<a id="polski"></a>

Poniżej zestawiono commity z brancha `sprint3`, od najstarszego do najnowszego (bez commitów dokumentacyjnych). Każdy opis stanowi krótkie podsumowanie wprowadzonych zmian.

## Commity

### `aeb825c` — `feat: add dashboard and workout reports`

Na stronach Dashboard i Reports zaczęto wyświetlać rzeczywiste dane z bazy: podsumowanie treningów, ostatnie sesje, aktywność tygodniową i najlepsze wyniki. Dodano również endpoint API udostępniający te dane aplikacji.

### `48531a6` — `style: redesign dashboard and reports`

Poprawiono wygląd Dashboardu i Reports, nadając spójną oprawę podsumowaniom, wykresowi aktywności, liście ostatnich treningów oraz tabeli historii.

### `526d4b1` — `style: refresh dashboard, reports, settings, and login`

Dodano nowe style dla Dashboardu, Reports, Settings i Login, aby nadać tym stronom bardziej spójny i dopracowany wygląd.

### `ec97b68` — `feat: add interactive workout settings`

W Settings udostępniono wybór motywu, jednostki wagi, czasu odpoczynku między seriami, tygodniowego celu i preferencji przypomnień. Wybrane ustawienia są zapisywane w przeglądarce.

### `1a0029e` — `style: redesign login with demo access`

Przebudowano ekran logowania i dodano przejście do aplikacji w trybie demo. Umożliwiono również pokazanie lub ukrycie wpisanego hasła. Logowanie i reset hasła nie zostały podłączone.

### `e0e156a` — `i18n: translate workout and profile pages`

Przetłumaczono teksty na stronach Workout i Profile na angielski. Przykładowego użytkownika zmieniono na Alex Morgan.

### `9aabe0e` — `refactor: split styles into feature files`

Duży plik CSS podzielono na mniejsze pliki tematyczne, m.in. dla Dashboardu i Reports, Settings, Login oraz wspólnych układów. Ułatwia to wyszukiwanie i modyfikowanie stylów poszczególnych części aplikacji.

### `d2d21d7` — `fix: remove password reset from login`

Z ekranu logowania usunięto opcję „Forgot password?” oraz komunikat o niedostępnym resecie hasła. Reset hasła nie jest jeszcze dostępny; usunięto również nieużywane style tej opcji.

## Jak działa moduł raportów

Strona [Reports.jsx](../frontend/src/pages/Reports.jsx) pobiera dane z endpointu `GET /api/reports`, który jest zarejestrowany przez backend Express. Podczas pierwszego renderowania komponent zapisuje wynik w stanie `report`, a błąd zapytania zapisuje w stanie `error`.

[reports.js](../backend/src/routes/reports.js) pobiera dla użytkownika o identyfikatorze `USER_ID = 1` dane z tabel `workouts`, `workout_sets`, `plans` i `exercises`. Cztery zapytania są wykonywane równolegle przez `Promise.all` i zostają połączone w jeden obiekt JSON:

- `summary` — łączy treningi z seriami, aby policzyć liczbę treningów, łączne minuty, liczbę serii i powtórzeń.
- `workouts` — łączy `workouts` z `plans` i `workout_sets`, aby zwrócić osiem ostatnich sesji wraz z nazwą planu, datą, czasem i liczbą serii.
- `weeklyActivity` — tworzy zakres bieżącego tygodnia i poprzednich siedmiu tygodni, a następnie zlicza treningi przypisane do każdego tygodnia.
- `records` — łączy serie treningowe z ćwiczeniami i treningami, wybierając trzy ćwiczenia z najwyższym dodatnim ciężarem.

`Reports.jsx` wyświetla te dane jako:

- cztery podsumowania: wszystkie treningi, czas treningu, liczba serii i powtórzeń;
- wykres aktywności obejmujący osiem tygodni;
- trzy najlepsze rekordy ciężaru;
- tabelę ośmiu ostatnich sesji;
- komunikat o braku danych, gdy użytkownik nie ma jeszcze treningów;
- komunikat o błędzie, gdy backend lub baza danych nie odpowiada.

Ewentualny błąd SQL lub połączenia z bazą jest logowany przez backend, a endpoint zwraca wówczas status `500` i prosty komunikat błędu.

## Ważne ograniczenia

- Ekran logowania nadal jest demonstracyjny — aplikacja nie sprawdza jeszcze kont użytkowników.
- Profil i część danych na innych ekranach nadal korzystają z przykładowych wartości.
- Raporty pobierają dane dla testowego użytkownika, a nie dla zalogowanej osoby.

<a id="english"></a>

## Sprint 3 — Changes

**Language / Język:** [Polski](#polski) | [English](#english)

The commits from the `sprint3` branch are listed below, from oldest to newest (documentation commits are excluded). Each description briefly summarizes the changes introduced.

### Commits

#### `aeb825c` — `feat: add dashboard and workout reports`

The Dashboard and Reports pages were updated to display real database data: workout summaries, recent sessions, weekly activity, and personal bests. An API endpoint was also added to provide this data to the app.

#### `48531a6` — `style: redesign dashboard and reports`

The appearance of the Dashboard and Reports pages was improved, with consistent styling applied to summaries, the activity chart, recent-workout list, and history table.

#### `526d4b1` — `style: refresh dashboard, reports, settings, and login`

New styles were added for the Dashboard, Reports, Settings, and Login pages to give them a more consistent and polished appearance.

#### `ec97b68` — `feat: add interactive workout settings`

Controls were added to Settings for the theme, weight unit, rest time between sets, weekly goal, and reminder preference. Selected settings are saved in the browser.

#### `1a0029e` — `style: redesign login with demo access`

The login screen was redesigned, and a way to enter the app in demo mode was added. Password visibility can also be toggled. Real sign-in and password reset are not connected.

#### `e0e156a` — `i18n: translate workout and profile pages`

The text on the Workout and Profile pages was translated into English. The sample user was also changed to Alex Morgan.

#### `9aabe0e` — `refactor: split styles into feature files`

The large CSS file was split into smaller, feature-specific files, including files for the Dashboard and Reports, Settings, Login, and shared layouts. This makes it easier to find and update styles for a particular part of the app.

#### `d2d21d7` — `fix: remove password reset from login`

The “Forgot password?” option and the notice about password reset being unavailable were removed from the login screen. Password reset is not available yet, and the unused styles for that option were also removed.

### How the reports module works

[Reports.jsx](../frontend/src/pages/Reports.jsx) requests `GET /api/reports`, which is registered by the Express backend. On initial render, the component stores the response in `report` and records request failures in `error`.

[reports.js](../backend/src/routes/reports.js) reads data for `USER_ID = 1` from the `workouts`, `workout_sets`, `plans`, and `exercises` tables. It runs four queries in parallel with `Promise.all` and combines them into one JSON object:

- `summary` — joins workouts with sets to calculate total workouts, duration, set count, rep count, and volume.
- `workouts` — joins `workouts` with `plans` and `workout_sets` to return eight recent sessions with plan name, date, duration, and set count.
- `weeklyActivity` — creates the current week and the previous seven weeks, then counts workouts belonging to each week.
- `records` — joins workout sets to exercises and workouts, selecting three exercises with the highest positive recorded weight.

`Reports.jsx` renders this data as:

- four summary metrics: all workouts, training time, completed sets, and total repetitions;
- an eight-week activity chart;
- the three highest weight records;
- a table of the eight most recent sessions;
- empty states when no workout data exists;
- an error notice when the backend or database cannot be reached.

SQL or database connection errors are logged by the backend. The endpoint then returns HTTP status `500` with a simple error message.

### Important Limitations

- The login screen is still a demo; the app does not yet authenticate user accounts.
- The Profile and some data on other screens still use sample values.
- Reports fetch data for a test user, not for the signed-in person.
