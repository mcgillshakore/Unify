class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review
    end

    def create
        review = Review.new(reviews_params)
        if review.save
            render json: review
        else
            render json: { error: review.errors.message }, status: 422
        end
    end

def destroy
        review = Review.find(params[:id])

        if review.destroy
            head :no_content
        else
            render json: { error: review.errors.message }, status: 422
        end
    end
    private

    def reviews_params
        params.require(:review).permit(:user_id, :group_id, :description)
    end
end