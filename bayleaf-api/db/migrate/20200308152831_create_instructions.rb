class CreateInstructions < ActiveRecord::Migration[5.2]
  def change
    create_table :instructions do |t|
      t.integer :step_num
      t.text :content
      t.references :recipe

      t.timestamps
    end
  end
end
