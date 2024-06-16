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


### Proces tworzenia
![Proces tworzenia](./readme/proces-tworzenia.png)