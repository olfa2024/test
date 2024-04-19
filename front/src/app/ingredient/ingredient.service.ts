import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private baseUrl = 'http://localhost:8085'; // Ajustez l'URL de base en fonction de votre API backend

  constructor(private http: HttpClient) { }

  fetchIngredients(recipeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/recipes/${recipeId}/ingredients`);
  }
}
