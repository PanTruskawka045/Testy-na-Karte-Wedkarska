package me.pan_truskawka045.kartawedkarska.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
public class TestQuestions {

    private TestQuestion[] questions;

    @AllArgsConstructor
    @Getter
    @Setter
    public static final class TestQuestion {

        private int id;
        private int markedAnswer = -1;
        private int answersMap; //first two bits maps correct answer location, next two bits marks second (first wrong) answer location, etc.

    }

}
