class Ingredient{

	static all = []

	constructor(id, item, amount, recipeId){
		this.id = id
		this.item = item
		this.amount = amount
		this.recipeId = recipe.id

		Ingredient.all.push(this)
	}

}