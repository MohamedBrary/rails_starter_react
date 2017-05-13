class SessionsController < Devise::SessionsController

  def new
    super do |resource|
      create_props resource
    end
  end

  def create
    # call update_props after the actual updating and before rendering
    super do |resource|
      create_props resource
    end
  end

  protected

  # props for sign in
  def create_props resource
    # setting props for React component
    @props[:user] = resource.to_hash(current_user)
    @props[:authenticity_token] = form_authenticity_token
  end
end