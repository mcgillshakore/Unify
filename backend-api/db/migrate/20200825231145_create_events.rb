class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.integer :location_id
      t.integer :group_id
      t.integer :user_id
      t.string :name
      t.datetime :date
      t.string :photo
      t.integer :num_of_tickets
      t.string :description

      t.timestamps
    end
  end
end
