package me.pan_truskawka045.kartawedkarska.service;

import me.pan_truskawka045.kartawedkarska.model.Question;
import me.pan_truskawka045.kartawedkarska.model.Test;

import java.util.List;
import java.util.Optional;

public interface QuestionService {

    int generateRandomQuestionAnswersOrder();

    int[] getAnswersOrder(int answersMap);

    Optional<Question> getQuestionById(int id);

    List<Question> getQuestions();

    void markAnswer(int questionId, int markedAnswer, Test test);

    void unmarkAnswer(int questionId, Test test);

    int getMarkedAnswer(int answerMap, int marked);
}
