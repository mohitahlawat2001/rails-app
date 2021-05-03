class HomeController < ApplicationController
    def index
    end

    def other
    end

    def mohit 
    end 

    def time
      hash = {
        time: Time.now
      }
      render json: hash
    end
end
