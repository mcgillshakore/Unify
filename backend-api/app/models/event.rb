class Event < ApplicationRecord
   belongs_to :location
   belongs_to :group
   has_many :tickets
   has_many :users, through: :tickets
end
