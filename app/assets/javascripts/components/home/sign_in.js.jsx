var SignIn = React.createClass({
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
              Sign In
            </h4>
          </div>
          <div className="panel-body">
            <form acceptCharset="UTF-8" action="/users/sign_in" className="new_user" id="new_user" method="post" role="form">
              <input name="authenticity_token" type="hidden" value={this.props.authenticityToken}/>
              <input name="utf8" type="hidden" value="✓"/>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input className="form-control" type="email" defaultValue={this.props.user.email} name="user[email]" id="user_email"/>
              </div>
              <div className="form-group">
                <label htmlFor="user_password">Password</label>
                <input autoComplete="off" className="form-control" type="password" name="user[password]" id="user_password"/>
              </div>
              <div className="checkbox">
                <label htmlFor="user_remember_me">
                  <input name="user[remember_me]" type="hidden" defaultValue={this.props.user.remember_me}/>
                  <input id="user_remember_me" name="user[remember_me]" type="checkbox" defaultValue={this.props.user.remember_me}/>
                  Remember Me
                </label>
              </div>
              <input className="btn btn-primary" data-disable-with="Sign In" name="commit" type="submit" value="Sign In"/>
            </form>
          </div>
        </div>
        <p>
          <a className="btn btn-default" href="/users/sign_up">Sign up</a>
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
