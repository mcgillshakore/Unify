class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :group_id, :title, :img_url
end
