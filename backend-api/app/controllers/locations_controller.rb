class LocationsController < ApplicationController
    def index
        locations = Location.all
        render json: LocationSerializer.new(locations)
    end

    def show
        location = Location.find_by(id: params[:id])
        render json: LocationSerializer.new(location)
    end
end
