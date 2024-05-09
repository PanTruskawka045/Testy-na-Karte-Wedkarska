package me.pan_truskawka045.kartawedkarska.exception;

import org.springframework.http.HttpStatus;

public class InvalidTestException extends InternalServerException{

    public InvalidTestException() {
        super(0x06, HttpStatus.NOT_FOUND, "Test not found");
    }
}
