package org.example.backend.DTO;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class RegisterRequest{
    private String username;
    private String password;
    private String email;
    private String verificationCode;

}