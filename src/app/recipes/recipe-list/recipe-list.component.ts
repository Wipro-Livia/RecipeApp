import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe [] = [
    new Recipe('Pizza', 'A pretty basic pizza', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'),
    new Recipe('Random Recipe', 'It could be anything', 'https://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/updated_main_images/healthy-food-fill-raw.jpg?itok=t4UOdtsi')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
