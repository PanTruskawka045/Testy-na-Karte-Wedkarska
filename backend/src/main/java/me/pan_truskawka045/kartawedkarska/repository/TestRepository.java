package me.pan_truskawka045.kartawedkarska.repository;

import me.pan_truskawka045.kartawedkarska.model.Test;
import me.pan_truskawka045.kartawedkarska.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TestRepository extends JpaRepository<Test, Long> {

    @Query("SELECT t FROM Test t WHERE t.user = ?1 AND t.status = 'IN_PROGRESS'")
    Optional<Test> findInProgressByUser(User user);

    @Query("SELECT t FROM Test t WHERE t.user = ?1 AND t.status = 'COMPLETED'")
    List<Test> findAllCompletedByUser(User user);

    Optional<Test> findByPublicId(String publicId);

}
