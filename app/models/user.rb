class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :omniauthable

  enum role: { user: 0, manager: 1, admin: 2 }

  has_many :identities, dependent: :destroy  
  has_many :user_tokens, dependent: :destroy
  
  # -- Validations
    
  validates_presence_of   :name
  validates_presence_of   :email, if: :email_required?
  validates_uniqueness_of :email, allow_blank: true, if: :email_changed?
  validates_format_of     :email, with: Devise.email_regexp, allow_blank: true, if: :email_changed?

  validates_presence_of     :password, if: :password_required?
  validates_confirmation_of :password, if: :password_required?
  validates_length_of       :password, within: Devise.password_length, allow_blank: true

  def password_required?
    return false if email.blank? || !email_required?
    !persisted? || !password.nil? || !password_confirmation.nil?
  end

  def email_required?
    @oauth_callback != true
  end

  # -- Callbacks  
  after_initialize :set_default_role, :if => :new_record?

  def set_default_role
    self.role ||= :user
  end

  # -- Attributes
  attr_accessor :oauth_callback
  attr_accessor :current_password

  def image
    identities.pluck(:image).compact.first || '/images/default.jpg'
  end

  # -- OmniAuth

  def facebook
    identities.where( :provider => "facebook" ).first
  end

  def facebook_client
    @facebook_client ||= Facebook.client( access_token: facebook.accesstoken )
  end

  def google_oauth2
    identities.where( :provider => "google_oauth2" ).first
  end

  def google_oauth2_client
    if !@google_oauth2_client
      @google_oauth2_client = Google::APIClient.new(:application_name => 'Joggy', :application_version => "1.0.0" )
      @google_oauth2_client.authorization.update_token!({:access_token => google_oauth2.accesstoken, :refresh_token => google_oauth2.refreshtoken})
    end
    @google_oauth2_client
  end

  # -- Utils

  delegate :url_helpers, to: 'Rails.application.routes'
  def to_hash(current_user=nil)
    {
      id: id,
      name: name,
      email: email,
      role: role.titleize,
      image: image,
      show_path: url_helpers.user_path(self),
      edit_path: current_user == self ? url_helpers.edit_user_registration_path(self) : url_helpers.edit_user_path(self),
      errors: errors.try(:full_messages)
    }
  end

  def self.to_hash(users, current_user=nil)
    users.map { |u| u.to_hash(current_user) }    
  end

end
