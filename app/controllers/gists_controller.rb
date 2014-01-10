class GistsController < ApplicationController
  def create
  end

  def destroy
  end

  def index
    @gists = current_user.gists
    render :index
  end

  def update
  end

  def show
  end
end
