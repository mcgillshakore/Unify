class PhotosController < ApplicationController
    def index
        photos = Photo.all
        render json: PhotoSerializer.new(photos)
    end

    def show
        photo = Photo.find_by(id: params[:id])
        render json: PhotoSerializer.new(photo)
    end
end
