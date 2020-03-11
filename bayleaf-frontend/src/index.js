document.addEventListener('DOMContentLoaded', 
() => {
    console.log('index.js loaded')
    renderAllRecipes()
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
    if (event.target.id !== menu){
       callbacks[`${event.target.id}`]()
       // debugger
    }
}

const callbacks= {
    allRecipes: renderAllRecipes
}

function renderAllRecipes(){
    console.log('rendering recipes');
    Recipe.all.forEach(recipe => {
        main.appendChild(recipe.fullRender())
    })
    // title, description
}


