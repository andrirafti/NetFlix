class CreateFilms < ActiveRecord::Migration[6.1]
  def change
    create_table :films do |t|
      t.string :name
      t.string :category
      t.integer :release
      t.string :img
      t.string :trailer

      t.timestamps
    end
  end
end
