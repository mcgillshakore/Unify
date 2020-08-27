class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :full_name, :username, :password, :avatar
end
