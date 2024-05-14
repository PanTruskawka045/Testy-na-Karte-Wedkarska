package me.pan_truskawka045.kartawedkarska.service;

import lombok.RequiredArgsConstructor;
import me.pan_truskawka045.kartawedkarska.dto.tests.TestStatus;
import me.pan_truskawka045.kartawedkarska.dto.tests.details.CompletedTestAnswer;
import me.pan_truskawka045.kartawedkarska.dto.tests.details.TestAnswer;
import me.pan_truskawka045.kartawedkarska.dto.tests.details.TestDetails;
import me.pan_truskawka045.kartawedkarska.dto.tests.details.TestQuestion;
import me.pan_truskawka045.kartawedkarska.exception.TestNotFound;
import me.pan_truskawka045.kartawedkarska.exception.TestWrongUserException;
import me.pan_truskawka045.kartawedkarska.model.Test;
import me.pan_truskawka045.kartawedkarska.model.TestQuestions;
import me.pan_truskawka045.kartawedkarska.model.User;
import me.pan_truskawka045.kartawedkarska.repository.TestRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TestServiceImpl implements TestService {

    private final TestRepository testRepository;
    private final QuestionService questionService;
    private final TestQuestion placeHolderQuestion = new TestQuestion("Pytanie zostało usunięte", null, new String[]{"", "", "", ""});

    @Override
    public TestDetails<TestAnswer> getUncompletedTestDetails(Test test) {
        TestAnswer[] testAnswers = new TestAnswer[test.getQuestions().getQuestions().length];
        TestQuestion[] testQuestions = new TestQuestion[test.getQuestions().getQuestions().length];

        for (int i = 0; i < test.getQuestions().getQuestions().length; i++) {
            TestQuestions.TestQuestion question = test.getQuestions().getQuestions()[i];
            TestQuestion testQuestion = questionService.getQuestionById(question.getId()).map(q -> {
                int[] answersOrder = questionService.getAnswersOrder(question.getAnswersMap());
                String[] answers = new String[answersOrder.length];
                for (int j = 0; j < answersOrder.length; j++) {
                    int answerIndex = answersOrder[j];
                    answers[j] = switch (answerIndex) {
                        case 0 -> q.getCorrectAnswer();
                        case 1 -> q.getFirstWrongAnswer();
                        case 2 -> q.getSecondWrongAnswer();
                        case 3 -> q.getThirdWrongAnswer();
                        default -> "";
                    };
                }
                return new TestQuestion(q.getQuestion(), q.getImage(), answers);
            }).orElse(placeHolderQuestion);
            testQuestions[i] = testQuestion;

            int marked = question.getMarkedAnswer() == -1 ? -1 : questionService.getMarkedAnswer(question.getAnswersMap(), question.getMarkedAnswer());

            TestAnswer testAnswer = new TestAnswer(marked);
            testAnswers[i] = testAnswer;
        }


        return new TestDetails<>(test.getPublicId(), testAnswers, testQuestions, TestStatus.IN_PROGRESS);
    }

    @Override
    public TestDetails<CompletedTestAnswer> getCompletedTestDetails(Test test) {
        return null;
    }

    @Override
    public TestDetails<?> getTestDetails(Test test) {
        if (test.getStatus() == TestStatus.COMPLETED) {
            return getCompletedTestDetails(test);
        }
        return getUncompletedTestDetails(test);
    }

    @Override
    public Test getTestByPublicId(String publicId, User user) {
        Test test = testRepository.findByPublicId(publicId).orElseThrow(TestNotFound::new);
        if (!test.getUser().equals(user)) {
            throw new TestWrongUserException();
        }
        return test;
    }
}
