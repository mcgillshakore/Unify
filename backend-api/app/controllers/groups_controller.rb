class GroupsController < ApplicationController
    def index
        groups = Group.all
        render json: GroupSerializer.new(groups)
    end

    def show
        group = Group.find_by(id: params[:id])
        render json: GroupSerializer.new(group)
    end
end
