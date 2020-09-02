class TicketSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :user, :event_id, :event, :date
  def user
    self.object.user.full_name
  end

  def event
    self.object.event.name
  end

  def date
    self.object.event.date
  end
end
