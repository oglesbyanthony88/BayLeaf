class RecipesController < ApplicationController

	def index
		recipes = Recipe.all

		render json: RecipeSerializer.new(recipes)
	end

	def show
		recipe = Recipe.find_by(params[:id])
		render json: RecipeSerializer.new(recipe)
	end

	def create
		newRecipe = Recipe.create(title: params['title'], description: params['description'])
		render json: RecipeSerializer.new(newRecipe)
	end

	private

	def recipe_params
		params.require(:user).permit(:title, :description)
	end


end
