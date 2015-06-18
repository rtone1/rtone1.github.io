class CreationsController < ApplicationController

  def index
    @creates = Creation.all
  end

  def createcreationapi
    @create = Creation.create(creation_params)
    redirect_to "/profile"
  end

  private

  def creation_params

    params.require(:creation).permit(:category, :title, :linkgithub, :description, :image)

  end


end
