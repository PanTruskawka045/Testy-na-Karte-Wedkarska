package me.pan_truskawka045.kartawedkarska.exception;

import org.springframework.http.HttpStatus;

public class UserNotFoundException extends InternalServerException {

    public UserNotFoundException(String user) {
        super(0x01, HttpStatus.NOT_FOUND, String.format("User not found: %s", user));
    }

}
