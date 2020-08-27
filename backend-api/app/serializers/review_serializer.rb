class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :group_id, :comment
  
  belongs_to :user
  belongs_to :group
end
