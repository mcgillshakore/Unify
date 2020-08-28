class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :city, :state
  
  has_many :groups
  has_many :events
end
