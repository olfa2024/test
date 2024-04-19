import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = 'http://localhost:8085'; // Adjust the base URL according to your backend API

  constructor(private http: HttpClient) { }

  fetchRecipes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/recipes`);
  }

  fetchRecipe(recipeId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/recipes/${recipeId}`);
  }

  fetchIngredients(recipeId: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/recipes/${recipeId}/ingredients`);
  }

  // Additional method to fetch both recipes and their ingredients
  fetchRecipesWithIngredients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/recipes`).pipe(
      map(recipes => {
        // Fetch ingredients for each recipe and add them to the recipe object
        return recipes.map(recipe => {
          return this.fetchIngredients(recipe.id).pipe(
            map(ingredients => {
              return { ...recipe, ingredients: ingredients };
            })
          );
        });
      })
    );
  }
}
