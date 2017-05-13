var MainNavBar = React.createClass({
  // propTypes: {
  //   controller: React.PropTypes.string,
  //   currentUser: React.PropTypes.object
  // },

  render: function() {
    
    var logLink = this.props.currentUser ? 
      <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
      :
      <a href="/users/sign_in">Login</a>;
                
    return (      
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button aria-controls="navbar" aria-expanded="false" className="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/home/index">App Name</a>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">              
              <li className={this.props.controller == 'home' ? 'active' : ''}>
                <a href="/home/index">Home</a>
              </li>
              <li className={this.props.controller == 'users' ? 'active' : ''}>
                <a href="/users">Users</a>
              </li>              
            </ul>
            <ul className="nav navbar-nav navbar-right">              
              { this.props.currentUser && (                
                <li>
                  <a href={ this.props.currentUser.showPath }>
                    <img src={this.props.currentUser.image} width="20px"/>
                    {' ' +this.props.currentUser.name}
                  </a>
                </li>                
              )}
              <li>
                {logLink}
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
});
