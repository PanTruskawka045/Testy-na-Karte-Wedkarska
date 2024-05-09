package me.pan_truskawka045.kartawedkarska.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

public class InvalidQuestionException extends InternalServerException{
    public InvalidQuestionException() {
        super(0x04, HttpStatus.BAD_REQUEST, "Invalid question id");
    }
}
