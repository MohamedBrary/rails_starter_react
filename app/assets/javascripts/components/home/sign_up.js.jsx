var SignUp = React.createClass({
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
              Sign Up
            </h4>
          </div>
          <div className="panel-body">
            <form acceptCharset="UTF-8" action="/users/" className="new_user" id="new_user" method="post" role="form">
              <input name="authenticity_token" type="hidden" value={this.props.authenticityToken}/>
              <input name="utf8" type="hidden" value="✓"/>
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input autoFocus="autofocus" className="form-control" id="user_name" name="user[name]" type="text" defaultValue={this.props.user.name}/>
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input className="form-control" type="email" defaultValue={this.props.user.email} name="user[email]" id="user_email"/>
              </div>
              <div className="form-group">
                <label htmlFor="user_password">Password</label>
                <input autoComplete="off" className="form-control" type="password" name="user[password]" id="user_password" defaultValue={this.props.user.password}/>
              </div>
              <div className="form-group">
                <label htmlFor="user_password_confirmation">Password Confirmation</label>
                <input className="form-control" type="password" name="user[password_confirmation]" id="user_password_confirmation" defaultValue={this.props.user.passwordConfirmation}/>
              </div>              
              <input className="btn btn-primary" data-disable-with="Sign Up" name="commit" type="submit" value="Sign Up"/>
            </form>
          </div>
        </div>
        <p>
          <a className="btn btn-default" href="/users/sign_in">Sign In</a>
        </p>
        <p>
          <a className="btn btn-default" href="/users/password/new">Forgot your password?</a>
        </p>
        <hr/>
        <a className="btn btn-primary" href="/users/auth/google_oauth2">Sign in with Google Oauth2</a>
        {' '}
        <a className="btn btn-primary" href="/users/auth/facebook">Sign in with Facebook</a>
      </div>
    );
  }
});
