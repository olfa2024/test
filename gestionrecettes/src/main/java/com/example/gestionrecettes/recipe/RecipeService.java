package com.example.gestionrecettes.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public List<recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public recipe getRecipeById(Long id) {
        return recipeRepository.findById(id).orElse(null);
    }

    public recipe addRecipe(recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public recipe updateRecipe(Long id, recipe recipe) {
        if (recipeRepository.existsById(id)) {
            recipe.setId(id);
            return recipeRepository.save(recipe);
        }
        return null; // Handle not found scenario
    }

    public void deleteRecipe(Long id) {
        recipeRepository.deleteById(id);
    }
}

