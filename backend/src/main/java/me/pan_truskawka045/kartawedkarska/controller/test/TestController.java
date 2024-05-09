package me.pan_truskawka045.kartawedkarska.controller.test;

import lombok.RequiredArgsConstructor;
import me.pan_truskawka045.kartawedkarska.dto.tests.MarkAnswerBody;
import me.pan_truskawka045.kartawedkarska.dto.tests.UnmarkAnswerBody;
import me.pan_truskawka045.kartawedkarska.exception.InvalidTestException;
import me.pan_truskawka045.kartawedkarska.exception.TestWrongUserException;
import me.pan_truskawka045.kartawedkarska.model.Test;
import me.pan_truskawka045.kartawedkarska.repository.TestRepository;
import me.pan_truskawka045.kartawedkarska.secutiry.CustomUserDetails;
import me.pan_truskawka045.kartawedkarska.service.QuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/test/")
@RequiredArgsConstructor
public class TestController {

    private final QuestionService questionService;
    private final TestRepository testRepository;

    @PostMapping("/mark-answer")
    public ResponseEntity<Void> markAnswer(@Validated @RequestBody MarkAnswerBody markAnswerBody, @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        Test test = validateTestFromRequest(markAnswerBody.testId(), customUserDetails);
        questionService.markAnswer(markAnswerBody.questionId(), markAnswerBody.markedAnswer(), test);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/unmark-answer")
    public ResponseEntity<Void> unmarkAnswer(@Validated @RequestBody UnmarkAnswerBody markAnswerBody, @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        Test test = validateTestFromRequest(markAnswerBody.testId(), customUserDetails);
        questionService.unmarkAnswer(markAnswerBody.questionId(), test);
        return ResponseEntity.ok().build();
    }

    private Test validateTestFromRequest(String publicId, CustomUserDetails customUserDetails) {
        Optional<Test> byPublicId = testRepository.findByPublicId(publicId);
        if (byPublicId.isEmpty()) {
            throw new InvalidTestException();
        }
        Test test = byPublicId.get();
        if (!test.getUser().getUsername().equals(customUserDetails.getUsername())) {
            throw new TestWrongUserException();
        }
        return test;
    }

}
