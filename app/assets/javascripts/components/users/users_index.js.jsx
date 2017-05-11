var UsersIndex = React.createClass({
  // propTypes: {
  //   users: React.PropTypes.array,
  //   canDelete: React.PropTypes.bool,
  //   canEdit: React.PropTypes.bool,
  //   canShow: React.PropTypes.bool,
  //   canCreate: React.PropTypes.bool
  // },

  render: function() {
    return (
      <div>
        <UsersIndexControls params={this.props.params} canCreate={this.props.canCreate}/>
        <UsersIndexTable users={this.props.users} canDelete={this.props.canDelete} canEdit={this.props.canEdit} />        
      </div>
    );
  }
});
