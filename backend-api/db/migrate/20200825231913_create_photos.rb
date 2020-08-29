class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.integer :user_id
      t.integer :group_id
      t.string :title
      t.string :img_url

      t.timestamps
    end
  end
end
