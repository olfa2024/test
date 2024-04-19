package com.example.authhentification.services.auth;

import com.example.authhentification.dto.RegisterRequest;
import com.example.authhentification.dto.UserDto;

public interface AuthService {

    UserDto createUser(RegisterRequest registerRequest);
    Boolean hasUserWithEmail(String email);
}