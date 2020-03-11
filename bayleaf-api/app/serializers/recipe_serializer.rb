class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :img_src, :title, :description
  	has_many :ingredients
		has_many :instructions
end
