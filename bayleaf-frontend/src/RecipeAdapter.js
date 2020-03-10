class RecipeAdapter{
	constructor(baseURL){
		this.baseURL = baseURL
	}

	fetchRecipes(){
		fetch(this.baseURL)
		.then(res => res.json())
		.then(console.log)
	}

}