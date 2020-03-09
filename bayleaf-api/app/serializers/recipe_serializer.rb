class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :description
  	has_many :ingredients
		has_many :instructions
end
