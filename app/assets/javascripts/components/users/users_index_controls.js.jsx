var UsersIndexControls = React.createClass({
  // propTypes: {
  //   params: React.PropTypes.object,
  //   canCreate: React.PropTypes.bool
  // },

  render: function() {
    return (
      <div className="page-header">
        { this.props.canCreate &&             
          <a className="btn btn-primary" href="/users/new">
            <span className="glyphicon glyphicon-plus"></span>
            {' '} New User
          </a>
        }
        <h1>Listing Users</h1>
      </div>
    );
  }
});
