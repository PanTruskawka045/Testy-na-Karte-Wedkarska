package me.pan_truskawka045.kartawedkarska.dto.auth;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;
}

