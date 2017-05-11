var UsersIndexTable = React.createClass({
  // propTypes: {
  //   users: React.PropTypes.array,
  //   canDelete: React.PropTypes.bool,
  //   canEdit: React.PropTypes.bool,
  //   canShow: React.PropTypes.bool
  // },

  render: function() {
    var userItems = this.props.users.map((user) =>
      <UsersIndexTableRow key={"user_id_"+user.id} user={user} 
                canDelete={this.props.canDelete} canEdit={this.props.canEdit} />
    );
    return (
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
              { this.props.canEdit && 
                <th></th>
              }
              { this.props.canDelete && 
                <th></th>
              }
            </tr>
          </thead>
          <tbody>
            {userItems}
          </tbody>
        </table>
      </div>
    );
  }
});
