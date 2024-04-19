package com.example.authhentification.dto;
import com.example.authhentification.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {

    private  Long id;

    private String name;

    private String email;

    private UserRole userRole;

}