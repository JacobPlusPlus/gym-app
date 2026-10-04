# Gym App

**Język / Language:** [Polski](#polski) | [English](#english)

---

# Polski

## Opis projektu

Gym App to aplikacja treningowa działająca w przeglądarce (wersja na komputer), tworzona w ramach przedmiotu **Metodyki wytwarzania oprogramowania**. Pozwala planować treningi siłowe, przeglądać ćwiczenia i śledzić postępy. Wzorujemy się na istniejącej aplikacji mobilnej do treningów, ale budujemy własną wersję webową.

## Jak ma wyglądać projekt (propozycja)

- Prosty, czytelny interfejs: jasne tło, białe karty z zaokrąglonymi rogami, niebieski kolor akcentowy.
- U góry (lub z boku) pasek nawigacji z 4 zakładkami; aktywna zakładka jest wyraźnie wyróżniona.
- Treści prezentowane w formie kart i list, np. karta planu treningowego z nazwą, liczbą ćwiczeń i kilkoma pierwszymi ćwiczeniami.
- Na początku aplikacja korzysta z przykładowych danych (pliki JSON), bez bazy danych i logowania.

## Zakładki

| Zakładka | Adres | Mniej więcej co tam będzie |
|---|---|---|
| **Niestandardowy** | `/niestandardowy` | Własne plany treningowe (np. Day 1, Day 2) w formie kart oraz przycisk dodania nowego planu |
| **Ćwiczenia** | `/cwiczenia` | Katalog ćwiczeń ze sprzętem i grupą mięśniową |
| **Raport** | `/raport` | Statystyki i wykresy postępów |
| **Moje** | `/moje` | Profil i ustawienia użytkownika |

Zakładka "Trening" z aplikacji wzorcowej jest na razie pominięta.

## Technologie

React, Vite, react-router-dom, Git/GitHub, Trello. W przyszłości możliwe: MongoDB.

## Uruchomienie

Wymagane: [Node.js](https://nodejs.org) (LTS) i [Git](https://git-scm.com).

```bash
git clone https://github.com/<LOGIN>/gym-app.git
cd gym-app
npm install
npm run dev
```

Aplikacja działa pod adresem `http://localhost:5173`.

## Dalsze informacje

Zadania i zasady pracy z gitem w pierwszym sprincie: [sprint1.md](./sprint1.md).

---

# English

## Project description

Gym App is a workout app that runs in the browser (desktop version), built for the **Software Development Methodologies** course. It lets users plan strength workouts, browse exercises and track progress. We take inspiration from an existing mobile workout app, but we are building our own web version.

## What the project should look like (proposed solution)

- A simple, clean interface: light background, white cards with rounded corners, a blue accent color.
- A navigation bar at the top (or side) with 4 tabs; the active tab is clearly highlighted.
- Content shown as cards and lists, e.g. a workout plan card with its name, number of exercises and the first few exercises.
- At first the app uses sample data (JSON files), with no database and no login.

## Tabs

| Tab | Route | Roughly what will be there |
|---|---|---|
| **Niestandardowy** (Custom) | `/niestandardowy` | Custom workout plans (e.g. Day 1, Day 2) as cards, plus a button to add a new plan |
| **Ćwiczenia** (Exercises) | `/cwiczenia` | Exercise catalog with equipment and muscle group |
| **Raport** (Report) | `/raport` | Statistics and progress charts |
| **Moje** (Profile) | `/moje` | User profile and settings |

The "Trening" (Workout) tab from the reference app is skipped for now.

## Technologies

React, Vite, react-router-dom, Git/GitHub, Trello. Possibly MongoDB in the future.

## Getting started

Required: [Node.js](https://nodejs.org) (LTS) and [Git](https://git-scm.com).

```bash
git clone https://github.com/<LOGIN>/gym-app.git
cd gym-app
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## More information

Tasks and git workflow rules for the first sprint: [sprint1.md](./sprint1.md).