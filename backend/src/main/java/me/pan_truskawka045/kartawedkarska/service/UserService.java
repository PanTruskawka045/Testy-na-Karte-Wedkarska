package me.pan_truskawka045.kartawedkarska.service;

import me.pan_truskawka045.kartawedkarska.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<User> getUsers();

    Optional<User> getUserByEmail(String username);

    boolean hasUserWithUsername(String username);

    boolean hasUserWithEmail(String email);

    User validateAndGetUserByEmail(String username);

    User saveUserPassword(User user, String password);

    void deleteUser(User user);

    Optional<User> validUsernameAndPassword(String username, String password);

}
