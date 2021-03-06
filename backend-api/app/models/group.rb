class Group < ApplicationRecord
    belongs_to :location
    has_many :members
    has_many :users, through: :members
    has_many :events
    has_many :photos
    has_many :user_photos, through: :photos, source: :user
    has_many :reviews
    has_many :user_reviews, through: :reviews, source: :user
    
    before_create :slugify
    
    def slugify
        self.slug = name.parameterize
    end
end
