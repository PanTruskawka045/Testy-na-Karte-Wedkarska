package me.pan_truskawka045.kartawedkarska.service;

import lombok.RequiredArgsConstructor;
import me.pan_truskawka045.kartawedkarska.exception.UserNotFoundException;
import me.pan_truskawka045.kartawedkarska.model.User;
import me.pan_truskawka045.kartawedkarska.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserByEmail(String username) {
        return userRepository.findByEmail(username);
    }

    @Override
    public boolean hasUserWithUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public boolean hasUserWithEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public User validateAndGetUserByEmail(String username) {
        return getUserByEmail(username)
                .orElseThrow(() -> new UserNotFoundException(username));
    }

    @Override
    public User saveUserPassword(User user, String password) {
        user.setPassword(passwordEncoder.encode(password));
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(User user) {
        userRepository.delete(user);
    }

    @Override
    public Optional<User> validUsernameAndPassword(String username, String password) {
        return getUserByEmail(username)
                .filter(user -> passwordEncoder.matches(password, user.getPassword()));
    }

}
