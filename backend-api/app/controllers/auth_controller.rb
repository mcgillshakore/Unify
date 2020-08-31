class AuthController < ApplicationController
    def signin
        user = User.find_by({ username: params[:username]})
        if(user && user.authenticate(params[:password]))
            session[:user_id] = user.id
            render json: { success: true, id: user.id, full_name: user.full_name, username: user.username}
        else
            render json: { success: false, id: nil }
        end
        # byebug
    end

    def check_signin
        if session[:user_id]
            user = User.find(session[:user_id])
            render json: {username:user.username, id:user.id, full_name:user.full_name}
        else
            render json: {error:'No one is logged in'}
        end
    end

    def signout
        session[:user_id] = nil
        render json: {error:'Logged out'}
    end
end
