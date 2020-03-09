class IngredientsController < ApplicationController


private

	def ingredient_params
		params.permit(:ingredient).permit(:item, :amount, :recipe_id)
	end
end
