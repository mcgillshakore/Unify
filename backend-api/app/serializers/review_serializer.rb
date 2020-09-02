class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :group_id, :title, :description

end
