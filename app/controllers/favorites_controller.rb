class FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(params[:favorite])
    @favorite.user_id = current_user.id
    if @favorite.save
      head :ok
    else
      render :json => @favorite.errors.full_mesages
    end
  end

  def index
    @gists = current_user.favorite_gists
  end

  def destroy
    @favorite = current_user.favorites.find_by_gist_id(params[:gist_id])
    @favorite.destroy
    head :ok
  end
end
