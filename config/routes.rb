Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
  resources :guest_books do 
    member do 
      get :messages
    end
  end


  # resources :animals

  # resources :comments

  # resources :users
  
  get '/time' , controller: "home" , action: "time"

  get '/other' , controller: "home" , action: "other"

  get '/mohit' , controller: "home" , action: "mohit"
  


  root to: 'home#index'

end
