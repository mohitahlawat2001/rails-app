class AnimalsController < ApplicationController
    def index
    @animals = Animal.all.order('name')
    end
    
    def show
     animal = Animal.find_by(id: params[:id])
     hash = {sound: animal.sound}
     render json: hash
    end
end
