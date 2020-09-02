class EventSerializer < ActiveModel::Serializer
  attributes :id, :location_id, :group_id, :name, :date, :photo, :description, :num_of_tickets

end
