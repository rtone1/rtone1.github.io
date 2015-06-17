class UsersController < ApplicationController

  def profile
    @users = User.all
    @user = current_user
    @messages = Message.all
  end

  private

  def user_params
    require.params(:user).permit(:name, :password_digest)
  end

end
