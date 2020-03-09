class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :recipe_id, :item, :amount
  belongs_to :recipe
end
