# Sprint 1: start projektu

**Język / Language:** [Polski](#polski) | [English](#english)

---

# Polski

## Cel sprintu

Przygotować repozytorium i działający **szkielet aplikacji React** z nawigacją między 4 zakładkami (Niestandardowy, Ćwiczenia, Raport, Moje) oraz przykładowymi danymi. Po sprincie każdy z zespołu ma projekt działający lokalnie i zna zasady pracy z gitem.

**Efekt końcowy:** po `npm run dev` otwiera się aplikacja z paskiem nawigacji, a kliknięcie zakładki pokazuje odpowiednią (na razie prawie pustą) stronę.

## Spis zadań

Podział zadań na osoby zostanie ustalony później (przypisanie na kartach w Trello).

| Nr | Zadanie (karta na Trello) | Zależy od |
|---|---|---|
| 1 | github repo | - |
| 2 | inicjalizacja projektu react | 1 |
| 3 | instalacja react-router-dom | 2 |
| 4 | struktura folderów | 2 |
| 5 | Rozbudowa README | 2 |
| 6 | Dodanie komponentu Navbar | 3, 4 |
| 7 | utworzenie strony Niestandardowy/Custom | 3, 4 |
| 8 | utworzenie strony Exercises | 3, 4 |
| 9 | utworzenie strony Raport | 3, 4 |
| 10 | utworzenie strony Profile | 3, 4 |
| 11 | Dodanie Mock Data | 4 |
| 12 | Konfiguracja routingu w App.jsx | 6-10 |

**Co oznacza kolumna "Zależy od"?** Numery to numery zadań z tej tabeli. Zapis oznacza, że **zadanie można zacząć dopiero wtedy, gdy wskazane zadania są już zrobione i zmergowane do `develop`**. Przykłady:

- Zadanie 6 (Navbar) ma "3, 4": można je zacząć po zainstalowaniu `react-router-dom` (3) i utworzeniu struktury folderów (4).
- Zadanie 12 (routing) ma "6-10": może być zrobione dopiero po Navbarze i wszystkich czterech stronach, bo `App.jsx` importuje te pliki.
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

**1. Weź kartę na Trello.** Przypisz się do niej i przenieś z `Sprint` do `In progress`.

**2. Zaktualizuj `develop` u siebie.**
```bash
git checkout develop
git pull
```

**3. Utwórz nowy branch dla tego zadania (z `develop`).**
```bash
git checkout -b feature/strona-custom
```

**4. Zrób zadanie** (np. utwórz plik `src/pages/Custom.jsx`). Sprawdź w przeglądarce (`npm run dev`), czy działa.

**5. Zapisz zmiany (commit).**
```bash
git add .
git commit -m "Dodaj strone Niestandardowy"
```

**6. Wyślij branch na GitHuba.**
```bash
git push -u origin feature/strona-custom
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
| **Sprint** | Zadania do zrobienia w tym sprincie |
| **In progress** | Ktoś właśnie nad tym pracuje (jest branch) |
| **Code Review** | PR otwarty, czeka na przegląd |
| **Testing** | PR zmergowany, sprawdzamy, czy działa na `develop` |
| **Done** | Zrobione i sprawdzone |

## Kolejność wykonywania zadań

```
FAZA 1 (reszta czeka):
  github repo -> inicjalizacja react -> react-router-dom + struktura folderów

FAZA 2 (równolegle, po wypchnięciu szkieletu):
  Navbar, strony (Custom, Exercises, Raport, Profile), Mock Data, README

FAZA 3 (na końcu):
  Konfiguracja routingu - po zmergowaniu Navbara i 4 stron

KONIEC SPRINTU:
  Pull Request develop -> main (po sprawdzeniu, że wszystko działa)
```

Routing w `App.jsx` importuje Navbar i 4 strony, więc jego PR mergujemy **jako ostatni**.

## Opisy zadań

**1. github repo**
Tworzymy repozytorium `gym-app` na GitHubie z plikiem README i szablonem `.gitignore` (Node), a następnie dodajemy pozostałe 5 osób jako collaboratorów (Settings -> Collaborators).
*Gotowe, gdy:* wszyscy mają dostęp do repo.

**2. inicjalizacja projektu react**
Klonujemy repo i tworzymy projekt Reacta przez Vite (`npm create vite@latest . -- --template react`, potem `npm install` i `npm run dev`). Wysyłamy go na `main`, a następnie tworzymy i wysyłamy branch `develop` (`git checkout -b develop`, `git push -u origin develop`). Od `develop` wszyscy będą tworzyć swoje branche.
*Gotowe, gdy:* projekt uruchamia się na `localhost:5173`, a na GitHubie istnieją branche `main` i `develop`.

**3. instalacja react-router-dom**
Na `develop` instalujemy bibliotekę do obsługi podstron (`npm install react-router-dom`) i wysyłamy zmiany w `package.json`. Zadania 3 i 4 (setup) można wysłać prosto na `develop`.
*Gotowe, gdy:* `react-router-dom` jest w `package.json`.

**4. struktura folderów**
W `src/` tworzymy foldery `components/` (małe, wielokrotnego użytku elementy), `pages/` (całe ekrany, czyli zakładki) i `data/` (przykładowe dane). Puste foldery wymagają pustego pliku `.gitkeep`, inaczej git ich nie zapisze.
*Gotowe, gdy:* trzy foldery są widoczne na GitHubie.

**5. Rozbudowa README**
Dodajemy do repo gotowy plik `README.md` i podmieniamy `<LOGIN>` w komendzie `git clone` na prawdziwy login. Branch: `feature/readme`.
*Gotowe, gdy:* README jest zmergowane do `develop`.

**6. Dodanie komponentu Navbar**
Branch: `feature/navbar`. Komponent `src/components/Navbar.jsx` z 4 linkami (`NavLink` z `react-router-dom`) do `/niestandardowy`, `/cwiczenia`, `/raport`, `/moje`. Aktywny link ma być wyróżniony (klasa `active` w CSS).
*Gotowe, gdy:* komponent istnieje i jest zmergowany.

**7. utworzenie strony Niestandardowy/Custom**
Branch: `feature/strona-custom`. Plik `src/pages/Custom.jsx` z samym nagłówkiem `<h1>Niestandardowy</h1>`. Docelowo będą tu karty planów treningowych (Day 1, Day 2...).
*Gotowe, gdy:* plik istnieje i jest zmergowany.

**8. utworzenie strony Exercises**
Branch: `feature/strona-exercises`. Plik `src/pages/Exercises.jsx` z nagłówkiem. Docelowo katalog ćwiczeń. Uwaga na pisownię: **Exercises**, nie "Excersises".
*Gotowe, gdy:* plik istnieje i jest zmergowany.

**9. utworzenie strony Raport**
Branch: `feature/strona-raport`. Plik `src/pages/Report.jsx` z nagłówkiem. Docelowo statystyki i wykresy.
*Gotowe, gdy:* plik istnieje i jest zmergowany.

**10. utworzenie strony Profile**
Branch: `feature/strona-profile`. Plik `src/pages/Profile.jsx` z nagłówkiem "Moje". Docelowo profil i ustawienia.
*Gotowe, gdy:* plik istnieje i jest zmergowany.

**11. Dodanie Mock Data**
Branch: `feature/mock-data`. Tworzymy w `src/data/` pliki `exercises.json` (min. 10 ćwiczeń: nazwa, sprzęt, grupa mięśniowa) i `plans.json` (min. 3 plany: Day 1, Day 2, Day 4, odwołujące się do ćwiczeń przez `exerciseId`). Każdy element ma unikalne `id`. Wzorujemy się na zdjęciu aplikacji wzorcowej.
*Gotowe, gdy:* oba pliki są poprawnym JSON-em i są zmergowane.

**12. Konfiguracja routingu w App.jsx**
Branch: `feature/routing`. W `src/App.jsx` ustawiamy `BrowserRouter`, `Navbar` i `Routes` z 4 ścieżkami; wejście na `/` przekierowuje na `/niestandardowy`. Zaczynamy dopiero, gdy Navbar i strony są na `develop`.
*Gotowe, gdy:* kliknięcie każdej z 4 zakładek pokazuje właściwą stronę.

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

Assigning tasks to people will be decided later (assignment on Trello cards).

| No. | Task (Trello card) | Depends on |
|---|---|---|
| 1 | GitHub repo | - |
| 2 | React project initialization | 1 |
| 3 | Install react-router-dom | 2 |
| 4 | Folder structure | 2 |
| 5 | Extend README | 2 |
| 6 | Add Navbar component | 3, 4 |
| 7 | Create Custom page (Niestandardowy) | 3, 4 |
| 8 | Create Exercises page | 3, 4 |
| 9 | Create Report page (Raport) | 3, 4 |
| 10 | Create Profile page (Moje) | 3, 4 |
| 11 | Add Mock Data | 4 |
| 12 | Configure routing in App.jsx | 6-10 |

**What does the "Depends on" column mean?** The numbers are task numbers from this table. It means that **a task can only be started once the listed tasks are done and merged into `develop`**. Examples:

- Task 6 (Navbar) has "3, 4": it can be started after `react-router-dom` is installed (3) and the folder structure exists (4).
- Task 12 (routing) has "6-10": it can only be done after the Navbar and all four pages, because `App.jsx` imports those files.
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

**1. Pick a card on Trello.** Assign yourself and move it from `Sprint` to `In progress`.

**2. Update `develop` locally.**
```bash
git checkout develop
git pull
```

**3. Create a new branch for this task (from `develop`).**
```bash
git checkout -b feature/strona-custom
```

**4. Do the task** (e.g. create `src/pages/Custom.jsx`). Check in the browser (`npm run dev`) that it works.

**5. Save your changes (commit).**
```bash
git add .
git commit -m "Add Custom page"
```

**6. Push the branch to GitHub.**
```bash
git push -u origin feature/strona-custom
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
| **Sprint** | Tasks to be done in this sprint |
| **In progress** | Someone is working on it (a branch exists) |
| **Code Review** | PR is open, waiting for review |
| **Testing** | PR is merged, we check that it works on `develop` |
| **Done** | Finished and verified |

## Order of tasks

```
PHASE 1 (the rest of the team waits):
  GitHub repo -> React init -> react-router-dom + folder structure

PHASE 2 (in parallel, after the skeleton is pushed):
  Navbar, pages (Custom, Exercises, Report, Profile), Mock Data, README

PHASE 3 (at the end):
  Routing configuration - after the Navbar and 4 pages are merged

END OF SPRINT:
  Pull Request develop -> main (after checking that everything works)
```

Routing in `App.jsx` imports the Navbar and the 4 pages, so its PR is merged **last**.

## Task descriptions

**1. GitHub repo**
Create the `gym-app` repository on GitHub with a README and a `.gitignore` template (Node), then add the other 5 people as collaborators (Settings -> Collaborators).
*Done when:* everyone has access to the repo.

**2. React project initialization**
Clone the repo and create a React project with Vite (`npm create vite@latest . -- --template react`, then `npm install` and `npm run dev`). Push it to `main`, then create and push the `develop` branch (`git checkout -b develop`, `git push -u origin develop`). Everyone will create their branches from `develop`.
*Done when:* the project runs at `localhost:5173` and both `main` and `develop` exist on GitHub.

**3. Install react-router-dom**
On `develop`, install the library for handling subpages (`npm install react-router-dom`) and push the `package.json` changes. Tasks 3 and 4 (setup) can be pushed straight to `develop`.
*Done when:* `react-router-dom` is in `package.json`.

**4. Folder structure**
In `src/` create `components/` (small reusable elements), `pages/` (whole screens, i.e. the tabs) and `data/` (sample data). Empty folders need an empty `.gitkeep` file, otherwise git will not store them.
*Done when:* the three folders are visible on GitHub.

**5. Extend README**
Add the ready-made `README.md` to the repo and replace `<LOGIN>` in the `git clone` command with the real username. Branch: `feature/readme`.
*Done when:* the README is merged into `develop`.

**6. Add Navbar component**
Branch: `feature/navbar`. The `src/components/Navbar.jsx` component with 4 links (`NavLink` from `react-router-dom`) to `/niestandardowy`, `/cwiczenia`, `/raport`, `/moje`. The active link should be highlighted (`active` class in CSS).
*Done when:* the component exists and is merged.

**7. Create Custom page (Niestandardowy)**
Branch: `feature/strona-custom`. File `src/pages/Custom.jsx` with just a heading `<h1>Niestandardowy</h1>`. Eventually it will hold workout plan cards (Day 1, Day 2...).
*Done when:* the file exists and is merged.

**8. Create Exercises page**
Branch: `feature/strona-exercises`. File `src/pages/Exercises.jsx` with a heading. Eventually the exercise catalog. Mind the spelling: **Exercises**, not "Excersises".
*Done when:* the file exists and is merged.

**9. Create Report page (Raport)**
Branch: `feature/strona-raport`. File `src/pages/Report.jsx` with a heading. Eventually statistics and charts.
*Done when:* the file exists and is merged.

**10. Create Profile page (Moje)**
Branch: `feature/strona-profile`. File `src/pages/Profile.jsx` with the heading "Moje". Eventually the profile and settings.
*Done when:* the file exists and is merged.

**11. Add Mock Data**
Branch: `feature/mock-data`. Create in `src/data/` the files `exercises.json` (at least 10 exercises: name, equipment, muscle group) and `plans.json` (at least 3 plans: Day 1, Day 2, Day 4, referencing exercises by `exerciseId`). Every item has a unique `id`. Base it on the reference app screenshot.
*Done when:* both files are valid JSON and merged.

**12. Configure routing in App.jsx**
Branch: `feature/routing`. In `src/App.jsx` set up `BrowserRouter`, `Navbar` and `Routes` with 4 paths; visiting `/` redirects to `/niestandardowy`. Start only when the Navbar and pages are on `develop`.
*Done when:* clicking each of the 4 tabs shows the right page.

## Definition of Done

A task is complete (the card may move to `Done`) when:

- [ ] the code is merged into `develop` via a Pull Request,
- [ ] the PR was reviewed by another person,
- [ ] after `git pull` on `develop` and `npm run dev` the app starts without errors,
- [ ] the branch was deleted,
- [ ] the Trello card is in `Done`.

**End of sprint:** `develop` has been merged into `main` via a Pull Request, and all 6 team members have cloned the repo, run `npm install` and `npm run dev`, and confirmed that the app works locally.
