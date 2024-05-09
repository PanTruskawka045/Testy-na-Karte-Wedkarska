package me.pan_truskawka045.kartawedkarska.exception;

import org.springframework.http.HttpStatus;

public class TestWrongUserException extends InternalServerException{

    public TestWrongUserException() {
        super(0x05, HttpStatus.FORBIDDEN, "Test does not belong to user");
    }
}
