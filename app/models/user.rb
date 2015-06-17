class User < ActiveRecord::Base
  has_password_digest

  def to_s
    @user.name + " is admin user."
  end

end
