[Polski](#polski) | [English](#english)

---

## Polski

# Sprint 3

**Okres:** listopad 2026

### Cel sprintu

Rozbudować aplikację GymApp o obsługę kont użytkowników poprzez wprowadzenie mechanizmu rejestracji, logowania i wylogowywania. Dostosować strukturę bazy danych do przechowywania informacji o użytkownikach i powiązania ich kont z pozostałymi danymi aplikacji. Rozwinąć interfejs o ekrany logowania i rejestracji oraz udoskonalić moduł ćwiczeń poprzez rozszerzenie możliwości wyszukiwania, filtrowania i wyświetlania szczegółowych informacji.

### Zrealizowane zadania

#### 1. Baza danych i obsługa kont użytkowników

- Dostosowano strukturę bazy PostgreSQL do obsługi kont użytkowników.
- Przygotowano bazę danych do przechowywania informacji niezbędnych do rejestracji i logowania.
- Uwzględniono powiązanie kont użytkowników z pozostałymi danymi aplikacji.

#### 2. Rejestracja i logowanie

- Przygotowano mechanizm rejestracji, logowania i wylogowywania użytkowników.
- Dodano weryfikację danych przekazywanych przez użytkowników.
- Zastosowano bezpieczne przechowywanie haseł.
- Przygotowano kontrolę dostępu do zasobów wymagających zalogowania.
- Zaprojektowano ekrany logowania i rejestracji w Figmie.
- Zaimplementowano formularze logowania i rejestracji w React oraz połączono je z backendem.

#### 3. Profil użytkownika

- Rozbudowano podstronę profilu użytkownika.
- Przygotowano wyświetlanie podstawowych informacji o zalogowanym użytkowniku.
- Zintegrowano profil z mechanizmem obsługi kont.

#### 4. Rozwój modułu ćwiczeń

- Rozbudowano wyszukiwanie ćwiczeń według nazwy.
- Dodano filtrowanie według grupy mięśniowej i wymaganego sprzętu.
- Przygotowano podgląd szczegółowych informacji o wybranym ćwiczeniu.
- Wykorzystano uniwersalny komponent do prezentowania szczegółów ćwiczenia.

#### 5. Konfiguracja i bezpieczeństwo

- Przygotowano certyfikat self-signed.
- Przeprowadzono instalację certyfikatu na urządzeniach wykorzystywanych przez zespół.

#### 6. Testowanie i dokumentacja

- Sprawdzono działanie rejestracji i logowania.
- Zweryfikowano komunikację między frontendem a backendem.
- Przetestowano dostęp do funkcji wymagających zalogowania.
- Sprawdzono działanie profilu użytkownika i wylogowywania.
- Zweryfikowano wyszukiwanie, filtrowanie i wyświetlanie szczegółów ćwiczeń.
- Przygotowano dokumentację Sprintu 3 oraz przeprowadzono Sprint Review i retrospektywę.

### Stan produktu po zakończeniu sprintu

Aplikacja została rozbudowana o mechanizm obsługi kont użytkowników oraz dodatkowe możliwości korzystania z katalogu ćwiczeń.

- **Login** — ekran logowania użytkownika.
- **Registration** — formularz rejestracji nowego konta.
- **Profile** — podstrona profilu użytkownika powiązana z jego kontem.
- **Exercises** — rozszerzone wyszukiwanie, filtrowanie i podgląd szczegółowych informacji o ćwiczeniach.
- **Backend** — obsługa rejestracji, logowania i wylogowywania oraz kontrola dostępu do wybranych zasobów.
- **Database** — dostosowana struktura PostgreSQL obsługująca konta użytkowników.

### Rezultat sprintu

Rozbudowano GymApp o podstawowe mechanizmy obsługi indywidualnych kont użytkowników oraz rozwinięto istniejący moduł ćwiczeń. Przygotowane rozwiązania stanowią podstawę do dalszego rozwoju funkcjonalności dostępnych dla zalogowanych użytkowników.

### Wnioski i dalsze kroki

Kolejnym etapem będzie rozwijanie funkcjonalności treningowych. Priorytetem będzie tworzenie własnych planów treningowych, rejestrowanie treningów, zapisywanie historii aktywności oraz śledzenie postępów użytkownika.

Szczegółowy zakres kolejnego sprintu zostanie ustalony podczas planowania na podstawie priorytetów projektu i zadań dostępnych w Backlogu.

---

## English

# Sprint 3

**Period:** November 2026

### Sprint goal

Extend GymApp with user account management by introducing registration, login and logout functionality. Adapt the database structure to store user information and associate accounts with other application data. Expand the interface with login and registration screens and improve the exercise module by extending its search, filtering and detailed information capabilities.

### Completed tasks

#### 1. Database and user account management

- Adapted the PostgreSQL database structure to support user accounts.
- Prepared the database to store information required for registration and login.
- Established relationships between user accounts and other application data.

#### 2. User registration and login

- Implemented user registration, login and logout mechanisms.
- Added validation of user-submitted data.
- Implemented secure password storage.
- Prepared access control for resources requiring authentication.
- Designed login and registration screens in Figma.
- Implemented login and registration forms in React and connected them to the backend.

#### 3. User profile

- Expanded the user profile page.
- Prepared the display of basic information about the logged-in user.
- Integrated the profile with the account management mechanism.

#### 4. Exercise module development

- Improved exercise search by name.
- Added filtering by muscle group and required equipment.
- Prepared a detailed view of a selected exercise.
- Used a reusable component to display exercise details.

#### 5. Configuration and security

- Prepared a self-signed certificate.
- Installed the certificate on devices used by the team.

#### 6. Testing and documentation

- Tested registration and login functionality.
- Verified communication between the frontend and backend.
- Tested access to features requiring authentication.
- Verified user profile and logout functionality.
- Tested exercise search, filtering and detailed information views.
- Prepared Sprint 3 documentation and conducted the Sprint Review and retrospective.

### Product state at the end of the sprint

The application has been extended with user account management and additional capabilities for using the exercise catalogue.

- **Login** — user login screen.
- **Registration** — new account registration form.
- **Profile** — user profile page associated with the account.
- **Exercises** — improved search, filtering and detailed exercise information.
- **Backend** — registration, login and logout handling, together with access control for selected resources.
- **Database** — adapted PostgreSQL structure supporting user accounts.

### Sprint outcome

GymApp has been extended with basic individual user account management and an improved exercise module. The implemented solutions provide a foundation for further development of features available to logged-in users.

### Retrospective and next steps

The next stage will focus on developing workout-related features. The main priorities will be creating custom workout plans, recording workouts, saving activity history and tracking user progress.

The detailed scope of the next sprint will be determined during sprint planning based on project priorities and the tasks available in the Backlog.
