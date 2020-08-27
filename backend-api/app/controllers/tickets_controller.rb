class TicketsController < ApplicationController
    def index
        tickets = Ticket.all
        render json: TicketSerializer.new(tickets)
    end

    def show
        ticket = Ticket.find_by(id: params[:id])
        render json: TicketSerializer.new(ticket)
    end
end
