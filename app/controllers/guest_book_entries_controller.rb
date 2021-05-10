class GuestBookEntriesController < ApplicationController
    def index
        @guest_book = GuestBook.find(params[:guest_book_id])
        render "index" , layout: false
    end
end
