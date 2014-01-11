class Fixfavoriteindex < ActiveRecord::Migration
  def change
    add_index :favorites, [:user_id, :gist_id], :unique => true
  end
end
