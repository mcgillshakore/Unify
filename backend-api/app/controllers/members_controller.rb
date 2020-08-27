class MembersController < ApplicationController
    def index
        members = Member.all
        render json: MemberSerializer.new(members)
    end

    def show
        member = Member.find_by(id: params[:id])
        render json: MemberSerializer.new(member)
    end
end
