Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root'pages#index'
    resources :users
    resources :events
    resources :groups, param: :slug
    resources :locations
    resources :members
    resources :photos, only: [:create, :destroy]
    resources :tickets
    resources :reviews, only: [:create, :destroy]
  # get '*:path', to: 'pages#index', via: :all
  post '/signin', to:'auth#signin'
  get '/check-signin', to:'auth#check_signin'
  get '/signout', to:'auth#signout'

  post '/group-info', to:'groups#grab_group'
  post '/user-info', to:'users#grab_user'
end
