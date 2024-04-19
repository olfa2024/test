import {Component, OnInit} from '@angular/core';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { MatDialog } from '@angular/material/dialog';
import { RecipeService } from './recipe.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent  implements OnInit {



  startDownload() {
    // Redirect to the register component
    this.router.navigate(['/register']);
  }


  likesCount = 0;

  incrementLikes() {
    this.likesCount++;
  }

  recipes: any[] = [];

  constructor(private recipeService: RecipeService , public dialog: MatDialog ,private router: Router) { }

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes(): void {
    this.recipeService.fetchRecipes().subscribe(data => {
      this.recipes = data;
      // Une fois que les recettes sont récupérées, récupérez les ingrédients si nécessaire
      // Notez que vous n'avez pas besoin d'appeler la méthode getIngredientsForAllRecipes() ici, car elle est déjà dans le service.
    });
  }




  public viewIngredients(recipe: any): void {
    const dialogRef = this.dialog.open(IngredientComponent, {
      width: '400px',
      data: { recipe }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public redirectToFacebook(): void {
    window.location.href = 'https://www.facebook.com';
  }

  public shareOnWhatsApp(recipe: any): void {
    const shareURL = `https://wa.me/?text=${encodeURIComponent(recipe.name + ': ' + recipe.description)}`;
    window.open(shareURL, '_blank');
  }

  public shareOnMessenger(recipe: any): void {
    const shareURL = `fb-messenger://share/?link=${encodeURIComponent(window.location.href)}&app_id=123456`;
    window.open(shareURL, '_blank');
  }
}
