class GroupSerializer
  include FastJsonapi::ObjectSerializer
  attributes :location_id, :name, :photo, :description, :num_of_members, :slug
  
  belongs_to :location
  has_many :members
  has_many :users, through: :members
  has_many :events
  has_many :photos
  has_many :user_photos, through: :photos, source: :user
  has_many :reviews
  has_many :user_reviews, through: :reviews, source: :user
end
