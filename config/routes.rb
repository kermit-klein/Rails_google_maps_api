Rails.application.routes.draw do
  resources :places

  if Rails.env.test?
    namespace :test do
      post 'clean_database', to: 'databases#clean_database'
    end
  end
end
