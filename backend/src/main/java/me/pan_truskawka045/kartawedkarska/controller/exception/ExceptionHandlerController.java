package me.pan_truskawka045.kartawedkarska.controller.exception;

import me.pan_truskawka045.kartawedkarska.exception.InternalServerException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.naming.AuthenticationException;

@RestControllerAdvice
public class ExceptionHandlerController {

    @ExceptionHandler(InternalServerException.class)
    public ResponseEntity<InternalServerException> handleInternalServerException(InternalServerException e) {
        return ResponseEntity.status(e.getHttpStatus()).body(e);
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<InternalServerException> handleAuthenticationException(AuthenticationException e) {

        return ResponseEntity.status(401).body(new InternalServerException(0x04, HttpStatus.UNAUTHORIZED, "Not authorized"));
    }
}
