class User < ApplicationRecord
    has_secure_password
  
    has_many :members
    has_many :groups, through: :members
    has_many :tickets
    has_many :events, through: :tickets
    has_many :photos
    has_many :group_photos, through: :photos, source: :group
    has_many :reviews
    has_many :group_reviews, through: :reviews, source: :group
end
