class MembersController < ApplicationController
    def index
        members = Member.all
        render json: members
    end

    def show
        member = Member.find_by(id: params[:id])
        render json: member
    end

    def find_member
        member = Member.find_by(user_id: params[:user_id], group_id: params[:group_id])
        render json: member
    end

    def create
        member = Member.new(member_params)

        if member.save
            render json: member
        else
            render json: { error: member.errors.messages}, status: 422
        end
    end

    def destroy
        member = Member.find_by(id: params[:id])

        if member.destroy
            head :no_content
        else
            render json: { error: member.errors.messages}, status: 422
        end
    end

    private

    def member_params
        params.require(:member).permit(:user_id, :group_id)
    end
end
