module Api
    module V1        
        class PhotosController < ApplicationController
            def create
                photo = Photo.new(photos_params)
                if photo.save
                    render json: PhotoSerializer.new(photo).serialized_json
                else
                    render json: { error: photo.errors.message }, status: 422
                end
            end

            def destroy
                photo = Photo.find(params[:id])
                if photo.destroy
                    head :no_content
                else
                    render json: { error: photo.errors.message }, status: 422
                end
            end

            private

            def photos_params
                params.require(:photo).permit(:user_id, :group_id, :title, :img_url)
            end
        end
    end
end
