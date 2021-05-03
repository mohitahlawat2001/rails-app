class HomeController < ApplicationController
    def index
    end

    def other
    end

    def mohit 
    end 

    def time
      render plain: "time is #{Time.now}"
    end
end
