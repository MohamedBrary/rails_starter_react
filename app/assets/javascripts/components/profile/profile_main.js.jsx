var ProfileMain = React.createClass({
  propTypes: {
    controller: React.PropTypes.string,
    action: React.PropTypes.string,
    user: React.PropTypes.object,
    canDelete: React.PropTypes.bool,
    canEdit: React.PropTypes.bool
  },

  render: function() {
    // Form is uncontrolled component
    return (
      <div className="container">
        <div className="page-header">
            <a className="btn btn-default" href="/users">
                <span className="glyphicon glyphicon-list-alt">
                </span>
                {' '}Back
            </a>
            <a className="btn btn-primary" href={this.props.user.showPath}>
                <span className="glyphicon glyphicon-info-sign">
                </span>
                {' '}Show
            </a>            
            <h1>
                Profile
            </h1>
        </div>

        <FormErrors errors={this.props.user.errors} />
        
        <div className="panel panel-default devise-bs">
          <div className="panel-heading">
            <h4>Edit My Account</h4>
          </div>
          <div className="panel-body">
            <form className="edit_user" id="edit_user" action="/users" acceptCharset="UTF-8" method="post">
              <input name="authenticity_token" type="hidden" value={this.props.authenticityToken}/>
              <input name="utf8" type="hidden" value="✓"/>
              <input name="_method" type="hidden" value="put"/>

              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input autoFocus="autofocus" className="form-control" type="text" defaultValue={this.props.user.name} name="user[name]" id="user_name"/>
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input className="form-control" type="email" defaultValue={this.props.user.email} name="user[email]" id="user_email"/>
              </div>
              <div className="form-group">
                <label htmlFor="user_password">Password</label>
                <i>
                  {" leave blank if you don't want to change it"}
                </i>
                <input autoComplete="off" className="form-control" type="password" name="user[password]" id="user_password"/>
              </div>
              <div className="form-group">
                <label htmlFor="user_password_confirmation">Password Confirmation</label>
                <input className="form-control" type="password" name="user[password_confirmation]" id="user_password_confirmation"/>
              </div>
              <div className="form-group">
                <label htmlFor="user_current_password">Current Password</label>
                <i> we need your current password to confirm your changes </i>
                <input className="form-control" type="password" name="user[current_password]" id="user_current_password"/>
              </div>
              <input className="btn btn-primary" data-disable-with="Update" name="commit" type="submit" value="Update"/>
            </form>
          </div>
        </div>
        <br/>
        <div className="panel panel-default devise-bs">
          <div className="panel-heading">
            <h4>Connect With Social Networks</h4>
          </div>
          <div className="panel-body">
            <p>
              <a className="btn btn-default" href="/users/auth/google_oauth2">
                { this.props.user.google ? 'Reconnect ' : 'Sign in ' }
                with Google
              </a>
            </p>
            <p>
              <a className="btn btn-default" href="/users/auth/facebook">
                { this.props.user.facebook ? 'Reconnect ' : 'Sign in ' }
                with Facebook
              </a>
            </p>
          </div>
        </div>
        <p>
          { this.props.canDelete &&
            <a data-confirm="Are you sure?" className='btn btn-danger' rel="nofollow" data-method="delete" href="/users"> 
              <span className="glyphicon glyphicon-trash"></span>
              {' '}Cancel My Account
            </a>
          }
          {'  '}
          <a className="btn btn-default" href="/users">
              <span className="glyphicon glyphicon-list-alt">
              </span>
              {' '}Back
          </a>
        </p>
        <p></p>
    </div>
    );
  }
});
