Api.fetchRecipes();
Api.fetchIngredients();
Api.fetchInstructions();

const measurment = ["Gallon", "Quart", "Pint", "Cup", "Fluid Oz", "Tbs", "tsp", "oz", "lb"]
const main = document.getElementById('main')
const menu = document.getElementById('menu')
const formDiv = document.createElement('div')
formDiv.className = "new-recipe"
    formDiv.innerHTML = `
    <h3>Recipe</h3>
        Recipe Title:
        <input id="recipe" type="text" />
        <br><br>
        Recipe Description:
        <input id="recipe" type="text" />
        <br><br> 
        Recipe Image Source:
        <input id="recipe" type="text" />
        <br><br>
    <h3>Ingredients</h3>
        <ol id="ingredient-list">
        </ol>
            <button id="add-ingredient">Add Ingredient</button>
    <h3>Instructions</h3>
        <ol id="instruction-list">
        </ol>
        <button id="add-instruction">Add Instruction</button>
        <br><br><br>
        <button id="form-submit">Add Recipe</button>
    `

menu.addEventListener('click', handleMenuClick)
formDiv.addEventListener('click', handleFormSubmit)
formDiv.addEventListener('click', addNewIngredientToForm)
formDiv.addEventListener('click', addNewInstructionToForm)

function handleMenuClick(event){
    if (event.target.id !== menu){
       callbacks[`${event.target.id}`]()
       // debugger
    }
}

function handleFormSubmit(event){
    if (event.target.id == "form-submit"){
        let recipeInput = formDiv.querySelectorAll('input#recipe')
        let ingredientItemInputs = formDiv.querySelectorAll('input#item')
        let ingredientAmountInputs = formDiv.querySelectorAll('input#amount') 
        let instructionInputs = formDiv.querySelectorAll('input#instruction')
        
        let newRecipeObj = {
            title: recipeInput[0].value,
            description: recipeInput[1].value,
            img_src: recipeInput[2].value
        }
        Api.newRecipe(newRecipeObj)
    }

}

var ingredientCounter = 0;
var ingredientLimit = 20;
function addNewIngredientToForm(event){
    if (event.target.id == "add-ingredient"){
        if (ingredientCounter == ingredientLimit){
            alert("You have reached the Ingredient Limit")
        } else {
            const newIng = document.createElement('li');
            newIng.innerHTML = `
            Ingredient: <input id="item" type="text" />
            Amount: <input id="amount" type="text" />
            <br>
            `
            document.getElementById('ingredient-list').appendChild(newIng)
            ingredientCounter++
        }
    }
}

var instructionCounter = 0;
var instructionLimit = 20;
function addNewInstructionToForm(event){
    if (event.target.id == "add-instruction"){
        if (instructionCounter == instructionLimit){
            alert("You have reached the Instruction Limit")
        } else {
            const newIns = document.createElement('li');
            newIns.innerHTML = `
            Instruction: <input id="instruction" type="text"/>
            `
            document.getElementById('instruction-list').appendChild(newIns)
            instructionCounter++
        }
    }
}

const callbacks= {
    allRecipes: renderAllRecipes,
    newRecipe: renderNewRecipeForm
}

function renderAllRecipes(){
    Recipe.all.forEach(recipe => {
        main.appendChild(recipe.fullRender())
    })
    // title, description
}

function renderNewRecipeForm(){
    main.appendChild(formDiv)
}


