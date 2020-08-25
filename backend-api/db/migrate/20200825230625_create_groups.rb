class CreateGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.integer :location_id
      t.string :name
      t.string :photo
      t.integer :num_of_members
      t.string :description

      t.timestamps
    end
  end
end
