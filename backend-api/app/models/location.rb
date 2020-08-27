class Location < ApplicationRecord
    has_many :groups
    has_many :events
end
