class GistsController < ApplicationController
  def create
  end

  def destroy
  end

  def index
    @gists = Gist.all
  end

  def update
  end

  def show
    @gist = Gist.find(params[:id])
  end
end
