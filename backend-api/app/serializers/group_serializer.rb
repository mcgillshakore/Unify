class GroupSerializer < ActiveModel::Serializer
  attributes :id, :location_id, :name, :location, :photo, :description, :num_of_members, :slug, :users, :photos, :reviews

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
        title: review_obj.title,
        description: review_obj.description
      }
    end
  end
end
