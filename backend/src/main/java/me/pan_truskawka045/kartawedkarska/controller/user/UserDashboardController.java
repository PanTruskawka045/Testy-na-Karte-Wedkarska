package me.pan_truskawka045.kartawedkarska.controller.user;

import me.pan_truskawka045.kartawedkarska.dto.user.UserInformation;
import me.pan_truskawka045.kartawedkarska.secutiry.CustomUserDetails;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user/")
public class UserDashboardController {

    @GetMapping("/about")
    public ResponseEntity<UserInformation> about(@AuthenticationPrincipal CustomUserDetails userDetails) {
        String username = userDetails.getUsername();
        String name = userDetails.getUser().getName();
        return ResponseEntity.ok(new UserInformation(username, name));
    }

}
