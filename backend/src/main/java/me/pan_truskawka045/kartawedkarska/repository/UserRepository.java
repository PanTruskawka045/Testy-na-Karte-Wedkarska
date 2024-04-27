package me.pan_truskawka045.kartawedkarska.repository;

import me.pan_truskawka045.kartawedkarska.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String username);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

}
