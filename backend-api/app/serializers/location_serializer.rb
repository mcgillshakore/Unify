class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :city, :state
end
