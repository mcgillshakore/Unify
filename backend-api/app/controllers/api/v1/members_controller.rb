module Api
    module V1
        class MembersController < ApplicationController
            def index
                members = Member.all
                render json: MemberSerializer.new(members).serialized_json
            end

            def show
                member = Member.find_by(id: params[:id])
                render json: MemberSerializer.new(member).serialized_json
            end
        end
    end
end
