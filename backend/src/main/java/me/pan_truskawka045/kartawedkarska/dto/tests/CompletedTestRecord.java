package me.pan_truskawka045.kartawedkarska.dto.tests;

import lombok.Getter;

import java.util.Date;

@Getter
public class CompletedTestRecord extends UserTestRecord {

    private final int points, maxPoints;
    private final boolean passed;
    private final Date finishDate;

    public CompletedTestRecord(String testId, TestStatus testStatus, int points, int maxPoints, boolean passed, Date startDate, Date finishDate) {
        super(testId, testStatus, startDate);
        this.points = points;
        this.maxPoints = maxPoints;
        this.passed = passed;
        this.finishDate = finishDate;
    }
}
