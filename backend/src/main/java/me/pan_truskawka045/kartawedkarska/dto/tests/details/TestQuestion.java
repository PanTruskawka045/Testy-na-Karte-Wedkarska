package me.pan_truskawka045.kartawedkarska.dto.tests.details;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record TestQuestion(String question, String image, String[] answers) {

}
