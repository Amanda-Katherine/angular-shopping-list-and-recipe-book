import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', "A recipe description.", "https://images.freeimages.com/images/large-previews/e7c/recipe-1538714.jpg"),
    new Recipe('Another Test Recipe', "Another recipe description.", "https://images.freeimages.com/images/large-previews/e7c/recipe-1538714.jpg")

  ]
  

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
