var UsersIndexTableRow = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    canDelete: React.PropTypes.bool,
    canEdit: React.PropTypes.bool,
    canShow: React.PropTypes.bool
  },

  render: function() {
    return (
      <div>
        <div>User: {this.props.user}</div>
        <div>Can Delete: {this.props.canDelete}</div>
        <div>Can Edit: {this.props.canEdit}</div>
        <div>Can Show: {this.props.canShow}</div>
      </div>
    );
  }
});
