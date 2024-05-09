package me.pan_truskawka045.kartawedkarska.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.pan_truskawka045.kartawedkarska.converter.StringToListConverter;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private boolean enabled;
    private String question;
    private String image;
    private String correctAnswer;
    private String firstWrongAnswer, secondWrongAnswer, thirdWrongAnswer;


}
