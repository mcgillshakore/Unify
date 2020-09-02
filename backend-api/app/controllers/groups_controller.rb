
class GroupsController < ApplicationController
    def index
        groups = Group.all
        render json: groups
    end

    def show
        group = Group.find_by(slug: params[:slug])
        render json: group
    end

    def grab_group
        group = Group.find_by(slug: params[:slug])
        render json: group
    end

    def create
        group = Group.new(group_params)

        if group.save
            render json: group
        else
            render json: { error: group.errors.messages}, status: 422
        end
    end

    def update
        group = Group.find_by(slug: params[:slug])

        if group.update(group_params)
            render json: group
        else
            render json: { error: group.errors.messages}, status: 422
        end
    end

    def destroy
        group = Group.find_by(slug: params[:slug])

        if group.destroy
            head :no_content
        else
            render json: { error: group.errors.messages}, status: 422
        end
    end

    private

    def group_params
        params.require(:group).permit(:location_id, :name, :photo, :description)
    end
end


