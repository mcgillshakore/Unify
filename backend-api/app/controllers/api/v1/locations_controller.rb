module Api
    module V1
        class LocationsController < ApplicationController
            def index
                locations = Location.all
                render json: LocationSerializer.new(locations).serialized_json
            end

            def show
                location = Location.find_by(id: params[:id])
                render json: LocationSerializer.new(location).serialized_json
            end
        end
    end
end
