package me.pan_truskawka045.kartawedkarska.repository;

import me.pan_truskawka045.kartawedkarska.model.Question;
import me.pan_truskawka045.kartawedkarska.model.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

}
