class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :groups, :events

  def groups
    self.object.groups.map do |group_obj|
      {
        id: group_obj.id,
        name: group_obj.name,
      }
    end
  end

  def events
    self.object.events.map do |event_obj|
      {
        id: event_obj.id,
        name: event_obj.name,
        description: event_obj.description,
        date: event_obj.date
      }
    end
  end
end
