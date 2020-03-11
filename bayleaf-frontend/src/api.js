document.addEventListener('DOMContentLoaded', 
() => {
    console.log('api.js loaded')
});

class Api {
	static baseURL = 'http://localhost:3000'

	static fetchRecipes(){
		fetch(Api.baseURL + '/recipes')
		.then(res => res.json())
		.then(resObj => {
			resObj.data.forEach(this.sanitizeAndAddRecipe)
		})
		.then(() => console.log(Recipe.all))
	}

	static newRecipe(recipeObj){
		let configObj = {
			method: "POST",
			headers: {"Content-Type": "application/json", "Accepts": "application/json"},
			body: JSON.stringify(recipeObj)
		}
		fetch(this.baseURL + '/recipes', configObj)
		.then(res => res.json())
		.then(this.sanitizeAndAddRecipe)
	}

	static sanitizeAndAddRecipe(recipeObj){
		let sanitized = {...recipeObj.attributes, id: recipeObj.id}
		new Recipe(sanitized)
	}

	static fetchIngredients(){
		fetch(Api.baseURL + '/ingredients')
		.then(res => res.json())
		.then(resObj => {
			resObj.data.forEach(ingObj => {
				let sanitized = {...ingObj.attributes, id: ingObj.id, recipeId: ingObj.relationships.recipe.data.id}
				new Ingredient(sanitized)
			})
		})
		.then(() => console.log(Ingredient.all))
	}

	static fetchInstructions(){
		fetch(Api.baseURL + '/instructions')
		.then(res => res.json())
		.then(resObj => {
			resObj.data.forEach(insObj => {
				let sanitized = {...insObj.attributes, id: insObj.id, recipeId: insObj.relationships.recipe.data.id}
				new Instruction(sanitized)
			})
		})
		.then(() => console.log(Instruction.all))
	}
}