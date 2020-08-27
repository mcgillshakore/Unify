class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :location_id, :group_id, :name, :date, :photo, :description, :num_of_tickets
end
