class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.integer :group_id
      t.integer :user_id
      t.string :img_url

      t.timestamps
    end
  end
end
