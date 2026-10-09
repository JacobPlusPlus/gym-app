# Sprint 1: start projektu

**Język / Language:** [Polski](#polski) | [English](#english)

---

# Polski

## Cel sprintu

Przygotować repozytorium i działający **szkielet aplikacji React** z nawigacją między 4 zakładkami (Niestandardowy, Ćwiczenia, Raport, Moje) oraz przykładowymi danymi. Po sprincie każdy z zespołu ma projekt działający lokalnie i zna zasady pracy z gitem.

**Efekt końcowy:** po `npm run dev` otwiera się aplikacja z paskiem nawigacji, a kliknięcie zakładki pokazuje odpowiednią (na razie prawie pustą) stronę.

## Spis zadań

Podział zadań na osoby wynika z przypisań na kartach w Trello (stan tablicy: karty z list Sprint 1 i Done).

| Nr | Zadanie (karta na Trello) | Osoba | Zależy od |
|---|---|---|---|
| 1 | Utworzenie repozytorium GitHub | Jakub Kukla | - |
| 2 | Ustalenie zasad branchy i commitów | Jakub Kukla | - |
| 3 | Dodanie wszystkich członków zespołu jako collaboratorów | Jakub Kukla | 1 |
| 4 | Przygotowanie tablicy Trello i przypisanie zadań | Jakub Kukla | - |
| 5 | Inicjalizacja projektu React | Jakub Kukla | 1 |
| 6 | Dodanie React Router | Jakub Kukla | 5 |
| 7 | Przygotowanie README z opisem projektu i zespołu oraz cel sprintu 1 | Jakub Kukla | 5 |
| 8 | Navbar | Kamil Woda | 6 |
| 9 | Strony Niestandardowy i Ćwiczenia | Kamil Woda | 6 |
| 10 | Strona Raport | Kamil Woda | 6 |
| 11 | Utworzenie strony Moje (Profile) | Szymon Gniadek | 6 |
| 12 | Routing w App.jsx | Szymon Gniadek | 8-11 |
| 13 | Przygotowanie stylów CSS | Kamil Woda | - |
| 14 | Przygotowanie struktury komponentów | Szymon Gniadek | - |
| 15 | Zapoznanie się z istniejącym projektem React | Szymon Gniadek | - |
| 16 | Przygotowanie środowiska backendowego | Szymon Gniadek | - |
| 17 | Przygotowanie projektu wizualnego aplikacji z pomocą AI | Bartosz Flis | - |
| 18 | Opracowanie kolorystyki, typografii i podstawowych komponentów | Bartosz Flis | - |
| 19 | Przygotowanie widoku strony głównej | Bartosz Flis | - |
| 20 | Przekazanie linku do Figmy osobie odpowiedzialnej za React | Bartosz Flis | - |
| 21 | Analyze Application Requirements | Alex Turcu | - |
| 22 | Create a Basic Database Diagram | Alex Turcu | - |
| 23 | Design a Simple Database | Alex Turcu | - |
| 24 | Analyze Database and Backend Integration | Alex Turcu | - |
| 25 | Preparing Sample Data | Alex Turcu | - |
| 26 | Testowanie frontendu | Wigur Kekowski | - |
| 27 | Testowanie backendu | Wigur Kekowski | - |
| 28 | Dokumentowanie błędów | Wigur Kekowski | - |
| 29 | Dokumentacja projektu | Wigur Kekowski | - |

**Co oznacza kolumna "Zależy od"?** Numery to numery zadań z tej tabeli. Zapis oznacza, że **zadanie można zacząć dopiero wtedy, gdy wskazane zadania są już zrobione i zmergowane do `develop`**. Przykłady:

- Zadanie 8 (Navbar) ma "6": można je zacząć po dodaniu React Router (6).
- Zadanie 12 (routing) ma "8-11": może być zrobione dopiero po Navbarze i wszystkich stronach, bo `App.jsx` importuje te pliki.
- "-" oznacza brak zależności, zadanie można zacząć od razu.

## Jak pracujemy: workflow krok po kroku

Każde zadanie z kodem (nowa strona, komponent, plik z danymi) robimy **według tych kroków**.

### Branche w projekcie

- **`main`** - stabilna wersja projektu. Trafia tam tylko gotowy, sprawdzony kod (na koniec sprintu).
- **`develop`** - branch roboczy zespołu. **Wszystkie Pull Requesty z zadań kierujemy do `develop`**, nie do `main`.
- **`feature/...`** - branch pojedynczego zadania. Tworzymy go z `develop` i po skończeniu łączymy z powrotem z `develop`.

```
feature/navbar  ──PR──►  develop  ──PR (koniec sprintu)──►  main
```

### Kroki

**1. Weź kartę na Trello.** Przypisz się do niej i przenieś z `Sprint 1` do `In progress`.

**2. Zaktualizuj `develop` u siebie.**
```bash
git checkout develop
git pull
```

**3. Utwórz nowy branch dla tego zadania (z `develop`).**
```bash
git checkout -b feature/strony-custom-exercises
```

**4. Zrób zadanie** (np. utwórz plik `src/pages/Custom.jsx`). Sprawdź w przeglądarce (`npm run dev`), czy działa.

**5. Zapisz zmiany (commit).**
```bash
git add .
git commit -m "Dodaj strony Custom i Exercises"
```

**6. Wyślij branch na GitHuba.**
```bash
git push -u origin feature/strony-custom-exercises
```

**7. Otwórz Pull Request do `develop`.** Na GitHubie kliknij **Compare & pull request** i **sprawdź, że w polu `base` jest wybrane `develop`** (domyślnie GitHub proponuje `main`). Wpisz krótki opis i kliknij **Create pull request**. Przenieś kartę na `Code Review` i napisz na czacie grupy, że PR czeka na przegląd.

**8. Code Review.** Inna osoba z zespołu (nie autor) przegląda zmiany w zakładce **Files changed**, ewentualnie zostawia komentarze. Jeśli jest OK, klika **Approve**.

**9. Merge do `develop`.** Po akceptacji kliknij **Merge pull request**, a potem **Delete branch**.

**10. Testing i Done.** Karta przechodzi na `Testing`: ktoś robi `git checkout develop`, `git pull`, `npm run dev` i sprawdza, czy po mergu wszystko działa. Jeśli tak, karta trafia do `Done`.

### Zasady

- **Nigdy nie commitujemy bezpośrednio na `main` ani `develop`.** Zmiany wchodzą tylko przez Pull Request.
- **Pull Request zawsze kierujemy do `develop`** (pole `base`). Do `main` trafia tylko `develop` na koniec sprintu.
- **Jedno zadanie = jeden branch = jeden PR.**
- **Zawsze zaczynaj od `git pull` na `develop`** przed utworzeniem nowego brancha.
- **Nazwy branchy:** `feature/krotki-opis-z-myslnikami`, np. `feature/navbar`, `feature/strona-raport`.
- **Commity:** krótkie i konkretne. Dobrze: `Dodaj Navbar`. Źle: `zmiany`, `poprawki`.
- **Nie edytujemy cudzych plików** bez uzgodnienia (to najczęstsza przyczyna konfliktów).
- **PR przegląda ktoś inny niż autor.**

### Listy na Trello

| Lista | Znaczenie |
|---|---|
| **Backlog** | Pomysły i zadania na później |
| **Sprint 1** | Zadania do zrobienia w tym sprincie |
| **In progress** | Ktoś właśnie nad tym pracuje (jest branch) |
| **Code Review** | PR otwarty, czeka na przegląd |
| **Testing** | PR zmergowany, sprawdzamy, czy działa na `develop` |
| **Done** | Zrobione i sprawdzone |

## Kolejność wykonywania zadań

```
FAZA 1 (zrobione, Jakub):
  repo GitHub -> zasady -> collaboratorzy -> tablica Trello -> inicjalizacja React -> React Router -> README

FAZA 2 (równolegle, po dodaniu React Router):
  Navbar, strony (Custom + Exercises, Raport, Profile), style CSS, komponenty,
  projekt wizualny, baza danych, backend, testy i dokumentacja

FAZA 3 (na końcu):
  Routing w App.jsx - po zmergowaniu Navbara i stron

KONIEC SPRINTU:
  Pull Request develop -> main (po sprawdzeniu, że wszystko działa)
```

Routing w `App.jsx` importuje Navbar i strony, więc jego PR mergujemy **jako ostatni**.

## Opisy zadań

Opisy poniżej pochodzą z kart na Trello. Karty bez opisu mają tylko tytuł i osobę odpowiedzialną (patrz tabela).

### Zadania zrobione (lista Done)

**1-4. Utworzenie repozytorium GitHub / Ustalenie zasad branchy i commitów / Dodanie wszystkich członków zespołu jako collaboratorów / Przygotowanie tablicy Trello i przypisanie zadań**
Osoba: Jakub Kukla. Zadania ukończone, karty w `Done` (repozytorium `gym-app`, zasady pracy opisane w tym pliku, dostęp dla całego zespołu, tablica Trello z przypisanymi zadaniami).

**5. Inicjalizacja projektu React**
Osoba: Jakub Kukla. Projekt React utworzony. Karta w `Done`.

**6. Dodanie React Router**
Osoba: Jakub Kukla. Biblioteka `react-router-dom` dodana do projektu. Karta w `Done`.

**7. Przygotowanie README z opisem projektu i zespołu oraz cel sprintu 1**
Osoba: Jakub Kukla. Karta w `Done`. Notatka na karcie: dodać do projektu plik z danymi testowymi (`mock data.json`); baza danych zostanie prawdopodobnie dodana w następnym sprincie.

### Zadania w sprincie (lista Sprint 1)

**8. Navbar**
Osoba: Kamil Woda. Zaczynamy po: React Router (Done). Branch: `feature/navbar` -> PR do `develop` (base = develop!).
Komponent `src/components/Navbar.jsx` z 4 linkami `NavLink`: `/niestandardowy`, `/cwiczenia`, `/raport`, `/moje` (Niestandardowy, Ćwiczenia, Raport, Moje). Aktywny link ma klasę `active`. Commit: "Dodaj Navbar".
*Gotowe, gdy:* PR zaakceptowany przez inną osobę i zmergowany do `develop`; aktywna zakładka wyraźnie podświetlona; `npm run lint` bez błędów.

**9. Strony Niestandardowy i Ćwiczenia**
Osoba: Kamil Woda. Zaczynamy po: React Router (Done). Branch: `feature/strony-custom-exercises` -> PR do `develop`.
Dwa pliki z samym nagłówkiem: `src/pages/Custom.jsx` (`<h1>Niestandardowy</h1>`) i `src/pages/Exercises.jsx` (`<h1>Ćwiczenia</h1>`; pisownia: **Exercises**). Docelowo: karty planów (Custom) i katalog ćwiczeń z `exercises.json` (Exercises). Commit: "Dodaj strony Custom i Exercises".
*Gotowe, gdy:* PR zaakceptowany przez inną osobę i zmergowany do `develop`; `npm run lint` bez błędów.

**10. Strona Raport**
Osoba: Kamil Woda. Zaczynamy po: React Router (Done). Branch: `feature/strona-raport` -> PR do `develop`.
Plik `src/pages/Report.jsx` z nagłówkiem `<h1>Raport</h1>`. Docelowo: statystyki i wykresy postępów (strona Moje/Profile ma osobną kartę). Commit: "Dodaj strone Report".
*Gotowe, gdy:* PR zaakceptowany przez inną osobę i zmergowany do `develop`; `npm run lint` bez błędów.

**11. Utworzenie strony Moje (Profile)**
Osoba: Szymon Gniadek. Zależy od: React Router (Done). Branch: `feature/strona-profile`.
Plik `src/pages/Profile.jsx` na razie tylko z nagłówkiem `<h1>Moje</h1>`. Docelowo: profil i ustawienia użytkownika. Workflow: `git checkout develop` -> `git pull` -> `git checkout -b feature/strona-profile` -> PR do `develop`, review przez inną osobę.
*Gotowe, gdy:* plik istnieje i jest zmergowany do `develop`; `npm run dev` i `npm run lint` bez błędów.

**12. Routing w App.jsx**
Osoba: Szymon Gniadek. Zaczynamy po: Navbar + strony (Custom/Exercises, Raport, Moje) zmergowane do `develop`. Ta karta jest **ostatnia**. Branch: `feature/routing` -> PR do `develop`.
W `src/App.jsx`: `BrowserRouter`, `Navbar`, `Routes` z 4 ścieżkami (`/niestandardowy`, `/cwiczenia`, `/raport`, `/moje`). Wejście na `/` przekierowuje na `/niestandardowy` (`Navigate`). Commit: "Dodaj routing".
*Gotowe, gdy:* każda z 4 zakładek pokazuje właściwą stronę, `/` przekierowuje; `npm run lint` i `npm run build` bez błędów; PR zmergowany, a następnie PR `develop` -> `main` (koniec sprintu).

### Pozostałe zadania (karty bez opisu)

- **13. Przygotowanie stylów CSS** - Kamil Woda
- **14. Przygotowanie struktury komponentów** - Szymon Gniadek
- **15. Zapoznanie się z istniejącym projektem React** - Szymon Gniadek
- **16. Przygotowanie środowiska backendowego** - Szymon Gniadek
- **17-20. Projekt wizualny (Bartosz Flis):** projekt wizualny aplikacji z pomocą AI, kolorystyka, typografia i podstawowe komponenty, widok strony głównej, przekazanie linku do Figmy osobie odpowiedzialnej za React
- **21-25. Baza danych (Alex Turcu):** analiza wymagań aplikacji, podstawowy diagram bazy, projekt prostej bazy, analiza integracji bazy z backendem, przygotowanie przykładowych danych
- **26-29. Testy i dokumentacja (Wigur Kekowski):** testowanie frontendu i backendu, dokumentowanie błędów, dokumentacja projektu

## Definition of Done

Zadanie jest ukończone (karta może trafić do `Done`), gdy:

- [ ] kod jest zmergowany do `develop` przez Pull Request,
- [ ] PR został przejrzany przez inną osobę,
- [ ] po `git pull` na `develop` i `npm run dev` aplikacja uruchamia się bez błędów,
- [ ] branch został usunięty,
- [ ] karta na Trello jest w `Done`.

**Koniec sprintu:** `develop` został zmergowany do `main` przez Pull Request, a wszyscy 6 członkowie zespołu sklonowali repo, wykonali `npm install` i `npm run dev` i potwierdzili, że aplikacja działa u nich lokalnie.

---

# English

# Sprint 1: project kickoff

## Sprint goal

Set up the repository and a working **React app skeleton** with navigation between 4 tabs (Custom, Exercises, Report, Profile) and sample data. After the sprint, every team member has the project running locally and knows the git workflow rules.

**End result:** after `npm run dev`, the app opens with a navigation bar, and clicking a tab shows the matching (for now almost empty) page.

## Task list

Task assignment comes from the assignments on the Trello cards (board state: cards from the Sprint 1 and Done lists).

| No. | Task (Trello card) | Person | Depends on |
|---|---|---|---|
| 1 | Create GitHub repository | Jakub Kukla | - |
| 2 | Agree on branch and commit rules | Jakub Kukla | - |
| 3 | Add all team members as collaborators | Jakub Kukla | 1 |
| 4 | Prepare the Trello board and assign tasks | Jakub Kukla | - |
| 5 | React project initialization | Jakub Kukla | 1 |
| 6 | Add React Router | Jakub Kukla | 5 |
| 7 | Prepare README with project and team description and Sprint 1 goal | Jakub Kukla | 5 |
| 8 | Navbar | Kamil Woda | 6 |
| 9 | Custom (Niestandardowy) and Exercises pages | Kamil Woda | 6 |
| 10 | Report (Raport) page | Kamil Woda | 6 |
| 11 | Create Profile (Moje) page | Szymon Gniadek | 6 |
| 12 | Routing in App.jsx | Szymon Gniadek | 8-11 |
| 13 | Prepare CSS styles | Kamil Woda | - |
| 14 | Prepare component structure | Szymon Gniadek | - |
| 15 | Get familiar with the existing React project | Szymon Gniadek | - |
| 16 | Prepare the backend environment | Szymon Gniadek | - |
| 17 | Prepare the app's visual design with AI help | Bartosz Flis | - |
| 18 | Define colors, typography and basic components | Bartosz Flis | - |
| 19 | Prepare the home page view | Bartosz Flis | - |
| 20 | Hand over the Figma link to the person responsible for React | Bartosz Flis | - |
| 21 | Analyze Application Requirements | Alex Turcu | - |
| 22 | Create a Basic Database Diagram | Alex Turcu | - |
| 23 | Design a Simple Database | Alex Turcu | - |
| 24 | Analyze Database and Backend Integration | Alex Turcu | - |
| 25 | Preparing Sample Data | Alex Turcu | - |
| 26 | Test the frontend | Wigur Kekowski | - |
| 27 | Test the backend | Wigur Kekowski | - |
| 28 | Document bugs | Wigur Kekowski | - |
| 29 | Project documentation | Wigur Kekowski | - |

**What does the "Depends on" column mean?** The numbers are task numbers from this table. It means that **a task can only be started once the listed tasks are done and merged into `develop`**. Examples:

- Task 8 (Navbar) has "6": it can be started after React Router is added (6).
- Task 12 (routing) has "8-11": it can only be done after the Navbar and all the pages, because `App.jsx` imports those files.
- "-" means no dependencies; the task can be started right away.

## How we work: step-by-step workflow

Every coding task (new page, component, data file) follows **these steps**.

### Branches in the project

- **`main`** - the stable version of the project. Only finished, verified code goes here (at the end of the sprint).
- **`develop`** - the team's working branch. **All Pull Requests for tasks are targeted at `develop`**, not `main`.
- **`feature/...`** - a branch for a single task. Created from `develop` and merged back into `develop` when done.

```
feature/navbar  ──PR──►  develop  ──PR (end of sprint)──►  main
```

### Steps

**1. Pick a card on Trello.** Assign yourself and move it from `Sprint 1` to `In progress`.

**2. Update `develop` locally.**
```bash
git checkout develop
git pull
```

**3. Create a new branch for this task (from `develop`).**
```bash
git checkout -b feature/strony-custom-exercises
```

**4. Do the task** (e.g. create `src/pages/Custom.jsx`). Check in the browser (`npm run dev`) that it works.

**5. Save your changes (commit).**
```bash
git add .
git commit -m "Add Custom and Exercises pages"
```

**6. Push the branch to GitHub.**
```bash
git push -u origin feature/strony-custom-exercises
```

**7. Open a Pull Request into `develop`.** On GitHub click **Compare & pull request** and **make sure the `base` field is set to `develop`** (GitHub suggests `main` by default). Write a short description and click **Create pull request**. Move the card to `Code Review` and tell the team chat that the PR is waiting for review.

**8. Code Review.** Another team member (not the author) reviews the changes in the **Files changed** tab and may leave comments. If it looks good, they click **Approve**.

**9. Merge into `develop`.** After approval click **Merge pull request**, then **Delete branch**.

**10. Testing and Done.** The card moves to `Testing`: someone runs `git checkout develop`, `git pull`, `npm run dev` and checks that everything works after the merge. If so, the card goes to `Done`.

### Rules

- **Never commit directly to `main` or `develop`.** Changes only go in through a Pull Request.
- **Always target Pull Requests at `develop`** (the `base` field). Only `develop` goes into `main`, at the end of the sprint.
- **One task = one branch = one PR.**
- **Always start with `git pull` on `develop`** before creating a new branch.
- **Branch names:** `feature/short-description-with-dashes`, e.g. `feature/navbar`, `feature/strona-raport`.
- **Commits:** short and specific. Good: `Add Navbar`. Bad: `changes`, `fixes`.
- **Do not edit other people's files** without agreeing first (the most common cause of conflicts).
- **A PR is reviewed by someone other than the author.**

### Trello lists

| List | Meaning |
|---|---|
| **Backlog** | Ideas and tasks for later |
| **Sprint 1** | Tasks to be done in this sprint |
| **In progress** | Someone is working on it (a branch exists) |
| **Code Review** | PR is open, waiting for review |
| **Testing** | PR is merged, we check that it works on `develop` |
| **Done** | Finished and verified |

## Order of tasks

```
PHASE 1 (done, Jakub):
  GitHub repo -> rules -> collaborators -> Trello board -> React init -> React Router -> README

PHASE 2 (in parallel, after React Router is added):
  Navbar, pages (Custom + Exercises, Report, Profile), CSS styles, components,
  visual design, database, backend, testing and documentation

PHASE 3 (at the end):
  Routing in App.jsx - after the Navbar and pages are merged

END OF SPRINT:
  Pull Request develop -> main (after checking that everything works)
```

Routing in `App.jsx` imports the Navbar and the pages, so its PR is merged **last**.

## Task descriptions

The descriptions below come from the Trello cards. Cards without a description only have a title and an owner (see the table).

### Finished tasks (Done list)

**1-4. Create GitHub repository / Agree on branch and commit rules / Add all team members as collaborators / Prepare the Trello board and assign tasks**
Person: Jakub Kukla. Finished, cards are in `Done` (the `gym-app` repository, working rules described in this file, access for the whole team, a Trello board with assigned tasks).

**5. React project initialization**
Person: Jakub Kukla. The React project is created. Card is in `Done`.

**6. Add React Router**
Person: Jakub Kukla. The `react-router-dom` library is added to the project. Card is in `Done`.

**7. Prepare README with project and team description and Sprint 1 goal**
Person: Jakub Kukla. Card is in `Done`. Note on the card: add a sample data file (`mock data.json`) to the project; the database will probably be added in the next sprint.

### Sprint tasks (Sprint 1 list)

**8. Navbar**
Person: Kamil Woda. Start after: React Router (Done). Branch: `feature/navbar` -> PR to `develop` (base = develop!).
Component `src/components/Navbar.jsx` with 4 `NavLink` links: `/niestandardowy`, `/cwiczenia`, `/raport`, `/moje` (Niestandardowy, Ćwiczenia, Raport, Moje). The active link has the `active` class. Commit: "Dodaj Navbar".
*Done when:* the PR is approved by another person and merged into `develop`; the active tab is clearly highlighted; `npm run lint` shows no errors.

**9. Custom (Niestandardowy) and Exercises pages**
Person: Kamil Woda. Start after: React Router (Done). Branch: `feature/strony-custom-exercises` -> PR to `develop`.
Two files with just a heading: `src/pages/Custom.jsx` (`<h1>Niestandardowy</h1>`) and `src/pages/Exercises.jsx` (`<h1>Ćwiczenia</h1>`; mind the spelling: **Exercises**). Eventually: plan cards (Custom) and the exercise catalog from `exercises.json` (Exercises). Commit: "Dodaj strony Custom i Exercises".
*Done when:* the PR is approved by another person and merged into `develop`; `npm run lint` shows no errors.

**10. Report (Raport) page**
Person: Kamil Woda. Start after: React Router (Done). Branch: `feature/strona-raport` -> PR to `develop`.
File `src/pages/Report.jsx` with the heading `<h1>Raport</h1>`. Eventually: progress statistics and charts (the Profile/Moje page has its own card). Commit: "Dodaj strone Report".
*Done when:* the PR is approved by another person and merged into `develop`; `npm run lint` shows no errors.

**11. Create Profile (Moje) page**
Person: Szymon Gniadek. Depends on: React Router (Done). Branch: `feature/strona-profile`.
File `src/pages/Profile.jsx` with just the heading `<h1>Moje</h1>` for now. Eventually: user profile and settings. Workflow: `git checkout develop` -> `git pull` -> `git checkout -b feature/strona-profile` -> PR to `develop`, reviewed by another person.
*Done when:* the file exists and is merged into `develop`; `npm run dev` and `npm run lint` show no errors.

**12. Routing in App.jsx**
Person: Szymon Gniadek. Start after: the Navbar + pages (Custom/Exercises, Report, Profile) are merged into `develop`. This card is **last**. Branch: `feature/routing` -> PR to `develop`.
In `src/App.jsx`: `BrowserRouter`, `Navbar`, `Routes` with 4 paths (`/niestandardowy`, `/cwiczenia`, `/raport`, `/moje`). Visiting `/` redirects to `/niestandardowy` (`Navigate`). Commit: "Dodaj routing".
*Done when:* each of the 4 tabs shows the right page and `/` redirects; `npm run lint` and `npm run build` show no errors; the PR is merged, followed by the `develop` -> `main` PR (end of sprint).

### Other tasks (cards without a description)

- **13. Prepare CSS styles** - Kamil Woda
- **14. Prepare component structure** - Szymon Gniadek
- **15. Get familiar with the existing React project** - Szymon Gniadek
- **16. Prepare the backend environment** - Szymon Gniadek
- **17-20. Visual design (Bartosz Flis):** the app's visual design with AI help, colors, typography and basic components, the home page view, handing the Figma link to the person responsible for React
- **21-25. Database (Alex Turcu):** analyze application requirements, a basic database diagram, design a simple database, analyze database and backend integration, prepare sample data
- **26-29. Testing and documentation (Wigur Kekowski):** test the frontend and the backend, document bugs, project documentation

## Definition of Done

A task is complete (the card may move to `Done`) when:

- [ ] the code is merged into `develop` via a Pull Request,
- [ ] the PR was reviewed by another person,
- [ ] after `git pull` on `develop` and `npm run dev` the app starts without errors,
- [ ] the branch was deleted,
- [ ] the Trello card is in `Done`.

**End of sprint:** `develop` has been merged into `main` via a Pull Request, and all 6 team members have cloned the repo, run `npm install` and `npm run dev`, and confirmed that the app works locally.