package me.pan_truskawka045.kartawedkarska.model;

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

    private String question;
    private String image;
    private int correctAnswer;
    @Convert(converter = StringToListConverter.class)
    private List<String> answers;

}
