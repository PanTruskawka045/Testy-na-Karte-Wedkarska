package me.pan_truskawka045.kartawedkarska.dto.tests;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class UserTestRecord {

    private final String testId;
    private final TestStatus testStatus;


}
