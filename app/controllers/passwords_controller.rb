class PasswordsController < Devise::PasswordsController

  def new
    super
    update_props resource
  end

  def create
    # call update_props after the actual updating and before rendering
    super do |resource|
      update_props resource
    end
  end

  protected

  def update_props resource
    # setting props for React component
    @props[:user] = resource.to_hash(current_user)
    @props[:authenticity_token] = form_authenticity_token
  end
end