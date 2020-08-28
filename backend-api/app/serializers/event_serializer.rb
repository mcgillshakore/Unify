class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :location_id, :group_id, :name, :date, :photo, :description, :num_of_tickets
  
   belongs_to :location
   belongs_to :group
   has_many :tickets
   has_many :users, through: :tickets
end
