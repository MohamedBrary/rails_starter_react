var ForgotPassword = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  render: function() {
    return (
      <div>
        <FormErrors errors={this.props.user.errors} />
        <div className="panel panel-default devise-bs">
          <div className="panel-heading">
            <h4>
              Forgot your password?
            </h4>
          </div>
          <div className="panel-body">
            <form acceptCharset="UTF-8" action="/users/password" className="new_user" id="new_user" method="post" role="form">
              <input name="authenticity_token" type="hidden" value={this.props.authenticityToken}/>
              <input name="utf8" type="hidden" value="✓"/>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input className="form-control" type="email" defaultValue={this.props.user.email} name="user[email]" id="user_email"/>
              </div>
              <input className="btn btn-primary" data-disable-with="Send me reset password instructions" name="commit" type="submit" value="Send me reset password instructions"/>
            </form>
          </div>
        </div>
        <p>
          <a className="btn btn-default" href="/users/sign_in">Sign In</a>
        </p>
        <p>
          <a className="btn btn-default" href="/users/sign_up">Sign Up</a>
        </p>
        <hr/>
        <a className="btn btn-primary" href="/users/auth/google_oauth2">
          Sign in with Google Oauth2
        </a>
        {' '}
        <a className="btn btn-primary" href="/users/auth/facebook">
          Sign in with Facebook
        </a>
      </div>
    );
  }
});
