package me.pan_truskawka045.kartawedkarska.dto.tests.completion;

import me.pan_truskawka045.kartawedkarska.dto.tests.details.CompletedTestAnswer;
import me.pan_truskawka045.kartawedkarska.dto.tests.details.TestDetails;

public record FinishTestResponse(TestDetails<CompletedTestAnswer> test) {
}
