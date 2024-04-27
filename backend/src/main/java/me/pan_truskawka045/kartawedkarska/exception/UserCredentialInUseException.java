package me.pan_truskawka045.kartawedkarska.exception;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

public class UserCredentialInUseException extends InternalServerException {

    public UserCredentialInUseException(CredentialsField field, String message) {
        super(field.getInternalCode(), HttpStatus.CONFLICT, String.format("User credential %s in use: %s", field, message));
    }

    @RequiredArgsConstructor
    @Getter(AccessLevel.PRIVATE)
    public enum CredentialsField {
        USERNAME(0x02),
        EMAIL(0x03);

        private final int internalCode;
    }
}
