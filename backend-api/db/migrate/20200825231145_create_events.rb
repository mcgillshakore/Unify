class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.integer :group_id
      t.integer :location_id
      t.string :name
      t.string :photo
      t.string :description
      t.datetime :date
      t.integer :num_of_tickets

      t.timestamps
    end
  end
end
