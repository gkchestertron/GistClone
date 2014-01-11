NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  resources :gists, :only => [:create, :destroy, :show, :index, :update], :defaults => {:format => :json} do
    resource :favorite, :only => [:create, :destroy]
  end
  resources :favorites, :only => [:index]

  root :to => "static_pages#root"
end
