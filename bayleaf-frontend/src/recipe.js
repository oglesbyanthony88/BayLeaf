document.addEventListener('DOMContentLoaded', () => {
	console.log('recipe.js loaded')
});

class Recipe {
	static all = []

	constructor({id, title, description, img_src}){
		this.id = id
		this.title = title
		this.description = description
		this.img_src = img_src

		this.element = document.createElement('div')
		this.element.className = "recipe"
		this.element.id = `recipe-${this.id}`

		Recipe.all.push(this)
	}

	fullRender(){
		this.element.innerHTML = `
		<img src="${this.img_src}" alt="${this.description}">
		<h1>${this.title}</h1>
		<p>${this.description}</p>
		`
		
		return this.element
	}
}


