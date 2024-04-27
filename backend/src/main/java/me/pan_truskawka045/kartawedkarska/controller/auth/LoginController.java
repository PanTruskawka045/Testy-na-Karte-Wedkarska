package me.pan_truskawka045.kartawedkarska.controller.auth;

import lombok.RequiredArgsConstructor;
import me.pan_truskawka045.kartawedkarska.dto.auth.AuthResponse;
import me.pan_truskawka045.kartawedkarska.dto.auth.LoginRequest;
import me.pan_truskawka045.kartawedkarska.model.User;
import me.pan_truskawka045.kartawedkarska.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth/")
@RequiredArgsConstructor
public class LoginController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Validated @RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = userService.validUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return ResponseEntity.ok(new AuthResponse(user.getId(), user.getName()));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}
