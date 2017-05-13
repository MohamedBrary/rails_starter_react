class RegistrationsController < Devise::RegistrationsController
  before_action :configure_permitted_parameters
  
  def new
    super do |resource|
      create_props resource
    end
  end

  def create
    super do |resource|
      create_props resource
    end
  end  

  def edit
    update_props resource
    super
  end

  def update
    # call update_props after the actual updating and before rendering
    super do |resource|
      update_props resource
    end
  end

  def update_resource(resource, params)
    if resource.encrypted_password.blank? # || params[:password].blank?
      resource.email = params[:email] if params[:email]
      if !params[:password].blank? && params[:password] == params[:password_confirmation]
        logger.info "Updating password"
        resource.password = params[:password]
        resource.save
      end
      if resource.valid?
        resource.update_without_password(params)
      end
    else
      resource.update_with_password(params)
    end
  end

  protected

  # adding the 'name' attribute to devise params
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
  end

  # props for sign up
  def create_props resource
    # setting props for React component
    @props[:user] = resource.to_hash(current_user)
    @props[:authenticity_token] = form_authenticity_token
  end

  # props for editing profile
  def update_props resource
    # setting props for React component
    @props[:can_delete] = policy(resource).destroy?
    @props[:user] = resource.to_hash(current_user)
    @props[:authenticity_token] = form_authenticity_token
  end
end