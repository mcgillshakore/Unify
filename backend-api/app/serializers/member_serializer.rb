class MemberSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :group_id
  
  belongs_to :user
  belongs_to :group
end
