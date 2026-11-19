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

### Important Limitations

- The login screen is still a demo; the app does not yet authenticate user accounts.
- The Profile and some data on other screens still use sample values.
- Reports fetch data for a test user, not for the signed-in person.
