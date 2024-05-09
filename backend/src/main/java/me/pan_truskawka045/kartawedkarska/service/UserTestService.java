package me.pan_truskawka045.kartawedkarska.service;

import me.pan_truskawka045.kartawedkarska.dto.tests.CompletedTestRecord;
import me.pan_truskawka045.kartawedkarska.dto.tests.UserTestRecord;
import me.pan_truskawka045.kartawedkarska.model.Test;
import me.pan_truskawka045.kartawedkarska.model.User;

import java.util.List;
import java.util.Optional;

public interface UserTestService {

    Optional<Test> getCurrentTest(User user);
    List<Test> getCompletedTests(User user);

    Optional<UserTestRecord> mapToTestRecord(Optional<Test> test);
    List<CompletedTestRecord> mapToCompletedTestRecords(List<Test> tests);

    Test startTest(User user);
}
