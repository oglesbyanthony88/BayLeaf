class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :item
      t.string :amount
      t.references :recipe

      t.timestamps
    end
  end
end
