class RecipesController < ApplicationController

	def index

	end

	

	private

	def recipe_params
		params.require(:user).permit(:title, :description)
	end


end
