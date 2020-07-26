Rails.application.routes.draw do
  resources :places

  if Rails.env.test?
    namespace :test do
      post 'clean_database', to: 'database#clean_database'
      post 'seed_places', to: 'seed#seed_places'
    end
  end
end
