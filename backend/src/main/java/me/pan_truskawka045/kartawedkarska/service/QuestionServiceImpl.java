package me.pan_truskawka045.kartawedkarska.service;

import com.google.common.base.Supplier;
import com.google.common.base.Suppliers;
import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import lombok.RequiredArgsConstructor;
import me.pan_truskawka045.kartawedkarska.dto.tests.TestStatus;
import me.pan_truskawka045.kartawedkarska.exception.InvalidQuestionException;
import me.pan_truskawka045.kartawedkarska.exception.TestAlreadyFinishedException;
import me.pan_truskawka045.kartawedkarska.model.Question;
import me.pan_truskawka045.kartawedkarska.model.Test;
import me.pan_truskawka045.kartawedkarska.model.TestQuestions;
import me.pan_truskawka045.kartawedkarska.repository.QuestionRepository;
import me.pan_truskawka045.kartawedkarska.repository.TestRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

@RequiredArgsConstructor
@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;
    private final TestRepository testRepository;

    private final LoadingCache<Integer, Question> questionCache = CacheBuilder.newBuilder()
            .maximumSize(100)
            .expireAfterAccess(1, TimeUnit.HOURS)
            .build(new CacheLoader<>() {
                @Override
                public Question load(Integer integer) throws Exception {
                    return questionRepository.findById(integer).orElseThrow();
                }
            });

    private final Supplier<List<Question>> questionsSupplier = Suppliers.memoizeWithExpiration(questionRepository::findAllEnabled, 1, TimeUnit.HOURS);

    @Override
    public int generateRandomQuestionAnswersOrder() {
        List<Integer> numbers = List.of(0, 1, 2, 3);
        Collections.shuffle(numbers);
        int[] order = numbers.stream().mapToInt(i -> i).toArray();
        int result = 0;
        for (int i = 0; i < order.length; i++) {
            result |= order[i] << (i * 2);
        }
        return result;
    }

    @Override
    public int[] getAnswersOrder(int answersMap) {
        int[] order = new int[4];
        for (int i = 0; i < 4; i++) {
            order[i] = (answersMap >> (i * 2)) & 0b11;
        }
        return order;
    }

    @Override
    public Optional<Question> getQuestionById(int id) {
        try {
            return Optional.of(questionCache.get(id));
        } catch (ExecutionException e) {
            return Optional.empty();
        }
    }

    @Override
    public List<Question> getQuestions() {
        return questionsSupplier.get();
    }

    @Override
    public void markAnswer(int questionId, int markedAnswer, Test test) {
        if (test.getStatus() != TestStatus.IN_PROGRESS) {
            throw new TestAlreadyFinishedException();
        }
        TestQuestions questions = test.getQuestions();
        if (questionId < 0 || questionId >= questions.getQuestions().length) {
            throw new InvalidQuestionException();
        }
        int clickedAnswer = getAnswersOrder(questions.getQuestions()[questionId].getAnswersMap())[markedAnswer];
        questions.getQuestions()[questionId].setMarkedAnswer(clickedAnswer);
        testRepository.save(test);
    }

    @Override
    public void unmarkAnswer(int questionId, Test test) {
        markAnswer(questionId, -1, test);
    }
}
