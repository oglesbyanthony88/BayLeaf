class IngredientsAdapter{
	constructor(baseURL){
		this.baseURL = baseURL
	}

	fetchIngredients(){
		fetch(this.baseURL)
		.then(res => res.json())
		.then(console.log)
	}

}