import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {
  @Input()
  showVideo: boolean = false;
  recipe: any;
  ingredients: any[];
  recipes: any[];

  constructor(
    public dialogRef: MatDialogRef<IngredientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.recipe = data.recipe;
    this.ingredients = data.ingredients;
    this.recipes = data.recipes;
  }

  openYoutubeVideo() {
    window.open(this.recipe.videoUrl, '_blank');
  }

  close(): void {
    this.dialogRef.close();
  }
}
