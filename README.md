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


### Proces tworzenia
![Proces tworzenia](./readme/proces-tworzenia.png)