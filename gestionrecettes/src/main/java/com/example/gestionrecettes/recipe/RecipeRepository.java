package com.example.gestionrecettes.recipe;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<recipe, Long> {
}
