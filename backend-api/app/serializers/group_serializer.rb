class GroupSerializer
  include FastJsonapi::ObjectSerializer
  attributes :location_id, :name, :photo, :description, :num_of_members
end
