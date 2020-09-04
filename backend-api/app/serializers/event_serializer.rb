class EventSerializer < ActiveModel::Serializer
  attributes :id, :location, :group_id, :name, :date, :photo, :description, :num_of_tickets
  def location
    self.object.location.city + ", " + self.object.location.state
  end

end
