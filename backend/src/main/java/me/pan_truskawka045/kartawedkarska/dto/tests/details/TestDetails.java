package me.pan_truskawka045.kartawedkarska.dto.tests.details;

import me.pan_truskawka045.kartawedkarska.dto.tests.TestStatus;
import me.pan_truskawka045.kartawedkarska.model.Question;

public record TestDetails<ANSWER extends TestAnswer>(ANSWER[] answers, Question[] questions, TestStatus testStatus) {

}
