class AnimalsController < ApplicationController
    def index
    @animals = Animal.all.order('name')
    end
    
    def show
     @animal = Animal.find_by(id: params[:id])
    
     render "show" , layout: false
    end
end
