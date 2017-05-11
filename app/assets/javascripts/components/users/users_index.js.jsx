var UsersIndex = React.createClass({
  propTypes: {
    users: React.PropTypes.array,
    canDelete: React.PropTypes.bool,
    canEdit: React.PropTypes.bool,
    canShow: React.PropTypes.bool,
    canCreate: React.PropTypes.bool
  },

  render: function() {
    return (
      <div>
        <div>Users: {this.props.users}</div>
        <div>Can Delete: {this.props.canDelete}</div>
        <div>Can Edit: {this.props.canEdit}</div>
        <div>Can Show: {this.props.canShow}</div>
        <div>Can Create: {this.props.canCreate}</div>
      </div>
    );
  }
});
