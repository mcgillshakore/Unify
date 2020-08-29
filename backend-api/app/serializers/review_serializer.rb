class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :group_id, :title, :description
  
  belongs_to :user
  belongs_to :group
end
