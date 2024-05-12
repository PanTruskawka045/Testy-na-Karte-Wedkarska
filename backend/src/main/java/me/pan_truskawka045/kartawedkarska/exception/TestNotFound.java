package me.pan_truskawka045.kartawedkarska.exception;

import org.springframework.http.HttpStatus;

public class TestNotFound extends InternalServerException {

    public TestNotFound() {
        super(0x08, HttpStatus.NOT_FOUND, "Test not found.");
    }
}
