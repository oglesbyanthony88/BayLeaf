document.addEventListener('DOMContentLoaded', 
() => {
    console.log('instruction.js loaded')
});

class Instruction{

	static all = []
	constructor({id, step_num, content, recipeId}){	
	this.id = id
	this.step_num = step_num
	this.content = content
	this.recipeId = recipeId

	Instruction.all.push(this)
	}
}