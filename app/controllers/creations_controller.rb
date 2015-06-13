class CreationsController < ApplicationController

  def index
    @create = Creation.all
  end

end
