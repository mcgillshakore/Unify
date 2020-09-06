class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :password, :bio, :avatar, :groups, :events, :tickets, :photos, :reviews 


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

  def tickets
    self.object.tickets.map do |ticket_obj|
      {
        id: ticket_obj.id, 
        event_id: ticket_obj.event_id,
        user: ticket_obj.user.full_name,
        event: ticket_obj.event.name,
        date: ticket_obj.event.date
      }
    end
  end

  def photos
    self.object.photos.map do |photo_obj|
      {
        id: photo_obj.id, 
        group_id: photo_obj.group_id,
        title: photo_obj.title,
        img_url: photo_obj.img_url
      }
    end
  end

  def reviews
    self.object.reviews.map do |review_obj|
      {
        id: review_obj.id, 
        group_id: review_obj.group_id,
        description: review_obj.description
      }
    end
  end



end
