class AddImageSrcToRecipe < ActiveRecord::Migration[5.2]
  def change
  	add_column :recipes, :img_src, :string
  end
end
