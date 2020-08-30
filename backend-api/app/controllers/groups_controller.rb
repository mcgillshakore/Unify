
class GroupsController < ApplicationController
    def index
        groups = Group.all
        render json: GroupSerializer.new(groups, options).serialized_json
    end

    def show
        group = Group.find_by(slug: params[:slug])
        render json: GroupSerializer.new(group, options).serialized_json
    end

    def create
        group = Group.new(group_params)

        if group.save
            render json: GroupSerializer.new(group).serialized_json
        else
            render json: { error: group.errors.messages}, status: 422
        end
    end

    def update
        group = Group.find_by(slug: params[:slug])

        if group.update(group_params)
            render json: GroupSerializer.new(group, options).serialized_json
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

    def options
        @options ||= { include: %i[reviews]}
    end
end


