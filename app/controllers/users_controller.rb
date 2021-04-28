class UsersController < ApplicationController
    def create
        name = params[:user][:name]
        newly_created_user = User.create(name: name)
        
        session[:user_id] = newly_created_user.id

        redirect_to :comments
    end
end
