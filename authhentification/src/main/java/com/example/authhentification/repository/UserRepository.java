package com.example.authhentification.repository;
import com.example.authhentification.entity.User;
import com.example.authhentification.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findFirstByEmail(String email);

    User findByRole(UserRole userRole);

}