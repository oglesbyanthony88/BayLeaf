document.addEventListener('DOMContentLoaded', () => {
	console.log('recipe.js loaded')
});

class Recipe {
	static all = []

	constructor({id, title, description}){
		this.id = id
		this.title = title
		this.description = description

		this.element = document.createElement('div')
		this.element.className = "recipe"
		this.element.id = `recipe-${this.id}`

		Recipe.all.push(this)
	}

	fullRender(){
		console.log('render render');
		this.element.innerHTML = `
		<h1>${this.title}</h1>
		<p>${this.description}</p>
		`
		
		return this.element
	}

}

