class GuestBooksController < ApplicationController
    def index
     @guest_books = GuestBook.all
    end
    def show
     @guest_book = GuestBook.find(params[:id])
    end

    def messages 
     @guest_book = GuestBook.find(params[:id])
     render "messages" , layout: false
    end
end
