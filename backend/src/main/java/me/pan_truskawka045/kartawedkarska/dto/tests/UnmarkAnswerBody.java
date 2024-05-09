package me.pan_truskawka045.kartawedkarska.dto.tests;

import lombok.Getter;

@Getter
public record UnmarkAnswerBody(String testId, int questionId) {

}
