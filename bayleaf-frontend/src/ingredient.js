document.addEventListener('DOMContentLoaded', 
() => {
    console.log('ingredient.js loaded')
});

class Ingredient{

	static all = []

	constructor(id, item, amount, recipeId){
		this.id = id
		this.item = item
		this.amount = amount
		this.recipeId = recipeId

		Ingredient.all.push(this)
	}

}