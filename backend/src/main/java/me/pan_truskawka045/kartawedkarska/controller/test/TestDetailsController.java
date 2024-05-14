package me.pan_truskawka045.kartawedkarska.controller.test;

import lombok.RequiredArgsConstructor;
import me.pan_truskawka045.kartawedkarska.dto.tests.details.TestDetails;
import me.pan_truskawka045.kartawedkarska.model.Test;
import me.pan_truskawka045.kartawedkarska.secutiry.CustomUserDetails;
import me.pan_truskawka045.kartawedkarska.service.TestService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test/")
@RequiredArgsConstructor
public class TestDetailsController {

    private final TestService testService;

    @GetMapping("/details")
    public ResponseEntity<TestDetails<?>> getDetails(@RequestParam String testId, @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        Test test = testService.getTestByPublicId(testId, customUserDetails.getUser());
        return ResponseEntity.ok(testService.getTestDetails(test));
    }


}
