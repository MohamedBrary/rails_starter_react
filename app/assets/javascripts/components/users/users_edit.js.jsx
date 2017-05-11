var UsersEdit = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    canDelete: React.PropTypes.bool
  },

  render: function() {
    return (
      <div>
        <div>User: {this.props.user}</div>
        <div>Can Delete: {this.props.canDelete}</div>
      </div>
    );
  }
});
