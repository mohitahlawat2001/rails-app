class CommentsController < ApplicationController
    def index
        @comments = Comment.all
    end

    def create
        body = params[:comment][:body]
        user_id = current_user.id


        Comment.create(body: body ,user_id: user_id)
    
        redirect_to :comments
    end
end
