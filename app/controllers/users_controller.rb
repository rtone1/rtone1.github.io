class UsersController < ApplicationController

  def index
    @user = User.all
  end

  def new

  end
  def create

  end
  
  private

  def user_params
    require.params(:user).permit(:name, :password_digest)
  end

end
