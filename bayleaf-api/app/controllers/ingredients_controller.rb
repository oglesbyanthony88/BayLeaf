class IngredientsController < ApplicationController

	def index
		ingredients = Ingredient.all
		render json: IngredientSerializer.new(ingredients)
	end


private

	def ingredient_params
		params.permit(:ingredient).permit(:item, :amount, :recipe_id)
	end
end
