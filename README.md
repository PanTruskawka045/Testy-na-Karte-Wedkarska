# Testy na kartę wędkarską

Projekt stworzony w ramach przedmiotu `Programowanie Obiektowe` na `WSB Merito w Chorzowie`.

## Struktura projektu

### Repozytoria

![Repozytoria](./readme/repositories.png)

Repozytoria służą do pobierania danych z bazy danych.
W aplikacji są to klasy, które dziedziczą po `JpaRepository` z pakietu `org.springframework.data.jpa.repository`.

W repozytoriach napisane są zapytania w języku HQL (Oznaczone adnotacją `@Query` nad metodą).

### Kontrolery 

![Kontrolery](./readme/controllers.png)

Kontrolery są podzielone na pakiety odpowiednio od części aplikacji.
Kontrolery służą do obsługi zapytań HTTP.


### Konwertery

![Konwertery](./readme/converters.png)

Konwertery służą do konwersji obiektów z i do formatu JSON, aby móc je zapisać do bazy danych.

### Wyjątki

![Wyjątki](./readme/exceptions.png)

Wyjątki służą do obsługi błędów w aplikacji.
Klasa bazowa `InternalServerException` dziedziczy po `RuntimeException`.
Każdy z wyjątków dziedziczy po `InternalServerException`.
Wyjątki są rzucane, gdy wystąpi błąd w aplikacji, i obsługiwane w klasie `ExceptionHandlerController`,
która zwraca odpowiedni kod HTTP oraz wiadomość o błędzie.

### Spring Security

Aplikacja korzysta z mechanizmu Spring Security do autoryzacji użytkowników.

![user-details.png](readme/user-details.png)

Klasa `CustomUserDetails` implementuje interfejs `UserDetails` z
pakietu `org.springframework.security.core.userdetails`.
zapisane są w niej dane użytkownika, takie jak login, hasło, role, czy konto jest aktywne (wymaga tego interfejs).

![user-service.png](./readme/user-service.png)

Klasa `UserDetailsServiceImpl` implementuje interfejs `UserDetailsService` z
pakietu `org.springframework.security.core.userdetails`.
Zawiera metodę `loadUserByUsername`, która zwraca obiekt klasy `CustomUserDetails` na podstawie loginu użytkownika.

![security-config.png](./readme/spring-security-config.png)

Klasy `WebSecurityConfig`, `PasswordEncoderBeanConfiguration` oraz `CorsSecurityConfiguration` odpowiednio konfigurują
mechanizmy Spring Security takie jak:

- konfiguracje bezpieczeństwa aplikacji (który endpoint wymaga autoryzacji, a który nie),
- konfiguracje hashowania haseł,
- konfiguracje CORS (Cross-Origin Resource Sharing).

### DTOs

![DTOs](./readme/dtos.png)

W paczce `dto` znajdują się klasy, które służą do przesyłania danych między frontendem a backendem.
Służą do tego klasy, które posiadają tylko pola, bez logiki biznesowej.
W klasie `CompletedTestAnswer` oraz `TestAnswer` zostało użyte dziedziczenie, aby uniknąć powtarzania się kodu.

![DTOs](./readme/inheritance.png)

### Serwisy

![Serwisy](./readme/services.png)

Serwisy służą do obsługi logiki biznesowej.
Każdy z serwisów implementuje interfejs, który zawiera metody do obsługi danych.

## Baza danych

Do projektu została użyta baza danych `MySQL`.

![Baza danych](./readme/database.png)

Tabela `questions` zawiera pytania i odpowiedzi. Jest traktowana jak tabela read-only.
Są z niej pobierane pytania do testu.

## Technologie

### Gradle

![Gradle](./readme/gradle.png)

Gradle to nowoczesne narzędzie do automatyzacji budowania projektów programistycznych, które jest szczególnie popularne
w ekosystemie Java. Umożliwia on efektywne zarządzanie zależnościami oraz automatyzację procesów kompilacji, testowania
i wdrażania aplikacji.

### Spring Framework

![Spring Framework](./readme/spring.png)

Spring Framework to potężne i elastyczne narzędzie do tworzenia aplikacji Java, które ułatwia zarządzanie komponentami
poprzez mechanizmy wstrzykiwania zależności (Dependency Injection). Dzięki bogatemu ekosystemowi modułów, takich jak
Spring MVC do tworzenia aplikacji webowych czy Spring Data do pracy z bazami danych, umożliwia szybki rozwój
skalowalnych i wydajnych aplikacji enterprise.

### Github Copilot

![copilot.png](./readme/copilot.png)

GitHub Copilot to zaawansowane narzędzie wspomagające pisanie kodu, oparte na sztucznej inteligencji, które zostało
opracowane przez GitHub we współpracy z OpenAI.

### React

![React](./readme/react.png)

Frontend został stworzony przy pomocy biblioteki React.
React to biblioteka JavaScript, która jest używana do tworzenia interaktywnych interfejsów użytkownika (UI).
Została stworzona przez Facebooka i jest utrzymywana przez społeczność open-source.

## Proces tworzenia

![Proces tworzenia](./readme/proces-tworzenia.png)
