class MessagesController < ApplicationController

  def index
    @messages = Message.all
  end

  def createapi

  end

  def destroy

  end

  private

  def message_params

      require.params(:message).permit(:name, :email, :phone, :message)

  end

end
