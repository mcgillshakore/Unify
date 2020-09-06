class GroupSerializer < ActiveModel::Serializer
  attributes :id, :location_id, :name, :location, :photo, :description, :num_of_members, :slug, :users, :photos, :reviews, :members, :events

  def users
    self.object.users.map do |user_obj|
      {
        id: user_obj.id,
        full_name: user_obj.full_name,
        avatar: user_obj.avatar
      }
    end
  end

  def location
    self.object.location.city + ", " + self.object.location.state
  end
  
  def events
    self.object.events.map do |event_obj|
      {
        id: event_obj.id,
        name: event_obj.name,
        location: event_obj.location,
        photo: event_obj.photo,
        description: event_obj.description,
        date: event_obj.date
      }
    end
  end

  def photos
    self.object.photos.map do |photo_obj|
      {
        id: photo_obj.id, 
        group_id: photo_obj.group_id,
        title: photo_obj.title,
        img_url: photo_obj.img_url,
        user: photo_obj.user.full_name,
        username: photo_obj.user.username,
        group: photo_obj.group.name
      }
    end
  end

  def reviews
    self.object.reviews.map do |review_obj|
      {
        id: review_obj.id, 
        group_id: review_obj.group_id,
        description: review_obj.description,
        user: review_obj.user.full_name,
        username: review_obj.user.username,
        group: review_obj.group.name
      }
    end
  end

  def members
    self.object.users.count
  end
end
