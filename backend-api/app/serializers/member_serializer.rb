class MemberSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :group_id
end
