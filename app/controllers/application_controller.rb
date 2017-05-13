class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!, :set_props

	include Pundit
	# TODO remove after authorization logic is complete
	# after_action :verify_authorized, except: :index
 #  after_action :verify_policy_scoped, only: :index
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  private

  def user_not_authorized
    flash[:error] = "Sorry! You are not authorized to perform this action."
    redirect_to(request.referrer || root_path)
  end

  # for React components
  def set_props
    @props = {
      controller: controller_name,
      action: action_name,
      flash: flash,
      current_user: current_user.try(:to_hash)}
  end
end
