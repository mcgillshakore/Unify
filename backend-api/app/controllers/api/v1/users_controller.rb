module Api
    module V1
        class UsersController < ApplicationController
            def index
                users = User.all
                render json: UserSerializer.new(users).serialized_json
            end

            def create
                user = User.create(user_params)
                byebug
                if user.save
                    render json: {user: UserSerializer.new(user)}.serialized_json
                else
                    render json: {error: user.errors.messages}, status: 422
                end
            end

            def update
                user = User.find_by(id: params[:id])
                if user.update(user_params)
                    render json: UserSerializer.new(user).serialized_json
                else
                    render json: {error: user.errors.messages}, status: 422
                end
            end

            private 

            def user_params
                params.require(:user).permit(:full_name, :username, :password, :avatar)
            end
        end
    end
end
