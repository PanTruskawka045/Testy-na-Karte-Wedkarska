package me.pan_truskawka045.kartawedkarska.exception;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;

@RequiredArgsConstructor
@Getter
public class InternalServerException extends RuntimeException {

    private final int internalCode;
    @JsonIgnore
    private final HttpStatusCode httpStatus;
    private final String message;

    private int getCode() {
        return httpStatus.value();
    }

}
