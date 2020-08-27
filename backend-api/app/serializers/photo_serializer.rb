class PhotoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :group_id, :img_url
end
