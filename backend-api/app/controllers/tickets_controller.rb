class TicketsController < ApplicationController
    def index
        tickets = Ticket.all
        render json: tickets
    end

    def show
        ticket = Ticket.find_by(id: params[:id])
        render json: ticket
    end

    def create
        ticket = Ticket.new(ticket_params)

        if ticket.save
            render json: ticket
        else
            render json: { error: ticket.errors.messages}, status: 422
        end
    end

    private

    def ticket_params
        params.require(:ticket).permit(:user_id, :event_id)
    end
end

