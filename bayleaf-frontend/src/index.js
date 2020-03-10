


const recipeAdapter = new RecipeAdapter("http://localhost:3000/recipes")
const ingredientAdapter = new IngredientsAdapter("http://localhost:3000/ingredients")
const instructionAdapter = new InstructionsAdapter("http://localhost:3000/instructions")

recipeAdapter.fetchRecipes()
ingredientAdapter.fetchIngredients()
instructionAdapter.fetchInstructions()