package com.example.quran;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories({"com.example.quran.abubakr",
        "com.example.quran.abdelbaset",
        "com.example.quran.fares",
        "com.example.quran.maher",
        "com.example.quran.mishary",
        "com.example.quran.saad",
        "com.example.quran.salah",
        "com.example.quran.saoud",
        "com.example.quran.soudais"})
public class QuranApplication {

    public static void main(String[] args) {
        SpringApplication.run(QuranApplication.class, args);
    }

}
