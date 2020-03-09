

const ingredientAdapter = new IngredientsAdapter("http://localhost:3000/ingredients")


const instructionAdapter = new InstructionsAdapter("http://localhost:3000/instructions")

ingredientAdapter.fetchIngredients()
instructionAdapter.fetchInstructions()