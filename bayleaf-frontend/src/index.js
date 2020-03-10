document.addEventListener('DOMContentLoaded', 
() => {
    console.log('index.js loaded')
});


// console.log(Api.fetchRecipes());
// console.log(Api.fetchIngredients());
// console.log(Api.fetchInstructions());

Api.fetchRecipes();
Api.fetchIngredients();
Api.fetchInstructions();

const main = document.getElementById('main')
const menu = document.getElementById('menu')

menu.addEventListener('click', handleMenuClick)

function handleMenuClick(event){
    if (event.target.id === "all-recipes"){
       renderAllRecipes()
       // debugger
    }
}

function renderAllRecipes(){
    console.log('rendering recipes');
    Recipe.all.forEach(recipe => {
        main.appendChild(recipe.fullRender())
    })
    // title, description
}