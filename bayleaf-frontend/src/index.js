document.addEventListener('DOMContentLoaded', 
() => {
    console.log('index.js loaded')
});

console.log(Api.fetchRecipes());
console.log(Api.fetchIngredients());
console.log(Api.fetchInstructions());