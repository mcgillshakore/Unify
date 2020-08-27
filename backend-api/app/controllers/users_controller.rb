class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            render json: {user: UserSerializer.new(@user)}, status: :created
        else
            render json: {error: 'Unable to Create User'}, status: :not_acceptable
        end
    end

    private 

    def user_params
        params.require(:user).permit(:full_name, :username, :password, :avatar)
    end
end
