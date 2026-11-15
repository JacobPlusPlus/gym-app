# Sprint 3 — co zmieniliśmy

**Język / Language:** [Polski](#polski) | [English](#english)

<a id="polski"></a>

Poniżej znajduje się lista commitów z brancha `sprint3`, od najstarszego do najnowszego (commity docs nie są zawarte). Opisy są prostym podsumowaniem tego, co zmienił każdy commit.

## Commity

### `aeb825c` — `feat: add dashboard and workout reports`

Dashboard i Reports zaczęły pokazywać prawdziwe dane z bazy: podsumowanie treningów, ostatnie sesje, aktywność tygodniową i najlepsze wyniki. Dodaliśmy też endpoint API, który przygotowuje te dane dla aplikacji.

### `48531a6` — `style: redesign dashboard and reports`

Poprawiliśmy wygląd Dashboardu i Reports, nadając spójną oprawę podsumowaniom, wykresowi aktywności, liście ostatnich treningów oraz tabeli historii.

### `526d4b1` — `style: refresh dashboard, reports, settings, and login`

Dodaliśmy nowe style dla Dashboardu, Reports, Settings i Login, żeby te strony miały bardziej spójny i dopracowany wygląd.

### `ec97b68` — `feat: add interactive workout settings`

Settings dostało działające wybory: motyw, jednostkę wagi, czas odpoczynku między seriami, tygodniowy cel i preferencję przypomnień. Wybrane ustawienia zapisują się w przeglądarce.

### `1a0029e` — `style: redesign login with demo access`

Przebudowaliśmy ekran logowania i dodaliśmy wygodne przejście do aplikacji w trybie demo. Można też pokazać lub ukryć wpisane hasło. Prawdziwe logowanie i reset hasła nie są podłączone.

### `e0e156a` — `i18n: translate workout and profile pages`

Przetłumaczyliśmy teksty na stronach Workout i Profile na angielski. Zmieniliśmy też przykładowego użytkownika na Alex Morgan.

### `9aabe0e` — `refactor: split styles into feature files`

Podzieliliśmy duży plik CSS na mniejsze pliki tematyczne, m.in. dla Dashboardu i Reports, Settings, Login oraz wspólnych układów. Dzięki temu łatwiej znaleźć i zmieniać style konkretnej części aplikacji.

## Ważne ograniczenia

- Ekran logowania nadal jest demonstracyjny — aplikacja nie sprawdza jeszcze kont użytkowników.
- Profil i część danych na innych ekranach nadal korzystają z przykładowych wartości.
- Raporty pobierają dane dla testowego użytkownika, a nie dla zalogowanej osoby.

<a id="english"></a>

## Sprint 3 — What We Changed

**Language / Język:** [Polski](#polski) | [English](#english)

Below is a list of commits from the `sprint3` branch, from oldest to newest (documentation commits are excluded). The descriptions are plain-language summaries of what each commit changed.

### Commits

#### `aeb825c` — `feat: add dashboard and workout reports`

The Dashboard and Reports pages started displaying real data from the database: workout summaries, recent sessions, weekly activity, and personal bests. We also added an API endpoint to prepare this data for the app.

#### `48531a6` — `style: redesign dashboard and reports`

We improved the appearance of the Dashboard and Reports pages, giving the summaries, activity chart, recent-workout list, and history table a consistent visual style.

#### `526d4b1` — `style: refresh dashboard, reports, settings, and login`

We added new styles for the Dashboard, Reports, Settings, and Login pages to give them a more consistent and polished appearance.

#### `ec97b68` — `feat: add interactive workout settings`

Settings now has working controls for the theme, weight unit, rest time between sets, weekly goal, and reminder preference. The selected settings are saved in the browser.

#### `1a0029e` — `style: redesign login with demo access`

We redesigned the login screen and added a convenient way to enter the app in demo mode. Users can also show or hide the password they entered. Real sign-in and password reset are not connected.

#### `e0e156a` — `i18n: translate workout and profile pages`

We translated the text on the Workout and Profile pages into English. We also changed the sample user to Alex Morgan.

#### `9aabe0e` — `refactor: split styles into feature files`

We split the large CSS file into smaller, feature-specific files, including files for the Dashboard and Reports, Settings, Login, and shared layouts. This makes it easier to find and update styles for a particular part of the app.

### Important Limitations

- The login screen is still a demo; the app does not yet authenticate user accounts.
- The Profile and some data on other screens still use sample values.
- Reports fetch data for a test user, not for the signed-in person.
