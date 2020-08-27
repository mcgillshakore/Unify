class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :group_id, :comment
end
