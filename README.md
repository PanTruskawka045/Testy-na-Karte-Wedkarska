# Testy na kartę wędkarską

## Baza danych
//pokazać jak wygląda baza danych i ją opisać

## Obiekty
//pokazać obiekty i relacje między nimi
### Repozytoria
![Repozytoria](./readme/repositories.png)
Repozytoria służą do pobierania danych z bazy danych. 
W aplikacji są to klasy, które dziedziczą po `JpaRepository` z pakietu `org.springframework.data.jpa.repository`.

W repozytoriach napisane są zapytania w języku HQL (Oznaczone adnotacją `@Query` nad metodą).

### Serwisy
![Serwisy](./readme/services.png)
Serwisy służą do obsługi logiki biznesowej.
Każdy z serwisów implementuje interfejs, który zawiera metody do obsługi danych.


## Technologie
### Gradle
Gradle to nowoczesne narzędzie do automatyzacji budowania projektów programistycznych, które jest szczególnie popularne w ekosystemie Java. Umożliwia on efektywne zarządzanie zależnościami oraz automatyzację procesów kompilacji, testowania i wdrażania aplikacji.

### Spring Framework
Spring Framework to potężne i elastyczne narzędzie do tworzenia aplikacji Java, które ułatwia zarządzanie komponentami poprzez mechanizmy wstrzykiwania zależności (Dependency Injection). Dzięki bogatemu ekosystemowi modułów, takich jak Spring MVC do tworzenia aplikacji webowych czy Spring Data do pracy z bazami danych, umożliwia szybki rozwój skalowalnych i wydajnych aplikacji enterprise.

### Copilot
GitHub Copilot to zaawansowane narzędzie wspomagające pisanie kodu, oparte na sztucznej inteligencji, które zostało opracowane przez GitHub we współpracy z OpenAI. Umożliwia ono programistom generowanie fragmentów kodu, sugerowanie całych funkcji oraz przyspieszanie procesu tworzenia oprogramowania poprzez inteligentne podpowiedzi w czasie rzeczywistym.

## Proces tworzenia
![Proces tworzenia](./readme/proces-tworzenia.png)
