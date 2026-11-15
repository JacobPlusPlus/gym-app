# Sprint 3 — co zmieniliśmy

Poniżej znajduje się lista commitów z brancha `sprint3`, od najstarszego do najnowszego. Opisy są prostym podsumowaniem tego, co zmienił każdy commit.

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
