Rails.application.routes.draw do
  root 'hangouts#index'

  resources :messages, only: [:create]
  get 'hangouts/index'
  devise_for :users
end
