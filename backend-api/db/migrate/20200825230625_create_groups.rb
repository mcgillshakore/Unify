class CreateGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.integer :location_id
      t.string :name
      t.string :photo
      t.string :description
      t.integer :num_of_members

      t.timestamps
    end
  end
end
