package me.pan_truskawka045.kartawedkarska.service;

import lombok.RequiredArgsConstructor;
import me.pan_truskawka045.kartawedkarska.dto.tests.CompletedTestRecord;
import me.pan_truskawka045.kartawedkarska.dto.tests.TestStatus;
import me.pan_truskawka045.kartawedkarska.dto.tests.UserTestRecord;
import me.pan_truskawka045.kartawedkarska.model.Test;
import me.pan_truskawka045.kartawedkarska.model.User;
import me.pan_truskawka045.kartawedkarska.repository.TestRepository;
import me.pan_truskawka045.kartawedkarska.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserTestServiceImpl implements UserTestService {

    private final TestRepository testRepository;
    private final UserRepository userRepository;

    @Override
    public Optional<Test> getCurrentTest(User user) {
        return testRepository.findInProgressByUser(user);
    }

    @Override
    public List<Test> getCompletedTests(User user) {
        return testRepository.findAllCompletedByUser(user);
    }

    @Override
    public Optional<UserTestRecord> mapToTestRecord(Optional<Test> test) {
        return test.map(t -> new UserTestRecord(t.getPublicId(), t.getStatus(), t.getStartDate()));
    }

    @Override
    public List<CompletedTestRecord> mapToCompletedTestRecords(List<Test> tests) {
        return tests.stream().filter(t -> t.getStatus() == TestStatus.COMPLETED)
                .map(t -> new CompletedTestRecord(t.getPublicId(),
                        t.getStatus(),
                        t.getPoints(),
                        t.getMaxPoints(),
                        (t.getPoints() / (double) t.getMaxPoints()) >= .5,
                        t.getStartDate(),
                        t.getFinishDate())).toList();
    }

    @Override
    public Test startTest(User user) {
        Optional<Test> currentTest = getCurrentTest(user);
        if (currentTest.isPresent()) {
            return currentTest.get();
        }
        Test test = new Test();
        test.setUser(user);
        testRepository.save(test);
        user.getTests().add(test);
        userRepository.save(user);
        return test;
    }
}
