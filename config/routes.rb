Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :comments

  resources :users


  get '/other' , controller: "home" , action: "other"

  get '/mohit' , controller: "home" , action: "mohit"
  


  root to: 'home#index'

end
