package me.pan_truskawka045.kartawedkarska.service;

import me.pan_truskawka045.kartawedkarska.dto.tests.details.CompletedTestAnswer;
import me.pan_truskawka045.kartawedkarska.dto.tests.details.TestAnswer;
import me.pan_truskawka045.kartawedkarska.dto.tests.details.TestDetails;
import me.pan_truskawka045.kartawedkarska.model.Test;
import me.pan_truskawka045.kartawedkarska.model.User;

public interface TestService {

    TestDetails<TestAnswer> getUncompletedTestDetails(Test test);

    TestDetails<CompletedTestAnswer> getCompletedTestDetails(Test test);

    TestDetails<?> getTestDetails(Test test);

    Test getTestByPublicId(String publicId, User user);
}
