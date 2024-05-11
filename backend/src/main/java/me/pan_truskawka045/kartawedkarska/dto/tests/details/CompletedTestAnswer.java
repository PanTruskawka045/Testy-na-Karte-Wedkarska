package me.pan_truskawka045.kartawedkarska.dto.tests.details;

import lombok.Getter;

@Getter
public class CompletedTestAnswer extends TestAnswer {

    private final int correct;

    public CompletedTestAnswer(int marked, int correct) {
        super(marked);
        this.correct = correct;
    }
}
