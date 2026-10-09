# Sprint 1: start projektu

**Język / Language:** [Polski](#polski) | [English](#english)

---

# Polski

## Cel sprintu

Przygotować repozytorium i działający **szkielet aplikacji React** z nawigacją między 4 zakładkami (Niestandardowy, Ćwiczenia, Raport, Moje) oraz przykładowymi danymi. Równolegle powstają projekt wizualny, projekt bazy danych i środowisko backendowe.

**Efekt końcowy:** po `npm run dev` otwiera się aplikacja z paskiem nawigacji, a kliknięcie zakładki pokazuje odpowiednią (na razie prawie pustą) stronę.

## Zadania

### Szkielet aplikacji React

| Nr | Zadanie | Osoba |
|---|---|---|
| 1 | Utworzenie repozytorium GitHub | Jakub |
| 2 | Inicjalizacja projektu React | Jakub |
| 3 | Dodanie React Router | Jakub |
| 4 | Setup repo: develop, foldery, czyszczenie szablonu Vite | Wigur |
| 5 | README z opisem projektu i zespołu oraz celem sprintu | Jakub |
| 6 | Navbar | do przypisania |
| 7 | Strony Niestandardowy i Ćwiczenia | do przypisania |
| 8 | Strona Raport | do przypisania (szósta osoba) |
| 9 | Strona Moje (Profile) | Szymon |
| 10 | Mock Data (przykładowe dane) | Alex |
| 11 | Routing w App.jsx (robimy jako ostatni) | Szymon |

### Zadania równoległe

| Obszar | Osoba | Zakres |
|---|---|---|
| Projekt wizualny | Bartosz | projekt w Figmie, kolorystyka i typografia, widok strony głównej, przekazanie linku do Figmy |
| Baza danych | Alex | analiza wymagań, projekt i diagram bazy, integracja z backendem |
| Backend | Szymon | środowisko backendowe, zapoznanie z projektem React, struktura komponentów |
| Testy i dokumentacja | Wigur | testy frontendu i backendu, dokumentowanie błędów, dokumentacja projektu |
| Style | do przypisania | style CSS |

**Backlog (na później):** własne pliki README, zasady commitów, skrypt SQL i PostgreSQL, API, endpointy ćwiczeń i treningów, połączenie z bazą danych.

## Workflow

### Branche

- **`main`** - stabilna wersja, trafia tu tylko `develop` na koniec sprintu.
- **`develop`** - branch roboczy zespołu, tu kierujemy wszystkie PR.
- **`feature/...`** - branch jednego zadania, tworzony z `develop`.

`main` i `develop` mają ochronę na GitHubie: wymagany PR i 1 approve.

```
feature/navbar  ──PR──►  develop  ──PR (koniec sprintu)──►  main
```

### Kroki

1. **Karta na Trello:** przypisz się i przenieś z `Sprint 1` do `In progress`.
2. **Aktualizacja:** `git checkout develop` i `git pull`.
3. **Branch:** `git checkout -b feature/navbar`.
4. **Zrób zadanie**, sprawdź `npm run dev` i `npm run lint`.
5. **Commit:** `git add .` i `git commit -m "Dodaj Navbar"`.
6. **Push:** `git push -u origin feature/navbar`.
7. **Pull Request do `develop`:** sprawdź, że pole `base` to `develop` (GitHub domyślnie proponuje `main`). Karta na `Code Review`, informacja na czacie.
8. **Code Review:** inna osoba przegląda zmiany i klika **Approve**.
9. **Merge:** **Merge pull request**, potem **Delete branch**.
10. **Testing i Done:** ktoś robi `git pull` na `develop`, uruchamia `npm run dev` i sprawdza, czy działa. Wtedy karta trafia do `Done`.

### Zasady

- Nie commitujemy bezpośrednio na `main` ani `develop` (jedyny wyjątek: zadanie 4, Setup repo).
- Jedno zadanie = jeden branch = jeden PR.
- Zawsze zaczynaj od `git pull` na `develop`.
- Nazwy branchy: `feature/krotki-opis`, np. `feature/navbar`.
- Commity krótkie i konkretne: `Dodaj Navbar`, a nie `zmiany`.
- Nie edytujemy cudzych plików bez uzgodnienia.
- PR przegląda ktoś inny niż autor.

### Listy na Trello

| Lista | Znaczenie |
|---|---|
| **Backlog** | zadania na później |
| **Sprint 1** | zadania w tym sprincie |
| **In progress** | ktoś pracuje (jest branch) |
| **Code Review** | PR czeka na przegląd |
| **Testing** | PR zmergowany, sprawdzamy `develop` |
| **Done** | zrobione i sprawdzone |

## Opisy zadań

**1-3. Repo, projekt React, React Router**
Repozytorium z collaboratorami, projekt Vite i `react-router-dom`.

**4. Setup repo** (Wigur, robi sam, reszta czeka)
Idzie bezpośrednio na `develop`: utworzenie `develop` z `main`; foldery `src/components/`, `src/pages/`, `src/data/` z `.gitkeep`; usunięcie szablonu Vite (`App.css`, `react.svg`, `vite.svg`, `hero.png`, `icons.svg`, style `#root`, `h1`, `.counter`); w `index.html` `lang="pl"` i tytuł "Gym App"; ochrona `main` i `develop` (PR + 1 approve).
*Gotowe, gdy:* `main` i `develop` mają ochronę, foldery są widoczne, `npm run dev` pokazuje czystą stronę.

**5. README** (`feature/readme`)
Opis projektu, zespołu i celu sprintu; w `git clone` podmień `<LOGIN>`.

**6. Navbar** (`feature/navbar`)
`src/components/Navbar.jsx` z 4 `NavLink`ami: `/niestandardowy`, `/cwiczenia`, `/raport`, `/moje`. Aktywny link ma klasę `active` i jest wyraźnie podświetlony.

**7. Strony Niestandardowy i Ćwiczenia** (`feature/strony-custom-exercises`)
`src/pages/Custom.jsx` (`<h1>Niestandardowy</h1>`) i `src/pages/Exercises.jsx` (`<h1>Ćwiczenia</h1>`). Uwaga na pisownię: Exercises.

**8. Strona Raport** (`feature/strona-raport`)
`src/pages/Report.jsx` z `<h1>Raport</h1>`.

**9. Strona Moje** (`feature/strona-profile`)
`src/pages/Profile.jsx` z `<h1>Moje</h1>`.

**10. Mock Data** (`feature/mock-data`)
W `src/data/`: `exercises.json` (min. 10 ćwiczeń: nazwa, sprzęt, grupa mięśniowa) i `plans.json` (min. 3 plany: Day 1, Day 2, Day 4, z odwołaniem do ćwiczeń przez `exerciseId`). Każdy element ma unikalne `id`.

**11. Routing** (`feature/routing`)
Zaczynamy po zmergowaniu Navbara i stron. W `src/App.jsx`: `BrowserRouter`, `Navbar`, `Routes` z 4 ścieżkami; `/` przekierowuje na `/niestandardowy`. Na końcu PR `develop` -> `main`.
*Gotowe, gdy:* każda zakładka pokazuje właściwą stronę, `npm run lint` i `npm run build` przechodzą.

## Definition of Done

- [ ] kod zmergowany do `develop` przez PR,
- [ ] PR zaakceptowany przez inną osobę,
- [ ] `npm run lint` bez błędów,
- [ ] po `git pull` na `develop` aplikacja uruchamia się bez błędów,
- [ ] branch usunięty, karta w `Done`.

**Koniec sprintu:** `develop` zmergowany do `main`, a wszyscy 6 członkowie zespołu mają działającą aplikację lokalnie (`npm install`, `npm run dev`).

---

# English

# Sprint 1: project kickoff

## Sprint goal

Set up the repository and a working **React app skeleton** with navigation between 4 tabs (Custom, Exercises, Report, Profile) and sample data. In parallel we prepare the visual design, the database design and the backend environment.

**End result:** after `npm run dev`, the app opens with a navigation bar, and clicking a tab shows the matching (for now almost empty) page.

## Tasks

### React app skeleton

| No. | Task | Owner |
|---|---|---|
| 1 | Create the GitHub repository | Jakub |
| 2 | React project initialization | Jakub |
| 3 | Add React Router | Jakub |
| 4 | Setup repo: develop, folders, clean up the Vite template | Wigur |
| 5 | README with project and team description and sprint goal | Jakub |
| 6 | Navbar | unassigned |
| 7 | Custom (Niestandardowy) and Exercises pages | unassigned |
| 8 | Report (Raport) page | unassigned (sixth person) |
| 9 | Profile (Moje) page | Szymon |
| 10 | Mock Data (sample data) | Alex |
| 11 | Routing in App.jsx (done last) | Szymon |

### Parallel tasks

| Area | Owner | Scope |
|---|---|---|
| Visual design | Bartosz | Figma design, colors and typography, home page view, handing over the Figma link |
| Database | Alex | requirements analysis, database design and diagram, backend integration |
| Backend | Szymon | backend environment, getting to know the React project, component structure |
| Testing and docs | Wigur | frontend and backend testing, documenting bugs, project documentation |
| Styles | unassigned | CSS styles |

**Backlog (for later):** own README files, commit conventions, SQL script and PostgreSQL, API, exercise and workout endpoints, database connection.

## Workflow

### Branches

- **`main`** - stable version; only `develop` goes in, at the end of the sprint.
- **`develop`** - the team's working branch; all PRs target it.
- **`feature/...`** - a single task's branch, created from `develop`.

`main` and `develop` are protected on GitHub: a PR and 1 approval are required.

```
feature/navbar  ──PR──►  develop  ──PR (end of sprint)──►  main
```

### Steps

1. **Trello card:** assign yourself and move it from `Sprint 1` to `In progress`.
2. **Update:** `git checkout develop` and `git pull`.
3. **Branch:** `git checkout -b feature/navbar`.
4. **Do the task**, check `npm run dev` and `npm run lint`.
5. **Commit:** `git add .` and `git commit -m "Add Navbar"`.
6. **Push:** `git push -u origin feature/navbar`.
7. **Pull Request into `develop`:** make sure the `base` field is `develop` (GitHub suggests `main` by default). Move the card to `Code Review` and tell the team chat.
8. **Code Review:** another person reviews the changes and clicks **Approve**.
9. **Merge:** **Merge pull request**, then **Delete branch**.
10. **Testing and Done:** someone runs `git pull` on `develop`, starts `npm run dev` and checks that it works. Then the card goes to `Done`.

### Rules

- No direct commits to `main` or `develop` (the only exception: task 4, Setup repo).
- One task = one branch = one PR.
- Always start with `git pull` on `develop`.
- Branch names: `feature/short-description`, e.g. `feature/navbar`.
- Short, specific commits: `Add Navbar`, not `changes`.
- Do not edit other people's files without agreeing first.
- A PR is reviewed by someone other than the author.

### Trello lists

| List | Meaning |
|---|---|
| **Backlog** | tasks for later |
| **Sprint 1** | tasks in this sprint |
| **In progress** | someone is working on it (a branch exists) |
| **Code Review** | PR waiting for review |
| **Testing** | PR merged, checking `develop` |
| **Done** | finished and verified |

## Task descriptions

**1-3. Repo, React project, React Router**
Repository with collaborators, Vite project and `react-router-dom`.

**4. Setup repo** (Wigur, works alone, the rest waits)
Goes straight to `develop`: create `develop` from `main`; folders `src/components/`, `src/pages/`, `src/data/` with `.gitkeep`; remove the Vite template (`App.css`, `react.svg`, `vite.svg`, `hero.png`, `icons.svg`, styles `#root`, `h1`, `.counter`); in `index.html` `lang="pl"` and title "Gym App"; protect `main` and `develop` (PR + 1 approval).
*Done when:* `main` and `develop` are protected, folders are visible, `npm run dev` shows a clean page.

**5. README** (`feature/readme`)
Project, team and sprint goal description; replace `<LOGIN>` in `git clone`.

**6. Navbar** (`feature/navbar`)
`src/components/Navbar.jsx` with 4 `NavLink`s: `/niestandardowy`, `/cwiczenia`, `/raport`, `/moje`. The active link gets the `active` class and is clearly highlighted.

**7. Custom and Exercises pages** (`feature/strony-custom-exercises`)
`src/pages/Custom.jsx` (`<h1>Niestandardowy</h1>`) and `src/pages/Exercises.jsx` (`<h1>Ćwiczenia</h1>`). Mind the spelling: Exercises.

**8. Report page** (`feature/strona-raport`)
`src/pages/Report.jsx` with `<h1>Raport</h1>`.

**9. Profile page** (`feature/strona-profile`)
`src/pages/Profile.jsx` with `<h1>Moje</h1>`.

**10. Mock Data** (`feature/mock-data`)
In `src/data/`: `exercises.json` (at least 10 exercises: name, equipment, muscle group) and `plans.json` (at least 3 plans: Day 1, Day 2, Day 4, referencing exercises by `exerciseId`). Every item has a unique `id`.

**11. Routing** (`feature/routing`)
Start after the Navbar and pages are merged. In `src/App.jsx`: `BrowserRouter`, `Navbar`, `Routes` with 4 paths; `/` redirects to `/niestandardowy`. At the end, the `develop` -> `main` PR.
*Done when:* each tab shows the right page, `npm run lint` and `npm run build` pass.

## Definition of Done

- [ ] code merged into `develop` via PR,
- [ ] PR approved by another person,
- [ ] `npm run lint` passes,
- [ ] after `git pull` on `develop` the app starts without errors,
- [ ] branch deleted, card in `Done`.

**End of sprint:** `develop` merged into `main`, and all 6 team members have the app running locally (`npm install`, `npm run dev`).