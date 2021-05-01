class UsersController < ApplicationController
    def create
        name = params[:user][:name]

        found_user = User.find_by(name: name)
        if found_user 
            session[:user_id] = found_user.id
        else
        newly_created_user = User.create(name: name)
        session[:user_id] = newly_created_user.id
        end

        redirect_to :comments
    end
end
