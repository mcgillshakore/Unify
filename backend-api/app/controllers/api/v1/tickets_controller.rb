module Api
    module V1
        class TicketsController < ApplicationController
            def index
                tickets = Ticket.all
                render json: TicketSerializer.new(tickets).serialized_json
            end

            def show
                ticket = Ticket.find_by(id: params[:id])
                render json: TicketSerializer.new(ticket).serialized_json
            end
        end
    end
end
