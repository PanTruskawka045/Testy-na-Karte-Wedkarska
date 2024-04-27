package me.pan_truskawka045.kartawedkarska.controller.auth;

import lombok.RequiredArgsConstructor;
import me.pan_truskawka045.kartawedkarska.dto.auth.AuthResponse;
import me.pan_truskawka045.kartawedkarska.dto.auth.RegisterRequest;
import me.pan_truskawka045.kartawedkarska.exception.UserCredentialInUseException;
import me.pan_truskawka045.kartawedkarska.model.User;
import me.pan_truskawka045.kartawedkarska.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth/")
@RequiredArgsConstructor
public class RegisterController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> login(@Validated @RequestBody RegisterRequest registerRequest) {
        if (userService.hasUserWithUsername(registerRequest.getUsername())) {
            throw new UserCredentialInUseException(UserCredentialInUseException.CredentialsField.USERNAME, registerRequest.getUsername());
        }
        if (userService.hasUserWithEmail(registerRequest.getEmail())) {
            throw new UserCredentialInUseException(UserCredentialInUseException.CredentialsField.EMAIL, registerRequest.getEmail());
        }
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setName(registerRequest.getName());
        userService.saveUserPassword(user, registerRequest.getPassword());
        return ResponseEntity.status(HttpStatus.CREATED).body(new AuthResponse(user.getId(), user.getName()));
    }
}
