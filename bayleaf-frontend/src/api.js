class Api {
	static baseURL = 'http://localhost:3000'

	static fetchRecipes(){
		fetch(Api.baseURL + '/recipes')
		.then(res => res.json())
		.then(console.log)
	}

	static fetchIngredients(){
		fetch(Api.baseURL + '/ingredients')
		.then(res => res.json())
		.then(console.log)
	}

	static fetchInstructions(){
		fetch(Api.baseURL + '/instructions')
		.then(res => res.json())
		.then(console.log)
	}
}