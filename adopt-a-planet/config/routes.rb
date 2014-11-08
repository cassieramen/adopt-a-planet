Rails.application.routes.draw do
  resources :home, only: :index
  resources :planets, only: [:edit, :update]

  root to: "home#index"

end
