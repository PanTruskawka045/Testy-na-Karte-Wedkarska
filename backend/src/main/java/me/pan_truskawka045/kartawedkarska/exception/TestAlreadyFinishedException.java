package me.pan_truskawka045.kartawedkarska.exception;

import org.springframework.http.HttpStatus;

public class TestAlreadyFinishedException extends InternalServerException{
    public TestAlreadyFinishedException() {
        super(0x07, HttpStatus.CONFLICT, "Test already finished");
    }
}
