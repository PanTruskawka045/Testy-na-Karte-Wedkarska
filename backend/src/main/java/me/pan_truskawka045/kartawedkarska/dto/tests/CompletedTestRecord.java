package me.pan_truskawka045.kartawedkarska.dto.tests;

import lombok.Getter;

@Getter
public class CompletedTestRecord extends UserTestRecord {

    private final int points, maxPoints;
    private final boolean passed;

    public CompletedTestRecord(String testId, TestStatus testStatus, int points, int maxPoints, boolean passed) {
        super(testId, testStatus);
        this.points = points;
        this.maxPoints = maxPoints;
        this.passed = passed;
    }
}
