class AuthController < ApplicationController
    def login
        user = User.find_by({ username: params[:username]})
        if(user && user.authenticate(params[:password]))
            session[:user_id] = user.id
            render json: { success: true, id: user.id }
        else
            render json: { success: false, id: nil }
        end
    end
end
