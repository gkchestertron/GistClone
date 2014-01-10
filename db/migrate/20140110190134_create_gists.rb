class CreateGists < ActiveRecord::Migration
  def change
    create_table :gists do |t|
      t.integer :owner_id, :null => false
      t.string :title, :null => false

      t.timestamps
    end

    add_index :gists, :title
    add_index :gists, :owner_id
  end
end
