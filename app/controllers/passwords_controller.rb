class PasswordsController < Devise::PasswordsController

  def new
    super
    create_props resource
  end

  def create
    # call create_props after the actual creation and before rendering
    super do |resource|
      create_props resource
    end
  end

  protected

  # props for forget password
  def create_props resource
    # setting props for React component
    @props[:user] = resource.to_hash(current_user)
    @props[:authenticity_token] = form_authenticity_token
  end
end