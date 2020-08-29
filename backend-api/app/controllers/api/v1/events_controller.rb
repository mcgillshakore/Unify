module Api
    module V1
        class EventsController < ApplicationController
            def index
                events = Event.all
                render json: EventSerializer.new(events).serialized_json
            end

            def show
                event = Event.find_by(id: params[:id])
                render json: EventSerializer.new(event).serialized_json
            end

            def create
                event = Event.new(event_params)
                if event.save
                    render json: EventSerializer.new(event).serialized_json
                else
                    render json: {error: event.errors.messages}, status: 422
                end
            end

            def update
                event = Event.find_by(id: params[:id])
                if event.update(event_params)
                    render json: EventSerializer.new(event).serialized_json
                else
                    render json: {error: event.errors.messages}, status: 422
                end
            end

            def destroy
                event = Event.find_by(id: params[:id])

                if event.destroy
                    head :no_content
                else
                    render json: {error: event.errors.messages}, status: 422
                end

            end

            private

            def event_params
                params.require(:event).permit(:location_id, :group_id, :name, :photo, :description, :date, :num_of_tickets)
            end
        end
    end
end
