class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.save
            render json: user
        else
            render json: {error: user.errors.messages}, status: 422
        end
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    def grab_user
        user = User.find_by(id: params[:id])
        render json:user
    end

    def update
        user = User.find_by(id: params[:id])
        if user.update(user_params)
            render json: user
        else
            render json: {error: user.errors.messages}, status: 422
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        if user.destroy
            head :no_content
        else
            render json: {error: user.errors.messages}, status: 422
        end
    end

    private 

    def user_params
        params.require(:user).permit(:full_name, :username, :password, :bio, :avatar)
    end
end
