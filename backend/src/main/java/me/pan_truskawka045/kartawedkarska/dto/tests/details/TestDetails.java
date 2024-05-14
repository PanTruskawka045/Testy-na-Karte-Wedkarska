package me.pan_truskawka045.kartawedkarska.dto.tests.details;

import me.pan_truskawka045.kartawedkarska.dto.tests.TestStatus;

public record TestDetails<ANSWER extends TestAnswer>(String testId, ANSWER[] answers, TestQuestion[] questions, TestStatus testStatus) {

}
