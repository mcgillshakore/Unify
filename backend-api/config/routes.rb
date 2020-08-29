Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root'pages#index'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :events
      resources :groups, param: :slug
      resources :locations
      resources :members
      resources :photos, only: [:create, :destroy]
      resources :tickets
      resources :reviews, only: [:create, :destroy]
    end
  end
  get '*:path', to: 'pages#index', via: :all
  # post '/login', to:'auth#login'
  # get '/check-login', to:'auth#check_loggin'
  # get '/logout', to:'auth#logout'
end
