// document.addEventListener('DOMContentLoaded', () => {
// 	console.log('recipe.js loaded')
// });

class Recipe {
	static all = []

	constructor(id, title, description){
		this.id = id
		this.title = title
		this.description = description

		Recipe.all.push(this)
	}



// 	static renderRecipes(){
// 		Recipe.all.forEach(recipe => {
// 			let option = document.createElement("option")
// 			option.value = recipe.id
// 			option.textContent = recipe.title
// 			select.appendChild(option)
// 		})
// 	}


}

