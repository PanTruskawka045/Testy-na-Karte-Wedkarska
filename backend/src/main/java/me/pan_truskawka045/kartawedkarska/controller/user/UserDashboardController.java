package me.pan_truskawka045.kartawedkarska.controller.user;

import lombok.RequiredArgsConstructor;
import me.pan_truskawka045.kartawedkarska.dto.tests.UserTestList;
import me.pan_truskawka045.kartawedkarska.dto.user.UserInformation;
import me.pan_truskawka045.kartawedkarska.model.Test;
import me.pan_truskawka045.kartawedkarska.secutiry.CustomUserDetails;
import me.pan_truskawka045.kartawedkarska.service.UserTestService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user/")
@RequiredArgsConstructor
public class UserDashboardController {

    private final UserTestService userTestService;

    @GetMapping("/about")
    public ResponseEntity<UserInformation> about(@AuthenticationPrincipal CustomUserDetails userDetails) {
        String username = userDetails.getUsername();
        String name = userDetails.getUser().getName();
        return ResponseEntity.ok(new UserInformation(username, name));
    }

    @GetMapping("/tests")
    public ResponseEntity<UserTestList> tests(@AuthenticationPrincipal CustomUserDetails userDetails) {
        List<Test> completedTests = userTestService.getCompletedTests(userDetails.getUser());
        Optional<Test> currentTest = userTestService.getCurrentTest(userDetails.getUser());
        return ResponseEntity.ok(new UserTestList(userTestService.mapToCompletedTestRecords(completedTests), userTestService.mapToTestRecord(currentTest).orElse(null)));
    }

}
