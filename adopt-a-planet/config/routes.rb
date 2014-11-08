Rails.application.routes.draw do
  resources :home, only: :index
  resources :planets, only: [:show, :edit, :update]

  root to: "home#index"

end
