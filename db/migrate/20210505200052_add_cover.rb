class AddCover < ActiveRecord::Migration[6.1]
  def change
    add_column :films , :img_cover, :string 
  end
end
